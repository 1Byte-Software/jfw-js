import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { EVENT_PATH } from './paths';
import { IEvent, IGetEventsEarningWallet, IGetEventsParams } from './types';

/**
 * Get events
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events}
 */
export const getEventsAPI = async (
    params?: IGetEventsParams,
    config?: AxiosRequestConfig,
) => {
    const url = EVENT_PATH.GET_EVENTS;

    const response = await jfwAxios.get<HttpResponseList<IEvent>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * List all wallet earning events. By default, the type is Earning.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events-earning-wallet}
 */
export const getEventsEarningWalletAPI = async (
    params?: IGetEventsEarningWallet,
    config?: AxiosRequestConfig,
) => {
    const url = EVENT_PATH.GET_EVENTS;

    const response = await jfwAxios.get<HttpResponseList<IEvent>>(url, {
        params,
        ...config,
    });

    return response.data;
};
