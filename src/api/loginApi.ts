import {axiosAuthClient} from "@api";

//test with json-server api 
export const loginApi = {
  postLogin: (params?: any) => {
    const url = './api/auth/login';
    
    return axiosAuthClient.post(url, params);
  },
} 