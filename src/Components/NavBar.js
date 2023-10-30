import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.png";
import { NavDropdown } from "react-bootstrap";
import { toggleLog } from "../Redux/ProductSlice";
import { useEffect } from "react";

function NavBar() {
  const { cart, wishlist, loggedIn } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const cartQuantity = cart.reduce(
    (cartQuantity, product) => cartQuantity + product.quantity,
    0
  );

  useEffect(() => {
    if (localStorage.getItem("logging") === "true") {
      dispatch(toggleLog(true));
    }
  }, [dispatch]);
  const handleLogout = () => {
    localStorage.setItem("logging", false);
    localStorage.removeItem("user");

    dispatch(toggleLog(false));
  };

  return (
    <Navbar expand="lg" style={{ background: "#5a5a5a" }}>
      <Container fluid>
        <img src={logo} style={{ width: "6%" }} alt="" />

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

            {loggedIn && (
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
            )}
          </Nav>
          {loggedIn ? (
            <Nav className=" my-2 my-lg-0 ">
              <NavLink to="/wishlist" className="mx-3">
                <i className="fa fa-heart fa-2x" style={{ color: "black" }}></i>
                <span className="position-absolute  translate-middle badge rounded-pill bg-danger">
                  {wishlist.length}
                </span>
              </NavLink>
              <NavLink to="/cart" className="mx-3">
                <i
                  className="fa fa-shopping-cart fa-2x"
                  style={{ color: "black" }}
                ></i>

                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                  {cartQuantity}
                </span>
              </NavLink>
              <Nav className="mx-3">
                <i className="fa fa-user fa-2x" style={{ color: "black" }}></i>
                <NavDropdown menuVariant="dark" align="end" style={{}}>
                  <NavLink
                    className="text-decoration-none"
                    style={{ color: "beige", margin: "32%" }}
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/"
                    className="text-decoration-none"
                    style={{ color: "beige", margin: "32%" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </NavDropdown>
              </Nav>
            </Nav>
          ) : (
            <Nav>
              <NavLink
                to="/login"
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "orange" : "beige",
                  };
                }}
              >
                Login
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
