/**
 * Possible values:
 * - `0` - `Provisional`
 * - `1` - `Post`
 */
export enum InvoiceType {
    Provisional = 'Provisional',
    Post = 'Post',
}

/**
 * Possible values:
 * - `0` - `Unpaid`
 * - `1` - `Paid`
 */
export enum InvoiceStatus {
    Unpaid = 'Unpaid',
    Paid = 'Paid',
}
