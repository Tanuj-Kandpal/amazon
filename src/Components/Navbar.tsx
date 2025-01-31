import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useAppSelector } from "../hooks";

function Navbar() {
  const cartItems = useAppSelector((store) => store.cart.items);
  const navigate = useNavigate();

  function handleCart() {
    navigate("/Cart");
  }
  return (
    <>
      <div className="flex text-white font-semibold text-lg bg-[#131921] justify-between p-5 px-20">
        <div className="flex gap-5 p-2 items-center">
          <Link to="/">
            <img
              className="h-10"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            />
          </Link>
          <h1>Delivering to Gurugram</h1>
        </div>

        <Searchbar />
        <div className="flex items-center gap-5">
          <div>
            <h1>Hello,</h1>
            <h1>Tanuj</h1>
          </div>
          <div>
            <h1>Return</h1>
            <h1> & Orders</h1>
          </div>
          <div className="flex gap-5">
            <button onClick={handleCart}>
              <TiShoppingCart className="text-3xl" />
            </button>
            <h1 className="bg-[#E28F33] rounded-full w-7 h-7 text-center">
              {cartItems.length}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
