import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Banner from "../../components/Banner";
import RecentTransactions from "../../components/RecentTransactions";
import ExpenditureTrends from "../../components/ExpenditureTrends";
import RechargeWalletModal from "../../components/RechargeWalletModal";
import FastagSecurityModal from "../../components/FastagSecurityModal";
import KYCStatusModal from "../../components/KYCStatusModal";
import KYCModal from "../../components/KYCModal";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="main-content" id="main-content">
        <div className="page-content home">
          <div className="container-fluid">
            <div className="row custom_graph" id="custom_graph">
              <div className="col-xl-12 no-padding">
                <Banner />
                <div className="row">
                  <RecentTransactions />
                  <ExpenditureTrends />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FastagSecurityModal />
        <RechargeWalletModal />
        <KYCStatusModal />
        <KYCModal />
      </div>
    </DefaultLayout>
  );
};

export default Home;
