/**
 * Possible values:
 * - `0` - `Unknown`
 * - `1` - `LicesnePurchase`
 * - `3` - `Payment`
 * - `4` - `Refund`
 * - `5` - `Void`
 * - `6` - `Capture`
 * - `7` - `Authorization`
 * - `8` - `Reversal`
 * - `9` - `Inquiry`
 * - `20` - `WalletAddMoney`
 * - `21` - `WalletWithdraw`
 * - `22` - `WalletEarningCoin`
 * - `23` - `WalletRedeem`
 * - `24` - `WalletConvert`
 */
// JFW-514
export enum WalletHistoryType {
    Unknown = 'Unknown',
    LicesnePurchase = 'LicesnePurchase',
    Payment = 'Payment',
    Refund = 'Refund',
    Void = 'Void',
    Capture = 'Capture',
    Authorization = 'Authorization',
    Reversal = 'Reversal',
    Inquiry = 'Inquiry',
    WalletAddMoney = 'WalletAddMoney',
    WalletWithdraw = 'WalletWithdraw',
    WalletEarningCoin = 'WalletEarningCoin',
    WalletRedeem = 'WalletRedeem',
    WalletConvert = 'WalletConvert',
}

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
export enum WalletHistoryStatus {
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
