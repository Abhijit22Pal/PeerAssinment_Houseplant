import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Header from "./components/Header"; // Header Component
import LandingPage from "./components/LandingPage"; // Landing Page Component
import ProductList from "./components/ProductList"; // Product Listing Page
import ShoppingCart from "./components/ShoppingCart"; // Shopping Cart Page

const App = () => {
  return (
    <Router>
      <Header /> {/* The Header will display on all pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Home/Landing Page */}
        <Route path="/products" element={<ProductList />} />{" "}
        {/* Product Listing Page */}
        <Route path="/cart" element={<ShoppingCart />} />{" "}
        {/* Shopping Cart Page */}
      </Routes>
    </Router>
  );
};

export default App;
