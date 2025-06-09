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
 * Possible values:
 * - `0` - `Inactive`
 * - `1` - `Active`
 */
export enum LicenseStatus {
    Inactive = 'Inactive',
    Active = 'Active',
}
