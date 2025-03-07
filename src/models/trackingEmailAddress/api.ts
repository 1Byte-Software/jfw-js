import { HttpResponseList } from '../../core';
import { get } from '../../utils/axiosHelper222';
import { TRACKING_EMAIL_ADDRESS_PATH } from './paths';
import {
    IQueryTrackingEmailAddressParams,
    ITrackingEmailAddress,
} from './types';

export const queryTrackingEmailAddressAPI = async (
    params: IQueryTrackingEmailAddressParams,
): Promise<HttpResponseList<ITrackingEmailAddress>> => {
    const url = TRACKING_EMAIL_ADDRESS_PATH.QUERY;
    const response = await get(url, {
        params,
    });

    return response.data
};
