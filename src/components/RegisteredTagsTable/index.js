import React from "react";

const RegisteredTagsTable = () => {
  return (
    <div>
      {" "}
      <div className="card">
        <div className="card-body">
          <div className="wrapper rounded">
            <div className="row mb-3">
              <div className="col-lg-12">
                <div className="media-body d-flex justify-content-between">
                  <div className="col-lg-4">
                    <label htmlFor="basicpill-phoneno-input">Search</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search entire fleet"
                      />
                      <span className="input-group-text">
                        <i className="mdi mdi-magnify" />
                      </span>
                    </div>
                  </div>
                  <div className="my-auto">
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
            </div>
            <div className="table-responsive mt-3 trans">
              <table className="table mb-0s">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Vehicle description</th>
                    <th scope="col">Vehicle number</th>
                    <th scope="col">Vehicle class</th>
                    <th scope="col">FASTag ID</th>
                    <th scope="col">Engine number</th>
                    <th scope="col">Chassis number</th>
                    <th scope="col">Vehicle make</th>
                    <th scope="col">Vehicle model</th>
                    <th scope="col">Tag status</th>
                    <th scope="col">Surrender tag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">Dad's car</td>
                    <td scope="row">MH02CL555</td>
                    <td>Car / Jeep / Van</td>
                    <td>3416496216849816846841</td>
                    <td>CHJOIDWH238480142Y821</td>
                    <td>JCIOJIEP93475048269</td>
                    <td>Lamborghini</td>
                    <td>Huracan V10</td>
                    <td>
                      <span className="badge rounded-pill bg-info" key="t-new">
                        Active
                      </span>
                    </td>
                    <td>
                      <font color="red">
                        <a
                          href="#"
                          className="float-end text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#verificationModal"
                        >
                          Surrender tag
                        </a>
                      </font>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">Dad's car</td>
                    <td scope="row">MH02CL555</td>
                    <td>Car / Jeep / Van</td>
                    <td>3416496216849816846841</td>
                    <td>CHJOIDWH238480142Y821</td>
                    <td>JCIOJIEP93475048269</td>
                    <td>Lamborghini</td>
                    <td>Huracan V10</td>
                    <td>
                      <span className="badge rounded-pill bg-info" key="t-new">
                        Active
                      </span>
                    </td>
                    <td>
                      <font color="red">
                        <a
                          href="#"
                          className="float-end text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#verificationModal"
                        >
                          Surrender tag
                        </a>
                      </font>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">Dad's car</td>
                    <td scope="row">MH02CL555</td>
                    <td>Car / Jeep / Van</td>
                    <td>3416496216849816846841</td>
                    <td>CHJOIDWH238480142Y821</td>
                    <td>JCIOJIEP93475048269</td>
                    <td>Lamborghini</td>
                    <td>Huracan V10</td>
                    <td>
                      <span className="badge rounded-pill bg-info" key="t-new">
                        Active
                      </span>
                    </td>
                    <td>
                      <font color="red">
                        <a
                          href="#"
                          className="float-end text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#verificationModal"
                        >
                          Surrender tag
                        </a>
                      </font>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">Dad's car</td>
                    <td scope="row">MH02CL555</td>
                    <td>Car / Jeep / Van</td>
                    <td>3416496216849816846841</td>
                    <td>CHJOIDWH238480142Y821</td>
                    <td>JCIOJIEP93475048269</td>
                    <td>Lamborghini</td>
                    <td>Huracan V10</td>
                    <td>
                      <span className="badge rounded-pill bg-info" key="t-new">
                        Active
                      </span>
                    </td>
                    <td>
                      <font color="red">
                        <a
                          href="#"
                          className="float-end text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#verificationModal"
                        >
                          Surrender tag
                        </a>
                      </font>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">Dad's car</td>
                    <td scope="row">MH02CL555</td>
                    <td>Car / Jeep / Van</td>
                    <td>3416496216849816846841</td>
                    <td>CHJOIDWH238480142Y821</td>
                    <td>JCIOJIEP93475048269</td>
                    <td>Lamborghini</td>
                    <td>Huracan V10</td>
                    <td>
                      <span className="badge rounded-pill bg-info" key="t-new">
                        Active
                      </span>
                    </td>
                    <td>
                      <font color="red">
                        <a
                          href="#"
                          className="float-end text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#verificationModal"
                        >
                          Surrender tag
                        </a>
                      </font>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between align-items-center results">
              <span className="pl-md-3">
                Showing<b className> 1-7 0f 200 </b> trasactions
              </span>
              {/*table_btn*/}
              <div className="table_btn">
                <ul className="pagination">
                  <li className="paginate_button page-item">
                    <a href="javascript:void(0):;" className="page-link">
                      <i className="mdi mdi-chevron-left" />
                    </a>
                  </li>
                  <li className="paginate_button page-item">
                    <a href="javascript:void(0):;" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="paginate_button page-item active">
                    <a href="javascript:void(0):;" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="paginate_button page-item">
                    <a href="javascript:void(0):;" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="paginate_button page-item">
                    <a href="javascript:void(0):;" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="paginate_button page-item">
                    <a href="javascript:void(0):;" className="page-link">
                      5
                    </a>
                  </li>
                  <li className="paginate_button page-item">
                    <a href="javascript:void(0):;" className="page-link">
                      <i className="mdi mdi-chevron-right" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*End table_btn*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredTagsTable;
