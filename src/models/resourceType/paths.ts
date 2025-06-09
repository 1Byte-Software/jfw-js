const REST = 'resource-types';

export const RESOURCE_TYPE_PATH = {
    CREATE_RESOURCE_TYPE: `v1/${REST}`,
    DELETE_RESOURCE_TYPE: `v1/${REST}/{id}`,
    GET_RESOURCE_TYPE: `v1/${REST}/{id}`,
    GET_RESOURCE_TYPES: `v1/${REST}`,
    UPDATE_RESOURCE_TYPE: `v1/${REST}/{id}`,
};
