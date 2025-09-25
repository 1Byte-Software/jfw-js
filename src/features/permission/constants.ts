export enum PermissionType {
    BuiltIn = 'BuiltIn',
    Custom = 'Custom',
}

export enum PermissionTypeFilter {
    None = 'None',
    All = 'All',
    BuiltIn = 'BuiltIn',
    Custom = 'Custom',
}

//#region Define build-in permissions
enum UserPermission {
    UPDATE = 'USER.UPDATE',
    DELETE = 'USER.DELETE',
    READ = 'USER.READ',
    CREATE = 'USER.CREATE',
}

enum DevicePermission {
    UPDATE = 'DEVICE.UPDATE',
    DELETE = 'DEVICE.DELETE',
    READ = 'DEVICE.READ',
    CREATE = 'DEVICE.CREATE',
}

export const BuiltInPermission = {
    User: UserPermission,
    Device: DevicePermission,
};
//#endregion
