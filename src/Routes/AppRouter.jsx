import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ShoppingCartPage from "../Pages/ShoppingCartPage";
import CheckoutPage from "./../Pages/CheckoutPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Cart",
    element: <ShoppingCartPage />,
  },
  {
    path: "/Checkout",
    element: <CheckoutPage />,
  },
]);

export default appRouter;
