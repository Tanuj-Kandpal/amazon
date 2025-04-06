import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice.js";
import { ProductDetails } from "../Helper/types.tsx";

function Product({
  index,
  heading,
  price,
  image,
  rating,
  quantity,
}: ProductDetails) {
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(addItem({ index, heading, price, image, rating, quantity }));
  }

  return (
    <>
      <div className="w-[400px] border hover:shadow-2xl transition-shadow flex flex-col justify-center items-center p-8">
        <p className="font-medium">{heading}</p>
        <h1 className="font-bold mt-4">${price}</h1>
        <span className="mt-4">{rating}</span>
        <img className="h-60 mt-5" src={image} />
        <button
          onClick={handleAddItem}
          className="p-1 bg-[#ffbc12] text-black mt-7 rounded-md"
        >
          Add to Basket
        </button>
      </div>
    </>
  );
}

export default Product;
