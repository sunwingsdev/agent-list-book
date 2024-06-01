import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

export default router;
