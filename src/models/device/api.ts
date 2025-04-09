import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { DEVICE_PATH } from './paths';
import {
    ICheckUserAccessParams,
    ICreateDeviceParams,
    IDevice,
    IQueryDeviceParams,
    IUpdateDeviceParams,
} from './types';

/**
 * Gets the list off all devices by the given filter.
 */
export const queryDeviceAPI = async (
    params?: IQueryDeviceParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponseList<IDevice>> => {
    const url = DEVICE_PATH.QUERY;
    const response = await jfwAxios.get(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Adds a new device to the user.
 * @feature Will make in feature
 */
export const createDeviceAPI = async (
    params?: ICreateDeviceParams,
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.CREATE;
};

/**
 * Gets a device data by the specified ID.
 */
export const getDeviceByIdAPI = async (
    deviceId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DEVICE_PATH.GET_BY_ID, {
        id: deviceId,
    });

    const response = await jfwAxios.get<HttpResponse<IDevice>>(url, config);

    return response.data;
};

/**
 * Delete a device by data ID.
 */
export const deleteDeviceByIdAPI = async (
    deviceId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DEVICE_PATH.DELETE_BY_ID, {
        id: deviceId,
    });

    return await jfwAxios.delete(url, config);
};

/**
 * Updates the device data.
 * @feature Will make in feature
 */
export const updateDeviceByIdAPI = async (
    deviceId: IdType,
    payload: IUpdateDeviceParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DEVICE_PATH.UPDATE_BY_ID, {
        id: deviceId,
    });

    const response = await jfwAxios.put(url, payload, config);

    return response.data;
};

/**
 * Check the user can access the specified device code.
 */
export const checkUserAccessAPI = async (
    params: ICheckUserAccessParams,
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.CHECK_USER_ACCESS;

    const response = await jfwAxios.get<HttpResponse<boolean>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Gets list of devices by list of ids.
 * @feature Will make in feature
 */
export const getDevicesByIds = async (
    deviceIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.GET_BY_LIST_ID;
};

/**
 * Gets the current device information.
 * @feature Will make in the feature
 */
export const getDeviceCurrent = async (config?: AxiosRequestConfig) => {
    const url = DEVICE_PATH.GET_CURRENT;
};

/**
 * Gets the device data by specified code.
 * @feature Will make in the feature
 */
export const getDeviceByCode = async (
    deviceCode: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DEVICE_PATH.GET_BY_CODE, {
        code: deviceCode,
    });
};

/**
 * #JFW-36: Bổ sung type hoàn chỉnh cho các đối tượng trong jfw-js
 */
// export const deviceStatisticAPI = async (
//     params: IStatisticCommonParams,
// ): Promise<IStatistic[]> => {
//     const url = `${REST}/${STATISTIC}`;
//     const response = await jfwAxios.get(url, {
//         params,
//     });

//     return response.data;
// };
