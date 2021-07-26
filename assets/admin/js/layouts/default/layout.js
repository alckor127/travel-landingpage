import React from "react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";

const Layout = () => {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <CIcon name="sygnet" />
            <span>Easywire</span>
          </h3>
          <CIcon name="cil-menu" />
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <Link to="/test">
                <CIcon name="cib-github" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/test">
                <CIcon name="cib-github" />
                <span>Module 1</span>
              </Link>
            </li>
            <li>
              <Link to="/test">
                <CIcon name="cib-github" />
                <span>Module 2</span>
              </Link>
            </li>
            <li>
              <Link to="/test">
                <CIcon name="cib-github" />
                <span>Module 3</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="main-content">
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
      </div>

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
