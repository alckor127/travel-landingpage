import React from "react";
import AppSidebar from "./app-sidebar";
import Header from "./header";

const Layout = () => {
  return (
    <div className="app-layout dark-theme">
      <AppSidebar />
      <div className="wrapper">
        <Header />
      </div>
    </div>
  );
};

export default Layout;
