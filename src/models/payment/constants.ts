// Define an object to represent different payment status.
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

// Define an array of payment status options for selection in a dropdown or similar UI component
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
