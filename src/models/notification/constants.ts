/**
 * Possible values:
 * - `0` - `Unread`
 * - `1` - `ReadEmailNotification`
 * - `2` - `ReadEmailNotificationButNotYetTakenAction`
 * - `3` - `ReadEmailNotificationAndClickedTakenAction`
 */
export enum NotificationStatus {
    Unread = 'Unread',
    ReadEmailNotification = 'ReadEmailNotification',
    ReadEmailNotificationButNotYetTakenAction = 'ReadEmailNotificationButNotYetTakenAction',
    ReadEmailNotificationAndClickedTakenAction = 'ReadEmailNotificationAndClickedTakenAction',
}
