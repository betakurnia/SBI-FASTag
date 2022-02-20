import React from "react";
import TagRechargeBanner from "../../components/TagRechargeBanner";
import DefaultLayout from "../../layouts/DefaultLayout";

const TagRecharge = () => {
  return (
    <DefaultLayout notification>
      <div className="main-content" id="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <TagRechargeBanner />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TagRecharge;
