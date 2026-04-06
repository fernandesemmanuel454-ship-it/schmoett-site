const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
    // CORS
    const allowedOrigins = ['https://schmoett.lu', 'https://www.schmoett.lu'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
          res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
          if (!req.body || typeof req.body !== 'object') {
                  return res.status(400).json({ error: 'Corps de requête manquant ou invalide' });
          }

      const { items, customer } = req.body;

      if (!Array.isArray(items) || items.length === 0) {
              return res.status(400).json({ error: 'Aucun article dans la commande' });
      }

      if (!customer || !customer.prenom || !customer.telephone) {
              return res.status(400).json({ error: 'Informations client manquantes (prénom et téléphone requis)' });
      }

      // Construire les line_items Stripe
      const line_items = items.map(item => ({
              price_data: {
                        currency: 'eur',
                        product_data: {
                                    name: item.name,
                                    description: item.desc || '',
                        },
                        unit_amount: Math.round(item.price * 100),
              },
              quantity: item.qty,
      }));

      // Créer la session Checkout Stripe
      const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              mode: 'payment',
              line_items,
              customer_email: customer.email || undefined,
              metadata: {
                        prenom: customer.prenom,
                        telephone: customer.telephone,
                        adresse: customer.adresse || '',
                        email: customer.email || '',
                        note: customer.note || '',
                        order_summary: items.map(i => `${i.name} x${i.qty}`).join(', '),
              },
              success_url: 'https://schmoett.lu?order=success',
              cancel_url: 'https://schmoett.lu?order=cancelled',
      });

      return res.status(200).json({ url: session.url, session_id: session.id });

    } catch (err) {
          console.error('Stripe error:', err.message);
          return res.status(500).json({ error: 'Erreur de paiement, veuillez réessayer' });
    }
};
