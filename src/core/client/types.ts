import { AxiosError } from 'axios';
import { HttpResponse } from '../query';

declare module 'axios' {
    export interface AxiosRequestConfig {
        raw?: boolean;
        silent?: boolean;
        ignoreGlobalException?: boolean;
        context?: string;
    }
}

export type EnvironmentOption = 'live' | 'development';

export type InitOption = {
    /**
     * The brand URL of the request. This value is included in the request headers
     * and used by the server to identify which brand the request is coming from.
     *
     * If not set manually, the server may infer the brand based on the origin domain.
     *
     * @example "https://example-brand.com"
     */
    brandURL: string;

    /**
     * Specifies which API environment to use. This determines the base URL for all HTTP requests.
     *
     * - `'development'` will use `protocol.jframework.dev`
     * - `'live'` will use `protocol.jframework.io`
     *
     * @defaultValue "development"
     */
    environment?: EnvironmentOption;

    /**
     * A global error handler function for failed HTTP responses.
     *
     * If provided, this function will be called when a response error occurs (e.g., 4xx or 5xx),
     * and can be used to customize how your app handles errors (e.g., showing a toast or redirecting to login).
     */
    globalErrorHandler?: (error: AxiosError<HttpResponse>) => void;
};
