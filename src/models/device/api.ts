import { AxiosRequestConfig } from 'axios';
import {
    HttpResponse,
    HttpResponseList,
    IStatisticCommon,
    IStatisticCommonParams,
} from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { IUser } from '../user';
import { DEVICE_PATH } from './paths';
import {
    ICheckUserAccessDeviceParams,
    ICreateDeviceParams,
    IDevice,
    IGetDevicesParams,
    IRefreshDeviceTokenParams,
    IUpdateDeviceParams,
} from './types';

export class DeviceAPI extends AbstractAPI {
    /**
     * # Checks user access device
     *
     * Checks the user can access the specified device code.
     *
     * @param params - The params for checking whether the user can access the specified device code.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/check-user-access-device}
     */
    public async checkUserAccessDevice(
        params: ICheckUserAccessDeviceParams,
        config?: AxiosRequestConfig,
    ) {
        const url = DEVICE_PATH.CHECK_USER_ACCESS_DEVICE;
        const response = await this.axios.get<HttpResponse<boolean>>(url, {
            ...config,
            params,
        });

        return response.data;
    }

    /**
     * # Create a device
     *
     * Create a device
     *
     * @param params - The params for creating a device.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/create-a-device}
     */
    public async createDevice(
        params: ICreateDeviceParams,
        config?: AxiosRequestConfig,
    ) {
        const url = DEVICE_PATH.CREATE_DEVICE;
        const response = await this.axios.post<HttpResponse<IDevice>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a device
     *
     * Delete a device by the given id.
     *
     * @param id - The id of the device.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/delete-a-device}
     */
    public async deleteDevice(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(DEVICE_PATH.DELETE_DEVICE, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * Get a device by device code
     *
     *
     * @param deviceCode - The code of the device.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-a-device-by-code}
     */
    public async getDeviceByCode(
        deviceCode: string,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(DEVICE_PATH.GET_DEVICE_BY_CODE, {
            deviceCode,
        });

        const response = await this.axios.get<HttpResponse<IDevice>>(
            url,
            config,
        );
        return response.data;
    }

    /**
     * # Get a device
     *
     * Gets a device by the given id.
     *
     * @param id - The id of the device.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-a-device}
     */
    public async getDevice(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(DEVICE_PATH.GET_DEVICE, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IDevice>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get current device of the user authorized
     *
     * Get the current device of the user authenticated.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-current-device-access}
     */
    public async getCurrentDeviceOfUserAuthorized(config?: AxiosRequestConfig) {
        const url = DEVICE_PATH.GET_CURRENT_DEVICE_OF_USER_AUTHORIZED;
        const response = await this.axios.get<HttpResponse<IDevice>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get devices
     *
     * Get devices
     *
     * @param params - The params for getting devices.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-devices}
     */
    public async getDevices(
        params?: IGetDevicesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = DEVICE_PATH.GET_DEVICES;
        const response = await this.axios.get<HttpResponseList<IDevice>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get users from a device id
     *
     * Get users from a device.
     *
     * @param deviceId - The id of the device to get.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-users-from-a-device}
     */
    public async getUsersFromDeviceID(
        deviceId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(DEVICE_PATH.GET_USERS_FROM_DEVICE_ID, {
            deviceId,
        });
        const response = await this.axios.get<HttpResponse<IUser[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * @deprecated Use getUsersFromDeviceID instead.
     */
    public getUsersFromDevice = this.getUsersFromDeviceID;

    /**
     * # Get users from a device id
     *
     * Get users from a device.
     *
     * @param deviceCode - The code of the device to get.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/get-users-from-a-device-code}
     */
    public async getUsersFromDeviceCode(
        deviceCode: string,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(DEVICE_PATH.GET_USERS_FROM_DEVICE_CODE, {
            deviceCode,
        });
        const response = await this.axios.get<HttpResponse<IUser[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Refresh device token
     *
     * Refresh new token for device
     *
     * @param params - The params for refreshing device token.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/refresh-device-token}
     */
    public async refreshDeviceToken(
        params?: IRefreshDeviceTokenParams,
        config?: AxiosRequestConfig,
    ) {
        const url = DEVICE_PATH.REFRESH_DEVICE_TOKEN;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Statistics device
     *
     * Statistics devices data.
     *
     * @param params - The params for getting statistics devices data.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/statistics}
     */
    public async deviceStatistic(
        params?: IStatisticCommonParams,
        config?: AxiosRequestConfig,
    ) {
        const url = DEVICE_PATH.STATISTICS;
        const response = await this.axios.get<HttpResponse<IStatisticCommon[]>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * Updates the device data.
     *
     *
     * @param id - The id of the device.
     * @param params - The params for updating a device.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/devices/update-a-device}
     */
    public async updateDevice(
        id: IdType,
        params: IUpdateDeviceParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(DEVICE_PATH.UPDATE_DEVICE, {
            id,
        });
        const response = await this.axios.put<HttpResponse<IDevice>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
