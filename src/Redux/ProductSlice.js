import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    addToWishlist(state, action) {
      const res = state.wishlist.find((item) => item.id === action.payload.id);
      if (!res) {
        state.wishlist.push(action.payload);
      } else alert("Item already in Wishlist");
    },
    removeWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    removeCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, addToWishlist, removeWishlist, removeCart } =
  ProductSlice.actions;
export default ProductSlice.reducer;
