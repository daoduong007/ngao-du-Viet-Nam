import {axiosClient} from "@api";

//test with json-server api 
export const tourApi = {
  getAll: (params?: any) => {
    const url = './tours';
    return axiosClient.get(url, {params: params});
  },

  get: (id: number) => {
    const url = `./tours/${id}`;
    return axiosClient.get(url);
  },

  search: (params: string) => {
    const url = `./tours?q=${params}`;
    return axiosClient.get(url)
  }
}