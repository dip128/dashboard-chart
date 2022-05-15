import axios from 'axios';

const baseURL = 'https://sigviewauth.sigmoid.io/api/v1';
const customAxios = () => {


  let instance = axios.create();

  instance.defaults.baseURL = baseURL;
  instance.interceptors.request.use(function (config) {

    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    config.headers.common['x-auth-token'] = token;
    return config;
  });

  return instance;
};
export default  customAxios();