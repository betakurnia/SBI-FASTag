import React, { useState } from "react";
import Steps from "rc-steps";
import "rc-steps/assets/index.css";

const SignUpModal = () => {
  const [current, setCurrent] = useState(0);

  const containerStyle = {
    border: "1px solid rgb(235, 237, 240)",
    marginBottom: 24,
  };

  const onChange = (current) => {
    setCurrent(current);
  };

  return (
    <div
      className="modal fade"
      id="signUpModal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign Up</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <Steps
              style={containerStyle}
              type="navigation"
              current={current}
              onChange={onChange}
            >
              <Steps.Step title="Mobile Number " />
              <Steps.Step title="OTP Verification" />
              <Steps.Step title="Set Password" />
            </Steps>
            <div className="kyc-verify-wizard">
              {current === 0 && (
                <section>
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Mobile Number</label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <img
                                src="assets/images/in.png"
                                className="img-fluid flag"
                              />
                              &nbsp;&nbsp;&nbsp;+91
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroupUsername"
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </section>
              )}
              {current === 1 && (
                <section>
                  <div className="text-center mb-4">
                    <div className="row justify-content-center">
                      <div className="col-xl-10">
                        <h4 className="text-primary">
                          <i className="mdi mdi-form-textbox-password" /> OTP
                        </h4>
                        <p className="text-muted font-size-14 mb-4">
                          We have sent the code verification to
                          +9199***51&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a href="#" className="editicon">
                            Resend OTP
                          </a>
                        </p>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="input-group bg-light">
                              <input
                                type="text"
                                className="form-control bg-transparent border-0"
                                placeholder="Enter OTP received on your phone"
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
              )}
              {current === 2 && (
                <section>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Enter your new password
                          </label>
                          <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            required
                            placeholder="Enter password"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Confirm password</label>
                          <input
                            type="password"
                            className="form-control"
                            required
                            data-parsley-equalto="#pass2"
                            placeholder="Confirm password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-primary">Finish</button>
                    </div>
                  </form>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
