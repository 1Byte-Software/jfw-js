import { Axios, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { generatePath } from '../../utils/path';

export interface CallAPIOptions {
    method?: Method;
    path: string;
    pathParams?: Record<string, string>;
}

export abstract class AbstractAPI {
    constructor(protected axios: Axios) {}

    protected async callAPI<T = any>(options: CallAPIOptions) {
        const { method = 'GET', path, pathParams = {} } = options;

        const axiosConfig: AxiosRequestConfig = {
            method,
            url: generatePath(path, pathParams),
        };

        const response = await this.axios.request<T>(axiosConfig);

        return response.data;
    }
}
