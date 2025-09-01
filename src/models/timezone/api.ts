import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { TIMEZONE_PATH } from './paths';
import { ITimezone } from './types';

export class TimezoneAPI {
    /**
     * # Time zones
     *
     * List all time zones.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/time-zones}
     */
    public async getTimezones(config?: AxiosRequestConfig) {
        const url = TIMEZONE_PATH.GET_TIMEZONES;
        const response = await jfwAxios.get<HttpResponse<ITimezone[]>>(
            url,
            config,
        );

        return response.data;
    }
}
