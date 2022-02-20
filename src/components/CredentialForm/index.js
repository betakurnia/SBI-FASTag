import React from "react";

const CredentialForm = () => {
  return (
    <di className="col-lg-9">
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder
                className="form-control"
                defaultValue="Shashi"
              />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <div className="form-group">
              <label>Middle Name</label>
              <input
                type="text"
                placeholder
                className="form-control"
                defaultValue="Bhushan"
              />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder
                className="form-control"
                defaultValue="Kumar"
              />
            </div>
          </div>
        </div>
      </div>
    </di>
  );
};

export default CredentialForm;
