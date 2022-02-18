import React from "react";

function WelcomePage() {
  return (
    <div class="page-content home">
                    <div class="container-fluid">
                        <div class="row custom_graph" id="custom_graph">
                            <div class="col-xl-12 no-padding">
                                <div class="card no-graph">
                                    <div class="card-body" id="blue">
                                        <div class="d-flex mb-4 align-items-center justify-content-between">
                                            <div> <h4 class="card-title mb56 font-weight-400">Hi, Shashi Bhushan Kumar!</h4></div>
                                            <div>
                                                <button class="btn btn-secondary dropdown-toggle no-background show" type="button" data-bs-toggle="modal" data-bs-target="#limitedKycModal">
                                                    <font size="-1"><i class="dripicons-warning"></i></font>&nbsp;Account not verified
                                                </button>
                                            </div>
                                          
                                        </div>
                                        <div class="row ma56">
                                            <div class="col-lg-3">
                                                <div class="">
                                                    <div class="mb-4">
                                                        <h1><sup><i class="bx bx-rupee"></i></sup>3,33,087<sup>.00</sup></h1> 
                                                        <div>Current balance</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="">
                                                    <div class="mb-4">
                                                        <h1><sup><i class="bx bx-rupee"></i></sup>30,089<sup>.00</sup></h1> 
                                                        <div>Security balance <a href="#" data-bs-toggle="modal" data-bs-target="#securityBalanceInfo"><font size="-1"><i class="mdi mdi-information-outline text-white"></i></font></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="">
                                                    <div class="mb-4">
                                                        <h1><sup><i class="bx bx-rupee"></i></sup>30,089<sup>.00</sup></h1>
                                                        <div>Total spent</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="button-sbi">
                                                    <a href="tag-recharge.html" class="btn btn-sbi" data-bs-toggle="modal" data-bs-target=".bs-example-modal-lg">Tag Recharge <i class="mdi mdi-bank-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-lg-12">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 padding-right-0">
                                        <div class="card">
                                            <div class="custom45">
                                                <a href="buy-fastag.html" class="btn-sbi-1">Buy FASTag</a>

                                                <a href="registered-tags.html" class="btn-sbi-2">Registered Tags</a>
                                            </div>
                                        </div>
                                        <div class="card trns-1">
                                            <div class="card-body">
                                                <div class="media-body d-flex justify-content-between">
                                                    <div>
                                                        <h4 class="card-title mb-4">Recent transactions</h4>
                                                    </div>
                                                    <div>
                                                        <a href="transactions.html">View all</a>
                                                    </div>
                                                </div>
                                                <div class="fixed_height" id="trns1">
                                                    <div class="media mb-4">
                                                        <div class="me-3">
                                                            <img class="media-object rounded-circle avatar-xs" alt="" src="assets/images/icons/transactions/toll.png" />
                                                        </div>
                                                        <div class="media-body d-flex justify-content-between align-items-md-center">
                                                            <div>
                                                                <h5 class=" mb-1">Toll fare payment at Srinagar Toll Plaza</h5>
                                                                <p class="text-muted mb-1">
                                                                    11:43 AM on 11th January 2022
                                                                </p>
                                                            </div>
                                                            <div class="money-spent">
                                                                - <i class="bx bx-rupee"></i>70.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="media mb-4">
                                                        <div class="me-3">
                                                            <img class="media-object rounded-circle avatar-xs" alt="" src="assets/images/icons/transactions/parking.png" />
                                                        </div>
                                                        <div class="media-body d-flex justify-content-between align-items-md-center">
                                                            <div>
                                                                <h5 class=" mb-1">Parking fare payment at SBI, Nariman Point</h5>
                                                                <p class="text-muted mb-1">
                                                                    12:00 PM on 11th January 2022
                                                                </p>
                                                            </div>
                                                            <div class="money-spent">
                                                                - <i class="bx bx-rupee"></i>50.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="media mb-4">
                                                        <div class="me-3">
                                                            <img class="media-object rounded-circle avatar-xs" alt="" src="assets/images/icons/transactions/money.png" />
                                                        </div>
                                                        <div class="media-body d-flex justify-content-between align-items-md-center">
                                                            <div>
                                                                <h5 class=" mb-1">Wallet recharged</h5>
                                                                <p class="text-muted mb-1">
                                                                    5:33 PM on 10th January 2022
                                                                </p>
                                                            </div>
                                                            <div class="money-added">
                                                                + <i class="bx bx-rupee"></i>500.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 padding-left-0">
                                        <div class="card trns-2 graphD">
                                            <div class="card-body">
                                                <h4 class="card-title mb-4">Expenditure Trends </h4>
                                                <div class="fixed_height" id="trns2">
                                                    
                                                    <div class="row mb-5">
                                                        <div class="col-6">
                                                            <div>
                                                                <h5>January 2022</h5>
                                                                <p class="text-muted text-truncate mb-0"><i class="bx bx-rupee"></i>95,025.39</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div>
                                                                <div id="area-sparkline-chart-1" class="apex-charts"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row  mb-5">
                                                        <div class="col-6">
                                                            <div>
                                                                <h5>December 2021</h5>
                                                                <p class="text-muted text-truncate mb-0"><i class="bx bx-rupee"></i>95,025.39</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div>
                                                                <div id="area-sparkline-chart-2" class="apex-charts"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row  mb-4">
                                                        <div class="col-6">
                                                            <div>
                                                                <h5>November 2021</h5>
                                                                <p class="text-muted text-truncate mb-0"><i class="bx bx-rupee"></i>95,025.39</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div>
                                                                <div id="area-sparkline-chart-3" class="apex-charts"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  );
}

export default WelcomePage;