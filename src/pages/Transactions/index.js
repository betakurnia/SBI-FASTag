import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import TransactionsTable from "../../components/TransactionsTable";

const Transactions = () => {
  return (
    <DefaultLayout>
      <div className="main-content" id="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Transaction History</h4>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <TransactionsTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Transactions;
