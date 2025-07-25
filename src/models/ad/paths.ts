const REST = 'ads';

export const AD_PATH = {
    CREATE_AD: `v1/${REST}`,
    GET_ADS: `v1/${REST}`,
    GET_AD: `v1/${REST}/:id`,
    UPDATE_AD: `v1/${REST}/:id`,
    DELETE_AD: `v1/${REST}/:id`,
    GET_ADS_WITH_CLIENT_VIEW: `v1/${REST}/client-view`,
    ACTIVATE_AD: `v1/${REST}/:id/activate`,
    DEACTIVATE_AD: `v1/${REST}/:id/deactivate`,
};
