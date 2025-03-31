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
     * The URL of the brand registered by the user on the JFW system.
     */
    brandUrl: string;

    /**
     * @default "development"
     * Specifies which API to call. For example, 'development' will use protocol.jframework.dev, while 'live' will use protocol.jframework.io.
     */
    environment?: 'live' | 'development';

    globalErrorHandler?: (error: AxiosError<HttpResponse>) => void;
};

export interface JfwAxiosRequestConfig extends AxiosRequestConfig {}
