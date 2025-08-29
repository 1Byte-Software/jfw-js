const REST = 'ads';

export const AD_PATH = {
    ACTIVATE_AD: `v1/${REST}/:id/activate`,
    CREATE_AD: `v1/${REST}`,
    DEACTIVATE_AD: `v1/${REST}/:id/deactivate`,
    DELETE_AD: `v1/${REST}/:id`,
    GET_ADS_WITH_CLIENT_VIEW: `v1/${REST}/client-view`,
    GET_ADS: `v1/${REST}`,
    GET_AD: `v1/${REST}/:id`,
    UPDATE_AD: `v1/${REST}/:id`,
};
