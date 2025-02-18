import { RawAxiosRequestHeaders } from 'axios';
import { get, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../asdas';
import { IListResponse, IResponse } from '../interfaces';
import { DEVICE_PATH } from './paths';
import { ICheckUserAccessParams, IDevice, IQueryDeviceParams } from './types';

/**
 * Gets the list off all devices by the given filter.
 */
export const queryDeviceAPI = async (
    params: IQueryDeviceParams,
): Promise<IListResponse<IDevice>> => {
    const url = DEVICE_PATH.QUERY;
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
 * Adds a new device to the user.
 * @feature Will make in feature
 */
export const createDeviceAPI = async () => {
    const url = DEVICE_PATH.CREATE;
};

/**
 * Gets a device data by the specified ID.
 */
export const getDeviceByIdAPI = async (deviceId: IdType): Promise<IDevice> => {
    const url = generatePath(DEVICE_PATH.GET_BY_ID, {
        id: deviceId,
    });

    const response = await get(url);

    return response.data;
};

/**
 * Delete a device by data ID.
 */
export const deleteDeviceByIdAPI = async (deviceId: IdType) => {
    const url = generatePath(DEVICE_PATH.DELETE_BY_ID, {
        id: deviceId,
    });

    return await remove(url);
};

/**
 * Updates the device data.
 * @feature Will make in feature
 */
export const updateDeviceById = (deviceId: IdType) => {
    const url = generatePath(DEVICE_PATH.UPDATE_BY_ID, {
        id: deviceId,
    });
};

/**
 * Check the user can access the specified device code.
 */
export const checkUserAccessAPI = async (
    params: ICheckUserAccessParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<boolean>> => {
    const url = DEVICE_PATH.CHECK_USER_ACCESS;

    const response = await get(url, { params }, userHeaders);

    return response;
};

/**
 * Gets list of devices by list of ids.
 * @feature Will make in feature
 */
export const getDevicesByIds = async (
    deviceIds: IdType[],
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = DEVICE_PATH.GET_BY_LIST_ID;
};

/**
 * Gets the current device information.
 * @feature Will make in the feature
 */
export const getDeviceCurrent = async () => {
    const url = DEVICE_PATH.GET_CURRENT;
};

/**
 * Gets the device data by specified code.
 * @feature Will make in the feature
 */
export const getDeviceByCode = async (deviceCode: string) => {
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
//     const response = await get(url, {
//         params,
//     });

//     return response.data;
// };
