const REST = 'configurations';

export const CONFIGURATION_PATH = {
    CREATE_CONFIGURATION: `v1/${REST}`,
    DELETE_CONFIGURATION: `v1/${REST}/:id`,
    GET_CONFIGURATIONS: `v1/${REST}`,
    GET_CONFIGURATION: `v1/${REST}/:id`,
    UPDATE_CONFIGURATION: `v1/${REST}/:id`,
};
