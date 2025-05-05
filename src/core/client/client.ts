import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { THttpError } from '../error';
import { HttpResponse } from '../query';
import { BaseUrl, HeaderKey } from './constants';
import { InitOption } from './types';

export let jfwAxios: Axios | null = null;

const init = (initOption: InitOption) => {
    jfwAxios = axios.create({
        baseURL: getBaseURL(initOption.environment),
        headers: {
            [HeaderKey.BrandUrl]: initOption.brandUrl,
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

const changeAuthKey = (authKey: string) => {
    jfwAxios.defaults.headers.common[HeaderKey.AuthKey] = authKey;
};

const clearAuthKey = () => {
    delete jfwAxios.defaults.headers.common[HeaderKey.AuthKey];
};

const changeBrandURL = (brandURL: string) => {
    jfwAxios.defaults.headers.common[HeaderKey.BrandUrl] = brandURL;
};

const changeGeneratedBrowserCode = (generatedBrowserCode: string) => {
    jfwAxios.defaults.headers.common[HeaderKey.BrowserCodeGenerate] =
        generatedBrowserCode;
};

const getBaseURL = (environment: InitOption['environment']): string => {
    switch (environment) {
        case 'live':
            return BaseUrl.live;
        default:
            return BaseUrl.development;
    }
};

const globalErrorHandler = (error: THttpError) => {};

const jfwjs = {
    init,
    createInstance,
    changeAuthKey,
    clearAuthKey,
    changeBrandURL,
    changeGeneratedBrowserCode,
    getBaseURL,
    globalErrorHandler,
};

export default jfwjs;
