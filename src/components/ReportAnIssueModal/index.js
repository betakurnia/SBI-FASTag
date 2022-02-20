import React from "react";

const ReportAnIssueModal = () => {
  return (
    <div
      className="modal fade bs-example-modal-center"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="myLargeModalLabel">
              Report An Issue
            </h5>
            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-xl-12">
                <div className>
                  {/*<h4 class="card-title mb-4">Record Cashup</h4>*/}
                  <div>
                    {/* Seller Details */}
                    <section>
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label>Reason</label>
                              <input
                                type="text"
                                className="form-control"
                                id="basicpill-email-input"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label>Description</label>
                              <textarea
                                id="basicpill-address-input"
                                className="form-control"
                                rows={3}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label htmlFor="basicpill-vatno-input">
                                Attachment
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
                          <div className="col-lg-12">
                            <div className="text-center">
                              <button
                                type="button"
                                className="btn btn-success btn-rounded"
                              >
                                Submit{" "}
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger btn-rounded"
                              >
                                Cancel{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportAnIssueModal;
