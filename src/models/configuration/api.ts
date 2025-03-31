import { AxiosRequestConfig } from 'axios';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { CONFIGURATION_PATH } from './paths';
import {
    IConfiguration,
    ICreateConfigurationParams,
    IQueryConfigurationPrams,
    IUpdateConfigurationParams,
} from './types';

/**
 * #JFW-78: Thiếu tài liệu api/configurations
 */
export const queryConfigurationAPI = async (
    params: IQueryConfigurationPrams,
): Promise<IConfiguration[]> => {
    const url = CONFIGURATION_PATH.QUERY;

    const response = await jfwAxios.get(url, {
        params,
    });

    return response.data;
};

/**
 * #JFW-78: Thiếu tài liệu api/configurations
 */
export const createConfigurationAPI = async (
    payload: ICreateConfigurationParams,
) => {
    const url = CONFIGURATION_PATH.CREATE;
    const response = await jfwAxios.post(url, payload);

    return response.data;
};

/**
 * #JFW-78: Thiếu tài liệu api/configurations
 */
export const updateConfigurationAPI = async (
    configurationId: IdType,
    params: IUpdateConfigurationParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(CONFIGURATION_PATH.UPDATE_BY_ID, {
        id: configurationId,
    });

    return await jfwAxios.put(url, params, config);
};

/**
 * #JFW-78: Thiếu tài liệu api/configurations
 */
export const deleteConfigurationAPI = async (configurationId: IdType) => {
    const url = generatePath(CONFIGURATION_PATH.DELETE_BY_ID, {
        id: configurationId,
    });

    const response = await jfwAxios.delete(url);

    return response.data;
};
