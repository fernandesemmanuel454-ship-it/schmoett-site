# Schmoett - Pizzas & Burgers Faits Maison

Schmoett is a modern, fast-paced food ordering platform for pizzas, burgers, tacos, and more, built with a clean project structure and secure payment integration via Stripe.

## Project Structure

```
schmoett-site/
├── index.html              # Main page HTML
├── css/
│   └── style.css          # All styling and animations
├── js/
│   └── app.js             # Product catalog and client-side logic
├── api/
│   ├── create-checkout.js # Stripe checkout session creation
│   ├── webhook.js         # Stripe webhook handler for order confirmation
│   └── stock.js           # Stock management via Vercel Edge Config
├── pages/
│   ├── mentions-legales.html  # Legal notices
│   ├── cgv.html               # Terms and conditions
│   └── confidentialite.html    # Privacy policy
├── package.json           # Dependencies and scripts
├── .gitignore            # Git ignore rules
├── vercel.json           # Vercel configuration
└── README.md             # This file
```

## Features

- **Product Catalog**: Pizzas, burgers, tacos, wings, drinks, sides, and combo meals (formules)
- **Smart Menu System**: Products grouped by category with detailed allergen information
- **Combo Meals**: Customizable formules with choice groups and options
- **Click & Collect**: Fast preparation (10-15 minutes) at Schifflange location
- **Secure Payments**: Stripe integration with real-time email notifications
- **Stock Management**: Edge Config-based inventory system
- **Admin Notifications**: Detailed order emails with customer contact links
- **Customer Confirmations**: Beautiful HTML emails with order summary
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Legal Compliance**: GDPR-compliant privacy policy, terms, and legal notices

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-specific-password
VERCEL_API_TOKEN=vercel_...
EC_ID=your-edge-config-id
EDGE_CONFIG=https://edge-config.vercel.com/...?token=your-token
ADMIN_PASSWORD=your-secure-password
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Stripe keys, Gmail credentials, and Vercel tokens.

### 3. Set Up Stripe

- Create a Stripe account at https://stripe.com
- Generate API keys from your Stripe dashboard
- Configure the webhook endpoint in Stripe to point to `https://schmoett.lu/api/webhook`
- Store the webhook signing secret in your `.env.local`

### 4. Set Up Email

- Enable 2FA on your Gmail account
- Generate an app-specific password for your Gmail account
- Store the credentials in `.env.local`

### 5. Set Up Vercel Edge Config

- Create an Edge Config store in your Vercel project settings
- Store the Edge Config connection string in `.env.local`

### 6. Deploy to Vercel

```bash
vercel deploy
```

## API Endpoints

### POST `/api/create-checkout`

Creates a Stripe checkout session for a customer's order.

**Request Body:**
```json
{
  "items": [
    {
      "name": "Margherita Pizza",
      "desc": "Description",
      "price": 12.50,
      "qty": 2
    }
  ],
  "customer": {
    "prenom": "John",
    "telephone": "+352661234567",
    "adresse": "Optional address",
    "email": "john@example.com",
    "note": "Optional special instructions"
  }
}
```

**Response:**
```json
{
  "url": "https://checkout.stripe.com/...",
  "session_id": "cs_..."
}
```

### POST `/api/webhook`

Receives and processes Stripe webhook events (checkout.session.completed).

Verifies Stripe signature and sends confirmation emails to both admin and customer.

### GET `/api/stock`

Retrieves current stock data from Edge Config.

**Response:**
```json
{
  "Pizza": { "Margherita": 5, "Carbonara": 3 },
  "Burger": { "Classic": 8, "Deluxe": 4 }
}
```

### POST `/api/stock`

Updates stock data (requires admin password).

**Request Body:**
```json
{
  "password": "your-admin-password",
  "stock": {
    "Pizza": { "Margherita": 10, "Carbonara": 8 },
    "Burger": { "Classic": 12, "Deluxe": 6 }
  }
}
```

## Product Data Structure

Products are defined in `js/app.js` with the following structure:

```javascript
{
  id: "pizza-margherita",
  name: "Margherita",
  category: "Pizza",
  price: 12.50,
  desc: "Tomato, mozzarella, basil",
  allergens: ["gluten", "dairy"],
  available: true
}
```

## Order Email Workflow

1. Customer submits order via checkout form
2. Frontend calls `/api/create-checkout` to create Stripe session
3. Customer completes payment on Stripe
4. Stripe sends webhook event to `/api/webhook`
5. Webhook verifies signature and filters for Schmoett orders
6. Admin email sent to fernandesemmanuel454@gmail.com with order details
7. Customer confirmation email sent with order summary
8. Both emails include WhatsApp contact link for customer service

## Security Considerations

- **Webhook Verification**: All webhooks are signed and verified using Stripe's secret key
- **CORS**: Limited to schmoett.lu origins only
- **Environment Variables**: Sensitive keys stored in `.env.local` (never committed)
- **Body Parser**: Disabled for webhook endpoint to preserve raw body for signature verification
- **Admin Password**: Hashed comparison for stock management endpoint
- **GDPR Compliance**: Privacy policy and data handling procedures documented

## Customization

### Modify Products

Edit the `PRODUCTS` array in `js/app.js` to add, remove, or modify products.

### Customize Emails

Edit the HTML templates in `api/webhook.js` to customize order confirmation emails.

### Change Colors

Update CSS variables in `css/style.css`:
- `--accent`: #E8450A (Schmoett orange)

### Adjust Minimum Order

Modify `MIN_ORDER` constant in `js/app.js` (currently 10€).

## Troubleshooting

### Webhook Not Receiving Events

- Verify webhook URL in Stripe dashboard
- Check `STRIPE_WEBHOOK_SECRET` matches your webhook signing secret
- Review server logs for webhook errors

### Email Not Sending

- Verify Gmail app-specific password is correct
- Enable "Less secure app access" (if not using app password)
- Check spam folder for test emails

### Payment Errors

- Verify `STRIPE_SECRET_KEY` is correct
- Check test/live mode matches your Stripe keys
- Review Stripe dashboard for failed charges

## Legal Pages

- `/mentions-legales` - Legal notices
- `/cgv` - Terms and conditions of sale
- `/confidentialite` - Privacy policy (GDPR compliant)

## Support

For technical support or questions about Schmoett:

- WhatsApp: +352 661 47 41 30
- Email: contact@schmoett.lu
- Location: Schifflange, Luxembourg

## License

MIT License - See LICENSE file for details

---

Built with care in Luxembourg. Bon appétit!
