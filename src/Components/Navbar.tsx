import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Navbar() {
  const cartItems = useSelector((store) => store.cart.items);
  // const navigate = useNavigate();
  return (
    <>
      <div className="flex text-white font-semibold text-lg bg-[#131921] justify-between p-5 px-20">
        <div className="flex gap-5 p-2 items-center">
          <img
            className="h-10"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
          <h1>Delivering to Gurugram</h1>
        </div>

        {/* <Searchbar /> */}
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
            <TiShoppingCart className="text-3xl" />
            <h1>{cartItems.length}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
