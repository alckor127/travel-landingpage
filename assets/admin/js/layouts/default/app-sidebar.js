import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { Link as Dropdown } from "../../components/link";
import { Sidebar } from "../../components/sidebar";
import { AppContext } from "../../contexts";

const AppSidebar = () => {
  const { sidebarShow, setSidebarShow, unfoldable } = useContext(AppContext);

  return (
    <Sidebar
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      show={sidebarShow}
      onShow={() => console.log("show")}
      onHide={() => setSidebarShow(false)}
    >
      <Link to="/" className="sidebar-brand">
        <CIcon name="sygnet" />
        <span>Easywire</span>
      </Link>

      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <Link to="/" className="sidebar-nav-link">
            <CIcon name="cib-github" customClasses="sidebar-nav-icon" />
            Dashboard
          </Link>
        </li>
        <li className="sidebar-nav-title">Theme</li>
        <li className="sidebar-nav-item">
          <Link to="/test" className="sidebar-nav-link">
            <CIcon name="cib-github" customClasses="sidebar-nav-icon" />
            Module 1
          </Link>
        </li>
        <li className="sidebar-nav-dropdown">
          <Dropdown className="sidebar-nav-dropdown-toggle">
            <CIcon name="cib-github" customClasses="sidebar-nav-icon" />
            Dropdown 1
          </Dropdown>
          <ul className="sidebar-nav-dropdown-items">
            <li className="sidebar-nav-item">
              <Link to="/test" className="sidebar-nav-link">
                Item 1
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to="/test" className="sidebar-nav-link">
                Item 2
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to="/test" className="sidebar-nav-link">
                Item 3
              </Link>
            </li>
          </ul>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/test" className="sidebar-nav-link">
            <CIcon name="cib-github" customClasses="sidebar-nav-icon" />
            Module 3
          </Link>
        </li>
      </ul>
    </Sidebar>
  );
};

export default AppSidebar;
