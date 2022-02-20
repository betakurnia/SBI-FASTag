import React from "react";

const UploadImageModal = () => {
  return (
    <div
      className="modal fade bs-example-modal-center show"
      id="uploadImage"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Upload Image</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            Allowed file types are .JPG, .JPEG and .PNG only. Max file size is 2
            MB.
            <br />
            <br />
            <form
              action="#"
              className="dropzone dz-clickable"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="dz-message needsclick">
                <div className="mb-3 text-center">
                  <i className="display-4 text-muted bx bxs-cloud-upload" />
                </div>
                <h6 className="text-center">
                  Drop files here or click to upload.
                </h6>
              </div>
            </form>
            <br />
            <div style={{ textAlign: "center" }}>
              <button
                className="btn btn-primary"
                style={{ marginRight: "0.5rem" }}
              >
                Upload Image
              </button>
              <button
                className="btn btn-secondary"
                type="submit"
                data-bs-dismiss="modal"
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

export default UploadImageModal;
