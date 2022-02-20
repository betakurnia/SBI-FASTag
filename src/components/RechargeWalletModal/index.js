import React from "react";

const RechargeWalletModal = () => {
  return (
    <div
      className="modal custom-modal fade bs-example-modal-lg"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Recharge FASTag wallet</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className>Enter Amount</label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <i className="bx bx-rupee" />
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Enter Amount"
                    />
                  </div>
                  <span className="text-muted font-size-10">
                    <font color="red">Minimum recharge amount: 250</font>
                  </span>
                  <br />
                  <span className="text-muted font-size-10">
                    <font color="red">Maximum recharge amount: 10,000</font>
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="mb-3">
                    <label
                      htmlFor="formrow-firstname-input"
                      className="form-label"
                    >
                      Select Amount
                    </label>
                    <div>
                      <button
                        type="button"
                        className="btn btn-light waves-effect"
                        style={{ marginRight: "0.25rem" }}
                      >
                        <i className="bx bx-rupee" /> 500
                      </button>
                      <button
                        type="button"
                        className="btn btn-light waves-effect"
                        style={{ marginRight: "0.25rem" }}
                      >
                        <i className="bx bx-rupee" /> 1000
                      </button>
                      <button
                        type="button"
                        className="btn btn-light waves-effect"
                        style={{ marginRight: "0.25rem" }}
                      >
                        <i className="bx bx-rupee" /> 1500
                      </button>
                      <button
                        type="button"
                        className="btn btn-light waves-effect"
                        style={{ marginRight: "0.25rem" }}
                      >
                        <i className="bx bx-rupee" /> 2000
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className>Proceed With</label>
                  <div>
                    <button
                      type="button"
                      className="btn btn-light"
                      style={{ marginRight: "0.25rem" }}
                    >
                      <img src="assets/images/billdesk.svg" height={20} />
                    </button>
                    <button type="button" className="btn btn-light">
                      <img src="assets/images/sbipay.png" height={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className />
                  <div>
                    <button type="button" className="btn btn-success" disabled>
                      Proceed to Payment
                    </button>{" "}
                    {/* This button to remain disabled till all the fields have been filled in */}
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
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

export default RechargeWalletModal;
