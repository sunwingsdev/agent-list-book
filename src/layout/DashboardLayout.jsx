import { Outlet } from "react-router-dom";
import Aside from "../component/dashboard/aside/Aside";

const DashboardLayout = () => {
  return (
    <div className="container-fluid">
      <div className="dashboardMainArea">
        <Aside />
        {/* <div className="mainContain">This is Dashboard Contain</div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
