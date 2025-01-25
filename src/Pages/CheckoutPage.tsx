import CheckoutForm from "../Components/CheckoutForm";
import OrderSummary from "../Components/OrderSummary";
import ProductList from "../Components/ProductList";

function CheckoutPage() {
  return (
    <>
      <div className="">
        <h1>Checkout</h1>
        <ProductList />
        <OrderSummary />
        <CheckoutForm />
      </div>
    </>
  );
}

export default CheckoutPage;
