import { get, post, put, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../asdas';
import { IListResponse } from '../interfaces';
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
): Promise<IListResponse<ISubscriptionType>> => {
    const url = `${REST}`;
    const response = await get(url, { params });
    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
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
    const response = await get(url);

    return response.data;
};

/**
 * Create a subscription type
 */
export const createSubscriptionTypeAPI = async (
    params: ICreateSubscriptionTypeParams,
) => {
    const url = `${REST}`;
    const response = await post(url, params);

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
    const response = await put(url, payload);

    return response.data;
};

/**
 * Delete a subscription type
 */
export const deleteSubscriptionTypeAPI = async (subscriptionTypeId: IdType) => {
    const url = generatePath(SUBSCRIPTION_TYPE_PATH.DELETE_BY_ID, {
        id: subscriptionTypeId,
    });
    const response = await remove(url);

    return response.data;
};
