import axios, { AxiosError, AxiosResponse } from 'axios';
import { HttpResponse, JFWOptions } from './core';
import { ApiClient, createBackendApiClient } from './core/client/client';
import { HeaderKey } from './core/client/constants';
export * from './core';
export * from './features';

/**
 * Creates a configured JFW Axios instance along with utility methods
 * for managing authentication keys, brand URLs, and base API URL resolution.
 *
 * @param options - The configuration options for initializing JFW.
 * @returns An object containing the Axios instance and helper methods.
 */
export const createJFWConfig = (options: JFWOptions) => {
    const {
        brandURL = null,
        protocolDomain = 'protocol.jframework.io',
        globalErrorHandler,
    } = options;

    const protocolURL = `https://${protocolDomain}/api`;

    const jfwAxios = axios.create({
        baseURL: protocolURL,
        headers: {
            [HeaderKey.BrandURL]: brandURL,
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

        if (globalErrorHandler) {
            return globalErrorHandler(error);
        }
    }

    jfwAxios.interceptors.response.use(responseHandler, responseErrorHandler);

    /**
     * Changes the authentication key for all subsequent requests.
     *
     * @param authKey - A string used to authenticate API requests.
     * Required for endpoints that enforce authentication (e.g., returns 401 if missing).
     *
     * @deprecated now, will auto storage authKey.
     */
    const changeAuthKey = (authKey: string) => {
        jfwAxios.defaults.headers.common[HeaderKey.AuthKey] = authKey;
    };

    /**
     * Removes the authentication key from the request headers.
     * Typically used when the user logs out or their session is cleared.
     *
     * @deprecated Use `jfwClient.user.signOut` instead
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
     *
     * @deprecated Not use it.
     */
    const changeBrandURL = (brandURL: string) => {
        jfwAxios.defaults.headers.common[HeaderKey.BrandURL] = brandURL;
    };

    return {
        jfwAxios,
        /**
         * @deprecated
         */
        changeBrandURL,
        /**
         * @deprecated
         */
        changeAuthKey,
        /**
         * @deprecated
         */
        clearAuthKey,
    };
};

/**
 * JFW client type that combines the API client methods and JFW configuration helpers.
 */
export type JFWClient = ApiClient & ReturnType<typeof createJFWConfig>;

/**
 * Creates a fully configured JFW client, including both:
 * - The backend API client for interacting with endpoints,
 * - And the configuration helpers for managing headers and base URL.
 *
 * @param options - The configuration options for initializing JFW.
 * @returns A combined client instance with API methods and configuration utilities.
 */
export function createJFWClient(options: JFWOptions): JFWClient {
    const jfwConfigs = createJFWConfig(options);
    const apiClient = createBackendApiClient(jfwConfigs.jfwAxios);

    return {
        ...apiClient,
        ...jfwConfigs,
    };
}
