const REST = 'features';
const REST_PACKAGE = 'packages';

export const FEATURE_PATH = {
    CREATE_FEATURE: `v1/${REST}`,
    DELETE_FEATURE: `v1/${REST}/{id}`,
    GET_FEATURE: `v1/${REST}/{id}`,
    GET_FEATURES: `v1/${REST}`,
    UPDATE_FEATURE: `v1/${REST}/{id}`,

    GET_PACKAGES_BY_FEATURE: `v1/${REST}/{id}/${REST_PACKAGE}`,
};
