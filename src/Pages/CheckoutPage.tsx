import { useSelector } from "react-redux";

function CheckoutPage() {
  const cartItems = useSelector((store) => store.cart.items);
  // const { heading, price, image, rating } = cartItems[0];
  // console.log(heading);

  return (
    <>
      {cartItems.map(function (item) {
        return (
          <>
            <div>
              <div>image</div>
              <div>heading</div>
              <div>Description</div>
              <div>add</div>
              <div>remove</div>
            </div>
            <h1>Checkout Page</h1>
          </>
        );
      })}
    </>
  );
}

export default CheckoutPage;
