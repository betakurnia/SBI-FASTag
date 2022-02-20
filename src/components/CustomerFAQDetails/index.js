import React from "react";

const CustomerFAQDetails = () => {
  return (
    <div className="col-lg-10">
      <div className="card">
        <div className="card-body">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-gen-ques"
              role="tabpanel"
              aria-labelledby="v-pills-gen-ques-tab"
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="col-lg-4">
                  <h4 className="card-title">General Questions</h4>
                </div>
              </div>
              <div className="faq-box media mb-4">
                <div className="faq-icon me-3">
                  <i className="bx bx-help-circle font-size-20 text-primary" />
                </div>
                <div className="media-body">
                  <h5 className="font-size-15">Question</h5>
                  <p className="text-muted">
                    The answer entered by SBI team will be displayed for the
                    above question
                  </p>
                </div>
              </div>
              <div className="faq-box media mb-4">
                <div className="faq-icon me-3">
                  <i className="bx bx-help-circle font-size-20 text-primary" />
                </div>
                <div className="media-body">
                  <h5 className="font-size-15">Question</h5>
                  <p className="text-muted">
                    The answer entered by SBI team will be displayed for the
                    above question
                  </p>
                </div>
              </div>
              <div className="faq-box media mb-4">
                <div className="faq-icon me-3">
                  <i className="bx bx-help-circle font-size-20 text-primary" />
                </div>
                <div className="media-body">
                  <h5 className="font-size-15">Question</h5>
                  <p className="text-muted">
                    The answer entered by SBI team will be displayed for the
                    above question
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-support"
              role="tabpanel"
              aria-labelledby="v-pills-support-tab"
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="col-lg-4">
                  <h4 className="card-title">Support</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="validationCustom01" className="form-label">
                      Email IDs
                    </label>
                    <br />
                    For email support, our team can be reached at any of the
                    following email addresses:
                    <br />
                    <br />
                    <ul>
                      <li>admin@comvision.io</li>
                      <li>admin@comvision.io</li>
                      <li>admin@comvision.io</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="validationCustom01" className="form-label">
                      Telephone Support
                    </label>
                    <br />
                    For telephone support, our team can be reached at any of the
                    following numbers between 9 AM - 5 PM IST:
                    <br />
                    <br />
                    <ul>
                      <li>+9112456789</li>
                      <li>+9112456789</li>
                      <li>+9112456789</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="validationCustom01" className="form-label">
                      Register a Complaint
                    </label>
                    <br />
                    You may also register a complaint or report an issue by
                    clicking the button below:
                    <br />
                    <br />
                    <a
                      href="#"
                      type="button"
                      className="btn btn-primary waves-effect waves-light w-sm"
                    >
                      <i className="mdi mdi-open-in-new d-block font-size-16" />{" "}
                      Report an Issue
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFAQDetails;
