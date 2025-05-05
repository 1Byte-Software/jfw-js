import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { APP_INTEGRATION_PATH } from './paths';
import { IAppIntegration, IGetAppIntegrationsParams } from './types';

/**
 * List all the app integration by the given type.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/get-app-integrations}
 */
export const getAppIntegrationsAPI = async (
    params?: IGetAppIntegrationsParams,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_PATH.GET_APP_INTEGRATIONS;

    const response = await jfwAxios.get<HttpResponse<IAppIntegration[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};
