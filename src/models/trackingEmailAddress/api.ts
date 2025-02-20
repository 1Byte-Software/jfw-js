import { get } from '../../utils/axiosHelper';
import { IListResponse } from '../base';
import { TRACKING_EMAIL_ADDRESS_PATH } from './paths';
import {
    IQueryTrackingEmailAddressParams,
    ITrackingEmailAddress,
} from './types';

export const queryTrackingEmailAddressAPI = async (
    params: IQueryTrackingEmailAddressParams,
): Promise<IListResponse<ITrackingEmailAddress>> => {
    const url = TRACKING_EMAIL_ADDRESS_PATH.QUERY;
    const response = await get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};
