import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../errorPage/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
