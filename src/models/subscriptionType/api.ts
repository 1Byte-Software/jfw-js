import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { SUBSCRIPTION_TYPE_PATH } from './paths';
import {
    ICreateSubscriptionTypeParams,
    IQuerySubscriptionTypeParams,
    ISubscriptionType,
    IUpdateSubscriptionTypeParams,
} from './types';

const REST = 'subscription-types';

/**
 * Get subscription types
 */
export const querySubscriptionTypeAPI = async (
    params?: IQuerySubscriptionTypeParams,
): Promise<HttpResponseList<ISubscriptionType>> => {
    const url = SUBSCRIPTION_TYPE_PATH.QUERY;
    const response = await jfwAxios.get(url, { params });

    return response.data;
};

/**
 * Get a subscription type
 */
export const getSubscriptionTypeByIdAPI = async (
    subscriptionTypeId: IdType,
): Promise<ISubscriptionType> => {
    const url = generatePath(SUBSCRIPTION_TYPE_PATH.GET_BY_ID, {
        id: subscriptionTypeId,
    });
    const response = await jfwAxios.get(url);

    return response.data;
};

/**
 * Create a subscription type
 */
export const createSubscriptionTypeAPI = async (
    params: ICreateSubscriptionTypeParams,
) => {
    const url = SUBSCRIPTION_TYPE_PATH.CREATE;
    const response = await jfwAxios.post(url, params);

    return response.data;
};

/**
 * Update a subscription type
 */
export const updateSubscriptionTypeAPI = async (
    subscriptionTypeId: IdType,
    payload: IUpdateSubscriptionTypeParams,
) => {
    const url = generatePath(SUBSCRIPTION_TYPE_PATH.UPDATE_BY_ID, {
        id: subscriptionTypeId,
    });
    const response = await jfwAxios.put(url, payload);

    return response.data;
};

/**
 * Delete a subscription type
 */
export const deleteSubscriptionTypeAPI = async (subscriptionTypeId: IdType) => {
    const url = generatePath(SUBSCRIPTION_TYPE_PATH.DELETE_BY_ID, {
        id: subscriptionTypeId,
    });
    const response = await jfwAxios.delete(url);

    return response.data;
};
