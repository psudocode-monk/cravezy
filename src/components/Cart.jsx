import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.card.info.defaultPrice ?? item.card.info.price ?? 0;
    return acc + price;
  }, 0);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-emerald-600 mb-6">🛍️ Cravezy Cart</h1>

      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 text-sm">
          You have <span className="font-bold">{cartItems.length}</span> item(s) in your cart.
        </p>
        <button
          onClick={handleClearCart}
          className="bg-red-100 text-red-600 font-medium px-4 py-1 rounded-full hover:bg-red-200 transition"
        >
          Clear Cart ❌
        </button>
      </div>

      <ItemList items={cartItems} />

      <div className="mt-6 flex justify-end">
        <div className="text-right">
          <p className="text-xl font-bold text-emerald-700">
            Total: ₹{totalPrice / 100}
          </p>
          <button className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
