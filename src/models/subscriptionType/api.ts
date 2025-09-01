import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { IPrice } from '../price';
import { SUBSCRIPTION_TYPE_PATH } from './paths';
import {
    ICreateSubscriptionTypeParams,
    IGetSubscriptionTypesParams,
    ISubscriptionType,
    IUpdateSubscriptionTypeParams,
} from './types';

export class SubscriptionTypeAPI {
    /**
     * # Create a subscription type
     *
     * Creates a new subscription type.
     *
     * @param params - The params for creating a new subscription type.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/create-a-subscription-type}
     */
    public async createSubscriptionType(
        params: ICreateSubscriptionTypeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = SUBSCRIPTION_TYPE_PATH.CREATE_SUBSCRIPTION_TYPE;
        const response = await jfwAxios.post<HttpResponse<ISubscriptionType>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a subscription type
     *
     * Deletes a subscription type by the given Id.
     *
     * @param id - The id of the subscription type.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/delete-a-subscription-type}
     */
    public async deleteSubscriptionType(
        id: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            SUBSCRIPTION_TYPE_PATH.DELETE_SUBSCRIPTION_TYPE,
            {
                id,
            },
        );
        const response = await jfwAxios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get a subscription type
     *
     * Gets a subscription type by id.
     *
     * @param id - The id of the subscription type.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-a-subscription-type}
     */
    public async getSubscriptionType(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(SUBSCRIPTION_TYPE_PATH.GET_SUBSCRIPTION_TYPE, {
            id,
        });
        const response = await jfwAxios.get<HttpResponse<ISubscriptionType>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get prices from a subscription type
     *
     * Gets prices from a subscription type.
     *
     * @param subscriptionTypeId - The id of the subscription type.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-prices-from-a-subscription-type}
     */
    public async getPricesFromSubscriptionType(
        subscriptionTypeId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            SUBSCRIPTION_TYPE_PATH.GET_PRICES_FROM_SUBSCRIPTION_TYPE,
            {
                subscriptionTypeId,
            },
        );
        const response = await jfwAxios.get<HttpResponse<IPrice[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get subscription types
     *
     * Gets a list of all subscription type.
     *
     * @param params - The params for getting subscription types.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-subscription-types}
     */
    public async getSubscriptionTypes(
        params?: IGetSubscriptionTypesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = SUBSCRIPTION_TYPE_PATH.GET_SUBSCRIPTION_TYPES;
        const response = await jfwAxios.get<HttpResponse<ISubscriptionType[]>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Update a subscription type
     *
     * Updates a subscription type by the given Id.
     *
     * @param id - The id of the subscription type.
     * @param params - The params for updating a subscription type.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/subscription-types/update-a-subscription-type}
     */
    public async updateSubscriptionType(
        id: IdType,
        params: IUpdateSubscriptionTypeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            SUBSCRIPTION_TYPE_PATH.UPDATE_SUBSCRIPTION_TYPE,
            {
                id,
            },
        );
        const response = await jfwAxios.put<HttpResponse<ISubscriptionType>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
