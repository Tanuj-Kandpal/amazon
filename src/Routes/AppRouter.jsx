import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ShoppingCartPage from "../Pages/ShoppingCartPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Cart",
    element: <ShoppingCartPage />,
  },
]);

export default appRouter;
