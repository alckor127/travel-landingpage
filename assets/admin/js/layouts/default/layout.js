import React from "react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";

const Layout = () => {
  return (
    <div className="app-layout dark-theme">
      <div className="sidebar sidebar-lg-show sidebar-fixed">
        <Link to="/" className="sidebar-brand">
          <CIcon name="sygnet" />
          <span>Easywire</span>
        </Link>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <Link to="/" className="sidebar-nav-link active">
              <CIcon name="cib-github" className="sidebar-nav-icon" />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-nav-title">Theme</li>
          <li className="sidebar-nav-item">
            <Link to="/test" className="sidebar-nav-link">
              <CIcon name="cib-github" className="sidebar-nav-icon" />
              Module 1
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link to="/test" className="sidebar-nav-link">
              <CIcon name="cib-github" className="sidebar-nav-icon" />
              Module 2
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link to="/test" className="sidebar-nav-link">
              <CIcon name="cib-github" className="sidebar-nav-icon" />
              Module 3
            </Link>
          </li>
        </ul>
      </div>

      {/* <div className="main-content">
        <header>
          <div>
            <CIcon name="cil-search" />
            <input type="search" placeholder="Search" />
          </div>
          <div className="header-nav">
            <CIcon name="cil-bell" />
            <CIcon name="cil-envelope-closed" />
            <div></div>
          </div>
        </header>

        <main>
          <h2>Overview</h2>

          <div>
            <div className="card card-single">
              <div className="card-body">
                <CIcon name="cil-bell" />
                <div>
                  <h5>Account Balance</h5>
                  <h4>$30,500.90</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="#">View all</a>
              </div>
            </div>
            <div className="card card-single">
              <div className="card-body">
                <CIcon name="cil-bell" />
                <div>
                  <h5>Account Balance</h5>
                  <h4>$30,500.90</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="#">View all</a>
              </div>
            </div>
            <div className="card card-single">
              <div className="card-body">
                <CIcon name="cil-bell" />
                <div>
                  <h5>Account Balance</h5>
                  <h4>$30,500.90</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="#">View all</a>
              </div>
            </div>
            <div className="card card-single">
              <div className="card-body">
                <CIcon name="cil-bell" />
                <div>
                  <h5>Account Balance</h5>
                  <h4>$30,500.90</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="#">View all</a>
              </div>
            </div>
            <div className="card card-single">
              <div className="card-body">
                <CIcon name="cil-bell" />
                <div>
                  <h5>Account Balance</h5>
                  <h4>$30,500.90</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="#">View all</a>
              </div>
            </div>
            <div className="card card-single">
              <div className="card-body">
                <CIcon name="cil-bell" />
                <div>
                  <h5>Account Balance</h5>
                  <h4>$30,500.90</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="#">View all</a>
              </div>
            </div>
            <div className="card card-single">
              <div className="card-body">
                <CIcon name="cil-bell" />
                <div>
                  <h5>Account Balance</h5>
                  <h4>$30,500.90</h4>
                </div>
              </div>
              <div className="card-footer">
                <a href="#">View all</a>
              </div>
            </div>
          </div>
        </main>
      </div> */}

      {/* <div className="main-content">
        <header>
        

          <div className="user-wrapper">
            <img
              src="https://devweb2021.nativosdigitales.pe/build/images/nativos/hover/nativo-francisco.png"
              width="40"
              height="40"
              alt=""
            />*/}
    </div>
  );
};

export default Layout;
