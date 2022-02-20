import React from "react";
import { Select } from "semantic-ui-react";

const ProductDetailsAction = () => {
  return (
    <div className="col-xl-12">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-lg-12">
              <br />
              <div className="row">
                <div className="col-lg-3">
                  <div className="mb-3">
                    <div className="form-group">
                      <label className="fw-bold">
                        Vehicle Registration Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter vehicle number"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mb-3">
                    <div className="form-group">
                      <label className="fw-bold">Vehicle Class</label>
                      <Select
                        placeholder="Filter transactions by vehicle Class "
                        options={[
                          {
                            key: "1",
                            text: "Vechile Class 1",
                            value: "Class1",
                          },
                          {
                            key: "2",
                            text: "Vechile Class 2",
                            value: "Class2",
                          },
                          {
                            key: "3",
                            text: "Vechile Class 3",
                            value: "Class3",
                          },
                          {
                            key: "4",
                            text: "Vechile Class 4",
                            value: "Class4",
                          },
                          {
                            key: "5",
                            text: "Vechile Class 5",
                            value: "Class5",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mb-3">
                    <div className="form-group">
                      <label className="fw-bold">Vehicle VIN</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter VIN as shown on RC"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mb-3">
                    <div className="form-group">
                      <label className="fw-bold">Vehicle engine number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter engine number as shown on RC"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mb-3">
                    <label htmlFor="basicpill-vatno-input" className="d-block">
                      Front RC Picture{" "}
                      <small className="float-end my-auto">
                        Max. size: 2MB
                      </small>
                    </label>
                    <div className="input-group">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile02"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mb-3">
                    <label htmlFor="basicpill-vatno-input" className="d-block">
                      Back RC Picture{" "}
                      <small className="float-end my-auto">
                        Max. size: 2MB
                      </small>
                    </label>
                    <div className="input-group">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile02"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-2">
                  <div style={{ marginTop: "18px" }}>
                    <button type="button" className="btn btn-light btn-rounded">
                      <img src="assets/images/billdesk.svg" height={15} />
                    </button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-light btn-rounded">
                      <img src="assets/images/sbipay.png" height={20} />
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mt-2">
                  <div>
                    <button
                      type="button"
                      className="btn btn-success btn-block btn-rounded"
                    >
                      Proceed To Pay
                    </button>
                  </div>
                </div>
              </div>
              {/*End Row*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsAction;
