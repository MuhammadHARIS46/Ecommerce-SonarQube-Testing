const stripe = require("stripe")(
  "sk_test_51NHlT0FFBA231aj3Mk1GVarA3ohk1rSYfZtcwuEK5Dcs2s0tmaLeLRwPSVamQyj1uep1fV5p6kEA3nPtD19LNXG100mXH5hpt1"
);

const createStripeProduct = async (product) => {
  try {
    const stripeProduct = await createProduct(product);
    const price = await createPrice(stripeProduct.id, product);
    return { id: stripeProduct.id, priceId: price.id };
  } catch (error) {
    console.error("Error creating Stripe product and price:", error);
    throw error;
  }
};

const createProduct = async (product) => {
  try {
    console.log({ product: product.name });
    const stripeProduct = await stripe.products.create({
      name: product.name,
      images: product.images,
    });
    console.log({ stripeProduct });
    return { id: stripeProduct.id, priceId: null };
  } catch (error) {
    console.error("Error creating Stripe product:", error);
    throw error;
  }
};

const createPrice = async (productId, product) => {
  try {
    console.log("Product ID:", productId);
    console.log({ product });
    const price = await stripe.prices.create({
      unit_amount: product.discountPrice * 100,
      currency: "usd",
      product: productId,
    });
    return price;
  } catch (error) {
    console.error("Error creating Stripe price:", error);
    throw error;
  }
};

const deleteProduct = async (product) => {
  try {
    await stripe.products.del(product.id);
  } catch (error) {
    throw Error("The product could not be deleted");
  }
};

const updateProduct = async (product) => {
  try {
    await stripe.products.update(product.id, {
      name: product.name,
      images: product.images,
    });
  } catch (error) {
    throw Error(error.message);
  }
};

const updatePrice = async (product) => {
  try {
    const price = await stripe.prices.update(product.stripeProduct.priceId, {
      unit_amount: product.discountPrice,
      currency: "usd",
      product: product.id,
    });
    return price;
  } catch (error) {
    throw new Error(error);
  }
};

const updateStripeProduct = async (product) => {
  const stripeProduct = await updateProduct(product);
  const updatedPrice = await updatePrice(stripeProduct.id, product);
  return { id: stripeProduct.id, priceId: updatedPrice.id };
};

const getCheckoutLink = async (items) => {
  const session = await stripe.checkout.sessions.create({
    success_url:
      "http://localhost:3000/success?success=true&session_id={CHECKOUT_SESSION_ID}",
    line_items: items,
    mode: "payment",
    payment_method_types: ["card"],
    cancel_url: "http://localhost:3000/checkout",
  });
  return session.url;
};

const retrieveSession = async (session_id) => {
  const session = await stripe.checkout.sessions.retrieve(session_id);
  return session;
};

module.exports = {
  retrieveSession,
  getCheckoutLink,
  updateStripeProduct,
  createProduct,
  createPrice,
  deleteProduct,
  updateProduct,
  updatePrice,
  createStripeProduct,
};
