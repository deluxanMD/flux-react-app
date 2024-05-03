import UnAuthLayout from "helpers/layouts/unauth-layout/unauth-layout.component";
import LoginPage from "pages/login/login.page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>home</p>,
    },
    {
      path: "/auth",
      element: <UnAuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
