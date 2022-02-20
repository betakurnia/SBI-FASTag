import React from "react";
import { Link } from "react-router-dom";

const SidebarSignUp = () => {
  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/" className="waves-effect turing_pie">
                <i className="mdi mdi-home" />
                <span key="t-layouts">
                  <font color="#495057">User Registration</font>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" className="waves-effect turing_pie">
                <i className="bx bx-support" />
                <span key="t-layouts">
                  <font color="#495057">FAQs &amp; Support</font>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarSignUp;
