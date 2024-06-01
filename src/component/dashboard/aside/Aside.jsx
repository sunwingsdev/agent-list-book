import "./Aside.css";
import { Link } from "react-router-dom";
import dashboard_logo from "../../../assets/Layer-1.png";
import { FaHome, FaUser } from "react-icons/fa";

const Aside = () => {
  return (
    <div className="aside">
      <div className="dashboardLogoImg">
        <Link to={"/"}>
          <img src={dashboard_logo} alt="" />
        </Link>
      </div>
      <h2 className="DBText">DashBoard </h2>
      <div className="dashboardMenu">
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default Aside;
