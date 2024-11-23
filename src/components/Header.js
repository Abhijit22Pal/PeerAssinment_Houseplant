import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart); // Get cart items from Redux state

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <h1>Houseplant Store</h1>
      <nav>
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>{" "}
        {/* Link to Landing Page */}
        <Link to="/products" style={{ margin: "0 10px" }}>
          Products
        </Link>{" "}
        {/* Link to Product Page */}
        <Link to="/cart" style={{ margin: "0 10px" }}>
          Cart ({totalItems}) {/* Link to Cart with item count */}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
