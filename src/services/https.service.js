import axios from "axios";
import util from '../utils/utils.helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL, REFRESH_TOKEN_URL, API_TIMEOUT } from "../services/config";


const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: API_TIMEOUT,

});

instance.interceptors.request.use(async config => {
  // let token = util.getCurrentUserAccessToken();

  let token =  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmFkOWNiYTE1NGQyYjMwYmRmMDg0MDVlNTk5OTVmYmM0MzgwNDdhNzYzMTdlNGFjZGExZGY5MjUwZWYzNWMxOGRiMGM3OTM2MzFmODM2OGEiLCJpYXQiOjE2NDgzNjI3ODEuODAzMDc3OTM2MTcyNDg1MzUxNTYyNSwibmJmIjoxNjQ4MzYyNzgxLjgwMzA4MTk4OTI4ODMzMDA3ODEyNSwiZXhwIjoxNjc5ODk4NzgxLjc5OTYwMjAzMTcwNzc2MzY3MTg3NSwic3ViIjoiNTkiLCJzY29wZXMiOltdfQ.lQNZb9ePVHplv4ux0AS_Zk8uIM_hRNK937yb6kJlsrJHhCEyC7UN8UkU9Aa4Po_aT22Xqo6wdFz1p8PS3ITsIuwBgOqgwL9ezT7Ux4iyb2K_9SmfwYIsWd5ujbCke5jYeXVC0hrPGYkdCIsNXsLnLkOPtytuWqtpuHLaf0Ukqls7NJq806IIXdH2GNwvb44ErDTXfLWfr8ql5xLsohm_nb1Hmw6sE5YuGCXvFHHihPSaoBf4kUK4XoFDpxYLD7L2ClNn7cBefZxk9dboXlLqfNyk3rV9Qz3W8tY8Ki6sfcyNdXzTjytVri9c3Op-m-3cYfVJT_k-FqfzyhKrYjkQXHPQE2Rrs_5K4ZZJP1plRlk7LzgkDW60QPX_K7NPHu9DrhW_ktKikeQ4UJ9Sows1shidl_tALYhiiJ86uRaSriZJQSTuhHRSoXIVe58Syrdu1sgjtEK0lY51ghyl7gX3S7_raogpTbyzq4mHzwUZaT9cdNVAijhYGcyb4nEeNHsfTuA71dAYaU1koLA8gZzj6wPHM-VVM1k1lwajlSRlCfedPsL8diwY9HodrLdiwo9ExVuXBJ9wVnmyZEGAqokILUaSLhUPTCnyBECGDgJ3nIfjtaN2_JGfJjnP67CU3AK2gfrqe9CTnvX0BkM7Hd0b9o2e8xB2VkznhJ4YgGcsx6E'
  config.headers = { ...config.headers, authorization: `Bearer ${token}` };
  return config;
});
export default instance;