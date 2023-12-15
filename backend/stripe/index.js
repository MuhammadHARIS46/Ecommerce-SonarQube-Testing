const Stripe = require("stripe");
const dotenv = require("dotenv");
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Set up your API keys (publishable and secret keys)
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
console.log("==>" + stripeSecretKey);

module.exports = { stripe, stripePublishableKey };
