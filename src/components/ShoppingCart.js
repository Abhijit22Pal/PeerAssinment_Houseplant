import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementItem, decrementItem, removeFromCart } from "../redux/actions";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart); // Get cart state from Redux
  const dispatch = useDispatch();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ); // Calculate total cost

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>
              ${item.price} x {item.quantity}
            </p>
            <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
            <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ${totalCost}</h3>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
};

export default ShoppingCart;
