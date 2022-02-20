import React from "react";
import { Link } from "react-router-dom";
import { Select } from "semantic-ui-react";

const TransactionsTable = () => {
  return (
    <div className="wrapper rounded">
      <div className="media-body">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div>
              <h5 className="text-truncate">Transactions</h5>
              <p className="text-muted">Welcome to your transactions</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <div className="mb-3">
                <label className="form-label">Vehicle</label>
                <Select
                  placeholder="Filter transactions by vehicle number"
                  options={[
                    {
                      key: "1",
                      text: "Vechile number 1",
                      value: "number1",
                    },
                    {
                      key: "2",
                      text: "Vechile number 2",
                      value: "number2",
                    },
                    {
                      key: "3",
                      text: "Vechile number 3",
                      value: "number3",
                    },
                    {
                      key: "4",
                      text: "Vechile number 4",
                      value: "number4",
                    },
                    {
                      key: "5",
                      text: "Vechile number 5",
                      value: "number5",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <div className="mb-3">
                <label htmlFor="basicpill-phoneno-input">Start Date</label>
                <div className="input-group" id="datepicker1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="DD-MM-YYYY"
                    data-date-format="dd-mm-yyyy"
                    data-date-container="#datepicker1"
                    data-provide="datepicker"
                  />
                  <span className="input-group-text">
                    <i className="mdi mdi-calendar" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <div className="mb-3">
                <label htmlFor="basicpill-phoneno-input">End Date</label>
                <div className="input-group" id="datepicker1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="DD-MM-YYYY"
                    data-date-format="dd-mm-yyyy"
                    data-date-container="#datepicker1"
                    data-provide="datepicker"
                  />
                  <span className="input-group-text">
                    <i className="mdi mdi-calendar" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2 pt-2">
        <div className="col-md-6" id="income">
          <div className="d-flex  align-items-center">
            <p className="bx bx-up-arrow-alt" />
            <p className="text mx-3">Total spent</p>
            <p className=" ml-4 money">
              <i className="bx bx-rupee" />
              9,758.23
            </p>
          </div>
          <div className="d-flex  align-items-center">
            <div className="bx bx-down-arrow-alt" />
            <div className="text mx-3">Total recharged</div>
            <div className=" ml-4 money">
              <i className="bx bx-rupee" />
              961.23
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="mt-2 float-end"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-success excel waves-effect waves-light btn-rounded"
            >
              <i className="mdi mdi-file-excel" /> Excel
            </button>
            <button
              type="button"
              className="btn btn-danger pdf waves-effect waves-light btn-rounded"
            >
              <i className="bx bxs-file-pdf" /> PDF
            </button>
          </div>
        </div>
      </div>
      <div className="table-responsive mt-3 trans">
        <table className="table mb-0s">
          <thead className="table-light">
            <tr>
              <th scope="col">Transaction location</th>
              <th scope="col">Transaction type</th>
              <th scope="col">Vehicle number</th>
              <th scope="col">Transaction time</th>
              <th scope="col" className="text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                {" "}
                <Link to="/transaction-details"> Srinagar toll plaza </Link>
              </td>
              <td>
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/toll.png"
                />{" "}
                Toll fare payment
              </td>
              <td>HR26DR6778</td>
              <td>12 Jul 2020, 12:30 PM</td>
              <td className="money-spent">
                - <i className="bx bx-rupee" />
                50.00
              </td>
            </tr>
            <tr>
              <td scope="row">
                {" "}
                <Link to="/transaction-detailsl"> SBI, Nariman Point </Link>
              </td>
              <td>
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/parking.png"
                />{" "}
                Parking fee payment
              </td>
              <td>HR26DR6778</td>
              <td>12 Jul 2020, 12:30 PM</td>
              <td className="money-spent">
                - <i className="bx bx-rupee" />
                50.00
              </td>
            </tr>
            <tr>
              <td scope="row">
                {" "}
                <Link to="/transaction-details"> SBI customer portal </Link>
              </td>
              <td>
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/money.png"
                />{" "}
                Wallet recharge
              </td>
              <td>-</td>
              <td>12 Jul 2020, 12:30 PM</td>
              <td className="money-added">
                + <i className="bx bx-rupee" />
                500.00
              </td>
            </tr>
            <tr>
              <td scope="row">
                {" "}
                <Link to="/transaction-details"> SBI mobile app </Link>
              </td>
              <td>
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/money.png"
                />{" "}
                Wallet recharge
              </td>
              <td>-</td>
              <td>12 Jul 2020, 12:30 PM</td>
              <td className="money-added">
                + <i className="bx bx-rupee" />
                50.00
              </td>
            </tr>
            <tr>
              <td scope="row">
                {" "}
                <Link to="/transaction-details"> SBI Yono </Link>
              </td>
              <td>
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/money.png"
                />{" "}
                Wallet recharge
              </td>
              <td>-</td>
              <td>12 Jul 2020, 12:30 PM</td>
              <td className="money-added">
                + <i className="bx bx-rupee" />
                50.00
              </td>
            </tr>
            <tr>
              <td scope="row">
                {" "}
                <Link to="/transaction-details"> Srinagar toll plaza </Link>
              </td>
              <td>
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/toll.png"
                />{" "}
                Toll fare payment
              </td>
              <td>HR26DR6778</td>
              <td>12 Jul 2020, 12:30 PM</td>
              <td className="money-spent">
                - <i className="bx bx-rupee" />
                50.00
              </td>
            </tr>
            <tr>
              <td scope="row">
                {" "}
                <Link to="/transaction-details"> SBI, Nariman Point </Link>
              </td>
              <td>
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/parking.png"
                />{" "}
                Parking fee payment
              </td>
              <td>HR26DR6778</td>
              <td>12 Jul 2020, 12:30 PM</td>
              <td className="money-spent">
                - <i className="bx bx-rupee" />
                50.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center results">
        <span className="pl-md-3">
          Showing<b className> 1-7 0f 200 </b> trasactions
        </span>
        <div className="table_btn">
          <ul className="pagination">
            <li className="paginate_button page-item ">
              <a href="javascript:void(0):;" className="page-link">
                <i className="mdi mdi-chevron-left" />
              </a>
            </li>
            <li className="paginate_button page-item ">
              <a href="javascript:void(0):;" className="page-link">
                1
              </a>
            </li>
            <li className="paginate_button page-item active">
              <a href="javascript:void(0):;" className="page-link">
                2
              </a>
            </li>
            <li className="paginate_button page-item ">
              <a href="javascript:void(0):;" className="page-link">
                3
              </a>
            </li>
            <li className="paginate_button page-item ">
              <a href="javascript:void(0):;" className="page-link">
                4
              </a>
            </li>
            <li className="paginate_button page-item ">
              <a href="javascript:void(0):;" className="page-link">
                5
              </a>
            </li>
            <li className="paginate_button page-item ">
              <a href="javascript:void(0):;" className="page-link">
                <i className="mdi mdi-chevron-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
