import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <div>Contact</div>,
        },
        {
          path: "/:country",
          element: <CountryDetail />,
        },
      ],
    },
  ]
  // {
  //   future: {
  //     v7_skipActionErrorRevalidation: true, // Opt-in to the new behavior
  //   },
  // }
);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
