import React from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const LoginContent = () => {
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
              <div>
                <h5 className="text-primary">Login</h5>
                <p className="text-muted">Login to your SBI FASTag account</p>
              </div>
              <div className="mt-4">
                <form
                  className="needs-validation"
                  noValidate
                  action="index.html"
                  id="demo-form"
                >
                  <div className="mb-3">
                    <label htmlFor="useremail" className="form-label">
                      Mobile No.
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="useremail"
                      placeholder="Enter Mobile Number"
                      required
                    />
                    <div className="invalid-feedback">
                      Please Enter Mobile Number
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="media-body d-flex justify-content-between">
                      <div>
                        <label className="form-label">Password</label>
                      </div>
                      <div>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#passwordResetModal"
                        >
                          Reset
                        </a>
                      </div>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="useremail"
                      placeholder="Enter Password"
                      required
                    />
                    <div className="invalid-feedback">
                      Please Enter Password
                    </div>
                  </div>
                  <div className="mb-0">
                    <ReCAPTCHA
                      sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-4 d-grid">
                    <Link
                      to="/"
                      className="btn btn-primary waves-effect waves-light"
                      type="submit"
                    >
                      Receive OTP
                    </Link>
                  </div>
                </form>
                <div className="mt-5 text-center">
                  <p>
                    Don't have an account?{" "}
                    <a
                      href="#"
                      className="fw-medium text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#signUpModal"
                    >
                      Sign-up now!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
