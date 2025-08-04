/**
 * Possible values:
 * - `1` - `ChromeOS`
 * - `2` - `Desktop`
 * - `3` - `GoogleSync`
 * - `4` - `Mobile`
 * - `5` - `SmartDevice`
 * - `6` - `Unspecified`
 * - `7` - `Web`
 */
export enum DeviceType {
    ChromeOS = 'ChromeOS',
    Desktop = 'Desktop',
    GoogleSync = 'GoogleSync',
    Mobile = 'Mobile',
    SmartDevice = 'SmartDevice',
    Unspecified = 'Unspecified',
    Web = 'Web',
}

/**
 * Possible values:
 * - `0` - `Inactive`
 * - `1` - `Active`
 * - `-2` - `Suspended`
 * - `-1` - `Locked`
 */
export enum DeviceStatus {
    Inactive = 'Inactive',
    Active = 'Active',
    Suspended = 'Suspended',
    Locked = 'Locked',
}
