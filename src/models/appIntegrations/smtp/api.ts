import { get, post, put, remove } from '../../../utils/axiosHelper';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../asdas';
import { IListResponse } from '../../interfaces';
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
): Promise<IListResponse<IIntegrationSMTP>> => {
    const url = INTEGRATION_SMTP_PATH.QUERY;

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
 * Gets the app integration SMTP by the given id.
 */
export const getIntegrationSMTPByIdAPI = async (
    appIntegrationSMTPId: IdType,
): Promise<IIntegrationSMTP> => {
    const url = generatePath(INTEGRATION_SMTP_PATH.GET_BY_ID, {
        id: appIntegrationSMTPId,
    });
    const response = await get(url);

    return response.data;
};

/**
 * Creates a new app integration SMTP.
 */
export const createIntegrationSMTPAPI = async (
    params: ICreateIntegrationSMTPParams,
) => {
    const url = INTEGRATION_SMTP_PATH.CREATE;
    const response = await post(url, params);

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
    const response = await put(url, payload);

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
    const response = await remove(url);

    return response.data;
};
