import React from "react";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./pages/router/index.tsx";

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
