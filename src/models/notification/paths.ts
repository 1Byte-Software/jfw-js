const REST = 'notifications';

export const NOTIFICATION_PATH = {
    DELETE_BY_ID: `${REST}/:trackNotificationId`,
    GET_NOTIFICATION_BY_USER_AUTHORIZED: `${REST}`,
    MARK_AS_READ: `${REST}/:trackNotificationId/read`,

    PUSH_NOTIFICATION_MESSAGE_FOR_TOKENS: `${REST}/push-notification-messages`,
    PUSH_NOTIFICATION_DATA_MESSAGE_BY_GIVEN_DEVICE_CODES: `${REST}/push-data-messages`,
    PUSH_NOTIFICATION_DATA_MESSAGE_BY_TOKENS: `${REST}/push-data-messages/by-token`,
    PUSH_NOTIFICATION_DATA_MESSAGE_BY_DEVICES: `${REST}/push-data-messages/by-id`,

    UPDATE_ALL_NOTIFICATION: `${REST}/update-all-status`,
    UPDATE_STATUS_NOTIFICATIONS: `${REST}/update-some-status`,
    UPDATE_STATUS_OF_NOTIFICATION: `${REST}/:trackNotificationId/update-status`,
};
