import { get, post, put, remove } from '../../../utils/axiosHelper';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../asdas';
import { IListResponse } from '../../interfaces';
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
): Promise<IListResponse<IIntegrationAuthentication>> => {
    const url = INTEGRATION_AUTHENTICATION_PATH.QUERY;

    const response = await get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

/**
 * Gets the app integration authentication by the given id.
 */
export const getIntegrationAuthenticationByIdAPI = async (
    appIntegrationAuthenticationId: IdType,
): Promise<IIntegrationAuthentication> => {
    const url = generatePath(INTEGRATION_AUTHENTICATION_PATH.GET_BY_ID, {
        id: appIntegrationAuthenticationId,
    });
    const response = await get(url);

    return response.data;
};

/**
 * Adds a new app integration authentication.
 */
export const createIntegrationAuthenticationAPI = async (
    params: ICreateIntegrationAuthenticationParams,
) => {
    const url = INTEGRATION_AUTHENTICATION_PATH.CREATE;
    const response = await post(url, params);

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
    const response = await put(url, payload);

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
    const response = await remove(url);

    return response.data;
};
