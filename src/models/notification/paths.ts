const REST = 'notifications';

export const NOTIFICATION_PATH = {
    DELETE_NOTIFICATION: `v1/${REST}/{trackingNotificationId}`,
    GET_NOTIFICATIONS_BY_USER_AUTHORIZED: `v1/${REST}`,
    MARK_NOTIFICATION_AS_READ: `v1/${REST}/{trackingNotificationId}/read`,

    PUSH_NOTIFICATION_MESSAGE_FOR_TOKENS: `v1/${REST}/push-notification-messages`,
    PUSH_NOTIFICATION_DATA_MESSAGE_BY_TOKENS: `v1/${REST}/push-data-messages/by-token`,

    UPDATE_ALL_NOTIFICATION: `v1/${REST}/update-all-status`,
    UPDATE_STATUS_NOTIFICATIONS: `v1/${REST}/update-some-status`,
    UPDATE_STATUS_OF_NOTIFICATION: `v1/${REST}/{trackingNotificationId}/update-status`,
};
