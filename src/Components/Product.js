import { useDispatch, useSelector } from "react-redux";
import "../CSS/Product.css";
import { Link, useNavigate } from "react-router-dom";
import { AddCartClick, AddWishlistClick } from "./AddingFunction";

function Product({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.product.wishlist);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        {products &&
          products.map((product) => (
            <div className="col-md-3 my-3" key={product.id}>
              <div className="card-sl">
                <div className="card-image ">
                  <img
                    src={product.images[0]}
                    alt="Product"
                    onClick={() =>
                      navigate(`${product.id}`, { state: product })
                    }
                  />
                </div>

                <Link
                  className="card-action"
                  style={{
                    color: wishlist.some((item) => item.id === product.id)
                      ? "red"
                      : "#5a5a5a",
                  }}
                  onClick={() => AddWishlistClick(wishlist, dispatch, product)}
                >
                  <i className="fa fa-heart fa-2x"></i>
                </Link>
                <div className="card-heading">{product.name}</div>
                <div className="card-text">
                  {product.description.slice(0, 90)}...
                </div>
                <div className="card-text">&#8377; {product.price}</div>
                <Link
                  className="card-button text-decoration-none"
                  onClick={() => AddCartClick(dispatch, product)}
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
