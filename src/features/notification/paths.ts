const REST = 'notifications';

export const NOTIFICATION_PATH = {
    CREATE_BROADCAST: `v1/${REST}`,
    GET_NOTIFICATIONS: `v1/${REST}`,

    PUSH_NOTIFICATION_MESSAGE_FOR_TOKENS: `v1/${REST}/push-notification-messages`,
    PUSH_NOTIFICATION_DATA_MESSAGE_BY_TOKENS: `v1/${REST}/push-data-messages/by-token`,
    TEST_PUSH_NOTIFICATION_DATA_MESSAGE: `v1/${REST}/push-data-messages/test`,

    GET_NOTIFICATION: `v1/${REST}/{notificationId}`,
};
