import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { NotificationStatus } from './constants';

export interface INotification extends IBaseObject {
    patternCode: string;
    supportCode: string;

    emailBody: string;
    emailSubject: string;
    status: string;
}

//#region API types
export interface IGetNotificationsByUserAuthorizedParams
    extends IPageable,
        ISortable {
    countryCode?: string;
    languageCode?: string;

    notificationType?: string;
    notificationChannelType?: string;

    emailFrom?: string;
    emailTo?: string;
    emailCc?: string;
    emailBcc?: string;
    emailSubject?: string;
    emailBody?: string;
    testMode?: boolean;

    tags?: string;
    status?: NotificationStatus;
}

export interface IPushNotificationMessageForTokensParams {
    title: string;
    body: string;
    deviceTokens: string[];
}

export interface IPushNotificationResponse {
    countSuccess: number;
}

export interface IPushNotificationDataMessageByGivenDeviceCodeParams {
    deviceCodes: string[];
}

export interface IPushNotificationDataMessageByTokensParams {
    deviceTokens: string[];
}

export interface IPushNotificationDataMessageByDevicesParams {
    deviceIds: IdType[];
}

export interface IUpdateStatusNotificationParams {
    notificationIds: IdType[];
    status: string;
}

//#endregion
