import React from "react";

const KYCModal = () => {
  return (
    <div
      className="modal fade bs-example-modal-center1"
      id="fullKycModal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> KYC Status</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <p>
              Your current KYC status is <font color="green">verified</font>,
              and your wallet usage limits are as below:
            </p>
            <div className="table-responsive">
              <table
                className="table table-bordered mb-0"
                style={{ textAlign: "center" }}
              >
                <thead className="table-light">
                  <tr>
                    <th>Monthly Limit</th>
                    <th>Yearly Limit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i className="bx bx-rupee" />
                      200000
                    </td>
                    <td>
                      <i className="bx bx-rupee" />
                      2400000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCModal;
