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
    eventId?: IdType;
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
    eventId: IdType;
    url: string;
    userAgent: string;
    userId: IdType;
}

//#endregion
