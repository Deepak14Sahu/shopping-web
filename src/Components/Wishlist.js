import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeWishlist } from "../Redux/ProductSlice";

function Wishlist() {
  const products = useSelector((state) => state.product.wishlist);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeWishlist(id));
  };
  if (products.length === 0) {
    return (
      <>
        <p className="h1 text-center"> Your Wishlist</p>
        <p className="h4 text-center " style={{ marginTop: "15%" }}>
          Nothing in the wishlist
        </p>
      </>
    );
  }
  return (
    <>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 my-3" key={product.id}>
              <div className="card-sl">
                <div className="card-image ">
                  <img src={product.image} alt="Product" />
                </div>

                <div className="card-heading">{product.name}</div>
                <div className="card-text">
                  {product.description.slice(0, 90)}...
                </div>
                <div className="card-text">${product.price}</div>
                <Link
                  className="card-button text-decoration-none"
                  onClick={() => handleClick(product.id)}
                >
                  Remove
                  <i
                    className="fa fa-trash align-self-center mx-2"
                    style={{ fontSize: "20px", color: "red" }}
                  ></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
