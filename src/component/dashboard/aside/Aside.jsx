import { useContext, useState } from "react";
import "./Aside.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaAffiliatetheme,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useToasts } from "react-toast-notifications";
import { useGetAllLogosQuery } from "../../../redux/features/allApis/logoApi/logoApi";

const Aside = () => {
  const { data } = useGetAllLogosQuery();
  const selectedLogo = data?.find((logo) => logo.isSelected === true);
  const { logOut } = useContext(AuthContext);
  // State for collapsing menus
  const [menuCollapsed, setMenuCollapsed] = useState({
    theme: true,
    homeContents: true,
  });
  const { addToast } = useToasts();

  const toggleMenu = (menu) => {
    setMenuCollapsed((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        addToast("Successfully Logged Out!", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((error) => {
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  return (
    <div className="aside">
      <div className="dashboardLogoImg">
        <Link to="/">
          <img src={selectedLogo?.logoUrl} alt="Dashboard Logo" />
        </Link>
      </div>
      <h2 className="DBText">DashBoard</h2>
      <ul className="dashboardMenu">
        <Link to="/">
          <li className="">
            <FaHome />
            Home
          </li>
        </Link>
        <NavLink
          className={({ isActive }) => `${isActive && "tabActive"}`}
          to="/user"
        >
          <li>
            <FaUser />
            User
          </li>
        </NavLink>
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
            <NavLink
              className={({ isActive }) => ` ${isActive && "tabActive"}`}
              to="/dashboard/logo"
            >
              <li>▪ Logo</li>
            </NavLink>
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
            <NavLink
              className={({ isActive }) => ` ${isActive && "tabActive"}`}
              to="/dashboard/headline"
            >
              <li>▪ Headline</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => ` ${isActive && "tabActive"}`}
              to="/dashboard/edit-home"
            >
              <li>▪ Edit Home</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => ` ${isActive && "tabActive"}`}
              to="/dashboard/data-input"
            >
              <li>▪ Data Input</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => ` ${isActive && "tabActive"}`}
              to="/dashboard/data-table"
            >
              <li>▪ Data Table</li>
            </NavLink>
          </ul>
        )}
        <li className="bSubMenu" onClick={handleLogout}>
          <div className="d-flex align-items-center gap-2">Log out</div>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
