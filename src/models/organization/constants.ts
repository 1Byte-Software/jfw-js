/**
 * Possible values:
 * - `0` - Inactive
 * - `1` - Active
 */
export enum OrganizationStatus {
    Inactive = 'Inactive',
    Active = 'Active',
}
/**
 * Possible values:
 * - `0` - `Waiting`
 * - `0` - `Pending`
 * - `1` - `Joined`
 * - `-4` - `Banned`
 * - `-2` - `Leave`
 * - `-2` - `Left`
 * - `-1` - `Denied`
 * - `-1` - `Deny`
 */
export enum OrganizationUserStatus {
    Waiting = 'Waiting',
    Pending = 'Pending',
    Joined = 'Joined',
    Banned = 'Banned',
    Leave = 'Leave',
    Left = 'Left',
    Denied = 'Denied',
    Deny = 'Deny',
}
