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
    // errorElement: <ErrorPage></ErrorPage>,
    errorElement: <PageError></PageError>,

    hydrateFallbackElement: (
      <p className="text-center my-10">
        <span className="loading loading-spinner loading-xl"></span>
      </p>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/appsData.json"),
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
