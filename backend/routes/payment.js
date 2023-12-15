const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const stripe = require("../stripe");
const dotenv = require("dotenv");
const Products = require("../models/product");
const { getCheckoutLink } = require("../stripe/functions");

dotenv.config();
router.post(
  "/process",
  catchAsyncErrors(async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "Becodemy",
      },
    });
    res.status(200).json({
      success: true,
      client_secret: myPayment.client_secret,
    });
  })
);

router.get(
  "/stripeapikey",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ stripeApikey: stripe.stripePublishableKey });
  })
);

router.post("/checkout", async (req, res) => {
  try {
    const { products } = req.body;
    let cart = [];
    for (const product of products) {
      const item = {
        quantity: product.qty,
        price: product.stripeProduct.priceId,
      };
      cart.push(item);
    }

    const link = await getCheckoutLink(cart);
    res.status(200).json({ link });
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
