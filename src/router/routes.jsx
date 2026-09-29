import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;