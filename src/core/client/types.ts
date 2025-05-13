import { AxiosError, AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../query';

declare module 'axios' {
    export interface AxiosRequestConfig {
        raw?: boolean;
        silent?: boolean;
        ignoreGlobalException?: boolean;
        context?: string;
    }
}

export type InitOption = {
    /**
     * The brand URL of the request. This is used to identify the brand.
     * @example YOUR_BRAND_URL
     */
    brandUrl: string;

    /**
     * Specifies which API to call. For example, 'development' will use protocol.jframework.dev, while 'live' will use protocol.jframework.io.
     * @defaultValue development
     */
    environment?: 'live' | 'development';

    globalErrorHandler?: (error: AxiosError<HttpResponse>) => void;
};

export interface JfwAxiosRequestConfig extends AxiosRequestConfig {}
