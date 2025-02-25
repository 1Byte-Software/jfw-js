const REST = 'notifications';

export const NOTIFICATION_PATH = {
    QUERY: `${REST}`,

    MARK_AS_READ: `${REST}/:trackNotificationId/read`,
    UPDATE_STATUS: `${REST}/:trackNotificationId/update-status`,
    UPDATE_ALL_STATUS: `${REST}/update-all-status`,
    PUSH_DEVICE: `${REST}/push-device`,
    PUSH_DATA_MESSAGE: `${REST}/push-data-messages`,

    DELETE_BY_ID: `${REST}/:trackNotificationId`,
};
