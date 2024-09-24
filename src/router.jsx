import { Children } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Sale from "./pages/Sale";
import Voucher from "./pages/Voucher";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/voucher",
        element: <Voucher />,
      },
    ],
  },
]);

export default router;
