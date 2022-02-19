import axios from 'axios';
import Urls from '../urls';

export const login = (loginModel) => axios.post(Urls.user.login, loginModel).then((response)=>{return response}).catch(()=>alert("username password wrong"));

export const register = (registerModel) => axios.put(Urls.user.register, registerModel);

export const deleteApi = (id) => axios.delete(`${Urls.user.delete}?id=${id}`);

export const otpVerifyApi = (otp) => axios.post(`${Urls.user.otpVerifyApi}?otp=${otp}`).then((response)=>{return response}).catch(()=>alert("enterd wrong otp"));
