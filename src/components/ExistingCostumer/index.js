import React, { useState } from "react";
import Steps from "rc-steps";
import "rc-steps/assets/index.css";

const NewCustomer = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (current) => {
    setCurrent(current);
  };

  const containerStyle = {
    border: "1px solid rgb(235, 237, 240)",
    marginBottom: 24,
  };

  return (
    <div className="card-body">
      <div className="hg76_56">
        <h4 className="card-title mb-4">Existing Customer</h4>
        <p className="card-title-desc" style={{ marginTop: "-12px" }}>
          Please enter your SBI account details
        </p>
        <div className="kyc-verify-wizard">
          <Steps
            style={containerStyle}
            type="navigation"
            current={current}
            onChange={onChange}
          >
            <Steps.Step title="Account Holder " />
            <Steps.Step title="OTP Verification" />
            <Steps.Step title="Add Email ID" />
          </Steps>
          <section>
            <form>
              <div>
                {current === 0 && (
                  <>
                    <div className="row">
                      <div className="col-lg-12">
                        We will send you an OTP on the registered mobile number
                        of the account details you enter below for
                        authentication.
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Account Number</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter SBI bank account number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Branch</label>
                          <select className="ui fluid search dropdown">
                            <option value>Select bank branch</option>
                            <option value="LA">Male</option>
                            <option value="SD">Female</option>
                            <option value="SD">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Account Type</label>
                          <br />
                          <div
                            className="btn-group btn-group-example btn-group-example-custom mb-3"
                            role="group"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-primary w-sm "
                            >
                              Individual Account&nbsp;&nbsp;&nbsp;
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary w-sm"
                            >
                              &nbsp;&nbsp;&nbsp;Corporate Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {current === 1 && (
                  <>
                    <section>
                      <div className="text-center mb-4">
                        <div className="row justify-content-center">
                          <div className="col-xl-10">
                            <h4 className="text-primary">
                              <i className="mdi mdi-form-textbox-password" />{" "}
                              OTP
                            </h4>
                            <p className="text-muted font-size-14 mb-4">
                              We have sent a verification code to
                              +91-99***51&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#" className="editicon">
                                Resend OTP
                              </a>
                            </p>
                            <div className="row justify-content-center">
                              <div className="col-lg-7">
                                <div className="input-group bg-light">
                                  <input
                                    type="text"
                                    className="form-control bg-transparent border-0"
                                    placeholder="Enter OTP received on email"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                )}
                {current === 2 && (
                  <>
                    <section>
                      <div className="text-center mb-4">
                        <div className="row justify-content-center">
                          <div className="col-xl-10">
                            <h4 className="text-primary">
                              <i className="mdi mdi-form-textbox-password" />{" "}
                              OTP
                            </h4>
                            {/* <p className="text-muted font-size-14 mb-4">
                              We have sent the code verification to
                              ta***l.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <a href="#" className="editicon">
                                Resend OTP
                              </a>
                            </p>{" "} */}
                            {/* This is to be shown once the OTP is sent */}
                            <p className="text-muted font-size-14 mb-4">
                              If you want to register an email ID with your
                              account, please enter it below. This is an{" "}
                              <b>optional</b> step - if you do not want to
                              register an email ID, please click the 'Next'
                              button below.
                            </p>{" "}
                            <div className="row justify-content-center">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <div className="input-group bg-light">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter email ID"
                                      aria-describedby="button-addon2"
                                    />
                                    <button
                                      className="btn btn-success"
                                      type="button"
                                      id="button-addon2"
                                    >
                                      Send OTP
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="input-group bg-light">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter OTP received on email"
                                    aria-describedby="button-addon2"
                                    disabled
                                  />
                                  <button
                                    className="btn btn-success"
                                    type="button"
                                    id="button-addon2"
                                    disabled
                                  >
                                    Verify
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="btn btn-primary">Finish</button>
                      </div>
                    </section>
                  </>
                )}
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewCustomer;
