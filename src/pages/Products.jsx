// src/pages/Products.js
import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products"; // 🔥 Məhsulları import edirik

function Products({ addToCart }) {
  return (
    <div className="container mx-auto my-8 p-4 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
