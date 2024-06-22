import { useState } from "react";
import "./Aside.css";
import { Link } from "react-router-dom";
import dashboard_logo from "../../../assets/Layer-1.png";
import {
  FaHome,
  FaUser,
  FaAffiliatetheme,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

const Aside = () => {
  // State for collapsing menus
  const [menuCollapsed, setMenuCollapsed] = useState({
    theme: true,
    homeContents: true,
  });

  const toggleMenu = (menu) => {
    setMenuCollapsed((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="aside">
      <div className="dashboardLogoImg">
        <Link to="/">
          <img src={dashboard_logo} alt="Dashboard Logo" />
        </Link>
      </div>
      <h2 className="DBText">DashBoard</h2>
      <ul className="dashboardMenu">
        <Link to="/">
          <li className="active">
            <FaHome />
            Home
          </li>
        </Link>
        <Link to="/user">
          <li>
            <FaUser />
            User
          </li>
        </Link>
        <li className="bSubMenu" onClick={() => toggleMenu("theme")}>
          <div className="d-flex align-items-center gap-2">
            <FaAffiliatetheme />
            Theme
          </div>
          <div>{menuCollapsed.theme ? <FaPlus /> : <FaMinus />}</div>
        </li>

        {!menuCollapsed.theme && (
          <ul
            className={`dashboardSubMenu ${
              menuCollapsed.theme ? "" : "expanded"
            }`}
          >
            <Link to="/dashboard/logo">
              <li>▪ Logo</li>
            </Link>
          </ul>
        )}
        <li className="bSubMenu" onClick={() => toggleMenu("homeContents")}>
          <div className="d-flex align-items-center gap-2">Home Contents</div>
          {menuCollapsed.homeContents ? <FaPlus /> : <FaMinus />}
        </li>
        {!menuCollapsed.homeContents && (
          <ul
            className={`dashboardSubMenu ${
              menuCollapsed.homeContents ? "" : "expanded"
            }`}
          >
            <Link to="/dashboard/headline">
              <li>▪ Headline</li>
            </Link>
            <Link to="/dashboard/edit-home">
              <li>▪ Edit Home</li>
            </Link>
            <Link to="/dashboard/data-input">
              <li>▪ Data Input</li>
            </Link>
            <Link to="/dashboard/data-table">
              <li>▪ Data Table</li>
            </Link>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Aside;
