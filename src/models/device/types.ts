import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { DeviceStatus, DeviceType } from './constants';

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
    type: DeviceType;

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
     * The name to filter.
     */
    name?: string;

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

    /**
     * The keywords to filter.
     */
    keywords?: string;
}

/**
 * This class provides the Device Command Request Dto.
 */
export interface ICreateDeviceParams {
    /**
     * The type of the device.
     *
     * @remarks enum
     */
    type: DeviceType;

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
    status?: DeviceStatus;

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

/**
 * Represents a request to refresh a mobile device token for Firebase push notifications.
 */
export interface IRefreshDeviceTokenParams {
    /**
     * The previous Firebase device token that is now obsolete.
     *
     * @remarks min: 1
     */
    oldToken: string;

    /**
     * The new Firebase device token to replace the old one.
     *
     * @remarks min: 1
     */
    newToken: string;
}
//#endregion
