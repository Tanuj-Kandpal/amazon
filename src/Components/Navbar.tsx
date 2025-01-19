import Searchbar from "./SearchBar";

function Navbar() {
  return (
    <>
      <div className="flex text-lg text-white font-semibold bg-[#131921] items-center justify-between p-5">
        <div className="flex gap-4">
          <img
            className="h-10"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
          <h1>Delivering to Gurugram</h1>
          <Searchbar />
        </div>
        <div className="flex gap-5">
          <h1>Hello, Tanuj</h1>
          <h1>Reutrns & Orders</h1>
          <div>Cart Icon</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
