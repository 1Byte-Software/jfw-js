import { IBaseParameters, IPageable, ISortable } from '../../../core';
import { NotificationStatus } from '../constants';

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
     * Possible values:
     * - 0 - Unread
     * - 1 - ReadEmailNotification
     * - 2 - ReadEmailNotificationButNotYetTakenAction
     * - 3 - ReadEmailNotificationAndClickedTakenAction
     */
    status?: NotificationStatus | null;
}
