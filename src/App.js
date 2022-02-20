import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OTP from "./pages/OTP";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BuyFastag from "./pages/BuyFastag";
import CustomerFAQ from "./pages/CustomerFAQ";
import RegisteredTags from "./pages/RegisteredTags";
import SignUp from "./pages/SignUp";
import TagRecharge from "./pages/TagRecharge";
import TransactionDetails from "./pages/TransactionDetails";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/otp" element={<OTP />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/buy-fastag" element={<BuyFastag />} />
          <Route exact path="/customer-faqs" element={<CustomerFAQ />} />
          <Route exact path="/registered-tags" element={<RegisteredTags />} />
          <Route exact path="/tag-recharge" element={<TagRecharge />} />
          <Route
            exact
            path="/transactions-details"
            element={<TransactionDetails />}
          />
          <Route exact path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
