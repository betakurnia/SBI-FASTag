import axios from 'axios';
import Urls from '../urls';

export const login = (loginModel) => axios.post(Urls.user.login, loginModel);

export const register = (registerModel) => axios.put(Urls.user.register, registerModel);

export const deleteApi = (id) => axios.delete(`${Urls.user.delete}?id=${id}`);
