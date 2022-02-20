import React from "react";

const ActiveFastTagModal = () => {
  return (
    <div
      className="modal fade bs-example-modal-center_a"
      id="activateTagModal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Activate FASTag</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            To activate your tag, enter the barcode number of the tag dispatched
            to you. The barcode number can be found on your tag as below.
            <br />
            <br />
            <center>
              <img src="assets/images/fastag-barcode.jpg" />
            </center>
            <br />
            <div className="mb-3 row">
              <label
                htmlFor="example-text-input"
                className="col-md-4 col-form-label"
              >
                Barcode number
              </label>
              <div className="col-md-8 my-auto">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter barcode number of your FASTag"
                  id="example-text-input"
                />
              </div>
            </div>
            <div className="d-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-success btn-rounded waves-effect waves-light"
              >
                Activate
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-danger btn-rounded waves-effect waves-light"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveFastTagModal;
