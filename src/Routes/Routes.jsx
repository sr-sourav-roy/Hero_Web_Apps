import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import PagesError from "../pages/PagesError/PagesError";
// import Github from "../pages/GitHub/Github";
import Home from "../pages/Home/Home";
import Apps02 from "../pages/Apps02/Apps02";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PagesError></PagesError>,
    children: [
      {
        index: true,
        loader: () => fetch("allApps01.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("allApps02.json"),
        Component: Apps02,
      },
    ],
  },
]);
