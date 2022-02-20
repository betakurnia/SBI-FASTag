import React from "react";

const ProductDetailsImgs = () => {
  return (
    <div className="col-xl-6">
      <div className="product-detai-imgs">
        <div className="row">
          <div className="col-md-2 col-sm-3 col-4">
            <div
              className="nav flex-column nav-pills "
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="product-1-tab"
                data-bs-toggle="pill"
                href="#product-1"
                role="tab"
                aria-controls="product-1"
                aria-selected="true"
              >
                <img
                  src="assets/images/buyfastag.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block rounded"
                />
              </a>
              <a
                className="nav-link"
                id="product-2-tab"
                data-bs-toggle="pill"
                href="#product-2"
                role="tab"
                aria-controls="product-2"
                aria-selected="false"
              >
                <img
                  src="assets/images/buyfastag.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block rounded"
                />
              </a>
              <a
                className="nav-link"
                id="product-3-tab"
                data-bs-toggle="pill"
                href="#product-3"
                role="tab"
                aria-controls="product-3"
                aria-selected="false"
              >
                <img
                  src="assets/images/buyfastag.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block rounded"
                />
              </a>
              <a
                className="nav-link"
                id="product-4-tab"
                data-bs-toggle="pill"
                href="#product-4"
                role="tab"
                aria-controls="product-4"
                aria-selected="false"
              >
                <img
                  src="assets/images/buyfastag.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block rounded"
                />
              </a>
            </div>
          </div>
          <div className="col-md-7 offset-md-1 col-sm-9 col-8">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="product-1"
                role="tabpanel"
                aria-labelledby="product-1-tab"
              >
                <div>
                  <img
                    src="assets/images/buyfastag.jpg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-2"
                role="tabpanel"
                aria-labelledby="product-2-tab"
              >
                <div>
                  <img
                    src="assets/images/buyfastag.jpg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-3"
                role="tabpanel"
                aria-labelledby="product-3-tab"
              >
                <div>
                  <img
                    src="assets/images/buyfastag.jpg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-4"
                role="tabpanel"
                aria-labelledby="product-4-tab"
              >
                <div>
                  <img
                    src="assets/images/buyfastag.jpg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsImgs;
