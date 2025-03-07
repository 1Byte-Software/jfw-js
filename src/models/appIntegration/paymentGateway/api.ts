import { HttpResponseList } from '../../../core';
import { get, post, put, remove } from '../../../utils/axiosHelper222';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { INTEGRATION_PAYMENT_GATEWAY_PATH } from './paths';
import {
    ICreateIntegrationPaymentGatewayParams,
    IIntegrationPaymentGateway,
    IQueryIntegrationPaymentGatewayParams,
    IUpdateIntegrationPaymentGatewayParams,
} from './types';

/**
 * Gets the list of the app integration payment gateways by the current brand.
 */
export const queryIntegrationPaymentGatewayAPI = async (
    params?: IQueryIntegrationPaymentGatewayParams,
): Promise<HttpResponseList<IIntegrationPaymentGateway>> => {
    const url = INTEGRATION_PAYMENT_GATEWAY_PATH.QUERY;

    const response = await get(url, {
        params,
    });

    return response.data;
};

/**
 * Gets a app integration payment gateway by the given id.
 */
export const getIntegrationPaymentGatewayByIdAPI = async (
    appIntegrationPaymentGatewayId: IdType,
): Promise<IIntegrationPaymentGateway> => {
    const url = generatePath(INTEGRATION_PAYMENT_GATEWAY_PATH.GET_BY_ID, {
        id: appIntegrationPaymentGatewayId,
    });
    const response = await get(url);

    return response.data;
};

/**
 * Creates a new app integration payment gateway.
 */
export const createIntegrationPaymentGatewayAPI = async (
    params: ICreateIntegrationPaymentGatewayParams,
) => {
    const url = INTEGRATION_PAYMENT_GATEWAY_PATH.CREATE;
    const response = await post(url, params);

    return response.data;
};

/**
 * Updates a app integration payment gateway by the given id.
 */
export const updateIntegrationPaymentGatewayByIdAPI = async (
    appIntegrationPaymentGatewayId: IdType,
    payload: IUpdateIntegrationPaymentGatewayParams,
) => {
    const url = generatePath(INTEGRATION_PAYMENT_GATEWAY_PATH.UPDATE_BY_ID, {
        id: appIntegrationPaymentGatewayId,
    });
    const response = await put(url, payload);

    return response.data;
};

/**
 * Deletes a app integration payment gateway by the given id.
 */
export const deleteIntegrationPaymentGatewayAPI = async (
    appIntegrationPaymentGatewayId: IdType,
) => {
    const url = generatePath(INTEGRATION_PAYMENT_GATEWAY_PATH.DELETE_BY_ID, {
        id: appIntegrationPaymentGatewayId,
    });
    const response = await remove(url);

    return response.data;
};
