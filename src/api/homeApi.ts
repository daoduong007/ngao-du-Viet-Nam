import {axiosClient} from "@api";

//test with json-server api 
export const homeApi = {
  getDiscover: (params?: any) => {
    const url = './home_discover';
    return axiosClient.get(url, {params: params});
  },

  getActractive: (params?: any) => {
    const url = './home_actractive';
    return axiosClient.get(url, {params: params});
  },

  getExperience: (params?: any) => {
    const url = './home_experience';
    return axiosClient.get(url, {params: params});
  },
}