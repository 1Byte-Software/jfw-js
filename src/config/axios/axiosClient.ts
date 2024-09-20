import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import { _AppService } from '../../core/app';
import { MODE_VALUES } from '../../models';

const JFW_API_PRODUCTION = 'https://protocol.jframework.io/api/';
const JFW_API_DEVELOP = 'https://protocol.jframework.dev/api/';

let axiosInstanceJfw: ReturnType<typeof axiosInstance>;
let brandUrl = '';
let authKey = '';
let userHeaders: RawAxiosRequestHeaders = {};

// Get config, then set values to axiosInstanceJfw and brandUrl
const config$ = _AppService.getConfig$();

config$.subscribe((config) => {
  if (config) {
    const baseUrl =
      config.mode === MODE_VALUES.development
        ? JFW_API_DEVELOP
        : JFW_API_PRODUCTION;
    axiosInstanceJfw = axiosInstance(baseUrl || '');
    brandUrl = config.brandUrl;
  }
});

// Get authKey, then set value to authKey
const authKey$ = _AppService.getAuthKey();

authKey$.subscribe((key) => {
  authKey = key;
});

// Get userHeaders, then set value to userHeaders
const userHeaders$ = _AppService.getUserHeaders();

userHeaders$.subscribe((headers) => {
  userHeaders = headers;
});

// Create axios instance
const axiosInstance = (baseUrl: string) => {
  const axiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
      'content-type': 'application/json',
      ...userHeaders,
    },
  });
  axiosClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      config.headers['BrandUrl'] = brandUrl;
      if (authKey) {
        config.headers['AuthKey'] = authKey;
      }

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

export { axiosInstanceJfw };
