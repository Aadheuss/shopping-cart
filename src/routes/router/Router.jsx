import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../errorPage/ErrorPage";
import ShopPage from "../shopPage/ShopPage";
import Homepage from "../homePage/HomePage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
