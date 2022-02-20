import React from "react";

const TagRechargeBanner = () => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <div>
                  <h5 className="text-truncate">Tag Recharge </h5>
                </div>
                <div className="text-end">
                  <div className="currency">
                    <span className="rs"> ₹ </span>{" "}
                    <span className="amt"> 500.00 </span>
                  </div>
                  <div className="avbalance">
                    <span>Available Balance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group">
                <label className>Enter Amount</label>
                <div className="input-group">
                  <div className="input-group-text">₹</div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Enter Amount"
                  />
                </div>
                <span className="text-muted font-size-10">Min amount : 25</span>
              </div>
            </div>
            <div className="col-lg-4">
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
                      500
                    </button>
                    <button
                      type="button"
                      className="btn btn-light waves-effect"
                      style={{ marginRight: "0.25rem" }}
                    >
                      1000
                    </button>
                    <button
                      type="button"
                      className="btn btn-light waves-effect"
                      style={{ marginRight: "0.25rem" }}
                    >
                      1500
                    </button>
                    <button
                      type="button"
                      className="btn btn-light waves-effect"
                    >
                      2000
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mt-4">
              <div className="form-group">
                <label className>Proceed With</label>
                <div>
                  <button type="button" className="btn btn-light btn-rounded">
                    <img src="assets/images/billdesk.svg" height={20} />
                  </button>
                  <button type="button" className="btn btn-light btn-rounded">
                    <img src="assets/images/sbipay.png" height={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagRechargeBanner;
