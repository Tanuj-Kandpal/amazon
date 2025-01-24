import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { FaTrashCan } from "react-icons/fa6";
import { removeItem } from "../cartSlice.jsx";

function ShoppingCartPage() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  function handleRemove(item) {
    dispatch(removeItem(item));
  }

  return (
    <>
      <Navbar />
      {cartItems.map(function (item) {
        return (
          <div key={item.image} className=" mt-14 ml-14 flex gap-8 items-start">
            <div className="">
              <img
                className="w-[130px] h-[130px] object-fill block rounded-lg"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex font-bold flex-col gap-1">
              <div>{item.heading}</div>
              <div>${item.price}</div>
            </div>
            <button
              onClick={function () {
                handleRemove(item.image);
              }}
            >
              <FaTrashCan />
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ShoppingCartPage;
