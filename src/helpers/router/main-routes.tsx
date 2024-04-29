import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>home</p>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
