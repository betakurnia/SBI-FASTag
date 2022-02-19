const  API_URL  = "https://localhost:5001";

const urls = {
  user: {
    login: `${API_URL}/api/account/login`,
    register: `${API_URL}/register`,
    delete: `${API_URL}/delete`,
    otpVerifyApi:`${API_URL}/api/account/verifyloginotp`
  },
};

export default urls;
