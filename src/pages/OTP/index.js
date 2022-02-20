import React from "react";
import LoginBackground from "../../components/LoginBackground";
import OTPContent from "../../components/OTPContent";
import ResendOTPModal from "../../components/ResendOTPModal";

const OTP = () => {
  return (
    <>
      <div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <LoginBackground />
            <OTPContent />
          </div>
        </div>
      </div>
      <ResendOTPModal />
    </>
  );
};

export default OTP;
