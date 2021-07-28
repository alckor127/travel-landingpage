import React from "react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <div className="app-layout dark-theme">
      <Sidebar />
      <div className="wrapper">
        <header className="header header-fixed">
          {/* header toggler */}
          <button type="button" className="header-toggler">
            <div className="header-toggler-icon">
              <span className="topbar"></span>
              <span className="middlebar"></span>
              <span className="bottombar"></span>
            </div>
          </button>
          {/* mobile header brand */}
          {/* <Link to="/" className="header-brand">
            <CIcon name="sygnet" />
            <span>Easywire</span>
          </Link> */}
          <ul className="header-nav header-nav-left">
            <li className="header-nav-item">
              <Link to="/contact-us" className="header-nav-link">
                Contact us
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/support" className="header-nav-link">
                Support
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/settings" className="header-nav-link">
                Settings
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Layout;
