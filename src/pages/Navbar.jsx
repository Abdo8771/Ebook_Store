import "../style/Nav.css"
import { NavLink } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cartItems } = useCart(); 
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top pro-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold fs-5" href="#">
            📚 Read & Relax
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link pro-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pro-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pro-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pro-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item position-relative">
                <NavLink className="nav-link pro-link" to="/cart">
                  🛒
                  {totalQuantity > 0 && (
                    <span
                      className="badge position-absolute top-1 start-50 translate-middle"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {totalQuantity}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
