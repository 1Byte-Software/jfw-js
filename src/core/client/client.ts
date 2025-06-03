import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { THttpError } from '../error';
import { HttpResponse } from '../query';
import { BaseURL, HeaderKey } from './constants';
import { InitOption } from './types';

export let jfwAxios: Axios | null = null;

const init = (initOption: InitOption) => {
    jfwAxios = axios.create({
        baseURL: getBaseURL(initOption.environment),
        headers: {
            [HeaderKey.BrandURL]: initOption.brandURL,
            'content-type': 'application/json',
        },
    });

    function responseHandler<T = any>(response: AxiosResponse<T>) {
        // const config = response?.config;

        // if (config.raw) {
        //     return response;
        // }

        // return response.data;
        return response;
    }

    function responseErrorHandler(error: AxiosError<HttpResponse>) {
        const config = error?.config;
        if (config.raw) {
            return error;
        }

        if (initOption.globalErrorHandler) {
            return initOption.globalErrorHandler(error);
        }

        // return httpErrorHandler(response);
    }

    jfwAxios.interceptors.response.use(responseHandler, responseErrorHandler);
};

const createInstance = () => {};

/**
 * Changes the authentication key for all subsequent requests.
 *
 * @param authKey This is used to authenticate the request. If the request is not authenticated, the server will return a 401 Unauthorized response.
 */
const changeAuthKey = (authKey: string) => {
    jfwAxios.defaults.headers.common[HeaderKey.AuthKey] = authKey;
};

/**
 * Removes the authentication key from the request headers.
 * This is typically used when logging out a user or clearing their session.
 * After calling this function, subsequent requests will not include the authentication key.
 */
const clearAuthKey = () => {
    delete jfwAxios.defaults.headers.common[HeaderKey.AuthKey];
};

/**
 * Changes the brand URL for all subsequent requests.
 *
 * @param brandURL - The brand URL to be set in the request headers. This is used to identify the brand for the request.
 */
const changeBrandURL = (brandURL: string) => {
    jfwAxios.defaults.headers.common[HeaderKey.BrandURL] = brandURL;
};

/**
 * Changes the device code for all subsequent requests.
 *
 * @param deviceCode - The device code to be set in the request headers. This is used to identify the device for the request.
 */
const changeDeviceCode = (deviceCode: string) => {
    jfwAxios.defaults.headers.common[HeaderKey.DeviceCode] = deviceCode;
};

/**
 * Gets the base URL for API requests based on the environment.
 *
 * @param environment - The environment to get the base URL for. Can be either 'live' or 'development'.
 * @returns The base URL for the specified environment. Returns development URL by default.
 */
const getBaseURL = (environment: InitOption['environment']): string => {
    switch (environment) {
        case 'live':
            return BaseURL.live;
        default:
            return BaseURL.development;
    }
};

const globalErrorHandler = (error: THttpError) => {};

const jfwjs = {
    init,
    createInstance,
    changeAuthKey,
    clearAuthKey,
    changeBrandURL,
    changeDeviceCode,
    getBaseURL,
    globalErrorHandler,
};

export default jfwjs;
