import { Provider } from "react-redux";
import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import store from "./store";
function AppLayout() {
  return (
    <>
      <Provider store={store}>
        <HomePage />
        <CheckoutPage />
      </Provider>
    </>
  );
}

export default AppLayout;
