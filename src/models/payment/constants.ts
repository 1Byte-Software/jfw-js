/**
 * Possible values:
 * - `0` - `Waiting`
 * - `1` - `Completed`
 * - `2` - `Refunded`
 * - `3` - `Failed`
 * - `4` - `Pending`
 * - `5` - `Denied`
 * - `6` - `Reserved`
 * - `7` - `CanceledReversal`
 * - `-3` - `Deleted`
 * - `-2` - `Voided`
 * - `-1` - `Expired`
 */
export enum PaymentStatus {
    Waiting = 'Waiting',
    Completed = 'Completed',
    Refunded = 'Refunded',
    Failed = 'Failed',
    Pending = 'Pending',
    Denied = 'Denied',
    Reserved = 'Reserved',
    CanceledReversal = 'CanceledReversal',
    Deleted = 'Deleted',
    Voided = 'Voided',
    Expired = 'Expired',
}
