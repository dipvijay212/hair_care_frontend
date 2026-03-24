import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { ShoppingBag, CreditCard, ChevronLeft } from "lucide-react";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      customer: formData,
      items: cart,
      total: cartTotal,
      date: new Date().toISOString(),
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/orders`, orderData);

      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.error("Order Submission Error:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-empty container section-padding">
        <h2>No items to checkout</h2>
        <p>Your cart is currently empty. Please add products to proceed.</p>
        <button onClick={() => navigate("/shop")} className="btn btn-primary">
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page container section-padding">
      <button onClick={() => navigate("/cart")} className="back-link">
        <ChevronLeft size={18} /> Back to Cart
      </button>

      <div className="checkout-grid">
        <div className="checkout-form-section">
          <h1>Shipping & Details</h1>
          <form onSubmit={handlePlaceOrder} className="modern-form">
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+1 (555) 000-0000"
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="123 Growth St"
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="San Francisco"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="94101"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="payment-notice">
              <CreditCard size={20} />
              <p>
                Payment will be collected as <strong>Cash on Delivery</strong>{" "}
                or via secure link sent after confirmation.
              </p>
            </div>

            <button
              type="submit"
              className="btn btn-primary place-order-btn"
              disabled={loading}
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>

        <div className="order-summary-box">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <div className="summary-item-left">
                  <div className="summary-img">
                    <img src={item.image} alt={item.name} />
                    <span className="qty-badge">{item.quantity}</span>
                  </div>
                  <span className="item-name">{item.name}</span>
                </div>
                <span className="item-price">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="summary-footer">
            <div className="summary-line">
              <span>Subtotal</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span className="free-tag">Free</span>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
