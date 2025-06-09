/**
 * Possible values
 * - `1` - `Authenticate`
 * - `2` - `CDN`
 * - `3` - `PaymentGateway`
 * - `4` - `PushNotification`
 * - `5` - `SMS`
 * - `6` - `SMTP`
 */
export enum AppIntegrationType {
    Authenticate = 'Authenticate',
    SMTP = 'SMTP',
    CDN = 'CDN',
    SMS = 'SMS',
    PushNotification = 'PushNotification',
    PaymentGateway = 'PaymentGateway',
}

/**
 * Possible values
 * - `0` - `Inactive`
 * - `1` - `Active`
 */
export enum AppIntegrationStatus {
    Inactive = 'Inactive',
    Active = 'Active',
}
