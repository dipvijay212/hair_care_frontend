import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="order-success-page container section-padding">
      <div className="success-content">
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="success-icon-wrapper"
        >
          <CheckCircle
            size={100}
            strokeWidth={1.5}
            color="var(--primary-color)"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Your order has been placed successfully.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="success-message"
        >
          Thank you for trusting Hair Care. Our team will contact you shortly
          to confirm the shipping details and delivery timeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="success-actions"
        >
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/shop" className="btn btn-outline">
            <ShoppingBag size={18} /> Continue Shopping
          </Link>
        </motion.div>

        <div className="success-footer">
          <p>Order ID: #RB-{Math.floor(Math.random() * 900000 + 100000)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
