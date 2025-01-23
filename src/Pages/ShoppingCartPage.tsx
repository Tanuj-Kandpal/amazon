import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";

function ShoppingCartPage() {
  const cartItems = useSelector((store) => store.cart.items);
  // const { heading, price, image, rating } = cartItems[0];
  // console.log(heading);

  return (
    <>
      <Navbar />
      {cartItems.map(function (item) {
        return (
          <div
            key={item.image}
            className=" mt-9 ml-9 flex gap-4 justify-evenly items-start"
          >
            <div className="w-32">
              <img
                className="w-32 object-fill block rounded-lg"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex font-bold flex-col">
              <div>{item.heading}</div>
              <div>${item.price}</div>
            </div>
            <button>
              <div>remove</div>
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ShoppingCartPage;
