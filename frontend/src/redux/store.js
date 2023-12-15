import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";
import { notifyReducer } from "./reducers/notification";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "loadUser",
    "LoadSellerSuccess",
    "LoadSellerRequest",
    "LoadSellerFail",
    "getAllProductsShopRequest",
    "getAllProductsShopSuccess",
    "getAllProductsRequest",
    "getAllProductsSuccess",
    "getAllProductsFailed",
    "products",
  ], // which reducer want to store
};

const rootReducers = combineReducers({
  user: userReducer,
  seller: sellerReducer,
  products: productReducer,
  events: eventReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  order: orderReducer,
  notify: notifyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const Store = configureStore({
  reducer: persistedReducer,
});
export default Store;
