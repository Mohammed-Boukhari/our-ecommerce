import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./cart/cartSlice";
import wishlist from "./wishlist/wishlistSlice";
import auth from "./authentication/authenticationSlice";
import orders from "./orders/ordersSlice";
import toasts from "./toasts/toastsSlice";
import theme from "./theme/themeSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  wishlist: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  wishlist: ["user", "accessToken"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories,
  products,
  orders,
  toasts,
  theme,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist: wishlist,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const regExpPaths: RegExp = /^toasts\.records\.\d+\.onCloseToast$/;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "toasts/addToast",
        ],
        ignoredPaths: [regExpPaths],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
const persister = persistStore(store);

export { store, persister };
