import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { SUBSCRIPTION_TYPE_PATH } from './paths';
import {
    ICreateSubscriptionTypeData,
    ISubscriptionType,
    IUpdateSubscriptionTypeData,
} from './types';

/**
 * Creates a new subscription type.
 *
 * @param data - The data for creating a new subscription type.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/create-a-subscription-type}
 */
export const createSubscriptionTypeAPI = async (
    data: ICreateSubscriptionTypeData,
    config?: AxiosRequestConfig,
) => {
    const url = SUBSCRIPTION_TYPE_PATH.CREATE_SUBSCRIPTION_TYPE;

    const response = await jfwAxios.post<HttpResponse<ISubscriptionType>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes a subscription type by the given Id.
 *
 * @param id - The id of the subscription type.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/delete-a-subscription-type}
 */
export const deleteSubscriptionTypeAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(SUBSCRIPTION_TYPE_PATH.DELETE_SUBSCRIPTION_TYPE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets a subscription type by id.
 *
 * @param id - The id of the subscription type.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-a-subscription-type}
 */
export const getSubscriptionTypeAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(SUBSCRIPTION_TYPE_PATH.GET_SUBSCRIPTION_TYPE, {
        id,
    });

    const response = await jfwAxios.get<HttpResponse<ISubscriptionType>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Gets a list of all subscription type.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-subscription-types}
 */
export const getSubscriptionTypesAPI = async (config?: AxiosRequestConfig) => {
    const url = SUBSCRIPTION_TYPE_PATH.GET_SUBSCRIPTION_TYPES;

    const response = await jfwAxios.get<HttpResponse<ISubscriptionType[]>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Updates a subscription type by the given Id.
 *
 * @param id - The id of the subscription type.
 * @param data - The data for updating a coupon.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/update-a-subscription-type}
 */
export const updateSubscriptionTypeAPI = async (
    id: IdType,
    data: IUpdateSubscriptionTypeData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(SUBSCRIPTION_TYPE_PATH.UPDATE_SUBSCRIPTION_TYPE, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<ISubscriptionType>>(
        url,
        data,
        config,
    );

    return response.data;
};
