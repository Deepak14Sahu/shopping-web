import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../Redux/ProductSlice";
import "../CSS/Product.css";
import { Link } from "react-router-dom";

function Product(products) {
  const dispatch = useDispatch();

  const handleAddCartClick = (product) => {
    dispatch(addToCart(product));
  };
  const handleAddWishlistClick = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        {products.products.map((product) => (
          <div className="col-md-3 my-3" key={product.id}>
            <div className="card-sl">
              <div className="card-image ">
                <img src={product.image} alt="Product" />
              </div>

              <Link
                className="card-action"
                onClick={() => handleAddWishlistClick(product)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fillRule="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Link>
              <div className="card-heading">{product.name}</div>
              <div className="card-text">
                {product.description.slice(0, 90)}...
              </div>
              <div className="card-text">&#8377; {product.price}</div>
              <Link
                className="card-button text-decoration-none"
                onClick={() => handleAddCartClick(product)}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
