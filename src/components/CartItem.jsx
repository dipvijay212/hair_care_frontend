import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <div className="item-header">
          <h3>{item.name}</h3>
          <button
            onClick={() => removeFromCart(item.id)}
            className="remove-btn"
          >
            <Trash2 size={18} />
          </button>
        </div>
        <p className="item-category">{item.category}</p>
        <div className="item-footer">
          <div className="quantity-controls">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              <Minus size={14} />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              <Plus size={14} />
            </button>
          </div>
          <span className="item-price">
            ₹{(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
