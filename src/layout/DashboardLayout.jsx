import Aside from "../component/dashboard/aside/Aside";

const DashboardLayout = () => {
  return (
    <div className="container-fluid">
      <div className="dashboardMainArea">
        <Aside />
        <div className="mainContain">This is Dashboard Contain</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
