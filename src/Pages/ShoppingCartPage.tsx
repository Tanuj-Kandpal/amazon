import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { FaCircleMinus, FaTrashCan } from "react-icons/fa6";
import {
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../cartSlice.jsx";
import { HiPlusCircle } from "react-icons/hi";
import { ProductProps } from "../Interfaces/Interfaces.js";

function ShoppingCartPage() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  function handleRemove(item: string) {
    dispatch(removeItem(item));
  }

  function handleIncrement(item: number) {
    dispatch(increaseItemQuantity(item));
  }

  function handleDecrement(item: number) {
    dispatch(decreaseItemQuantity(item));
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Your Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item: ProductProps) => (
              <div
                key={item.image}
                className="bg-white rounded-lg shadow-md p-6 flex items-center gap-6 transition-all hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-32 h-32 object-cover rounded-md"
                    src={item.image || "/placeholder.svg"}
                    alt={item.heading}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.heading}
                  </h2>
                  <p className="text-2xl font-bold text-indigo-600">
                    ${item.price}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleIncrement(item.quantity)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                  >
                    <HiPlusCircle />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleDecrement(item.quantity)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                  >
                    <FaCircleMinus />
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.image)}
                  className="text-red-500 hover:text-red-700 transition-colors p-2"
                  aria-label="Remove item"
                >
                  <FaTrashCan className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartPage;
