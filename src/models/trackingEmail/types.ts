import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import {
    TrackingEmailNotificationChannelType,
    TrackingEmailNotificationType,
    TrackingEmailStatus,
} from './constants';

export interface ITrackingEmail {
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
    createdDate?: DateType | null;

    /**
     * The country code.
     */
    countryCode?: string | null;

    /**
     * The language code.
     */
    languageCode?: string | null;

    /**
     * @remarks enum
     */
    notificationType?: TrackingEmailNotificationType | null;

    /**
     * @remarks enum
     */
    notificationChannelType?: TrackingEmailNotificationChannelType | null;

    /**
     * The email from.
     *
     * @remarks min: 1
     */
    emailFrom: string;

    /**
     * The email to.
     *
     * @remarks min: 1
     */
    emailTo: string;

    /**
     * The email cc.
     */
    emailCc?: string | null;

    /**
     * The email bcc.
     */
    emailBcc?: string | null;

    /**
     * The email subject.
     */
    emailSubject?: string | null;

    /**
     * The email body.
     *
     * @remarks min: 1
     */
    emailBody: string;

    /**
     * The time sent.
     *
     * @remarks date-time
     */
    sentTime: DateType;

    /**
     * The test mode of the tracking email.
     */
    testMode: boolean;

    /**
     * The tags.
     */
    tags?: string | null;

    /**
     * @remarks enum
     */
    status?: TrackingEmailStatus | null;
}

//#region API types
export interface IGetTrackingEmailsParams extends IPageable, ISortable {
    /**
     * The id of the user.
     */
    userId?: IdType;

    /**
     * The id of the event.
     */
    eventId?: IdType;

    /**
     * The country code. This is a two letter country code.
     */
    countryCode?: string;

    /**
     * The language code. This is a two letter language code.
     */
    languageCode?: string;

    /**
     * The notification type.
     *
     * @remarks enum
     */
    type?: TrackingEmailNotificationType;

    /**
     * The notification channel type.
     *
     * @remarks enum
     */
    notificationChannelType?: TrackingEmailNotificationChannelType;

    /**
     * The email from.
     */
    emailFrom?: string;

    /**
     * The email to.
     */
    emailTo?: string;

    /**
     * The email cc.
     */
    emailCc?: string;

    /**
     * The email bcc.
     */
    emailBcc?: string;

    /**
     * The email subject.
     */
    emailSubject?: string;

    /**
     * The email body.
     */
    emailBody?: string;

    /**
     * Flag to indicate if the email is in test mode.
     */
    testMode?: boolean;

    /**
     * Filter by keywords.
     */
    keywords?: string;

    /**
     * The tags.
     */
    tags?: string;

    /**
     * The status of the tracking email.
     *
     * @remarks enum
     */
    status?: TrackingEmailStatus;
}
//#endregion
