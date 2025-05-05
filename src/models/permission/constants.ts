// Define an object to represent different permissions.
/**
 * #NOTE: This code used in vdt-js. Will delete in feature.
 */
export const PERMISSION = {
    community: {
        upload: 'COMMUNITY.UPLOAD',
        download: 'COMMUNITY.DOWNLOAD',
        add: 'COMMUNITY.ADD',
        delete: 'COMMUNITY.DELETE',
        update: 'COMMUNITY.UPDATE',
        edit: 'COMMUNITY.EDIT',
        deleteComment: 'COMMUNITY.DELETE-COMMENT',
    },
    debugMode: 'SYSTEM.DEBUGMODE',
    issue: {
        delete: 'ISSUE.DELETE',
    },
    user: {
        view: 'USER.VIEW',
    },
};

export enum PermissionType {
    All = 'All',
    Custom = 'Custom',
    BuiltIn = 'BuiltIn',
    None = 'None',
}
