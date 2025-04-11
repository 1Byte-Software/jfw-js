import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { STATE_PATH } from './paths';
import { IGetStatesParams, IState } from './types';

/**
 * Gets a list of all states.
 * 
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/states}
 */
export const getStatesAPI = async (
    params?: IGetStatesParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponseList<IState>> => {
    const url = STATE_PATH.GET_STATES;
    const response = await jfwAxios.get(url, {
        params,
        ...config,
    });

    return response.data;
};
