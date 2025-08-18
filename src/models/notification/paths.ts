const REST = 'notifications';

export const NOTIFICATION_PATH = {
    PUSH_NOTIFICATION_MESSAGE_FOR_TOKENS: `v1/${REST}/push-notification-messages`,
    PUSH_NOTIFICATION_DATA_MESSAGE_BY_TOKENS: `v1/${REST}/push-data-messages/by-token`,

    GET_NOTIFICATIONS: `v1/${REST}`,
    GET_NOTIFICATION: `v1/${REST}/{notificationId}`,
    CREATE_NOTIFICATION: `v1/${REST}`,

};
