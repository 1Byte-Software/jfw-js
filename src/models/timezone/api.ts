import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { TIMEZONE_PATH } from './paths';
import { IGetTimezoneParams, ITimezone } from './types';

/**
 * List all time zones.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/time-zones}
 */
export const getTimezonesAPI = async (
    params?: IGetTimezoneParams,
    config?: AxiosRequestConfig,
) => {
    const url = TIMEZONE_PATH.GET_TIMEZONES;
    
    const response = await jfwAxios.get<HttpResponse<ITimezone[]>>(url, {
        ...config,
        params,
    });
    return response.data;
};
