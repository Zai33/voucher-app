import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Sale from "./pages/Sale";
import Voucher from "./pages/Voucher";
import { createBrowserRouter } from "react-router-dom";
import ProductCreate from "./pages/ProductCreate";
import ProductEdit from "./pages/ProductEdit";
import VoucherDetail from "./pages/VoucherDetail";

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
        path: "/product/create",
        element: <ProductCreate />,
      },
      {
        path: "/product/edit/:id",
        element: <ProductEdit />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/voucher",
        element: <Voucher />,
      },
      {
        path: "/voucher/detail/:id",
        element: <VoucherDetail />,
      },
    ],
  },
]);

export default router;
