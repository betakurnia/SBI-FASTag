import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import ProductDetailsImgs from "../../components/ProductDetailsImgs";
import ProductDetailsDesc from "../../components/ProductDetailsDesc";
import ProductDetailsAction from "../../components/ProductDetailsAction";

const BuyFastag = () => {
  return (
    <DefaultLayout>
      <div className="main-content" id="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Buy FASTag</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <ProductDetailsImgs />
                      <ProductDetailsDesc />
                      <ProductDetailsAction />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BuyFastag;
