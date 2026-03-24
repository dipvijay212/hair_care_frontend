import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <Link
            to={`/product/${product.id}`}
            className="overlay-icon-btn"
            title="View Details"
          >
            <Eye size={20} />
          </Link>
          <button
            className="overlay-icon-btn"
            title="Add to Cart"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-head">
          <span className="product-category">{product.category}</span>
          <div className="product-rating">
            <Star
              size={12}
              fill="var(--accent-color)"
              color="var(--accent-color)"
            />
            <span>{product.rating}</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>

        <p className="product-short-desc">
          {product.description ||
            "Premium botanical formula for healthy, radiant hair."}
        </p>

        <div className="product-footer">
          <span className="product-price">
            ₹{product.price.toFixed(2)}
            {product.name.includes("Gethair-F") && <span style={{ fontSize: "0.9rem", color: "#666", marginLeft: "5px", fontWeight: "normal" }}>(set of 2)</span>}
          </span>
          <div className="product-card-actions">
            <Link to={`/product/${product.id}`} className="btn-text">
              Details
            </Link>
            <button className="btn-small" onClick={() => addToCart(product)}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
