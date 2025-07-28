import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../assets/logo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  return (
    <header className="bg-gray-900 text-white shadow-lg px-6 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 rounded-full object-cover shadow-md"
        />
        <h3 className="text-2xl font-bold text-green-400 tracking-wider">
          Cravezy
        </h3>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex items-center gap-5 text-sm font-medium">
          <li className="text-green-500">
            Internet Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/" className="hover:text-green-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-400 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-400 transition">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/groceries" className="hover:text-green-400 transition">
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="relative inline-flex items-center font-bold text-xl text-white hover:text-green-400 transition"
            >
              🛒 Cart
              <span className="ml-2 bg-green-500 text-white text-sm font-semibold px-2 py-0.5 rounded-full shadow-sm">
                {cartItems.length}
              </span>
            </Link>
          </li>

          <li className="font-semibold text-green-500 px-3 py-1 rounded-md bg-green-50 border border-green-200">
            👤 {loggedInUser}
          </li>

          {/* Login Button */}
          <li>
            <button
              onClick={() =>
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold px-5 py-2 rounded-xl hover:scale-105 hover:shadow-green-500/30 shadow-md transition-all duration-300"
            >
              {btnName}
            </button>
          </li>

          {/* Signup Button */}
          <li>
            <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold px-5 py-2 rounded-xl hover:scale-105 hover:shadow-green-500/30 shadow-md transition-all duration-300">
              Signup
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
