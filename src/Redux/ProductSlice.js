import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
  loggedIn: false,
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === id);
      if (!existingProduct) {
        state.cart.push({ ...action.payload, quantity });
      } else existingProduct.quantity += quantity;
    },
    updateCartQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === id);
      existingProduct.quantity = quantity;
    },
    addToWishlist(state, action) {
      state.wishlist.push(action.payload);
    },
    removeWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    removeCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    toggleLog(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const {
  addToCart,
  addToWishlist,
  removeWishlist,
  removeCart,
  toggleLog,
  updateCartQuantity,
} = ProductSlice.actions;
export default ProductSlice.reducer;
