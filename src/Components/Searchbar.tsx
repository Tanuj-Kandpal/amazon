import { IoMdSearch } from "react-icons/io";
function Searchbar() {
  return (
    <>
      <>
        <div className="flex items-center rounded-lg flex-wrap bg-white overflow-hidden w-80">
          <input
            className="flex-grow text-sm text-gray-700 outline-none"
            type="text"
            placeholder="Search Amazon.in"
          />
          <button className="flex items-center justify-center h-16 p-5 bg-yellow-600 cursor-pointer">
            <IoMdSearch className="fill-black text-lg" />
          </button>
        </div>
      </>
    </>
  );
}

export default Searchbar;
