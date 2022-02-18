import React from "react";
import LoginForm from "../../components/User/LoginForm";

function OtpPage() {
  return (
      <React.Fragment>
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
                                    <img src="assets/images/logo.png" alt="" height="40" class="auth-logo-dark" ></img>
                                    <img src="assets/images/logo.png" alt="" height="18" class="auth-logo-light" ></img>
                                </a>
                            </div>
                            <div class="my-auto">
                                <div class="text-center otp">
                                    <div class="avatar-md mx-auto">
                                        <div class="avatar-title rounded-circle bg-light">
                                            <i class="mdi mdi-form-textbox-password h1 mb-0 text-primary"></i>
                                        </div>
                                    </div>
                                    <div class="p-2 mt-4">
                                        <h4>Verify OTP</h4>
                                        <p class="mb-4">Please enter the 4 digit code sent to <br /><span class="font-weight-semibold">+919****5575</span></p>
                                        <form>
                                            <div class="height-100 d-flex justify-content-center align-items-center">
                                                <div class="position-relative">
                                                    <div class="p-2 text-center">
                                                        <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                                                            <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                                                            <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                                                            <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                                                            <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

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

                                        <div class="mt-4 d-grid">
                                            <a href="index.html" class="btn btn-primary waves-effect waves-light" type="submit">Verify OTP</a>
                                        </div>
                                        <div class="mt-5 text-center">
                                            <p>Didn't receive the code? <a href="#" class="fw-medium text-primary" data-bs-toggle="modal" data-bs-target="#resendOTP">Resend</a> </p>
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
<div class="modal fade bs-example-modal-center" id="resendOTP" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Re-send OTP</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <center>
                            <h4 class="text-primary"><i class="mdi mdi-cube-send"></i><br/>Re-Send OTP</h4>
                            <p class="text-muted font-size-14 mb-4">
                                Please choose where you would like us to re-send your OTP
                            </p>
                            <div>
                                <button type="button" class="btn btn-primary">Registered Mobile Number</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" class="btn btn-primary">Registered Email ID</button>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</React.Fragment>
  );
}

export default OtpPage;