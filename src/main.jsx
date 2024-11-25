import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Hotel } from "./hotel/Hotel";
import { Restaurant } from "./restaurant/Restaurant";
import { Recenzii } from "./recenzii/Recenzii";
import { Cariera } from "./cariera/Cariera";
import { Camera1 } from "./hotel/Camera1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/camera1",
    element: <Camera1 />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },

  {
    path: "/cariera",
    element: <Cariera />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
