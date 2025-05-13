/**
 * Define an object to represent different payment status.
 *
 * @deprecated use PaymentStatus enum instead.
 */
export const PAYMENT_STATUS = {
    voided: 'Voided',
    expired: 'Expired',
    waiting: 'Waiting',
    completed: 'Completed',
    refunded: 'Refunded',
    failed: 'Failed',
    pending: 'Pending',
    denied: 'Denied',
    reserved: 'Reserved',
    canceledReversal: 'Canceled Reversal',
};

/**
 * Define an array of payment status options for selection in a dropdown or similar UI component
 * @deprecated Will delete in feature. This code should not be defined in jfw-js, this is front end business.
 */
export const PAYMENT_STATUS_OPTIONS = [
    {
        label: 'Voided',
        value: 'Voided',
    },
    {
        label: 'Expired',
        value: 'Expired',
    },
    {
        label: 'Waiting',
        value: 'Waiting',
    },
    {
        label: 'Completed',
        value: 'Completed',
    },
    {
        label: 'Refunded',
        value: 'Refunded',
    },
    {
        label: 'Failed',
        value: 'Failed',
    },
    {
        label: 'Pending',
        value: 'Pending',
    },
    {
        label: 'Denied',
        value: 'Denied',
    },
    {
        label: 'Reserved',
        value: 'Reserved',
    },
    {
        label: 'Canceled Reversal',
        value: 'Canceled Reversal',
    },
];

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
