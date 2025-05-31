import { IdType } from '../base';
import { NotificationStatus } from './constants';

export interface INotification {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: string;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: string | null;

    /**
     * @deprecated
     * The email subject.
     *
     * @remarks min: 1
     * @readonly
     */
    emailSubject: string;

    /**
     * The title.
     *
     * @remarks min: 1
     */
    title: string;

    /**
     * @deprecated
     * The email body.
     *
     * @remarks min: 1
     * @readonly
     */
    emailBody: string;

    /**
     * The content.
     *
     * @remarks min: 1
     */
    content: string;

    /**
     * The action url.
     *
     * @remarks uri
     */
    actionUrl?: string | null;

    /**
     * The category.
     */
    category?: string | null;

    /**
     * The topic.
     */
    topic?: string | null;

    /**
     * The time to sent notification.
     *
     * @remarks date-time
     */
    sentTime?: string | null;

    /**
     * The seen at.
     *
     * @remarks date-time
     */
    seenAt?: string | null;

    /**
     * The status of the notification.
     *
     * @remarks enum
     * Possible values:
     * - 0 - Unread
     * - 1 - ReadEmailNotification
     * - 2 - ReadEmailNotificationButNotYetTakenAction
     * - 3 - ReadEmailNotificationAndClickedTakenAction
     */
    status: NotificationStatus;

    /**
     * Flag to indicate if the notification is in test mode.
     */
    testMode: boolean;
}

//#region API types

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
