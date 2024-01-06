import React from "react";
import Home from "./pages/Home/Home";
import RootLayout from "./layouts/RootLayout/RootLayout";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
