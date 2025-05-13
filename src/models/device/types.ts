import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { IUser } from '../user';
import { DeviceStatus } from './constants';

/**
 * #JFW-309
 */
export interface IDevice {
    id: IdType;
    type: number | null;
    code: string;
    isMobileApp: boolean | null;

    userId: IdType;
    user?: IUser;

    token?: string | null;
    session?: string;

    tags?: string | null;
    status?: number | null;
    isDefault?: boolean | null;
    testMode?: boolean | null;
    name?: string | null;
    phoneNumber?: string | null;
    osDevice?: string | null;
    appVersionNumber?: string | null;
    iccid?: string | null;
    imsi?: string | null;
    imei?: string | null;
    simCardInfo?: string | null;
    createdDate: DateType;
}

//#region API types
export interface ICheckUserAccessDeviceParams {
    userId: IdType;
    deviceCode: string;
}

/**
 * Parameters for getting devices
 */
export interface IGetDevicesParams extends IPageable, ISortable {
    /**
     * Filter by id of the user
     */
    userId?: IdType;

    /**
     * The code to filter
     */
    code?: string;

    /**
     * The device name to filter
     */
    deviceName?: string;

    /**
     * The device token to filter
     */
    deviceToken?: string;

    /**
     * Filter with is mobile app
     */
    isMobileApp?: boolean;

    /**
     * The test mode to filter
     */
    testMode?: boolean;

    /**
     * The status to filter
     */
    status?: DeviceStatus;
}

/**
 * Device Command Request DTO
 * 
 * #JFW-281
 */
export interface ICreateDeviceData {
    /**
     * The id of the device. If the id is null, we get the current user authenticated.
     */
    userId?: IdType | null;

    /**
     * The type of the device.
     */
    type?: number | null;

    /**
     * The code of the device.
     */
    code?: string | null;

    /**
     * The token of the device.
     */
    token?: string | null;

    /**
     * The session of the device.
     */
    session?: string | null;

    /**
     * Flag indicating if the device is a mobile app.
     * @defaultValue false
     */
    isMobileApp?: boolean;

    /**
     * The tags of the device.
     */
    tags?: string | null;

    /**
     * The status of the device.
     * Possible values: 0 - Offline, 1 - Online, -3 - Deleted
     */
    status?: DeviceStatus;

    /**
     * Flag indicating if the device is the default device.
     */
    isDefault?: boolean | null;

    /**
     * The test mode of the device.
     */
    testMode?: boolean | null;

    /**
     * The name of the device.
     */
    name?: string | null;

    /**
     * The phone number of the device.
     */
    phoneNumber?: string | null;

    /**
     * The operating system of the device.
     */
    osDevice?: string | null;

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
}

export type IUpdateDeviceData = ICreateDeviceData;

//#endregion
