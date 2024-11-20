import Main from "../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layout/Pages/Home/HomePageLayout/HomePageLayout";
import SignIn from "../Layout/Pages/Authentication/SignIn/SignIn";
import SignUp from "../Layout/Pages/Authentication/SignUp/SignUp";
import AllProduct from "../Layout/Pages/Product/AllProduct/AllProduct";

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
]);

export default router;
