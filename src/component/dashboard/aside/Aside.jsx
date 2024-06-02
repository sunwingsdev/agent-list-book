import "./Aside.css";
import { Link } from "react-router-dom";
import dashboard_logo from "../../../assets/Layer-1.png";
import { FaHome, FaUser, FaAffiliatetheme, FaMinus } from "react-icons/fa";

const Aside = () => {
  return (
    <div className="aside">
      <div className="dashboardLogoImg">
        <Link to={"/"}>
          <img src={dashboard_logo} alt="" />
        </Link>
      </div>
      <h2 className="DBText">DashBoard </h2>
      {/* <div className="dashboardMenu"> */}
      <ul className="dashboardMenu">
        <Link>
          <li className="active">
            <FaHome />
            Home
          </li>
        </Link>
        <Link>
          <li>
            <FaUser />
            User
          </li>
        </Link>
        <Link>
          <li className="bSubMenu">
            <div className="d-flex align-items-center gap-2">
              <FaAffiliatetheme />
              Theme
            </div>
            <FaMinus />
          </li>
          <ul className="dashboardSubMenu">
            <Link to={"/dashboard/logo"}>
              <li>▪ Logo</li>
            </Link>
            <Link>
              <li>▪ User</li>
            </Link>
          </ul>
        </Link>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Aside;
