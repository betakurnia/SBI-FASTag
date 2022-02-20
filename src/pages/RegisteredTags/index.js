import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import RegisteredTagsImgs from "../../components/RegisteredTagsImgs";
import RegisteredTagsTable from "../../components/RegisteredTagsTable";
import VechileNumberModal from "../../components/VechileNumberModal";
import ActiveFastTagModal from "../../components/ActiveFastTagModal";
import VerificationModal from "../../components/VerificationModal";

const RegisteredTags = () => {
  return (
    <DefaultLayout>
      <div>
        <div className="main-content" id="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <RegisteredTagsImgs />
              <RegisteredTagsTable />
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Designed &amp; developed by Comvision India Pvt. Ltd.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <VechileNumberModal />
        <ActiveFastTagModal />
        <VerificationModal />
        <a href="#" className="editicon"></a>
      </div>
    </DefaultLayout>
  );
};

export default RegisteredTags;
