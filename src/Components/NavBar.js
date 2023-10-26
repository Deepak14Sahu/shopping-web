import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const cartLength = useSelector((state) => state.product.cart.length);
  const wishlistLength = useSelector((state) => state.product.wishlist.length);

  return (
    <Navbar expand="lg" style={{ background: "#5a5a5a" }}>
      <Container fluid>
        <img src="./Static/logo.png" style={{ width: "6%" }} alt="" />

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", fontSize: "18px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "orange" : "beige",
                };
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className="nav-link"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "orange" : "beige",
                };
              }}
            >
              Products
            </NavLink>
          </Nav>
          <Nav className=" my-2 my-lg-0 ">
            <NavLink to="/wishlist" className="mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-heart-fill "
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              <span className="position-absolute  translate-middle badge rounded-pill bg-danger">
                {wishlistLength}
              </span>
            </NavLink>
            <NavLink to="/cart" className="mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-cart3 "
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                {cartLength}
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
