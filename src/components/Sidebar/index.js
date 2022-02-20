import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="vertical-menu">
      <div data-simplebar class="h-100">
        <div id="sidebar-menu">
          <ul class="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/" class="waves-effect turing_pie">
                <i class="mdi mdi-home"></i>
                <span key="t-layouts">
                  <font color="#495057">Dashboard</font>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/transactions" class="waves-effect turing_pie">
                <i class="bx bx-rupee"></i>
                <span key="t-layouts">
                  <font color="#495057">Transactions</font>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/registered-tags" class="waves-effect turing_pie">
                <i class="mdi mdi-car-arrow-right"></i>
                <span key="t-layouts">
                  <font color="#495057">Registered Tags</font>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/buy-fastag" class="waves-effect turing_pie">
                <i class="mdi mdi-bank-plus"></i>
                <span key="t-layouts">
                  <font color="#495057">Buy Tag</font>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/customer-faqs" class="waves-effect turing_pie">
                <i class="bx bx-support"></i>
                <span key="t-layouts">
                  <font color="#495057">FAQs & Support</font>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
