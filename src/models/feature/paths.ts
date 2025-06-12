const REST = 'features';
const REST_PACKAGE = 'packages';

export const FEATURE_PATH = {
    ADD_PACKAGES_TO_FEATURE: `v1/${REST}/{featureId}/${REST_PACKAGE}`,
    CREATE_FEATURE: `v1/${REST}`,
    DELETE_FEATURE: `v1/${REST}/{id}`,
    GET_FEATURE: `v1/${REST}/{id}`,
    GET_FEATURES: `v1/${REST}`,
    GET_PACKAGES_FROM_FEATURE: `v1/${REST}/{id}/${REST_PACKAGE}`,
    REMOVE_PACKAGES_FROM_FEATURE: `v1/${REST}/{featureId}/${REST_PACKAGE}`,
    UPDATE_FEATURE: `v1/${REST}/{id}`,

};
