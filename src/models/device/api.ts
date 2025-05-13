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
    ICreateDeviceData,
    IDevice,
    IGetDevicesParams,
    IUpdateDeviceData,
} from './types';

/**
 * Checks the user can access the specified device code.
 *
 * @param params - The parameters for checking whether the user can access the specified device code.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/check-user-access-device}
 */
export const checkUserAccessDeviceAPI = async (
    params: ICheckUserAccessDeviceParams,
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.CHECK_USER_ACCESS_DEVICE;
    const response = await jfwAxios.get<HttpResponse<null>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Adds a new device to the user.
 *
 * @param data - The data for adding a new device to the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/create-a-device}
 * #JFW-281, #JFW-295
 */
export const createDeviceAPI = async (
    data: ICreateDeviceData,
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.CREATE_DEVICE;
    const response = await jfwAxios.post<HttpResponse<IDevice>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Delete a device by the given id.
 *
 * @param id - The id of the device.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/delete-a-device}
 */
export const deleteDeviceAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DEVICE_PATH.DELETE_DEVICE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets a device by the given id.
 *
 * @param id - The id of the device.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-a-device}
 */
export const getDeviceAPI = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(DEVICE_PATH.GET_DEVICE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IDevice>>(url, config);

    return response.data;
};

/**
 * Get the current device of the user authenticated.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-current-device-access}
 */
export const getCurrentDeviceOfUserAuthorizedAPI = async (
    config?: AxiosRequestConfig,
) => {
    const url = DEVICE_PATH.GET_CURRENT_DEVICE_OF_USER_AUTHORIZED;
    const response = await jfwAxios.get<HttpResponse<IDevice>>(url, config);

    return response.data;
};

/**
 * Get devices
 *
 * @param params - The parameters for getting devices.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-devices}
 */
export const getDevicesAPI = async (
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
 * Statistics devices data.
 *
 * @param params - The parameters for getting devices.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/statistics}
 */
export const deviceStatisticAPI = async (
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
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/update-a-device}
 * #JFW-281
 */
export const updateDeviceAPI = async (
    deviceId: IdType,
    data: IUpdateDeviceData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DEVICE_PATH.UPDATE_DEVICE, {
        id: deviceId,
    });
    const response = await jfwAxios.put(url, data, config);

    return response.data;
};
