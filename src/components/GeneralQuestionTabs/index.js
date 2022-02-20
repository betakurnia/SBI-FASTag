import React from "react";

const GeneralQuestionTab = () => {
  return (
    <div className="col-lg-2">
      <div
        className="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          className="nav-link active"
          id="v-pills-gen-ques-tab"
          data-bs-toggle="pill"
          href="#v-pills-gen-ques"
          role="tab"
          aria-controls="v-pills-gen-ques"
          aria-selected="true"
        >
          <i className="bx bx-question-mark d-block check-nav-icon mt-4 mb-2" />
          <p className="fw-bold mb-4">General Questions</p>
        </a>
        <a
          className="nav-link"
          id="v-pills-support-tab"
          data-bs-toggle="pill"
          href="#v-pills-support"
          role="tab"
          aria-controls="v-pills-support"
          aria-selected="false"
        >
          <i className="bx bx-support d-block check-nav-icon mt-4 mb-2" />
          <p className="fw-bold mb-4">Support</p>
        </a>
      </div>
    </div>
  );
};

export default GeneralQuestionTab;
