import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL, DEFAULT_TIMEOUT } from '../constant/api';

const createClient = (config?: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    ...config,
  });

  return axiosInstance;
};

export const httpClient = createClient();
