import { Children, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import Layout from "./component/Layout/Layout";
import Resume from "./component/Resume/Resume";
import NotFound from "./component/NotFound/NotFound";
function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: "true",
          element: <Home />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}>
        <Layout />
      </RouterProvider>
    </>
  );
}

export default App;
