import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";

const products = [
  { id: 1, name: "Fern", price: 10 },
  { id: 2, name: "Succulent", price: 15 },
  { id: 3, name: "Cactus", price: 20 },
  { id: 4, name: "Palm", price: 25 },
  { id: 5, name: "Bonsai", price: 50 },
  { id: 6, name: "Flowering Plant", price: 30 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Get cart state from Redux

  const isInCart = (id) => cart.some((item) => item.id === id); // Check if product is already in cart

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            disabled={isInCart(product.id)}
          >
            {isInCart(product.id) ? "In Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
