import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../landingPage.tsx";
import { Dashboard } from "../dashboard.tsx";

export const router = createBrowserRouter([
  {
    // element: <Login />,
    // your custom routing error component
    errorElement: (<h1>Error Occured</h1>),
    children: [
        // {
        //   path: "/",
        //   element: <Home />,
        // },
        // other pages....
        {
          path: "/d",
        element: <Dashboard />,
        },
      {
        path: "/login",
        element: <LandingPage />,
      },
    ],
  },
])