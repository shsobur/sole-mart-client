import Main from "../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layout/Pages/Home/HomePageLayout/HomePageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
    ],
  },
]);

export default router;
