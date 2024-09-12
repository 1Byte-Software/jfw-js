// Define an object to represent different user types.
export const USER_TYPE = {
    Admin: "Admin",
    SuperAdmin: "SuperAdmin",
    Partner: "Partner",
    EndUser: "EndUser",
};

// Define an array of user type options for selection in a dropdown or similar UI component
export const USER_TYPE_OPTIONS = [
    {
        value: USER_TYPE.Admin,
        label: "Admin",
    },
    {
        value: USER_TYPE.SuperAdmin,
        label: "Super Admin",
    },
    {
        value: USER_TYPE.Partner,
        label: "Partner",
    },
    {
        value: USER_TYPE.EndUser,
        label: "End User",
    },
];
