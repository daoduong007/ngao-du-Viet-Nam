import {axiosClient} from "@api";

//test with fake api 
export const tourApi = {
  getAll: (params?: any) => {
    const url = './posts';
    return axiosClient.get(url, {params: params});
  },

  get: (id: any) => {
    const url = `./posts/${id}`;
    return axiosClient.get(url);
  }
}