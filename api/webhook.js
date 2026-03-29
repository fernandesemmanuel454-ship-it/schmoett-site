const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

// Vercel nécessite le raw body pour la vérification webhook
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const sig = req.headers['stripe-signature'];
  let event;

  // Lire le body brut
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const rawBody = Buffer.concat(chunks);

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const meta = session.metadata;

    // FILTRE DE SÉCURITÉ : ne traiter que les commandes Schmoett
    // Les commandes Schmoett ont "prenom" et "telephone"
    if (!meta.prenom || !meta.telephone) {
      console.log('Webhook ignoré — pas une commande Schmoett (metadata non reconnues)');
      return res.status(200).json({ received: true, skipped: true });
    }

    const amount = (session.amount_total / 100).toFixed(2);

    // Envoi email
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // Email admin (toi)
      await transporter.sendMail({
        from: `"Schmoett" <${process.env.GMAIL_USER}>`,
        to: 'fernandesemmanuel454@gmail.com',
        subject: `🛒 Commande Schmoett — ${meta.prenom} — ${amount}€`,
        html: `
          <div style="font-family:Arial;max-width:500px;margin:0 auto;background:#0a0a14;color:#f0e6c8;padding:24px;border:1px solid rgba(232,69,10,.3);border-radius:8px">
            <h2 style="color:#E8450A;margin:0 0 16px">🛒 Nouvelle commande</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#E8450A;width:100px">💰 Montant</td><td style="color:#fff;font-weight:bold">${amount} €</td></tr>
              <tr><td style="padding:8px 0;color:#E8450A">👤 Client</td><td>${meta.prenom}</td></tr>
              <tr><td style="padding:8px 0;color:#E8450A">📞 Tél</td><td><a href="tel:${meta.telephone}" style="color:#f0e6c8">${meta.telephone}</a></td></tr>
              <tr><td style="padding:8px 0;color:#E8450A">📍 Adresse</td><td>${meta.adresse || 'Click & Collect'}</td></tr>
              <tr><td style="padding:8px 0;color:#E8450A">📝 Note</td><td>${meta.note || 'Aucune'}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid rgba(232,69,10,.3);margin:16px 0">
            <p style="font-size:13px;color:#E8450A">📦 ${meta.order_summary}</p>
            <p style="margin-top:12px"><a href="https://wa.me/${meta.telephone.replace(/[^0-9]/g,'')}" style="color:#25D366;font-size:13px">💬 Envoyer WhatsApp au client</a></p>
            <p style="font-size:11px;color:rgba(240,230,200,.3);margin-top:12px">✅ Paiement Stripe confirmé · ${session.payment_intent}</p>
          </div>
        `,
      });
      console.log('Email admin envoyé');

      // Email confirmation client
      const customerEmail = session.customer_email || meta.email;
      if (customerEmail) {
        await transporter.sendMail({
          from: `"Schmoett" <${process.env.GMAIL_USER}>`,
          replyTo: 'fernandesemmanuel454@gmail.com',
          to: customerEmail,
          subject: `✅ Commande confirmée — Schmoett`,
          html: `
            <div style="font-family:Arial;max-width:500px;margin:0 auto;background:#0a0a14;color:#f0e6c8;padding:24px;border:1px solid rgba(232,69,10,.3);border-radius:8px">
              <div style="text-align:center;margin-bottom:20px">
                <h1 style="color:#E8450A;font-size:24px;margin:0">SCHMOETT</h1>
                <p style="color:rgba(240,230,200,.4);font-size:12px;letter-spacing:2px;margin:4px 0 0">PIZZAS & BURGERS FAITS MAISON</p>
              </div>
              <h2 style="color:#E8450A;margin:0 0 16px;font-size:18px">✅ Merci ${meta.prenom} !</h2>
              <p style="color:rgba(240,230,200,.7);font-size:14px;line-height:1.6">Votre commande a bien été confirmée et est en cours de préparation.</p>
              <div style="background:rgba(232,69,10,.08);border:1px solid rgba(232,69,10,.2);border-radius:6px;padding:16px;margin:16px 0">
                <p style="color:#E8450A;font-size:13px;margin:0 0 8px;font-weight:bold">📦 Votre commande</p>
                <p style="color:rgba(240,230,200,.7);font-size:13px;margin:0;line-height:1.8">${meta.order_summary}</p>
                <hr style="border:none;border-top:1px solid rgba(232,69,10,.2);margin:12px 0">
                <p style="color:#fff;font-size:16px;font-weight:bold;margin:0">Total : ${amount} €</p>
              </div>
              <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.2);border-radius:6px;padding:16px;margin:16px 0">
                <p style="color:#22C55E;font-size:14px;margin:0">⏱️ Préparation estimée : <strong>10-15 minutes</strong></p>
                <p style="color:rgba(240,230,200,.5);font-size:13px;margin:8px 0 0">Venez récupérer votre commande à Schifflange.</p>
              </div>
              <hr style="border:none;border-top:1px solid rgba(232,69,10,.2);margin:20px 0">
              <p style="color:rgba(240,230,200,.5);font-size:12px;text-align:center">Un souci ? Contactez-nous :<br><a href="https://wa.me/352661474130" style="color:#25D366">WhatsApp +352 661 47 41 30</a></p>
              <p style="color:rgba(240,230,200,.2);font-size:11px;text-align:center;margin-top:16px">© 2026 Schmoett · Schifflange, Luxembourg</p>
            </div>
          `,
        });
        console.log('Email client envoyé');
      }
    } catch (emailErr) {
      console.error('Erreur email:', emailErr.message);
    }
  }

  return res.status(200).json({ received: true });
};

// Désactiver le body parser de Vercel pour le webhook
module.exports.config = { api: { bodyParser: false } };
