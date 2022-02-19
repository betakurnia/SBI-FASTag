import React, { useState } from "react";
import { Formik } from "formik";
import {useNavigate} from 'react-router-dom'
import LoginForm from "../../components/User/LoginForm";
import * as Yup from "yup";
import  {login} from "../../api/services/User"
const LoginPage = () => {
    const navigate=useNavigate()
   return (
    <Formik
        initialValues={{ phoneNumber: "", password: "" }}
        onSubmit={async(values, { setSubmitting }) => {
            // let navigate =useNavigate()
            setTimeout(() => {
                setSubmitting(false);
            }, 500);
           await  login(values).then((response)=>{
            console.log(response)
            alert("your otp is "+response.data.data.otp )
            if(response&&response.data.status===200)
            {
                navigate("/otp")
            }
           })  
            
        }}
        //********Handling validation messages yourself*******/
        // validate={values => {
        //   let errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (!EmailValidator.validate(values.email)) {
        //     errors.email = "Invalid email address";
        //   }

        //   const passwordRegex = /(?=.*[0-9])/;
        //   if (!values.password) {
        //     errors.password = "Required";
        //   } else if (values.password.length < 8) {
        //     errors.password = "Password must be 8 characters long.";
        //   } else if (!passwordRegex.test(values.password)) {
        //     errors.password = "Invalida password. Must contain one number";
        //   }

        //   return errors;
        // }}
        //********Using Yum for validation********/

        validationSchema={Yup.object().shape({
            phoneNumber: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required('A phone number is required'),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
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
                                                        <img src="assets/images/logo.png" alt="" height="18" class="auth-logo-light" />
                                                    </a>
                                                </div>
                                                <div class="my-auto">
                                                    <div>
                                                        <h5 class="text-primary">Login</h5>
                                                        <p class="text-muted">Login to your SBI FASTag account</p>
                                                    </div>
                                                    <div class="mt-4">
                                                    <form onSubmit={handleSubmit}>
          <label htmlFor="phoneNumber">mobail</label>
          <input
            name="phoneNumber"
            type="text"
            placeholder="Enter your Phone Number"
            class="form-control"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phoneNumber && touched.phoneNumber && "error"}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <div className="input-feedback" style={{color:"red"}}>{errors.phoneNumber}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            class="form-control"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback" style={{color:"red"}}>{errors.password}</div>
          )}
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

          <button type="submit" class="btn btn-primary waves-effect waves-light" disabled={isSubmitting}>
            Login
          </button>
        </form>
                                                        {/* <form class="needs-validation" onSubmit={handleSubmit} novalidate action="index.html" id="demo-form">
                                                            <div class="mb-3">
                                                                <label for="useremail" class="form-label">Mobile No.</label>
                                                                <input type="text" class="form-control" id="useremail" placeholder="Enter Mobile Number" required
                                                                    name="mobile"
                                                                    value={values.mobile}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    className={errors.mobile && touched.mobile && "error"}
                                                                />
                                                                {errors.email && touched.email && (
                                                                    <div className="input-feedback">{errors.email}</div>
                                                                )}
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
                                                                <input type="password" class="form-control" name="password"
                                                                    type="password"
                                                                    placeholder="Enter your password"
                                                                    value={values.password}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    className={errors.password && touched.password && "error"} required />
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
                                                                <a class="btn btn-primary waves-effect waves-light" type="submit" disabled={isSubmitting}>Receive OTP</a>
                                                            </div>
                                                        </form> */}
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
        }}
    </Formik>
)}
export default LoginPage;