import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { STATE_PATH } from './paths';
import { IState } from './types';

/**
 * # States
 *
 * Get states
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/states}
 */
export const getStates = async (config?: AxiosRequestConfig) => {
    const url = STATE_PATH.GET_STATES;
    const response = await jfwAxios.get<HttpResponse<IState[]>>(url, config);

    return response.data;
};
