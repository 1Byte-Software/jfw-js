export enum UserType {
    EndUser = 'EndUser',
    Partner = 'Partner',
    Admin = 'Admin',
    SuperAdmin = 'SuperAdmin',
}

export enum UserStatus {
    Inactive = 'Inactive',
    Active = 'Active',
    Deleted = 'Deleted',
    Suspended = 'Suspended',
    Locked = 'Locked',
}

export enum UserDeviceStatus {
    Offline = 'Offline',
    Online = 'Online',
    Deleted = 'Deleted',
}

export enum AuthenticationResponseType {
    RedirectURL = 'RedirectURL',
    JsonFormat = 'JsonFormat',
}

export enum BrandPartnerAuthenticateStatus {
    Connected = 'Connected',
    Unconnected = 'Unconnected',
}

export enum UserNotificationStatus {
    Unread = 'Unread',
    ReadEmailNotification = 'ReadEmailNotification',
    ReadEmailNotificationButNotYetTakenAction = 'ReadEmailNotificationButNotYetTakenAction',
    ReadEmailNotificationAndClickedTakenAction = 'ReadEmailNotificationAndClickedTakenAction',
}

export enum CodeParingDevicesAuthenticationStatus {
    New = 'New',
    Approved = 'Approved',
    Consumed = 'Consumed',
}
