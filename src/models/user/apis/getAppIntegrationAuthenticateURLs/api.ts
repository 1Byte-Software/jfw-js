import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { USER_PATH } from '../../paths';
import {
    IAppIntegrationAuthenticateURL,
    IGetAppIntegrationAuthenticateURLsOptions,
} from './types';

/**
 * #NOTE: Waiting document.
 */
export const getAppIntegrationAuthenticateURLsAPI = async (
    options: IGetAppIntegrationAuthenticateURLsOptions,
    config?: AxiosRequestConfig,
) => {
    const { queryParameters, headerParameters } = options;
    const url = USER_PATH.GET_APP_INTEGRATION_AUTHENTICATE_URLS;

    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationAuthenticateURL[]>
    >(url, {
        params: queryParameters,
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
