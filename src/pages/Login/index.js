import React from "react";
import LoginBackground from "../../components/LoginBackground";
import LoginContent from "../../components/LoginContent";
import SignUpModal from "../../components/SignUpModal";
import PasswordResetModal from "../../components/PasswordResetModal";

const Login = () => {
  return (
    <div>
      <div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <LoginBackground />
            <LoginContent />
          </div>
        </div>
      </div>
      <SignUpModal />
      <PasswordResetModal />
    </div>
  );
};

export default Login;
