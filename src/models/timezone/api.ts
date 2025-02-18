import { RawAxiosRequestHeaders } from 'axios';
import { get } from '../../utils/axiosHelper';
import { TIMEZONE_PATH } from './paths';
import { IGetTimezoneParams, ITimezone } from './types';

/**
 * List all time zones.
 */
export const getTimezoneAPI = async (
    params?: IGetTimezoneParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<ITimezone[]> => {
    const url = TIMEZONE_PATH.GET;
    const response = await get(
        url,
        {
            params,
        },
        userHeaders,
    );
    return response.data;
};
