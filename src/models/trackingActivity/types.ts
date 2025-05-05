import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { IEvent } from '../event';
import { IBaseUser } from '../user';

export interface ITrackingActivity {
    id: IdType;
    userId: IdType;
    createdDate: DateType;
    description: string;
    deviceId: IdType;
    event: IEvent;
    longitude: number;
    latitude: number;
    location: string;
    browserName: string;
    os: string;
    ipAddress: string;
    url: string;
    eventId: IdType;
    user: IBaseUser;
}
//#region API types
export interface IGetTrackingActivitiesParams extends IPageable, ISortable {
    /** Filter by user id */
    userId?: IdType;
    /** Filter by device id */
    deviceId?: null;
    /** Filter by tracking event id */
    eventId?: IdType;
    /** Filter by the url requested */
    url?: string;
    /** Filter by the ip address */
    ipAddress?: string;
    /** Filter by the os */
    os?: string;
    /** Filter by the browser name */
    browserName?: string;
    /** Filter by the browser version */
    browserVersion?: string;
    /** Filter by the request from mobile */
    requestFromMobile?: boolean;
    /** Filter by the user agent */
    userAgent?: string;
    /** Filter by the location */
    location?: string;
    /** Filter by the latitude */
    latitude?: number;
    /** Filter by the longitude */
    longitude?: number;
    /** Filter by the description */
    description?: string;
    /** Filter by the tags */
    tags?: string;
    /** Filter by the keywords */
    keywords?: string;
}

export interface ICreateTrackingActivityParams {
    browserName: string;
    browserVersion: string;
    description: string;
    deviceId: null;
    ipAddress: string;
    latitude: number;
    location: string;
    longitude: number;
    os: string;
    requestFromMobile: boolean;
    eventId: IdType;
    url: string;
    userAgent: string;
    userId: IdType;
}

//#endregion
