import React from "react";

const CredentialContactForm = () => {
  return (
    <>
      <div className="col-md-6">
        <div className="mb-3">
          <div className="form-group">
            <div className="media-body d-flex justify-content-between">
              <div>
                <label>Email</label>
              </div>
              <div>
                <a href="#">Edit</a>
              </div>
            </div>
            <input
              type="text"
              placeholder
              className="form-control"
              defaultValue="talwarvidul@gmail.com"
              disabled
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-group">
            <div className="media-body d-flex justify-content-between">
              <div>
                <label>Phone Number</label>
              </div>
              <div>
                <a href="#">Edit</a>
              </div>
            </div>
            <div className="input-group">
              <div className="input-group-text">
                <img src="assets/images/in.png" className="img-fluid flag" />
                &nbsp;&nbsp;&nbsp;+91
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Enter phone number"
                defaultValue={9999060051}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 my-auto">
        <div className="mb-3">
          <div className="form-group">
            <div className="mb-3">
              <div className="media-body d-flex justify-content-between">
                <div>
                  <label>Password</label>
                </div>
                <div>
                  <a href="#">Change</a>
                </div>
              </div>
              <div>
                <input
                  type="password"
                  id="pass2"
                  className="form-control"
                  required
                  placeholder="Type your new password"
                  disabled
                />
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  className="form-control"
                  required
                  data-parsley-equalto="#pass2"
                  placeholder="Re-type password"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CredentialContactForm;
