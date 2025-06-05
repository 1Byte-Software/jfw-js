import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { NotificationStatus } from './constants';

/**
 * Represents a notification object.
 */
export interface INotification {
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
     * The email subject.
     *
     * @remarks min: 1
     * @deprecated
     */
    emailSubject: string;

    /**
     * The title.
     *
     * @remarks min: 1
     */
    title: string;

    /**
     * The email body.
     *
     * @remarks min: 1
     * @deprecated
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
    actionURL?: string | null;

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
    sentTime?: DateType | null;

    /**
     * The seen at.
     *
     * @remarks date-time
     */
    seenAt?: DateType | null;

    /**
     * The status of the notification.
     *
     * @remarks enum
     */
    status: NotificationStatus;

    /**
     * Flag to indicate if the notification is in test mode.
     */
    testMode: boolean;
}

//#region API types
export interface IGetNotificationsByUserAuthorizedParams
    extends IPageable,
        ISortable {
    /**
     * The title of the notification.
     */
    title?: string;

    /**
     * The content of the notification.
     */
    content?: string;

    /**
     * The action url of the notification.
     *
     * @remarks uri
     */
    actionUrl?: string;

    /**
     * The category of the notification.
     */
    category?: string;

    /**
     * The topic of the notification.
     */
    topic?: string;

    /**
     * Flag to indicate if the notification is in test mode.
     */
    testMode?: boolean;

    /**
     * The status of the notification.
     *
     * @remarks enum
     */
    status?: NotificationStatus | null;
}

export interface IPushNotificationMessageForTokensParams {
    /**
     * The title of the notification.
     */
    title: string;

    /**
     * The body of the notification.
     */
    body: string;

    /**
     * The list of device tokens.
     */
    deviceTokens: string[];
}

export interface IPushNotificationResponse {
    /**
     * The count of success. This is the number of notifications that were successfully pushed.
     * 
     * @remarks int32
     */
    countSuccess: number;
}

export interface IUpdateStatusNotificationParams {
    /**
     * The id of the notification.
     */
    notificationIds: string[];

    /**
     * The status to update.
     */
    status: string;
}

//#endregion
