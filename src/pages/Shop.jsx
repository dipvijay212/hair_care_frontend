import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { Search, SlidersHorizontal, X } from "lucide-react";
import "../styles/Shop.css";

const Shop = () => {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const categories = ["All", "Kit", "Serum", "Supplement", "Treatment", "Tool"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, searchQuery, products]);

  return (
    <div className="shop-page container section-padding">
      <div className="shop-header">
        <h1>Our Collection</h1>
        <p>Premium solutions for every stage of your hair growth journey.</p>
      </div>

      <div className="shop-controls">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          className="mobile-filter-toggle"
          onClick={() => setShowMobileFilters(true)}
        >
          <SlidersHorizontal size={20} /> Filters
        </button>
      </div>

      <div className="shop-layout">
        <aside className={`shop-sidebar ${showMobileFilters ? "show" : ""}`}>
          <div className="sidebar-header">
            <h3>Filters</h3>
            <button
              className="close-filters"
              onClick={() => setShowMobileFilters(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="filter-group">
            <h4>Categories</h4>
            <div className="category-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`cat-link ${category === cat ? "active" : ""}`}
                  onClick={() => {
                    setCategory(cat);
                    setShowMobileFilters(false);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>


        </aside>

        <main className="shop-main">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No products found</h3>
              <p>Try adjusting your filters or search query.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
