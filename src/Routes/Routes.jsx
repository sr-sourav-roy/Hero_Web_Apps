import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import PagesError from "../pages/PagesError/PagesError";
// import Github from "../pages/GitHub/Github";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PagesError></PagesError>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
