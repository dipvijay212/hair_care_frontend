import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty container section-padding">
        <ShoppingBag size={64} color="var(--border-color)" />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page container section-padding">
      <h1>Your Shopping Bag</h1>
      <div className="cart-grid">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary checkout-btn">
            Proceed to Checkout
          </Link>
          <Link to="/shop" className="btn-continue">
            <span>Continue Shopping</span>
          </Link>
          <p className="summary-note">Tax calculated at checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
