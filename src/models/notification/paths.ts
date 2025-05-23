const REST = 'notifications';

export const NOTIFICATION_PATH = {
    DELETE_BY_ID: `v1/${REST}/:trackNotificationId`,
    GET_NOTIFICATION_BY_USER_AUTHORIZED: `v1/${REST}`,
    MARK_AS_READ: `v1/${REST}/:trackNotificationId/read`,

    PUSH_NOTIFICATION_MESSAGE_FOR_TOKENS: `v1/${REST}/push-notification-messages`,
    PUSH_NOTIFICATION_DATA_MESSAGE_BY_GIVEN_DEVICE_CODES: `v1/${REST}/push-data-messages`,
    PUSH_NOTIFICATION_DATA_MESSAGE_BY_TOKENS: `v1/${REST}/push-data-messages/by-token`,
    PUSH_NOTIFICATION_DATA_MESSAGE_BY_DEVICES: `v1/${REST}/push-data-messages/by-id`,

    UPDATE_ALL_NOTIFICATION: `v1/${REST}/update-all-status`,
    UPDATE_STATUS_NOTIFICATIONS: `v1/${REST}/update-some-status`,
    UPDATE_STATUS_OF_NOTIFICATION: `v1/${REST}/:trackNotificationId/update-status`,
};
