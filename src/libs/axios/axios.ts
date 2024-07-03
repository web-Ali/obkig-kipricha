/* eslint-disable no-restricted-imports */
import axios from 'axios';


declare module 'axios' {
  interface AxiosRequestConfig {
    p0?: number;
  }
}

export const apiClient = axios.create({ baseURL: 'https://alumni.gstou.ru' });
// export const apiClient = axios.create({ baseURL: 'https://forms-dev.gstou.ru' });



