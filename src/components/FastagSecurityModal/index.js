import React from "react";

const FastagSecurityModal = () => {
  return (
    <div
      className="modal fade bs-example-modal-center"
      id="securityBalanceInfo"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">FASTag Security Balance</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <p>
              SBI requires all users to maintain a minimum security balance for
              every FASTag registered through the account. In case the toll
              transaction carried out by the user exceeds the wallet balance,
              the amount will be deducted from this security balance.
            </p>
            <p>
              If the security balance in your account for any tag goes below the
              amount mentioned below, you will be required to recharge this
              security balance before you can use the tag anywhere else.
            </p>
            <p className="mb-0">
              The minimum security balance for each vehicle class is given below
              for reference:
            </p>
            <br />
            <div className="table-responsive">
              <table className="table table-bordered mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Vehicle Class</th>
                    <th>Minimum Security Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Car / Jeep / Van / Tata Ace and similar mini LCVs</td>
                    <td>
                      <center>
                        <i className="bx bx-rupee" />
                        150
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>Light commercial vehicles</td>
                    <td>
                      <center>
                        <i className="bx bx-rupee" />
                        150
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>Three axle commercial vehicles</td>
                    <td>
                      <center>
                        <i className="bx bx-rupee" />
                        150
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>Bus / Truck</td>
                    <td>
                      <center>
                        <i className="bx bx-rupee" />
                        150
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>4 to 6 axle vehicles</td>
                    <td>
                      <center>
                        <i className="bx bx-rupee" />
                        150
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>Vehicles with 7 or more axles</td>
                    <td>
                      <center>
                        <i className="bx bx-rupee" />
                        150
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Heavy Construction Machinery (HCM)/Earth Moving Equipment
                      (EME)
                    </td>
                    <td>
                      <center>
                        <i className="bx bx-rupee" />
                        150
                      </center>
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

export default FastagSecurityModal;
