import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { EXTERNAL_AUTH_PROVIDER_PATH } from './paths';
import {
    ICreateExternalAuthProviderParams,
    IExternalAuthProvider,
    IQueryExternalAuthProviderParams,
    IUpdateExternalAuthProviderParams,
} from './types';

const REST_EXTERNAL = 'external-auth-providers';

/**
 * JFW-80: Thiếu tài liệu api/external-auth-providers
 */
export const queryExternalAuthProviderAPI = async (
    params?: IQueryExternalAuthProviderParams,
): Promise<HttpResponseList<IExternalAuthProvider>> => {
    const url = `${REST_EXTERNAL}`;
    const response = await jfwAxios.get(url, {
        params,
    });

    return response.data
};

/**
 * JFW-80: Thiếu tài liệu api/external-auth-providers
 */
export const getExternalAuthProviderByIdAPI = async (
    externalAuthProviderId: IdType,
): Promise<IExternalAuthProvider> => {
    const url = generatePath(EXTERNAL_AUTH_PROVIDER_PATH.GET_BY_ID, {
        id: externalAuthProviderId,
    });
    const response = await jfwAxios.get(url);

    return response.data;
};

/**
 * JFW-80: Thiếu tài liệu api/external-auth-providers
 */
export const createExternalAuthProviderAPI = async (
    params: ICreateExternalAuthProviderParams,
) => {
    const url = EXTERNAL_AUTH_PROVIDER_PATH.CREATE;

    const response = await jfwAxios.post(url, params);

    return response.data;
};

/**
 * JFW-80: Thiếu tài liệu api/external-auth-providers
 */
export const updateExternalAuthProviderAPI = async (
    externalAuthProviderId: IdType,
    payload: IUpdateExternalAuthProviderParams,
) => {
    const url = generatePath(EXTERNAL_AUTH_PROVIDER_PATH.UPDATE_BY_ID, {
        id: externalAuthProviderId,
    });

    const response = await jfwAxios.put(url, payload);

    return response.data;
};

/**
 * JFW-80: Thiếu tài liệu api/external-auth-providers
 */
export const deleteExternalAuthProviderAPI = async (
    externalAuthProviderId: IdType,
) => {
    const url = generatePath(EXTERNAL_AUTH_PROVIDER_PATH.DELETE_BY_ID, {
        id: externalAuthProviderId,
    });

    return await jfwAxios.delete(url);
};
