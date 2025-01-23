import { IoMdSearch } from "react-icons/io";
function Searchbar() {
  return (
    <>
      <>
        <div className="flex items-center rounded-lg w-full flex-wrap bg-white overflow-hidden">
          <input
            className="flex-grow w-[200px] px-4 py-2 text-sm text-gray-700 outline-none"
            type="text"
            placeholder="Search Amazon.in"
          />
          <button className="flex items-center justify-center h-10 w-10 bg-yellow-600 cursor-pointer">
            <IoMdSearch className="fill-black text-lg" />
          </button>
        </div>
      </>
    </>
  );
}

export default Searchbar;
