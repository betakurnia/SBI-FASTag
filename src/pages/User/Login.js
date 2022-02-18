import React from "react";
import LoginForm from "../../components/User/LoginForm";

function LoginPage() {
    const handleSubmit=(event)=>{
        console.log(event.target)
    }
  return (
    <div>
      <h1>Login</h1>
      <div>
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-xl-9">
                        <div class="auth-full-bg pt-lg-5 p-4">
                            <div class="w-100">
                                <div class="bg-overlay"></div>
                                <div class="d-flex h-100 flex-column">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="auth-full-page-content p-md-5 p-4">
                            <div class="w-100">
                                <div class="d-flex flex-column h-100">
                                    <div class="mb-4 mb-md-5">
                                        <a href="index.html" class="d-block auth-logo">
                                            <img src="assets/images/logo.png" alt="" height="40" class="auth-logo-dark" />
                                            <img src="assets/images/logo.png" alt="" height="18" class="auth-logo-light"/ >
                                        </a>
                                    </div>
                                    <div class="my-auto">
                                        <div>
                                            <h5 class="text-primary">Login</h5>
                                            <p class="text-muted">Login to your SBI FASTag account</p>
                                        </div>
                                        <div class="mt-4">
                                            <form class="needs-validation" onSubmit={handleSubmit} novalidate action="index.html" id="demo-form">
                                                <div class="mb-3">
                                                    <label for="useremail" class="form-label">Mobile No.</label>
                                                    <input type="text" class="form-control" id="useremail" placeholder="Enter Mobile Number" required />
                                                    <div class="invalid-feedback">
                                                        Please Enter Mobile Number
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="media-body d-flex justify-content-between">
                                                        <div>
                                                            <label class="form-label">Password</label>
                                                        </div>
                                                        <div>
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#passwordResetModal">Reset</a>
                                                        </div>
                                                    </div>
                                                    <input type="password" class="form-control" id="useremail" placeholder="Enter Password" required />
                                                    <div class="invalid-feedback">
                                                        Please Enter Password
                                                    </div>
                                                </div>
                                                <div class="mb-3">

                                                    <div id="captcha">
                                                        <div class="controls otp">
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <div> <input class="user-text btn-common form-control" placeholder="Enter here" type="text" /></div>
                                                                <div>
                                                                    
                                                                    <button class="refresh btn btn-primary w-md waves-effect waves-light">
                                                                        <i class="mdi mdi-autorenew"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="mt-4 d-grid">
                                                    <a href="otp.html" class="btn btn-primary waves-effect waves-light" onClick={handleSubmit}>Receive OTP</a>
                                                </div>
                                            </form>
                                            <div class="mt-5 text-center">
                                                <p>Don't have an account? <a href="#" class="fw-medium text-primary" data-bs-toggle="modal" data-bs-target="#signUpModal">Sign-up now!</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;