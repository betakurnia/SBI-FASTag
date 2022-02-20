import React from "react";

const VechileNumberModal = () => {
  return (
    <div
      className="modal fade bs-example-modal-center_a"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Vehicle number MH02CL555</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="mb-3 row">
              <label
                htmlFor="example-text-input"
                className="col-md-4 col-form-label"
              >
                Vehicle description
              </label>
              <div className="col-md-8 my-auto">
                <input
                  className="form-control"
                  type="text"
                  defaultValue="Dad's car"
                  id="example-text-input"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="example-text-input"
                className="col-md-4 col-form-label"
              >
                Vehicle class
              </label>
              <div className="col-md-8 my-auto">Car / Jeep / Van</div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="example-text-input"
                className="col-md-4 col-form-label"
              >
                Tag ID
              </label>
              <div className="col-md-8 my-auto">3416496216849816846841</div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="example-text-input"
                className="col-md-4 col-form-label"
              >
                Engine number
              </label>
              <div className="col-md-8 my-auto">CHJOIDWH238480142Y821</div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="example-text-input"
                className="col-md-4 col-form-label"
              >
                Chasis number
              </label>
              <div className="col-md-8 my-auto">JCIOJIEP93475048269</div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="example-text-input"
                className="col-md-4 col-form-label"
              >
                Make
              </label>
              <div className="col-md-8 my-auto">Lamborghini</div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="example-text-input"
                className="col-md-4 col-form-label"
              >
                Model
              </label>
              <div className="col-md-8 my-auto">Huracan V10</div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="example-text-input"
                className="col-md-4 col-form-label"
              >
                Tag status
              </label>
              <div className="col-md-8 my-auto">
                <span className="badge rounded-pill bg-info" key="t-new">
                  Active
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-success btn-rounded waves-effect waves-light"
              >
                Save
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

export default VechileNumberModal;
