/**
 * Define an object to represent different resourceTypes.
 * Not defined resource type constant here.
 * @deprecated  Will delete in feature. vdt-fe is used
 */
export const RESOURCE_TYPE = {
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

export enum ResourceTypeType {
    None = 'None',
    All = 'All',
    BuiltIn = 'BuiltIn',
    Custom = 'Custom',
}
