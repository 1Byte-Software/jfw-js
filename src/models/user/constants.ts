/**
 * Possible values:
 * - `1` - `EndUser`
 * - `700` - `Partner`
 * - `900` - `Admin`
 * - `999` - `SuperAdmin`
 */
export enum UserType {
    EndUser = 'EndUser',
    Partner = 'Partner',
    Admin = 'Admin',
    SuperAdmin = 'SuperAdmin',
}

/**
 * Possible values:
 * - `0` - `Inactive`
 * - `1` - `Active`
 * - `-3` - `Deleted`
 * - `-2` - `Suspended`
 * - `-1` - `Locked`
 */
export enum UserStatus {
    Inactive = 'Inactive',
    Active = 'Active',
    Deleted = 'Deleted',
    Suspended = 'Suspended',
    Locked = 'Locked',
}

/**
 * Possible values:
 * - `0` - `Offline`
 * - `1` - `Online`
 * - `-3` - `Deleted`
 */
export enum UserDeviceStatus {
    Offline = 'Offline',
    Online = 'Online',
    Deleted = 'Deleted',
}

/**
 * Possible values:
 * - `0` - `RedirectURL`
 * - `1` - `JsonFormat`
 */
export enum AuthenticationResponseType {
    RedirectURL = 'RedirectURL',
    JsonFormat = 'JsonFormat',
}

/**
 * Possible values:
 * - `0` - `Connected`
 * - `1` - `Unconnected`
 */
export enum BrandPartnerAuthenticateStatus {
    Connected = 'Connected',
    Unconnected = 'Unconnected',
}
