import React from "react";

const SignUpTabs = () => {
  return (
    <ul className="nav nav-pills nav-justified gap-3" role="tablist">
      <li className="nav-item waves-effect waves-light">
        <a
          className="nav-link"
          data-bs-toggle="tab"
          href="#existingCust"
          role="tab"
          id="existingAcHolder"
        >
          <span className="d-block d-sm-none">
            <i className="fas fa-home" />
          </span>
          <span className="d-none d-sm-block">Existing SBI Account Holder</span>
        </a>
      </li>
      <li className="nav-item waves-effect waves-light">
        <a
          className="nav-link"
          data-bs-toggle="tab"
          href="#newCust"
          role="tab"
          id="newCustomer"
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user" />
          </span>
          <span className="d-none d-sm-block">New Customer</span>
        </a>
      </li>
    </ul>
  );
};

export default SignUpTabs;
