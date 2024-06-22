import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import LogoDashboard from "../pages/dashboard/Logo/LogoDashboard";
import DashboardHome from "../pages/dashboard/dashboardHome/DashboardHome";
import EditHome from "../pages/dashboard/editHome/EditHome";
import DataInput from "../component/dashboard/dataInput/DataInput";
import DataTable from "../pages/dashboard/dataTable/DataTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "logo",
        element: <LogoDashboard />,
      },
      {
        path: "edit-home",
        element: <EditHome />,
      },
      {
        path: "data-input",
        element: <DataInput />,
      },
      {
        path: "data-table",
        element: <DataTable />,
      },
    ],
  },
]);

export default router;
