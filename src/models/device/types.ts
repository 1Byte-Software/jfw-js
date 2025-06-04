import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { DeviceStatus } from './constants';

/**
 * This class represents the device DTO.
 */
export interface IDevice {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * The type of the device.
     *
     * @remarks int32
     */
    type: number;

    /**
     * The code of the device.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * Flag indicating if the device is a mobile app.
     */
    isMobileApp: boolean;

    /**
     * The tags of the device.
     */
    tags?: string | null;

    /**
     * The status of the device.
     *
     * @remarks enum
     */
    status: DeviceStatus;

    /**
     * Flag indicating if the device is the default device.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean | null;

    /**
     * The test mode of the device.
     */
    testMode: boolean;

    /**
     * The name of the device.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The phone number of the device.
     */
    phoneNumber?: string | null;

    /**
     * The operating system of the device.
     *
     * @remarks min: 1
     */
    osDevice: string;

    /**
     * The version of the operating system of the device.
     */
    appVersionNumber?: string | null;

    /**
     * The iccid of the device.
     */
    iccid?: string | null;

    /**
     * The imsi of the device.
     */
    imsi?: string | null;

    /**
     * The imei of the device.
     */
    imei?: string | null;

    /**
     * The sim card info of the device.
     */
    simCardInfo?: string | null;

    /**
     * Modified date.
     *
     * @remarks date-time
     */
    modifiedDate?: DateType | null;
}

//#region API types
export interface ICheckUserAccessDeviceParams {
    /**
     * The id of the user.
     */
    userId: IdType;

    /**
     * The device code of the user.
     */
    deviceCode: string;
}

/**
 * Parameters for getting devices
 */
export interface IGetDevicesParams extends IPageable, ISortable {
    /**
     * Filter by id of the user.
     */
    userId?: string;

    /**
     * The code to filter.
     */
    code?: string;

    /**
     * The device name to filter.
     */
    deviceName?: string;

    /**
     * The device token to filter.
     */
    deviceToken?: string;

    /**
     * Filter with is mobile app.
     */
    isMobileApp?: boolean;

    /**
     * The test mode to filter.
     */
    testMode?: boolean;

    /**
     * The status to filter.
     *
     * @remarks enum
     */
    status?: DeviceStatus;
}

/**
 * This class provides the Device Command Request Dto.
 */
export interface ICreateDeviceParams {
    /**
     * The type of the device.
     *
     * @remarks int32
     */
    type?: number | null;

    /**
     * The code of the device.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * Flag indicating if the device is a mobile app. By default, it is false.
     *
     * @defaultValue `false`
     */
    isMobileApp?: boolean;

    /**
     * The tags of the device.
     */
    tags?: string | null;

    /**
     * The status of the device.
     *
     * @remarks enum
     */
    status?: DeviceStatus | null;

    /**
     * Flag indicating if the device is the default device.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean | null;

    /**
     * The test mode of the device.
     */
    testMode?: boolean | null;

    /**
     * The name of the device.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The phone number of the device.
     */
    phoneNumber?: string | null;

    /**
     * The operating system of the device.
     *
     * @remarks min: 1
     */
    osDevice: string;

    /**
     * The version of the operating system of the device.
     *
     * @remarks min: 1
     */
    appVersionNumber: string;

    /**
     * The iccid of the device.
     */
    iccid?: string | null;

    /**
     * The imsi of the device.
     */
    imsi?: string | null;

    /**
     * The imei of the device.
     */
    imei?: string | null;

    /**
     * The sim card info of the device.
     */
    simCardInfo?: string | null;
}

export type IUpdateDeviceParams = ICreateDeviceParams;
//#endregion
