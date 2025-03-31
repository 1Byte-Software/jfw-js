import { AxiosResponse } from 'axios';
import { ListData } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { INTEGRATION_AUTHENTICATION_PATH } from './paths';
import {
    ICreateIntegrationAuthenticationParams,
    IIntegrationAuthentication,
    IQueryIntegrationAuthenticationParams,
    IUpdateIntegrationAuthenticationParams,
} from './types';

/**
 * List all app integration authentications.
 */
export const queryIntegrationAuthenticationAPI = async (
    params?: IQueryIntegrationAuthenticationParams,
) => {
    const url = INTEGRATION_AUTHENTICATION_PATH.QUERY;

    const response: AxiosResponse<ListData<IIntegrationAuthentication>> =
        await jfwAxios.get(url, {
            params,
        });

    return response;
};

/**
 * Gets the app integration authentication by the given id.
 */
export const getIntegrationAuthenticationByIdAPI = async (
    appIntegrationAuthenticationId: IdType,
) => {
    const url = generatePath(INTEGRATION_AUTHENTICATION_PATH.GET_BY_ID, {
        id: appIntegrationAuthenticationId,
    });

    const response: AxiosResponse<IIntegrationAuthentication> =
        await jfwAxios.get(url);

    return response;
};

/**
 * Adds a new app integration authentication.
 */
export const createIntegrationAuthenticationAPI = async (
    params: ICreateIntegrationAuthenticationParams,
) => {
    const url = INTEGRATION_AUTHENTICATION_PATH.CREATE;
    const response = await jfwAxios.post(url, params);

    return response.data;
};

/**
 * Updates the app integration authentication by the given id.
 */
export const updateIntegrationAuthenticationByIdAPI = async (
    appIntegrationAuthenticationId: IdType,
    payload: IUpdateIntegrationAuthenticationParams,
) => {
    const url = generatePath(INTEGRATION_AUTHENTICATION_PATH.UPDATE_BY_ID, {
        id: appIntegrationAuthenticationId,
    });
    const response = await jfwAxios.put(url, payload);

    return response.data;
};

/**
 * Deletes the app integration authentication by the given id.
 */
export const deleteIntegrationAuthenticationAPI = async (
    appIntegrationAuthenticationId: IdType,
) => {
    const url = generatePath(INTEGRATION_AUTHENTICATION_PATH.DELETE_BY_ID, {
        id: appIntegrationAuthenticationId,
    });
    const response = await jfwAxios.delete(url);

    return response.data;
};
