// src/pages/ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500">Məhsul tapılmadı!</div>;
  }

  return (
    <div className="container mx-auto my-8 p-4 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-blue-600 font-bold text-2xl mb-4">
            {product.price} AZN
          </p>
          <p className="text-sm text-gray-500">
            Batareya: {product.batteryPower}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Səbətə Əlavə Et
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
