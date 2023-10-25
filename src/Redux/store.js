import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./ProductSlice";

const store = configureStore({
  reducer: {
    product: productReducers,
  },
});

export default store;
