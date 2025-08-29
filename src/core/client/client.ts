import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { HttpResponse } from '../query';
import { BaseURL, HeaderKey } from './constants';
import { EnvironmentOption, InitOption } from './types';

// Singleton instance of Axios used throughout the application
export let jfwAxios: Axios | null = null;

/**
 * Initializes the Axios instance (`jfwAxios`) with a base URL and default headers.
 * It also sets up global response interceptors to handle successful responses
 * and errors in a standardized way.
 *
 * @param initOption - Configuration options used to initialize Axios,
 * including environment and brandURL. Optionally includes a global error handler.
 */
const init = (initOption: InitOption) => {
    jfwAxios = axios.create({
        baseURL: initOption.protocolURL || getBaseURL(initOption.environment),
        headers: {
            [HeaderKey.BrandURL]: initOption.brandURL,
            [HeaderKey.ContentType]: 'application/json',
        },
    });

    /**
     * A response interceptor that simply returns the response without modification.
     *
     * @param response - The Axios response object.
     * @returns The unmodified Axios response.
     */
    function responseHandler<T = any>(response: AxiosResponse<T>) {
        return response;
    }

    /**
     * A response error interceptor that either:
     * - Returns the error directly if the request config contains a `raw` flag,
     * - Delegates to a custom global error handler if provided,
     * - Or does nothing (commented out fallback).
     *
     * @param error - The Axios error object containing request and response info.
     * @returns Either the original error or the result of the global error handler.
     */
    function responseErrorHandler(error: AxiosError<HttpResponse>) {
        const config = error?.config;
        if (config.raw) {
            return error;
        }

        if (initOption.globalErrorHandler) {
            return initOption.globalErrorHandler(error);
        }
    }

    jfwAxios.interceptors.response.use(responseHandler, responseErrorHandler);
};

/**
 * Changes the authentication key for all subsequent requests.
 *
 * @param authKey - A string used to authenticate API requests.
 * Required for endpoints that enforce authentication (e.g., returns 401 if missing).
 */
const changeAuthKey = (authKey: string) => {
    jfwAxios.defaults.headers.common[HeaderKey.AuthKey] = authKey;
};

/**
 * Removes the authentication key from the request headers.
 * Typically used when the user logs out or their session is cleared.
 */
const clearAuthKey = () => {
    delete jfwAxios.defaults.headers.common[HeaderKey.AuthKey];
};

/**
 * Updates the `brandURL` in the headers for all subsequent requests.
 *
 * `brandURL` is used to explicitly specify which brand the request is targeting.
 * This is especially useful in multi-brand systems where a single frontend may serve multiple brands.
 *
 * If you do not manually provide this value (i.e., you don't call `changeBrandURL`),
 * the backend will automatically detect the brand based on your origin domain (e.g., `window.location.origin`).
 *
 * @param brandURL - The brand URL to set in the request headers. Used to identify the target brand for the request.
 */
const changeBrandURL = (brandURL: string) => {
    jfwAxios.defaults.headers.common[HeaderKey.BrandURL] = brandURL;
};

/**
 * Resolves the base API URL based on the environment setting.
 *
 * @param environment - Either 'live' or 'development'.
 * @returns A base URL string appropriate for the given environment.
 */
const getBaseURL = (environment: EnvironmentOption): string => {
    switch (environment) {
        case 'live':
            return BaseURL.live;
        default:
            return BaseURL.development;
    }
};

// Exported API to be used across the app for centralized axios configuration
const jfwjs = {
    init,
    changeAuthKey,
    clearAuthKey,
    changeBrandURL,
    getBaseURL,
};

export default jfwjs;
