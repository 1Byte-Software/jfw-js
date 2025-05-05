import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import {
    TrackingEmailNotificationChannelType,
    TrackingEmailNotificationType,
    TrackingEmailStatus,
} from './constants';

export interface ITrackingEmail {
    id: IdType;
    countryCode: string;
    languageCode: string | null;
    notificationType: TrackingEmailNotificationType;
    notificationChannelType: TrackingEmailNotificationChannelType;
    emailFrom: string;
    emailTo: string;
    emailCc: string;
    emailBcc: string;
    emailSubject: string;
    emailBody: string;
    sentTime: DateType;
    testMode: boolean;
    tags: string | null;
    status: TrackingEmailStatus;
    createdDate: DateType;
}
//#region API types
export interface IGetTrackingEmailsParams extends IPageable, ISortable {
    /** The id of the user. */
    userId?: string;
    /** The id of the event. */
    eventId?: string;
    /** The country code. This is a two letter country code. */
    countryCode?: string;
    /** The language code. This is a two letter language code. */
    languageCode?: string;
    /**
     * The notification type.
     * Possible values:
     * - 0: System
     * - 1: User
     */
    type?: TrackingEmailNotificationType;
    /**
     * The notification channel type.
     * Possible values:
     * - 0: None
     * - 1: Inbox
     * - 2: Email
     * - 3: InboxAndEmail
     * - 4: Sms
     * - 5: InboxAndSms
     * - 6: EmailAndSms
     * - 7: InboxAndEmailAndSms
     */
    notificationChannelType?: TrackingEmailNotificationChannelType;
    /** The email from. */
    emailFrom?: string;
    /** The email to. */
    emailTo?: string;
    /** The email cc. */
    emailCc?: string;
    /** The email bcc. */
    emailBcc?: string;
    /** The email subject. */
    emailSubject?: string;
    /** The email body. */
    emailBody?: string;
    /** Flag to indicate if the email is in test mode. */
    testMode?: boolean;
    /** The tags. */
    tags?: string;
    /**
     * The status of the tracking email.
     * Possible values:
     * - 0: Unread
     * - 1: ReadEmailNotification
     * - 2: ReadEmailNotificationButNotYetTakenAction
     * - 3: ReadEmailNotificationAndClickedTakenAction
     */
    status?: TrackingEmailStatus;

    /** Filter by the keywords. */
    keywords?: string;
}

//#endregion
