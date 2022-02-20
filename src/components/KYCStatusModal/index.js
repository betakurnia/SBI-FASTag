import React from "react";

const KYCStatusModal = () => {
  return (
    <div
      className="modal fade bs-example-modal-center1"
      id="limitedKycModal"
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
              Your current KYC status is <font color="red">not verified</font>,
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
                      10000
                    </td>
                    <td>
                      <i className="bx bx-rupee" />
                      120000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <p>
              As per the RBI guidelines, users are required to complete their
              KYC to be able to recharge for higher amounts. You may choose to
              complete your KYC online using any of the below methods:
            </p>
            <p></p>
            <div style={{ textAlign: "center" }}>
              <button type="button" className="btn btn-light btn-rounded">
                <img src="assets/images/aadhaar.png" height={20} />
                &nbsp;&nbsp;&nbsp;<font color="#d32832">Aadhaar</font>
              </button>
              &nbsp;&nbsp;
              <button type="button" className="btn btn-light btn-rounded">
                <img src="assets/images/digilocker.png" height={20} />
              </button>
            </div>
            <p />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCStatusModal;
