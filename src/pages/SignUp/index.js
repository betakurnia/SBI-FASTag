import React from "react";
import SignUpLayout from "../../layouts/SignUpLayout";
import SignUpTabs from "../../components/SignUpTabs";
import ExistingCostumer from "../../components/ExistingCostumer";
import NewCustomer from "../../components/NewCustomer";

const SignUp = () => {
  return (
    <SignUpLayout>
      <div className="main-content" id="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">User Registration</h4>
                </div>
                Please choose your account type below:
              </div>
            </div>
            <br />
            <div className="row kjh_46">
              <div className="col-lg-12">
                <SignUpTabs />
                <div className="tab-content text-muted">
                  <div className="tab-pane" id="existingCust" role="tabpanel">
                    <div className="card">
                      <ExistingCostumer />
                    </div>
                  </div>
                  <div className="tab-pane" id="newCust" role="tabpanel">
                    <div className="card">
                      <NewCustomer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SignUpLayout>
  );
};

export default SignUp;
