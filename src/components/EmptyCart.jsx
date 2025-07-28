import { Link } from "react-router";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
      <h2 className="text-3xl font-bold text-green-600 mb-2">Your Cart is Empty 🛒</h2>
      <p className="text-gray-500 text-sm mb-6">
        Looks like you haven't added anything to your cart yet.
      </p>

      <Link
        to="/"
        className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300"
      >
        Browse Restaurants 🍽️
      </Link>
    </div>
  );
};

export default EmptyCart;
