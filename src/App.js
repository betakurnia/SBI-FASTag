import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/User/Login';
import RegisterPage from './pages/User/Register';
import WelcomePage from './pages/Home/Welcome';
import NotFoundPage from './pages/NotFound';
import  ProfilePage from './pages/User/Profile'
import OtpPage from './pages/User/otp'
function App() {
  
  return (
    <div className="App">
        
        <Router>
        <nav>
          <ul>
            <li><Link to="login">Login</Link></li>
            <li><Link to="register">Register</Link></li>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="/">Home</Link></li>

            <li><Link to="otp">otp</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route exact path="login" element={<LoginPage />} />

                 <Route exact path="register" element={<RegisterPage />} />
                 <Route exact path="profile" element={<ProfilePage/>} />
                 <Route exact path="otp" element={<OtpPage/>} />
               <Route exact path="/" element={<WelcomePage />} />
                 
                 <Route exact path="*" element={<NotFoundPage/>} />
                 
        </Routes>
        
        </Router>
      </div>
 );
}

export default App;
