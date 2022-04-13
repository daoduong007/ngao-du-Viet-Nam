import {axiosClient} from "@api";

//test with json-server api 
export const headerApi = {
  getBanner: (params?: any) => {
    const url = './headers';
    return axiosClient.get(url, {params: params});
  },
}