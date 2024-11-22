import Main from "../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layout/Pages/Home/HomePageLayout/HomePageLayout";
import SignIn from "../Layout/Pages/Authentication/SignIn/SignIn";
import SignUp from "../Layout/Pages/Authentication/SignUp/SignUp";
import AllProduct from "../Layout/Pages/Product/AllProduct/AllProduct";
import DashboardLayout from "../Layout/Pages/Dashboard/DashboardLayout/DashboardLayout";
import AllUser from "../Layout/Pages/Dashboard/Admin/AllUser/AllUser";
import PrivetRoute from "./PrivetRoute";
import AddProduct from "../Layout/Pages/Dashboard/Seller/AddProduct/AddProduct";
import ProductList from "../Layout/Pages/Dashboard/Seller/ProductList/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
      {
        path: "/product",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard/allUser",
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/productList",
        element: <ProductList></ProductList>,
      },
    ],
  },
]);

export default router;
