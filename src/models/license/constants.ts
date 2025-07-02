/**
 * Possible values:
 * - `1` - `Normal`
 * - `2` - `Refunded`
 * - `3` - `Prepaid`
 * - `4` - `MailDelivery`
 */
export enum LicenseType {
    Normal = 'Normal',
    Refunded = 'Refunded',
    Prepaid = 'Prepaid',
    MailDelivery = 'MailDelivery',
}

/**
 * The status of a license, based on its current lifecycle.
 *
 * Possible values:
 *
 * - `NotStarted (-2)`: Current date is before the license’s start date.
 * - `Expired (-1)`: Current date is past the license’s end date.
 * - `Inactive (0)`: License was revoked or manually deactivated before expiry.
 * - `Active (1)`: Current date is within the license's start and end date. License is valid and in use.
 * - `Used (2)`: License has already been activated and consumed, especially for single-use licenses.
 */
export enum LicenseStatus {
    NotStarted = 'NotStarted',
    Expired = 'Expired',
    Inactive = 'Inactive',
    Active = 'Active',
    Used = 'Used',
}
