import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import TransactionsDetailsTable from "../../components/TransactionsDetailsTable";
import ReportAnIssueModal from "../../components/ReportAnIssueModal";

const TransactionDetails = () => {
  return (
    <DefaultLayout>
      <div className="main-content" id="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Transaction Summary</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h4 className="card-title">TRANSACTION DETAILS</h4>
                        <p className="mb-0 p-color">
                          Particulars of the transaction
                        </p>
                      </div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-info btn-rounded">
                          <i className="fa fa-print" />
                          &nbsp;&nbsp;Print
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-4">
                        <img
                          src="assets/images/buyfastag.jpg"
                          className="img-fluid"
                        />
                      </div>
                      <TransactionsDetailsTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReportAnIssueModal />
      </div>
    </DefaultLayout>
  );
};

export default TransactionDetails;
