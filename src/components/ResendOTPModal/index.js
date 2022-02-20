import React from "react";

const ResendOTPModal = () => {
  return (
    <div
      className="modal fade bs-example-modal-center"
      id="resendOTP"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Re-send OTP</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <center>
                  <h4 className="text-primary">
                    <i className="mdi mdi-cube-send" />
                    <br />
                    Re-Send OTP
                  </h4>
                  <p className="text-muted font-size-14 mb-4">
                    Please choose where you would like us to re-send your OTP
                  </p>
                  <div>
                    <button type="button" className="btn btn-primary">
                      Registered Mobile Number
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary">
                      Registered Email ID
                    </button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResendOTPModal;
