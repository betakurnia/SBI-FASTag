import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import GeneralQuestionTabs from "../../components/GeneralQuestionTabs";
import CustomerFAQDetails from "../../components/CustomerFAQDetails";

const CustomerFAQ = () => {
  return (
    <DefaultLayout>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Frequently Asked Questions &amp; Support
                  </h4>
                </div>
              </div>
            </div>
            <div className="checkout-tabs">
              <div className="row">
                <GeneralQuestionTabs />
                <CustomerFAQDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CustomerFAQ;
