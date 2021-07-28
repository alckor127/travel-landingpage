import React from "react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { Link as Dropdown } from "../../components/link";
import { Badge } from "../../components/badge";

const Header = () => {
  return (
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
      <ul className="header-nav">
        <li className="header-nav-item">
          <button className="header-nav-button">
            <CIcon name="cil-sun" />
          </button>
        </li>
        <li className="header-nav-item">
          <button className="header-nav-button">
            <CIcon name="cil-comment-square" />
            <Badge color="danger" round>
              10
            </Badge>
          </button>
        </li>
        <li className="header-nav-dropdown">
          <Dropdown className="header-nav-dropdown-toggle">
            <div className="user-wrapper">
              <img
                src={require("../../../images/avatar.png")}
                className="user-avatar"
                alt="Avatar"
              />
              <div className="user-info">
                <h4 className="username">Francisco Rios Vega</h4>
                <small className="role">Administrator</small>
              </div>
            </div>
          </Dropdown>
        </li>
      </ul>
    </header>
  );
};

export default Header;
