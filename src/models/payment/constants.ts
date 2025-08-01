/**
 * Possible values:
 * - `0` - `Created`
 * - `1` - `Completed`
 * - `2` - `Refunded`
 * - `3` - `Failed`
 * - `4` - `Pending`
 * - `5` - `Denied`
 * - `6` - `Reserved`
 * - `7` - `CanceledReversal`
 * - `-2` - `Deleted`
 * - `-1` - `Voided`
 */
export enum PaymentStatus {
    Created = 'Created',
    Completed = 'Completed',
    Refunded = 'Refunded',
    Failed = 'Failed',
    Pending = 'Pending',
    Denied = 'Denied',
    Reserved = 'Reserved',
    CanceledReversal = 'CanceledReversal',
    Deleted = 'Deleted',
    Voided = 'Voided',
}
