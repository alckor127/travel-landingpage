import React from "react";
import Content from "./content";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="c-app">
      <Sidebar />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Content />
        </div>
        <Footer />
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
