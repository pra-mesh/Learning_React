import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import accountReducer from "../slices/accountSlice";
import productReducer from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    counter: counterReducer,
    product: productReducer,
  },
});
