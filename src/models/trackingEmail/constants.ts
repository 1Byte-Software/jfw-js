/**
 * Possible values:
 * - `0` - `Unread`
 * - `1` - `ReadEmailNotification`
 * - `2` - `ReadEmailNotificationButNotYetTakenAction`
 * - `3` - `ReadEmailNotificationAndClickedTakenAction`
 */
export enum TrackingEmailStatus {
    Unread = 'Unread',
    ReadEmailNotification = 'ReadEmailNotification',
    ReadEmailNotificationButNotYetTakenAction = 'ReadEmailNotificationButNotYetTakenAction',
    ReadEmailNotificationAndClickedTakenAction = 'ReadEmailNotificationAndClickedTakenAction',
}

/**
 * Possible values:
 * - `0` - `None`
 * - `1` - `Inbox`
 * - `2` - `Email`
 * - `3` - `InboxAndEmail`
 * - `4` - `Sms`
 * - `5` - `InboxAndSms`
 * - `6` - `EmailAndSms`
 * - `7` - `InboxAndEmailAndSms`
 */
export enum TrackingEmailNotificationChannelType {
    None = 'None',
    Inbox = 'Inbox',
    Email = 'Email',
    InboxAndEmail = 'InboxAndEmail',
    Sms = 'Sms',
    InboxAndSms = 'InboxAndSms',
    EmailAndSms = 'EmailAndSms',
    InboxAndEmailAndSms = 'InboxAndEmailAndSms',
}

/**
 * Possible values:
 * - `0` - `System`
 * - `1` - `User`
 */
export enum TrackingEmailNotificationType {
    System = 'System',
    User = 'User',
}
