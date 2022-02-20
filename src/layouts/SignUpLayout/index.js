import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SidebarSignUp";

const LoginLayout = ({ children }) => {
  return (
    <div id="layout-wrapper">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default LoginLayout;
