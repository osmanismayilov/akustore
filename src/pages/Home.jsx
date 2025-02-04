// src/pages/Home.js
import React, { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import products from "../data/products"; // 🔥 Məhsulları import edirik

function Home({ addToCart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatteryName, setSelectedBatteryName] = useState("");
  const productsPerPage = 12;

  // 🔍 Axtarış və Filtr
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesBatteryPower = product.batteryPower
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesBatteryName = selectedBatteryName
        ? product.name === selectedBatteryName
        : true;

      return matchesBatteryPower && matchesBatteryName;
    });
  }, [searchTerm, selectedBatteryName]);

  // 📌 Səhifələmə
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto my-8 p-4 flex-grow">
      {/* 🔍 Axtarış və Filtr */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Batareya Gücü ilə axtar (məs: 5000mAh)"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedBatteryName}
          onChange={(e) => {
            setSelectedBatteryName(e.target.value);
            setCurrentPage(1);
          }}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Bütün batareyalar</option>
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      {/* 📌 Məhsul Siyahısı */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* 📌 Səhifələmə */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
    </div>
  );
}

export default Home;
