import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Layout from "../Outlet/Outlet";
import Loading from "../Loading/Loading";
import Home from "../../pages/Home/Home";
import NoPage from "../NoPage/NoPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/load",
        element: (
          <Suspense fallback={<Loading />}>
            <Loading />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);
