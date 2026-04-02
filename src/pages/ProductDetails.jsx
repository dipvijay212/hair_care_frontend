import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import * as gtag from "../utils/gtag";
import {
  Star,
  Shield,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        );
        setProduct(data);
        gtag.ecommerceEvent("view_item", {
          currency: "INR",
          value: data.price,
          items: [
            {
              item_id: data.id,
              item_name: data.name,
              price: data.price,
              quantity: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <div className="container section-padding text-center">
        Loading product details...
      </div>
    );

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    gtag.ecommerceEvent("add_to_cart", {
      currency: "INR",
      value: product.price * quantity,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          price: product.price,
          quantity: quantity,
        },
      ],
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  const reviews = [
    {
      name: "Sarah L.",
      rating: 5,
      date: "Oct 12, 2025",
      text: "I noticed a difference in just 3 weeks! My hair feels much stronger.",
    },
    {
      name: "Michael T.",
      rating: 4,
      date: "Sep 28, 2025",
      text: "Great product, little expensive but worth it for the ingredients.",
    },
    {
      name: "Jessica R.",
      rating: 5,
      date: "Sep 15, 2025",
      text: "The only thing that stopped my postpartum hair loss. Truly a lifesaver.",
    },
  ];

  return (
    <div className="product-details-page container section-padding">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}
      </div>

      <div className="product-view">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} className="main-image" />
        </div>

        <div className="product-actions">
          <div className="badge">{product.category}</div>
          <h1>{product.name}</h1>
          <div className="rating-row">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={
                    i < Math.floor(product.rating)
                      ? "var(--accent-color)"
                      : "none"
                  }
                  color="var(--accent-color)"
                />
              ))}
            </div>
            <span>
              {product.rating} ({product.reviews_count} Reviews)
            </span>
          </div>

          <p className="price-tag">
            ₹{product.price.toFixed(2)}
            {product.name.includes("Gethair-F") && <span style={{ fontSize: "1.2rem", color: "#666", marginLeft: "8px", fontWeight: "normal" }}>(set of 2)</span>}
          </p>

          <div className="benefits-list">
            {product.benefits.map((benefit, i) => (
              <div className="benefit-item" key={i}>
                <Check size={18} color="var(--primary-color)" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="purchase-controls">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>
                <Plus size={16} />
              </button>
            </div>
            <div className="action-buttons">
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Bag
              </button>
              <button className="btn btn-outline" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>

          <div className="shipping-info">
            <p>
              <Truck size={16} /> Free Shipping on orders over ₹50
            </p>
            <p>
              <RotateCcw size={16} /> Satisfaction Commitment
            </p>
          </div>
        </div>
      </div>

      <div className="product-tabs">
        <div className="tabs-header">
          <button
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={activeTab === "usage" ? "active" : ""}
            onClick={() => setActiveTab("usage")}
          >
            How to Use
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "description" && <p>{product.description}</p>}
          {activeTab === "ingredients" && (
            <p>{product.ingredients.join(", ")}</p>
          )}
          {activeTab === "usage" && <p>{product.howToUse}</p>}
        </div>
      </div>

      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="stars">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill={j < review.rating ? "var(--accent-color)" : "none"}
                      color="var(--accent-color)"
                    />
                  ))}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <h3>{review.name}</h3>
              <p>"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
