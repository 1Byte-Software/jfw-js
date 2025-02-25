import { IPageable, ISortable } from '../../core';
import { IBaseObject } from '../base';

export interface INotification extends IBaseObject {
    patternCode: string;
    supportCode: string;

    emailBody: string;
    emailSubject: string;
    status: string;
}

//#region API types
export interface IQueryNotificationParams extends IPageable, ISortable {
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
    status?: string;
}

//#endregion
