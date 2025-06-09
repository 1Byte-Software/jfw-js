/**
 * Possible values:
 * - `0` - `Inactive`
 * - `1` - `Active`
 * - `-3` - `Deleted`
 * - `-2` - `Suspended`
 * - `-1` - `Locked`
 */
export enum DeviceStatus {
    Inactive = 'Inactive',
    Active = 'Active',
    Deleted = 'Deleted',
    Suspended = 'Suspended',
    Locked = 'Locked',
}
