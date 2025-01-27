import type React from "react";
import CheckoutForm from "../Components/CheckoutForm";
import OrderSummary from "../Components/OrderSummary";

// This type definition is just for the example. You'll need to adjust it based on your actual data structure.
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const CheckoutPage: React.FC = () => {
  // This is example data. You'll replace this with your actual data and logic.
  const products: Product[] = [
    { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
  ];

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <CheckoutForm />
        </div>
        <div className="md:w-1/3">
          <OrderSummary subtotal={subtotal} tax={tax} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
