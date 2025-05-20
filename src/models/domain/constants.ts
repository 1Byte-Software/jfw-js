/**
 * Possible values:
 * - `1` - `Admin`
 * - `2` - `CPanel`
 * - `3` - `Client`
 * - `4` - `Protocol`
 */
export enum DomainType {
    CPanel = 'CPanel',
    Admin = 'Admin',
    Client = 'Client',
    Protocol = 'Protocol',
}

/**
 * Possible values:
 * - `0` - `Http`
 * - `1` - `Https`
 */
export enum DomainProtocol {
    Http = 'Http',
    Https = 'Https',
}
