import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import PagesError from "../pages/PagesError/PagesError";
// import Github from "../pages/GitHub/Github";
import Home from "../pages/Home/Home";
import Apps02 from "../pages/Apps02/Apps02";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installations from "../pages/Installations/Installations";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PagesError></PagesError>,
    children: [
      {
        index: true,
        loader: () => fetch("allApps.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("allApps.json"),
        Component: Apps02,
      },
      {
        path: "/installation",
        loader: () => fetch("allApps.json"),
        Component: Installations,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("allApps.json"),
        Component: AppDetails,
      },
    ],
  },
]);
