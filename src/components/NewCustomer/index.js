import React, { useState } from "react";
import Steps from "rc-steps";
import "rc-steps/assets/index.css";

const ExistingCostumer = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (current) => {
    setCurrent(current);
  };

  const containerStyle = {
    border: "1px solid rgb(235, 237, 240)",
    marginBottom: 24,
  };

  return (
    <div className="tab-pane" id="newCust" role="tabpanel">
      <div className="card">
        <div className="card-body">
          <div className="hg76_56">
            <h4 className="card-title mb-4">New Customer</h4>
            <p className="card-title-desc" style={{ marginTop: "-12px" }}>
              You need to enter your details below before you can proceed
              further
            </p>
            <Steps
              style={containerStyle}
              type="navigation"
              current={current}
              onChange={onChange}
            >
              <Steps.Step title="Personal Details " />
              <Steps.Step title="OTP Verification" />
              <Steps.Step title="PAN Verification" />
            </Steps>
            <div className="kyc-verify-wizard">
              {current === 0 && (
                <section>
                  <form>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">First name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter first name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Middle name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter middle name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter last name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Date of Birth</label>
                          <div className="input-group" id="datepicker1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="DOB"
                              data-date-format="dd-mm-yyyy"
                              data-date-container="#datepicker1"
                              data-provide="datepicker"
                            />
                            <span className="input-group-text">
                              <i className="mdi mdi-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Gender</label>
                          <select className="ui fluid search dropdown">
                            <option value>Select gender</option>
                            <option value="LA">Male</option>
                            <option value="SD">Female</option>
                            <option value="SD">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Email ID</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email ID"
                          />
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
                          <i className="mdi mdi-form-textbox-password" />
                          OTP
                        </h4>
                        <p className="text-muted font-size-14 mb-4">
                          We have sent the code verification to
                          ta***l.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
              )}
              {current === 2 && (
                <section>
                  <form>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Full name as per PAN
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name as mentioned on your PAN card"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Father's name as per PAN
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter father's name as mentioned on your PAN card"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">PAN number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter PAN number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Date of Birth as per PAN
                          </label>
                          <div className="input-group" id="datepicker1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter DOB as per PAN"
                              data-date-format="dd-mm-yyyy"
                              data-date-container="#datepicker1"
                              data-provide="datepicker"
                            />
                            <span className="input-group-text">
                              <i className="mdi mdi-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label d-block">
                            Upload PAN card image
                            <small className="float-end">Max. size 2MB</small>
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

export default ExistingCostumer;
