import { Provider } from "react-redux";
import store from "./store.js";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Routes/AppRouter.js";
function AppLayout() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </>
  );
}

export default AppLayout;
