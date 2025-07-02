import { AxiosRequestConfig } from 'axios';
import {
    HttpResponse,
    HttpResponseList,
    IStatisticCommon,
    IStatisticCommonParams,
} from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { DEVICE_PATH } from './paths';
import {
    ICheckUserAccessDeviceParams,
    ICreateDeviceParams,
    IDevice,
    IGetDevicesParams,
    IRefreshDeviceTokenParams,
    IUpdateDeviceParams,
} from './types';

/**
 * # Checks user access device
 *
 * Checks the user can access the specified device code.
 *
 * @param params - The params for checking whether the user can access the specified device code.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/check-user-access-device}
 */
export const checkUserAccessDevice = async (
    params: ICheckUserAccessDeviceParams,
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.CHECK_USER_ACCESS_DEVICE;
    const response = await jfwAxios.get<HttpResponse<boolean>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * # Create a device
 *
 * Create a device
 *
 * @param params - The params for creating a device.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/create-a-device}
 */
export const createDevice = async (
    params: ICreateDeviceParams,
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.CREATE_DEVICE;
    const response = await jfwAxios.post<HttpResponse<IDevice>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete a device
 *
 * Delete a device by the given id.
 *
 * @param id - The id of the device.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/delete-a-device}
 */
export const deleteDevice = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(DEVICE_PATH.DELETE_DEVICE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get a device
 *
 * Gets a device by the given id.
 *
 * @param id - The id of the device.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-a-device}
 */
export const getDevice = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(DEVICE_PATH.GET_DEVICE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IDevice>>(url, config);

    return response.data;
};

/**
 * # Get current device of the user authorized
 *
 * Get the current device of the user authenticated.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-current-device-access}
 */
export const getCurrentDeviceOfUserAuthorized = async (
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.GET_CURRENT_DEVICE_OF_USER_AUTHORIZED;
    const response = await jfwAxios.get<HttpResponse<IDevice>>(url, config);

    return response.data;
};

/**
 * # Get devices
 *
 * Get devices
 *
 * @param params - The params for getting devices.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-devices}
 */
export const getDevices = async (
    params?: IGetDevicesParams,
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.GET_DEVICES;
    const response = await jfwAxios.get<HttpResponseList<IDevice>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Refresh device token
 *
 * Refresh new token for device
 *
 * @param params - The params for refreshing device token.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/refresh-device-token}
 */
export const refreshDeviceToken = async (
    params?: IRefreshDeviceTokenParams,
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.REFRESH_DEVICE_TOKEN;
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Statistics device
 *
 * Statistics devices data.
 *
 * @param params - The params for getting statistics devices data.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/statistics}
 */
export const deviceStatistic = async (
    params?: IStatisticCommonParams,
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.STATISTICS;
    const response = await jfwAxios.get<HttpResponse<IStatisticCommon[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Updates the device data.
 *
 *
 * @param id - The id of the device.
 * @param params - The params for updating a device.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/update-a-device}
 */
export const updateDevice = async (
    id: IdType,
    params: IUpdateDeviceParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DEVICE_PATH.UPDATE_DEVICE, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<IDevice>>(
        url,
        params,
        config,
    );

    return response.data;
};
