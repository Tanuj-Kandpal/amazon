import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "./../Pages/ErrorPage";

import CheckoutPage from "./../Pages/CheckoutPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home/:homeId",
    element: "",
  },
  {
    path: "/Checkout",
    element: <CheckoutPage />,
  },
]);

export default appRouter;
