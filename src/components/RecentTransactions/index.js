import React from "react";
import { Link } from "react-router-dom";

const RecentTransaction = () => {
  return (
    <div className="col-lg-6 padding-right-0">
      <div className="card">
        <div className="custom45">
          <Link to="/buy-fastag" className="btn-sbi-1">
            Buy FASTag
          </Link>
          <Link to="/registered-tags" className="btn-sbi-2">
            Registered Tags
          </Link>
        </div>
      </div>
      <div className="card trns-1">
        <div className="card-body">
          <div className="media-body d-flex justify-content-between">
            <div>
              <h4 className="card-title mb-4">Recent transactions</h4>
            </div>
            <div>
              <Link to="/transactions">View all</Link>
            </div>
          </div>
          <div className="fixed_height" id="trns1">
            <div className="media mb-4">
              <div className="me-3">
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/toll.png"
                />
              </div>
              <div className="media-body d-flex justify-content-between align-items-md-center">
                <div>
                  <h5 className=" mb-1">
                    Toll fare payment at Srinagar Toll Plaza
                  </h5>
                  <p className="text-muted mb-1">
                    11:43 AM on 11th January 2022
                  </p>
                </div>
                <div className="money-spent">
                  - <i className="bx bx-rupee" />
                  70.00
                </div>
              </div>
            </div>
            <div className="media mb-4">
              <div className="me-3">
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/parking.png"
                />
              </div>
              <div className="media-body d-flex justify-content-between align-items-md-center">
                <div>
                  <h5 className=" mb-1">
                    Parking fare payment at SBI, Nariman Point
                  </h5>
                  <p className="text-muted mb-1">
                    12:00 PM on 11th January 2022
                  </p>
                </div>
                <div className="money-spent">
                  - <i className="bx bx-rupee" />
                  50.00
                </div>
              </div>
            </div>
            <div className="media mb-4">
              <div className="me-3">
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src="assets/images/icons/transactions/money.png"
                />
              </div>
              <div className="media-body d-flex justify-content-between align-items-md-center">
                <div>
                  <h5 className=" mb-1">Wallet recharged</h5>
                  <p className="text-muted mb-1">
                    5:33 PM on 10th January 2022
                  </p>
                </div>
                <div className="money-added">
                  + <i className="bx bx-rupee" />
                  500.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
