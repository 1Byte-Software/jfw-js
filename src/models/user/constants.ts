// Define an object to represent different user types.
/**
 * #CONFIRM
 * @deprecated Hiện tại constant này có vẻ không được sử dụng, và nó cũng đang sai nguyên tắc vì các Role có thể được tạo ở JFW chứ không cố định các tên này, nếu có thi nó là Build-in role ?. Cần bàn trong buổi họp để xoá
 */
export const USER_TYPE = {
    admin: 'Admin',
    superAdmin: 'SuperAdmin',
    partner: 'Partner',
    endUser: 'EndUser',
};

/**
 * #CONFIRM
 * @deprecated Sẽ xoá cùng với USER_TYPE
 */
// Define an array of user type options for selection in a dropdown or similar UI component
export const USER_TYPE_OPTIONS = [
    {
        value: USER_TYPE.admin,
        label: 'Admin',
    },
    {
        value: USER_TYPE.superAdmin,
        label: 'Super Admin',
    },
    {
        value: USER_TYPE.partner,
        label: 'Partner',
    },
    {
        value: USER_TYPE.endUser,
        label: 'End User',
    },
];

export enum UserStatus {
    Inactive = 'Inactive',
    Active = 'Active',
    Suspended = 'Suspended',
    Locked = 'Locked',
    Deleted = 'Deleted'
}
