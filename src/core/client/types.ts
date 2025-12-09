import { AxiosRequestConfig } from 'axios';

export type JFWOptions = {
    /**
     * The brand URL of the request. This value is included in the request headers
     * and used by the server to identify which brand the request is coming from.
     *
     * If not set manually, the server may infer the brand based on the origin domain.
     *
     * @example "https://example-brand.com"
     */
    brandURL?: string;

    /**
     * The full URL of the protocol server. Overrides the default base URL determined by `environment`.
     *
     * @example "protocol.jframework.io"
     */
    protocolDomain?: string;

    /**
     * If enabled, will auto assign current URL to 'X-Current-URL' header.
     * @default true
     */
    allowTracking?: boolean;
};

export type RdAxiosRequestConfig = AxiosRequestConfig;
