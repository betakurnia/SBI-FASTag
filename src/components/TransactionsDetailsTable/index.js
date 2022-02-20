import React from "react";

const TransactionsDetailsTable = () => {
  return (
    <div className="col-xl-8">
      <div className="row list56">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h4>Plaza Name</h4>
          <p>Srinagar toll plaza</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h4>RRN</h4>
          <p>231584874381774</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h4>Transaction Time</h4>
          <p>01 January 2022, 12:33:34 PM</p>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="card-title">
          <span>
            <font style={{ fontSize: "small" }} size={-1}>
              Complaints Summary
            </font>
          </span>
          <span className="float-end">
            <button
              className="btn btn-danger btn-rounded"
              data-bs-toggle="modal"
              data-bs-target=".bs-example-modal-center"
            >
              <i className="mdi mdi-flag" /> Report An Issue
            </button>
          </span>
        </h4>
        <p className="card-title-desc">
          Summary of all complaints reported for this transaction
        </p>
        <div className="table-responsive">
          <table className="table table-bordered" cellSpacing={0} width="100%">
            <thead className="table-light">
              <tr>
                <th>S. No.</th>
                <th>Raised date</th>
                <th>Reported by</th>
                <th>Comments</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>01 January 2022</td>
                <td>Customer</td>
                <td>
                  My return trip discount was not applied, attachment uploaded.
                </td>
                <td>Money refunded</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsDetailsTable;
