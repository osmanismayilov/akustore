import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto my-8 p-4 flex-grow">
      <h1 className="text-3xl font-bold mb-4">Səbət</h1>
      {cartItems.length === 0 ? (
        <p>Səbətiniz boşdur.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border-b py-4 flex items-center justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-blue-600 font-bold">{item.price} AZN</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Səbətdən Sil
                </button>
              </div>
              <div className="ml-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-bold">Ümumi Qiymət: {totalPrice} AZN</p>
          </div>
        </div>
      )}
      <Link
        to="/products"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Məhsullara Qayıt
      </Link>
    </div>
  );
}

export default Cart;
