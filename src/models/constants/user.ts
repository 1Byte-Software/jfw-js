// Define an object to represent different user types.
export const USER_TYPE = {
    admin: "Admin",
    superAdmin: "SuperAdmin",
    partner: "Partner",
    endUser: "EndUser",
};

// Define an array of user type options for selection in a dropdown or similar UI component
export const USER_TYPE_OPTIONS = [
    {
        value: USER_TYPE.admin,
        label: "Admin",
    },
    {
        value: USER_TYPE.superAdmin,
        label: "Super Admin",
    },
    {
        value: USER_TYPE.partner,
        label: "Partner",
    },
    {
        value: USER_TYPE.endUser,
        label: "End User",
    },
];
