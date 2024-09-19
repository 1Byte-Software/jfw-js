import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import queryString from 'query-string';
import { _AppService } from '../../core/lifeCycle';
import { MODE_VALUES } from '../../models';

const JFW_API_PRODUCTION = 'https://protocol.jframework.io/api/';
const JFW_API_DEVELOP = 'https://protocol.jframework.dev/api/';

const axiosInstance = (baseURL: string) => {
  const axiosClient = axios.create({
    baseURL,
    headers: {
      'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
  });
  axiosClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      return config;
    },
  );
  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response && response.data) {
        return response.data;
      }
      if (typeof response.data === 'boolean') {
        return response.data;
      }
      return response;
    },
    (error) => {
      // Handle errors
      throw error;
    },
  );

  return axiosClient;
};

const baseURL$ = _AppService.getConfig$();

let axiosInstanceJfw: ReturnType<typeof axiosInstance>;

baseURL$.subscribe((config) => {
  if (config) {
    const baseURL =
      config.mode === MODE_VALUES.development
        ? JFW_API_DEVELOP
        : JFW_API_PRODUCTION;
    axiosInstanceJfw = axiosInstance(baseURL || '');
  }
});

export { axiosInstanceJfw };
