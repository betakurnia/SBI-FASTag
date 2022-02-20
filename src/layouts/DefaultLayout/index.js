import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const DefaultLayout = ({ notification, children }) => {
  return (
    <div id="layout-wrapper">
      <Navbar notification={notification} />
      <Sidebar />
      {children}
    </div>
  );
};

export default DefaultLayout;
