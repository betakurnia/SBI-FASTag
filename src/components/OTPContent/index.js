import React from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const OTPContent = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="col-xl-3">
      <div className="auth-full-page-content p-md-5 p-4">
        <div className="w-100">
          <div className="d-flex flex-column h-100">
            <div className="mb-4 mb-md-5">
              <Link to="/" className="d-block auth-logo">
                <img
                  src="assets/images/logo.png"
                  alt=""
                  height={40}
                  className="auth-logo-dark"
                />
                <img
                  src="assets/images/logo.png"
                  alt=""
                  height={18}
                  className="auth-logo-light"
                />
              </Link>
            </div>
            <div className="my-auto">
              <div className="text-center otp">
                <div className="avatar-md mx-auto">
                  <div className="avatar-title rounded-circle bg-light">
                    <i className="mdi mdi-form-textbox-password h1 mb-0 text-primary" />
                  </div>
                </div>
                <div className="p-2 mt-4">
                  <h4>Verify OTP</h4>
                  <p className="mb-4">
                    Please enter the 4 digit code sent to <br />
                    <span className="font-weight-semibold">+919****5575</span>
                  </p>
                  <form>
                    <div className="height-100 d-flex justify-content-center align-items-center">
                      <div className="position-relative">
                        <div className="p-2 text-center">
                          <div
                            id="otp"
                            className="inputs d-flex flex-row justify-content-center mt-2"
                          >
                            <input
                              className="m-2 text-center form-control rounded"
                              type="text"
                              id="first"
                              maxLength={1}
                            />
                            <input
                              className="m-2 text-center form-control rounded"
                              type="text"
                              id="second"
                              maxLength={1}
                            />
                            <input
                              className="m-2 text-center form-control rounded"
                              type="text"
                              id="third"
                              maxLength={1}
                            />
                            <input
                              className="m-2 text-center form-control rounded"
                              type="text"
                              id="fourth"
                              maxLength={1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA}
                    onChange={onChange}
                  />
                  <div className="mt-4 d-grid">
                    <Link
                      to="/"
                      className="btn btn-primary waves-effect waves-light"
                      type="submit"
                    >
                      Verify OTP
                    </Link>
                  </div>
                  <div className="mt-5 text-center">
                    <p>
                      Didn't receive the code?{" "}
                      <a
                        href="#"
                        className="fw-medium text-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#resendOTP"
                      >
                        Resend
                      </a>{" "}
                    </p>
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

export default OTPContent;
