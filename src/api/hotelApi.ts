import {axiosClient} from "@api";

//test with json-server api 
export const hotelApi = {
  getAll: (params?: any) => {
    const url = './hotels';
    return axiosClient.get(url, {params: params});
  },

  get: (id: any) => {
    const url = `./hotels/${id}`;
    return axiosClient.get(url);
  }
}