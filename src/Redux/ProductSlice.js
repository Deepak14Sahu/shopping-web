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
      const res = state.cart.find((item) => item.id === action.payload.id);
      if (!res) {
        state.cart.push(action.payload);
      } else alert("Item already in Cart");
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
} = ProductSlice.actions;
export default ProductSlice.reducer;
