import { DateType, IdType } from '../base';
import { IPageable, ISortable } from '../../core';
import { ITrackingEvent } from '../trackingEvent';
import { IUser } from '../user';

export interface ITrackingActivity {
    id: IdType;
    userId: IdType;
    createdDate: DateType;
    description: string;
    longitude: number;
    latitude: number;
    location: string;
    browserName: string;
    os: string;
    ipAddress: string;
    url: string;
    trackingEventId: IdType;
    user?: IUser;
    trackingEvent?: ITrackingEvent;
}
//#region API types
export interface IGetTrackingActivitiesParams extends IPageable, ISortable {
    keywords?: string;
    browserName?: string;
    browserVersion?: string;
    description?: string;
    deviceId?: null;
    ipAddress?: string;
    latitude?: number;
    location?: string;
    longitude?: number;
    os?: string;
    requestFromMobile?: boolean;
    trackingEventId?: IdType;
    url?: string;
    userAgent?: string;
    userId?: IdType;
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
    trackingEventId: IdType;
    url: string;
    userAgent: string;
    userId: IdType;
}

//#endregion
