import {
  addToCart,
  addToWishlist,
  removeWishlist,
} from "../Redux/ProductSlice";

const AddCartClick = (dispatch, data) => {
  dispatch(addToCart(data));
};

const AddWishlistClick = (wishlist, dispatch, data) => {
  wishlist.some((item) => item.id === data.id)
    ? dispatch(removeWishlist(data.id))
    : dispatch(addToWishlist(data));
};

export { AddCartClick, AddWishlistClick };
