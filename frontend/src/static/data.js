import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProductDetailsPage from "../pages/ProductDetails";
import Products from "../pages/Products";
import Singup from "../pages/Signup";
import { BestSellingPage } from "../pages/BestSelling";
import { Home } from "../pages/Home";
import ShopCreate from "../pages/ShopCreate";
import ShopLoginPage from "../pages/ShopLoginPage";
import SellerProtectedRoute from "../routes/SellerProtectedRoute";
import ShopDashboardPage from "../components/Shop/ShopDashboardPage";
import ShopAllProducts from "../components/Shop/ShopAllProducts";
import ShopCreateProduct from "../components/Shop/ShopCreateProduct";
import ShopHomePage from "../components/Shop/ShopHomePage";
import ShopAllOrders from "../pages/Shop/ShopAllOrders";
import ShopAllEvents from "../pages/Shop/ShopAllEvents";
import ShopCreateEvents from "../pages/Shop/ShopCreateEvents";
import ShopWithDrawMoneyPage from "../pages/Shop/ShopWithDrawMoneyPage";
import ShopAllCoupouns from "../pages/Shop/ShopAllCoupouns";
import ShopAllRefunds from "../pages/Shop/ShopAllRefunds";
import ShopSettingsPage from "../pages/Shop/ShopSettingsPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProtectedRoute from "../routes/ProtectedRoute";
import FAQ from "../pages/FAQPage";

import OrderSuccessPage from "../pages/OrderSuccessPage";
import SuccessProtected from "../routes/SuccessProtected";
import ShopOrderDetails from "../pages/Shop/ShopOrderDetails";
import ShopPreviewPage from "../pages/Shop/ShopPreviewPage";

// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Best Selling",
    url: "/best-selling",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];

export const authRoutes = [
  {
    component: <Login />,
    route: "/login",
  },
  {
    component: <Singup />,
    route: "/sign-up",
  },
];
export const publicRoutes = [
  {
    component: <Home />,
    route: "/",
  },
  {
    component: <FAQ />,
    route: "/faq",
  },
  {
    component: <BestSellingPage />,
    route: "/best-selling",
  },
  {
    component: <Products />,
    route: "/products",
  },
  {
    component: <ProductDetailsPage />,
    route: "/product/:id",
  },
  {
    component: <NotFound />,
    route: "*",
  },
  {
    component: <ShopCreate />,
    route: "/shop-create",
  },
  {
    component: <ShopLoginPage />,
    route: "/shop-login",
  },
  {
    route: "/checkout",
    component: (
      <ProtectedRoute>
        <CheckoutPage />
      </ProtectedRoute>
    ),
  },
  {
    component: (
      <SellerProtectedRoute>
        <ShopDashboardPage />
      </SellerProtectedRoute>
    ),
    route: "/dashboard",
  },

  {
    component: (
      <SellerProtectedRoute>
        <ShopAllProducts />
      </SellerProtectedRoute>
    ),
    route: "/dashboard-products",
  },
  {
    route: "/dashboard-create-product",
    component: (
      <SellerProtectedRoute>
        <ShopCreateProduct />
      </SellerProtectedRoute>
    ),
  },
  {
    route: "/dashboard-orders",
    component: (
      <SellerProtectedRoute>
        <ShopAllOrders />
      </SellerProtectedRoute>
    ),
  },
  {
    route: "/dashboard-events",
    component: (
      <SellerProtectedRoute>
        <ShopAllEvents />
      </SellerProtectedRoute>
    ),
  },
  {
    route: "/dashboard-create-event",
    component: (
      <SellerProtectedRoute>
        <ShopCreateEvents />
      </SellerProtectedRoute>
    ),
  },
  {
    route: "/dashboard-withdraw-money",
    component: (
      <SellerProtectedRoute>
        <ShopWithDrawMoneyPage />
      </SellerProtectedRoute>
    ),
  },
  {
    route: "/dashboard-coupouns",
    component: (
      <SellerProtectedRoute>
        <ShopAllCoupouns />
      </SellerProtectedRoute>
    ),
  },
  {
    route: "/dashboard-refunds",
    component: (
      <SellerProtectedRoute>
        <ShopAllRefunds />
      </SellerProtectedRoute>
    ),
  },
  {
    route: "/settings",
    component: (
      <SellerProtectedRoute>
        <ShopSettingsPage />
      </SellerProtectedRoute>
    ),
  },
  {
    route: "/shop/:id",
    component: (
      <SellerProtectedRoute>
        <ShopHomePage />
      </SellerProtectedRoute>
    ),
  },
  {
    route: "/success",
    component: (
      <SuccessProtected>
        <OrderSuccessPage />,
      </SuccessProtected>
    ),
  },
  {
    route: "/shop/preview/:id",
    component: <ShopPreviewPage />,
  },
  {
    route: "/order/:id",
    component: (
      <SellerProtectedRoute>
        <ShopOrderDetails />
      </SellerProtectedRoute>
    ),
  },
];
export const routes = publicRoutes;

// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Shipping",
    Description: "From all orders over 100$",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H5.63636V24.1818H35"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M34.9982 1H11.8164V18H34.9982V1Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M11.8164 7.18164H34.9982"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Daily Surprise Offers",
    Description: "Save up to 25% off",
    icon: (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M30.7 2L29.5 10.85L20.5 9.65"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Affortable Prices",
    Description: "Get Factory direct price",
    icon: (
      <svg
        width="32"
        height="35"
        viewBox="0 0 32 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M16 28V22"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Secure Payments",
    Description: "100% protected payments",
    icon: (
      <svg
        width="32"
        height="38"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Computers and Laptops",
    subTitle: "",
    image_Url:
      "https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838",
  },
  {
    id: 2,
    title: "cosmetics and body care",
    subTitle: "",
    image_Url:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/kosme1.png",
  },
  {
    id: 3,
    title: "Accesories",
    subTitle: "",
    image_Url:
      "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-2345.jpg?w=2000",
  },
  {
    id: 4,
    title: "Cloths",
    subTitle: "",
    image_Url:
      "https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png",
  },
  {
    id: 5,
    title: "Shoes",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
  },
  {
    id: 6,
    title: "Gifts",
    subTitle: "",
    image_Url:
      "data:image/jpeg;base64,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",
  },
  {
    id: 7,
    title: "Pet Care",
    subTitle: "",
    image_Url: "https://cdn.openpr.com/T/c/Tc15444071_g.jpg",
  },
  {
    id: 8,
    title: "Mobile and Tablets",
    subTitle: "",
    image_Url:
      "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg",
  },
  {
    id: 9,
    title: "Music and Gaming",
    subTitle: "",
    image_Url:
      "https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
  },
  {
    id: 10,
    title: "Others",
    subTitle: "",
    image_Url:
      "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
  },
];

// product Data
export const productData = [
  {
    id: 1,
    category: "Computers and Laptops",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 35,
    stock: 10,
  },
  {
    id: 2,
    category: "Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 80,
    stock: 10,
  },
  {
    id: 3,
    category: "Computers and Laptop",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 75,
    stock: 10,

  },
  {
    id: 4,
    category: "Others",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 12,
    stock: 10,
  },
  {
    id: 5,
    category: "Shoes",
    name: "New Trend shoes for gents with all sizes",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
    ],
    shop: {
      name: "Alisha Shoes Mart",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 120,
    discount_price: 89,
    rating: 5,
    total_sell: 49,
    stock: 10,
  },
  {
    id: 6,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
    category: "Music and Gaming",
  },
  {
    id: 7,
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 62,
    stock: 10,
  },
  {
    id: 8,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
  {
    id: 9,
    category: "Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 20,
    stock: 10,
  },
  {
    id: 10,
    category: "Music and Gaming",
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
];

export const footerProductLinks = [
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Careers",
    link: "/carrers",
  },
  {
    name: "Store Locations",
  },
  {
    name: "Our Blog",
  },
  {
    name: "Reviews",
  },
];

export const footercompanyLinks = [
  {
    name: "Game & Video",
  },
  {
    name: "Phone &Tablets",
  },
  {
    name: "Computers & Laptop",
  },
  {
    name: "Sport Watches",
  },
  {
    name: "Events",
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
  },
  {
    name: "Reviews",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Shipping",
  },
  {
    name: "Live chat",
  },
];
