import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Article from "./sections/cars/Article.jsx";
import Form from "./sections/cars/Form.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/article/:id",
    element: <Article />,
  },
  {
    path: "form/:id",
    element: <Form />,
  } /*formularz z wybranym autem*/,
  {
    path: "form",
    element: <Form />,
  } /*formularz bez okreslonego auta*/,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
