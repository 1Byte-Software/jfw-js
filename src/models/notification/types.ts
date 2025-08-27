import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, ISegmentCondition } from '../base';
import {
    NotificationChannel,
    NotificationStatus,
    NotificationType,
} from './constants';

/**
 * Represents a notification object.
 */
export interface INotification extends IBaseObject {
    /**
     * The title.
     *
     * @remarks min: 1
     */
    title: string;

    type: NotificationType;

    channel: NotificationChannel;

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
     * Set of key-value pairs that you can attach to an object.
     * This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;

    /**
     * The scheduled date.
     */
    scheduledDate?: DateType | null;

    /**
     * #NOTE: Check me again in future. After complete docs.
     */
    status: NotificationStatus;

    /**
     * Flag to indicate if the notification is in test mode.
     */
    testMode: boolean;
}

//#region API types
export interface IGetNotificationsParams extends IPageable, ISortable {
    /**
     * The type of the notification.
     */
    type?: NotificationType;

    /**
     * The channel of the notification.
     */
    channel?: NotificationChannel;

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

export interface ICreateNotificationParams {
    /**
     * The main title of the notification. Displayed prominently to the user.
     *
     * @remarks min: 1
     */
    title: string;

    type: NotificationType;

    channel: NotificationChannel;

    /**
     * The main message or body of the notification.
     *
     * @remarks min: 1
     */
    content: string;

    /**
     * The action url. Deep link URL for action buttons.
     *
     * @remarks uri
     */
    actionURL?: string | null;

    /**
     * A general grouping or category label for notifications, useful for organizing and filtering.
     */
    category?: string | null;

    /**
     * A more specific sub-label or theme related to the notification, such as a campaign name or feature tag.
     */
    topic?: string | null;

    /**
     * Set of key-value pairs that you can attach to an object.
     * This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;

    /**
     * The date and time at which the notification should be sent.
     * If null, it will be sent immediately.
     */
    scheduledDate?: DateType | null;

    /**
     * The conditions to filter the recipients.
     */
    conditions?: Record<string, ISegmentCondition> | null;
}

//#endregion
