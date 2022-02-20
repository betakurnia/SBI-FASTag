import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import ProfileAvatar from "../../components/ProfileAvatar";
import CredentialForm from "../../components/CredentialForm";
import CredentialContactForm from "../../components/CredentialContactForm";
import CredentialActions from "../../components/CredentialActions";
import UploadImageModal from "../../components/UploadImageModal";

const index = () => {
  return (
    <DefaultLayout>
      <div className="main-content" id="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <ProfileAvatar />
                      <CredentialForm />
                    </div>
                    <div className="row">
                      <CredentialContactForm />
                      <CredentialActions />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadImageModal />
    </DefaultLayout>
  );
};

export default index;
