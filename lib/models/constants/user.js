"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_TYPE_OPTIONS = exports.USER_TYPE = void 0;
// Define an object to represent different user types.
exports.USER_TYPE = {
    Admin: "Admin",
    SuperAdmin: "SuperAdmin",
    Partner: "Partner",
    EndUser: "EndUser",
};
// Define an array of user type options for selection in a dropdown or similar UI component
exports.USER_TYPE_OPTIONS = [
    {
        value: exports.USER_TYPE.Admin,
        label: "Admin",
    },
    {
        value: exports.USER_TYPE.SuperAdmin,
        label: "Super Admin",
    },
    {
        value: exports.USER_TYPE.Partner,
        label: "Partner",
    },
    {
        value: exports.USER_TYPE.EndUser,
        label: "End User",
    },
];
