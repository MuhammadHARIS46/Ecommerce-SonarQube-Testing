const express = require("express");
const { isSeller, isAuthenticated, isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const Product = require("../models/product");
// const Order = require("../models/order");
const Shop = require("../models/shop");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const { uploadToCloudinary, bufferToDataURI } = require("../cloudinary");
const { createStripeProduct } = require("../stripe/functions");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dcwahx7wk",
  api_key: "555991721558452",
  api_secret: "stQY2RWbot1jM_a0rLEg2YgHVKw",
});

// create product
router.post(
  `/create-product`,
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop Id is invalid!", 400));
      } else {
        const files = req.files;
        console.log({ files });
        // const imageUrls = files.map((file) => `${file.filename}`);
        const images = [];
        for (const file of files) {
          const fileFormat = file.mimetype.split("/")[1];
          const { base64 } = await bufferToDataURI(fileFormat, file.buffer);
          const result = await uploadToCloudinary(base64, fileFormat);
          console.log(result.secure_url);
          images.push(result.secure_url);
        }
        const productData = req.body;
        productData.images = images;
        productData.shop = shop;
        const stripeProduct = await createStripeProduct(productData);
        productData.stripeProduct = stripeProduct;
        const product = await Product.create(productData);

        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  })
);

// get all products of a shop
router.get(
  "/get-all-products-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find({ shopId: req.params.id });
      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  })
);

// delete product of a shop
router.delete(
  "/delete-shop-product/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const productId = req.params.id;

      const productData = await Product.findById(productId);

      // productData.images.forEach((imageUrl) => {
      //   const filename = imageUrl;
      //   const filePath = `uploads/${filename}`;

      //   fs.unlink(filePath, (err) => {
      //     if (err) {
      //       console.log(err);
      //     }
      //   });
      // });

      const product = await Product.findByIdAndDelete(productId);

      if (!product) {
        return next(new ErrorHandler("Product not found with this id!", 500));
      }

      res.status(201).json({
        success: true,
        message: "Product Deleted successfully!",
      });
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  })
);

// get all products
router.get(
  "/get-all-products",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(201).json({
        success: true,
        products: products,
      });
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  })
);

// // review for a product
// router.put(
//   "/create-new-review",
//   isAuthenticated,
//   catchAsyncErrors(async (req, res, next) => {
//     try {
//       const { user, rating, comment, productId, orderId } = req.body;

//       const product = await Product.findById(productId);

//       const review = {
//         user,
//         rating,
//         comment,
//         productId,
//       };

//       const isReviewed = product.reviews.find(
//         (rev) => rev.user._id === req.user._id
//       );

//       if (isReviewed) {
//         product.reviews.forEach((rev) => {
//           if (rev.user._id === req.user._id) {
//             (rev.rating = rating), (rev.comment = comment), (rev.user = user);
//           }
//         });
//       } else {
//         product.reviews.push(review);
//       }

//       let avg = 0;

//       product.reviews.forEach((rev) => {
//         avg += rev.rating;
//       });

//       product.ratings = avg / product.reviews.length;

//       await product.save({ validateBeforeSave: false });

//       await Order.findByIdAndUpdate(
//         orderId,
//         { $set: { "cart.$[elem].isReviewed": true } },
//         { arrayFilters: [{ "elem._id": productId }], new: true }
//       );

//       res.status(200).json({
//         success: true,
//         message: "Reviwed succesfully!",
//       });
//     } catch (error) {
//       return next(new ErrorHandler(error, 400));
//     }
//   })
// );

// // all products ---
// router.get(
//   "/admin-all-products",
//   isAuthenticated,
//   isAdmin("Admin"),
//   catchAsyncErrors(async (req, res, next) => {
//     try {
//       const products = await Product.find().sort({
//         createdAt: -1,
//       });
//       res.status(201).json({
//         success: true,
//         products,
//       });
//     } catch (error) {
//       return next(new ErrorHandler(error.message, 500));
//     }
//   })
// );
module.exports = router;
