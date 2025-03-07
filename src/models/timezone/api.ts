import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { TIMEZONE_PATH } from './paths';
import { IGetTimezoneParams, ITimezone } from './types';

/**
 * List all time zones.
 */
export const getTimezoneAPI = async (
    params?: IGetTimezoneParams,
    config?: AxiosRequestConfig,
) => {
    const url = TIMEZONE_PATH.GET;
    const response = await jfwAxios.get<HttpResponse<ITimezone[]>>(url, {
        ...config,
        params,
    });
    return response.data;
};
