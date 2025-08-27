export enum TrackingEmailStatus {
    Unread = 'Unread',
    ReadEmailNotification = 'ReadEmailNotification',
    ReadEmailNotificationButNotYetTakenAction = 'ReadEmailNotificationButNotYetTakenAction',
    ReadEmailNotificationAndClickedTakenAction = 'ReadEmailNotificationAndClickedTakenAction',
}

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

export enum TrackingEmailNotificationType {
    System = 'System',
    User = 'User',
}
