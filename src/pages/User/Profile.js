import React from "react";

function ProfilePage() {
    return (
            
                    <div class="page-content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-3 my-auto">
                                                    <div class="d-flex flex-column align-items-center text-center mb-3">
                                                        <img src="assets/images/users/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="150" />
                                                        <div class="mt-3">
                                                            <button class="btn btn-primary btn-rounded" data-bs-toggle="modal" data-bs-target="#uploadImage">Change Photo</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-9">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <div class="form-group">
                                                                    <label>First Name</label>
                                                                    <input type="text" placeholder="" class="form-control" value="Shashi" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <div class="form-group">
                                                                    <label>Middle Name</label>
                                                                    <input type="text" placeholder="" class="form-control" value="Bhushan" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <div class="form-group">
                                                                    <label>Last Name</label>
                                                                    <input type="text" placeholder="" class="form-control" value="Kumar" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <div class="form-group">
                                                            <div class="media-body d-flex justify-content-between">
                                                                <div>
                                                                    <label>Email</label>
                                                                </div>
                                                                <div>
                                                                    <a href="#">Edit</a>
                                                                </div>
                                                            </div>
                                                            <input type="text" placeholder="" class="form-control" value="talwarvidul@gmail.com" disabled />
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <div class="form-group">
                                                            <div class="media-body d-flex justify-content-between">
                                                                <div>
                                                                    <label>Phone Number</label>
                                                                </div>
                                                                <div>
                                                                    <a href="#">Edit</a>
                                                                </div>
                                                            </div>
                                                            <div class="input-group">
                                                                <div class="input-group-text"><img src="assets/images/in.png" class="img-fluid flag" />&nbsp;&nbsp;&nbsp;+91</div>
                                                                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Enter phone number" value="9999060051" disabled />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 my-auto">
                                                    <div class="mb-3">
                                                        <div class="form-group">
                                                            <div class="mb-3">
                                                                <div class="media-body d-flex justify-content-between">
                                                                    <div>
                                                                        <label>Password</label>
                                                                    </div>
                                                                    <div>
                                                                        <a href="#">Change</a>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <input type="password" id="pass2" class="form-control" required="" placeholder="Type your new password" disabled />
                                                                </div>
                                                                <div class="mt-2">
                                                                    <input type="password" class="form-control" required="" data-parsley-equalto="#pass2" placeholder="Re-type password" disabled />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-center">
                                                    <div class="mb-3">
                                                        <div class="form-group">
                                                            <br />
                                                                <button type="button" class="btn btn-primary btn-rounded">Save Changes</button>&nbsp;&nbsp;
                                                <button type="button" class="btn btn-danger btn-rounded">Cancel</button>
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
           
  )
}

export default ProfilePage;