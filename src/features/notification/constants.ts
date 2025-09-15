export enum NotificationStatus {
    Sent = 'Sent',
    Processing = 'Processing',
    Scheduled = 'Scheduled',
}

export enum NotificationType {
    Broadcast = 'Broadcast',
    Personal = 'Personal',
    Segment = 'Segment',
}

export enum NotificationChannel {
    Unknown = 'Unknown',
    Email = 'Email',
    SMS = 'SMS',
    Push = 'Push',
    InApp = 'InApp',
    Webhook = 'Webhook',
}
