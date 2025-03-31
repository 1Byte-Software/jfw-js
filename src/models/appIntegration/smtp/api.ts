import { HttpResponseList } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { INTEGRATION_SMTP_PATH } from './paths';
import {
    ICreateIntegrationSMTPParams,
    IIntegrationSMTP,
    IQueryIntegrationSMTPParams,
    IUpdateIntegrationSMTPParams,
} from './types';

/**
 * Gets all app integration SMTP.
 */
export const queryIntegrationSMTPAPI = async (
    params?: IQueryIntegrationSMTPParams,
): Promise<HttpResponseList<IIntegrationSMTP>> => {
    const url = INTEGRATION_SMTP_PATH.QUERY;

    const response = await jfwAxios.get(url, {
        params,
    });

    return response.data;
};

/**
 * Gets the app integration SMTP by the given id.
 */
export const getIntegrationSMTPByIdAPI = async (
    appIntegrationSMTPId: IdType,
): Promise<IIntegrationSMTP> => {
    const url = generatePath(INTEGRATION_SMTP_PATH.GET_BY_ID, {
        id: appIntegrationSMTPId,
    });
    const response = await jfwAxios.get(url);

    return response.data;
};

/**
 * Creates a new app integration SMTP.
 */
export const createIntegrationSMTPAPI = async (
    params: ICreateIntegrationSMTPParams,
) => {
    const url = INTEGRATION_SMTP_PATH.CREATE;
    const response = await jfwAxios.post(url, params);

    return response.data;
};

/**
 * Updates the app integration SMTP by the given id.
 */
export const updateIntegrationSMTPByIdAPI = async (
    appIntegrationSMTPId: IdType,
    payload: IUpdateIntegrationSMTPParams,
) => {
    const url = generatePath(INTEGRATION_SMTP_PATH.UPDATE_BY_ID, {
        id: appIntegrationSMTPId,
    });
    const response = await jfwAxios.put(url, payload);

    return response.data;
};

/**
 * Deletes the app integration SMTP by the given id.
 */
export const deleteIntegrationSMTPAPI = async (
    appIntegrationSMTPId: IdType,
) => {
    const url = generatePath(INTEGRATION_SMTP_PATH.DELETE_BY_ID, {
        id: appIntegrationSMTPId,
    });
    const response = await jfwAxios.delete(url);

    return response.data;
};
