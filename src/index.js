import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { SensorsPage } from "./pages/Sensors";
import { RemotePage } from "./pages/Remote";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "sensors",
        element: <SensorsPage />,
      },
      {
        path: "remote-control",
        element: <RemotePage />,
      },
    ],
  },
  // {
  //   path: "/sensors",
  //   element: <SensorsPage />,
  // },
  // {
  //   path: "/remote-control",
  //   element: <RemotePage />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <main>
        <RouterProvider router={router} />
      </main>
    </Layout>
  </React.StrictMode>
);
