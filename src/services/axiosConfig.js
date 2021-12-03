import axios from 'axios'

const api = axios.create({
    baseURL: "https://2fb6b79e-8033-4384-b541-ade9fadafa59.mock.pstmn.io",
  });
  
export default api;