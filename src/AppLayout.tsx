import { Provider } from "react-redux";
import HomePage from "./Pages/HomePage";
import store from "./store";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Routes/appRouter.jsx";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
function AppLayout() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          <HomePage />
          <ShoppingCartPage />
        </RouterProvider>
      </Provider>
    </>
  );
}

export default AppLayout;
