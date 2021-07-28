import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const Layout = () => {
  return (
    <div className="app-layout dark-theme">
      <Sidebar />
      <div className="wrapper">
        <Header />
      </div>
    </div>
  );
};

export default Layout;
