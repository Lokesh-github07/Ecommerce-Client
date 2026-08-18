import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          ShopEase
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="nav-auth">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;