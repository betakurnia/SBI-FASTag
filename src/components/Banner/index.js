import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="card no-graph">
      <div className="card-body" id="blue">
        <div className="d-flex mb-4 align-items-center justify-content-between">
          <div>
            {" "}
            <h4 className="card-title mb56 font-weight-400">
              Hi, Shashi Bhushan Kumar!
            </h4>{" "}
          </div>
          <div>
            <button
              className="btn btn-secondary dropdown-toggle no-background show"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#limitedKycModal"
            >
              <font size={-1}>
                <i className="dripicons-warning" />
              </font>
              &nbsp;Account not verified
            </button>
          </div>
          <div className="d-none">
            <button
              className="btn btn-secondary dropdown-toggle no-background show"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#fullKycModal"
            >
              Account verified&nbsp;
              <i className="mdi mdi-check-decagram" />
            </button>
          </div>
        </div>
        <div className="row ma56">
          <div className="col-lg-3">
            <div className>
              <div className="mb-4">
                <h1>
                  <sup>
                    <i className="bx bx-rupee" />
                  </sup>
                  3,33,087<sup>.00</sup>
                </h1>
                <div>Current balance</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className>
              <div className="mb-4">
                <h1>
                  <sup>
                    <i className="bx bx-rupee" />
                  </sup>
                  30,089<sup>.00</sup>
                </h1>
                <div>
                  Security balance{" "}
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#securityBalanceInfo"
                  >
                    <font size={-1}>
                      <i className="mdi mdi-information-outline text-white" />
                    </font>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className>
              <div className="mb-4">
                <h1>
                  <sup>
                    <i className="bx bx-rupee" />
                  </sup>
                  30,089<sup>.00</sup>
                </h1>
                <div>Total spent</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="button-sbi">
              <Link
                to="tag-recharge"
                className="btn btn-sbi"
                data-bs-toggle="modal"
                data-bs-target=".bs-example-modal-lg"
              >
                Tag Recharge <i className="mdi mdi-bank-plus" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
