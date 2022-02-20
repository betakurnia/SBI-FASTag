import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ notification }) => {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src="assets/images/logo.svg" alt="" height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/fevicon.svg" alt="" height={17} />
              </span>
            </Link>
            <Link to="/" className="logo logo-light">
              <span className="logo-sm">
                <img src="assets/images/fevicon.svg" alt="" height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo.png" alt="" height={40} />
              </span>
            </Link>
          </div>
          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect d-lg-none d-sm-block"
            id="vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars" />
          </button>
          {/* App Search*/}
          <form className="app-search d-none d-lg-block">
            <img src="assets/images/netcf.png" height={50} />
          </form>
        </div>
        <div className="d-flex">
          {notification && (
            <>
              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect hb_1"
                  id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-envelope" />
                </button>
              </div>
              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect hb_2"
                  id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-bell" />
                  <span className="badge bg-danger rounded-pill">3</span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-notifications-dropdown"
                >
                  <div className="p-3">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0" key="t-notifications">
                          {" "}
                          Notifications{" "}
                        </h6>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="small" key="t-view-all">
                          {" "}
                          View All
                        </a>
                      </div>
                    </div>
                  </div>

                  <div data-simplebar style={{ maxHeight: "230px" }}>
                    <a href className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title bg-primary rounded-circle font-size-16">
                            <i className="bx bx-cart" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1" key="t-your-order">
                            Your order is placed
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">
                              If several languages coalesce the grammar
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-min-ago">3 min ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href className="text-reset notification-item">
                      <div className="media">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          className="me-3 rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">James Lemire</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-simplified">
                              It will seem like simplified English.
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-hours-ago">1 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title bg-success rounded-circle font-size-16">
                            <i className="bx bx-badge-check" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1" key="t-shipped">
                            Your item is shipped
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">
                              If several languages coalesce the grammar
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-min-ago">3 min ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href className="text-reset notification-item">
                      <div className="media">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          className="me-3 rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Salena Layfield</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-occidental">
                              As a skeptical Cambridge friend of mine
                              occidental.
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline" />{" "}
                              <span key="t-hours-ago">1 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 border-top d-grid">
                    <a
                      className="btn btn-sm btn-link font-size-14 text-center"
                      href="javascript:void(0)"
                    >
                      <i className="mdi mdi-arrow-right-circle me-1" />{" "}
                      <span key="t-view-more">View More..</span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item waves-effect hb_3"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="assets/images/users/avatar-1.jpg"
                alt="Header Avatar"
              />
            </button>
            <div className="dropdown-menu dropdown-menu-end logout">
              <Link className="dropdown-item" to="/profile">
                <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
                <span key="t-profile">Profile</span>
              </Link>
              <Link className="dropdown-item text-danger" to="/login">
                <i className="mdi mdi-logout font-size-16 align-middle me-1 text-danger" />{" "}
                <span key="t-logout">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
