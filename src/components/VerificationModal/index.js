import React, { useState } from "react";
import Steps from "rc-steps";
import { Select } from "semantic-ui-react";
import "rc-steps/assets/index.css";

const VerificationModal = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (current) => {
    setCurrent(current);
  };

  const containerStyle = {
    border: "1px solid rgb(235, 237, 240)",
    marginBottom: 24,
  };

  return (
    <div
      className="modal fade"
      id="verificationModal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-xl modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Verify your Account</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="kyc-verify-wizard">
              <Steps
                style={containerStyle}
                type="navigation"
                current={current}
                onChange={onChange}
              >
                <Steps.Step title="Select Reason" />
                <Steps.Step title="Refund Details" />
                <Steps.Step title="OTP Verification" />
              </Steps>
              {current === 0 && (
                <section>
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label
                            htmlFor="kycselectcity-input"
                            className="form-label"
                          >
                            Reason
                          </label>
                          <Select
                            placeholder="Select reason"
                            options={[
                              {
                                key: "1",
                                text: "Tag damaged",
                                value: "tagDamaged",
                              },
                              {
                                key: "2",
                                text: "Vechile sold",
                                value: "vechileSold",
                              },
                              {
                                key: "3",
                                text: "Windscreen replaced",
                                value: "windscreenReplaced",
                              },
                              {
                                key: "4",
                                text: "Tag not reading properly",
                                value: "tagNotReadingProperly",
                              },
                              {
                                key: "5",
                                text: "Shifting to another bank",
                                value: "shiftingToAnotherBank",
                              },
                              {
                                key: "6",
                                text: "Others",
                                value: "others",
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </section>
              )}
              {current === 1 && (
                <section>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="card-title-desc">
                        The security deposit amount of your tag will be refunded
                        to the below account within 10 working days.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 my-auto">
                      <div className="mb-3">
                        <label
                          htmlFor="kycfirstname-input"
                          className="form-label"
                        >
                          Security Deposit Refund Amount
                        </label>
                        <div className="my-auto">
                          <div style={{ fontSize: "large" }} size={+1}>
                            <i className="bx bx-rupee" />
                            5278.00
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label
                          htmlFor="kycfirstname-input"
                          className="form-label"
                        >
                          Beneficiary Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="kycfirstname-input"
                          placeholder="Enter details"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label
                          htmlFor="kycfirstname-input"
                          className="form-label"
                        >
                          Bank Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="kycfirstname-input"
                          placeholder="Enter details"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label
                          htmlFor="kycfirstname-input"
                          className="form-label"
                        >
                          Account Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="kycfirstname-input"
                          placeholder="Enter details"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label
                          htmlFor="kycfirstname-input"
                          className="form-label"
                        >
                          IFSC Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="kycfirstname-input"
                          placeholder="Enter details"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label htmlFor="kycfirstname-input" className="d-block">
                          Cancelled Cheque{" "}
                          <small className="float-end my-auto">
                            Max. size: 2MB
                          </small>
                        </label>
                        <div className="input-group">
                          <input
                            type="file"
                            className="form-control"
                            id="inputGroupFile02"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {current === 2 && (
                <section>
                  <div className="text-center mb-4">
                    <div className="row justify-content-center">
                      <div className="col-xl-10">
                        <h4 className="text-primary">
                          <i className="mdi mdi-email-open" /> OTP
                        </h4>
                        <p className="text-muted font-size-14 mb-4">
                          We have sent the code verification to your mobile
                          Number +91-90******75
                          <a href="#" className="editicon">
                            <i className="bx bxs-edit" />
                          </a>
                        </p>
                        <a href="#" className="editicon">
                          <div className="input-group bg-light">
                            <input
                              type="text"
                              className="form-control bg-transparent border-0"
                              placeholder="Enter OTP"
                              aria-label="Recipient's username"
                              aria-describedby="button-addon2"
                            />
                            <button
                              className="btn btn-success"
                              type="button"
                              id="button-addon2"
                            >
                              Verify
                            </button>
                          </div>
                        </a>
                      </div>
                      <a href="#" className="editicon"></a>
                    </div>
                    <a href="#" className="editicon"></a>
                  </div>
                  <a href="#" className="editicon"></a>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">Finish</button>
                  </div>
                </section>
              )}
              <a href="#" className="editicon"></a>
            </div>
            <a href="#" className="editicon"></a>
          </div>
          <a href="#" className="editicon"></a>
        </div>
        <a href="#" className="editicon"></a>
      </div>
      <a href="#" className="editicon"></a>
    </div>
  );
};

export default VerificationModal;
