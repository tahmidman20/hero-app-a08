import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import PageError from "../Pages/PageError";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("./appsData.json"),
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/app/:id",
        element: <AppDetails></AppDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <PageError></PageError>,
  },
]);

export default router;
