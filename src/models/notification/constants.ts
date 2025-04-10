// export const NOTIFICATION_STATUS = {
//     unread: 'Unread',
//     read: 'ReadEmailNotification',
//     takenAction: 'ReadEmailNotificationAndClickedTakenAction',
// };

export enum NotificationStatus {
    Unread = 'Unread',
    ReadEmailNotification = 'ReadEmailNotification',
    ReadEmailNotificationButNotYetTakenAction = 'ReadEmailNotificationButNotYetTakenAction',
    ReadEmailNotificationAndClickedTakenAction = 'ReadEmailNotificationAndClickedTakenAction',
}
