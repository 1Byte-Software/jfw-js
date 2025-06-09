import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { IConfiguration } from '../configuration';
import { IDevice } from '../device';
import { IRole } from '../role';
import { UserType } from './constants';
import { USER_PATH } from './paths';
import {
    IAddDeviceToUserParams,
    IAppIntegrationAuthenticateURL,
    IApplyReferralCodeParams,
    IAuthenticateResponse,
    IAuthenticationByGoogleParams,
    IAuthenticationByMagicLinkParams,
    IAuthenticationParams,
    IBaseUser,
    IBrandPartnerAuthenticate,
    IChangePasswordParams,
    ICheckAuthKeyAvailableParams,
    ICreateConfigurationOfUserParams,
    IForgotPasswordParams,
    IGetAppIntegrationAuthenticateURLsParams,
    IGetConfigurationsOfUserParams,
    IGetUsersParams,
    IRegisterNewUserParams,
    IRemoveDeviceFromUserParams,
    IResetPasswordParams,
    IStatisticsUsers,
    IStatisticsUsersParams,
    IUpdateUserParams,
    IUser,
    IVerifySMSOTPToAuthenticationParams,
    IVerifyUserEmailAddressParams,
} from './types';

/**
 * # Activate a user
 *
 * We send a activation email to the user, and they will have an `Active` status when the activation process is complete.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/activate-a-user}
 */
export const activateUser = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(USER_PATH.ACTIVATE_USER, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        null,
        config,
    );

    return response.data;
};

/**
 * # Add a device to a user
 *
 * Add a device to a user.
 *
 * @param userId - The id of the user.
 * @param deviceId - The id of the device to add.
 * @param params - The params to adding a device to a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/add-a-device-to-a-user}
 */
export const addDeviceToUser = async (
    userId: IdType,
    deviceId: IdType,
    params?: IAddDeviceToUserParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.ADD_DEVICE_TO_USER, {
        userId,
        deviceId,
    });
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Applies the referral code to a user
 *
 * Applies the referral code to the user.
 *
 * @param id - The id of the user who is applying the referral code.
 * @param referralCode - The referral code to apply.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/applies-the-referral-code-to-a-user}
 */
export const applyReferralCodeToUser = async (
    id: IdType,
    params: IApplyReferralCodeParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.APPLY_REFERRAL_CODE_TO_USER, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<boolean>>(url, null, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * # Assigns roles to a user
 *
 * Assigns roles to the user.
 *
 * @param id - The id of the user to assign the roles to.
 * @param roleIds - The role ids to assign.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/assigns-roles-to-a-user}
 */
export const assignRolesToUser = async (
    id: IdType,
    roleIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.ASSIGN_ROLES_TO_USER, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<true>>(url, null, {
        params: {
            roleIds,
        },
        paramsSerializer: {
            indexes: true, // use brackets with indexes
        },
        ...config,
    });

    return response.data;
};

/**
 * # Authentication by Apple
 *
 * Gets the Apple login URL.
 *
 * @param callbackURL - The callback URL that the user will be redirected to after logging in.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-apple}
 */
export const authenticationByApple = async (
    callbackURL: string,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.AUTHENTICATION_BY_APPLE;
    const response = await jfwAxios.post<HttpResponse<string>>(url, null, {
        params: {
            callbackURL,
        },
        ...config,
    });

    return response.data;
};

/**
 * # Authentication by email OTP
 *
 * Authenticates the user with the given email
 *
 * We send an OTP to the user's email address.
 *
 * @param emailAddress - The email address.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication-email-otp-code}
 */
export const authenticationByEmailOTP = async (
    emailAddress: string,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.AUTHENTICATION_BY_EMAIL_OTP;
    const response = await jfwAxios.post<HttpResponse<string>>(
        url,
        {
            emailAddress,
        },
        config,
    );

    return response.data;
};

/**
 * # Authentication by Google
 *
 * Gets the Google login URL.
 *
 * @param params - The params for authentication with google
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-google}
 */
export const authenticationByGoogle = async (
    params: IAuthenticationByGoogleParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.AUTHENTICATION_BY_GOOGLE;
    const response = await jfwAxios.get<HttpResponse<string>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * # Authentication by magic link
 *
 * Authenticates the user with the given email and brand URL.
 *
 * We send an email to the user with a link to authenticate.
 *
 * @param params - The params for authentication by magic link
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-email}
 */
export const authenticationByMagicLink = async (
    params: IAuthenticationByMagicLinkParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.AUTHENTICATION_BY_MAGIC_LINK;
    const response = await jfwAxios.get<HttpResponse<boolean>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * # Authentication by SMS OTP
 *
 * Authenticates the user with the given phone number and we send an OTP to the user's phone number.
 *
 * We send an email to the user with a link to authenticate.
 *
 * @param phoneNumber - The phone number. The phone number should be following the E.164 format.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication-sms-otp-code}
 */
export const authenticationBySMSOTP = async (
    phoneNumber: string,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.AUTHENTICATION_BY_SMS_OTP;
    const response = await jfwAxios.get<HttpResponse<string>>(url, {
        params: {
            phoneNumber,
        },
        ...config,
    });

    return response.data;
};

/**
 * # Authentication
 *
 * Authenticates the user with the given email and password.
 *
 * @param params - The params for authentication.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication}
 */
export const authentication = async (
    params: IAuthenticationParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.AUTHENTICATION;
    const response = await jfwAxios.post<HttpResponse<IAuthenticateResponse>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Change password
 *
 * Changes the user's password.
 *
 * @param options - The options for change password.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/change-password}
 */
export const changePassword = async (
    params: IChangePasswordParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.CHANGE_PASSWORD;
    const response = await jfwAxios.put<HttpResponse<true>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Check referral user code
 *
 * Checks if the referral code is exists in the system.
 *
 * @param code - The referral code to check.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/check-referral-user-code}
 */
export const checkReferralUserCode = async (
    code: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.CHECK_REFERRAL_USER_CODE, {
        code,
    });
    const response = await jfwAxios.get<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Creates a new configuration for the user.
 *
 * @param id - The id of the user.
 * @param params - The params for creating a new configuration for the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/configurations#post-api-users-id-configurations}
 */
export const createNewConfigurationForUser = async (
    id: IdType,
    params: ICreateConfigurationOfUserParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.CREATE_NEW_CONFIGURATION_FOR_USER, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<IConfiguration>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Gets the user's configurations.
 *
 * @param id - The id of the user.
 * @param params - The params for getting the user's configurations.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/configurations#get-api-v1-users-id-configurations}
 */
export const getConfigurationsOfUser = async (
    id: IdType,
    params?: IGetConfigurationsOfUserParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.GET_CONFIGURATION_OF_USER, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IConfiguration[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Deletes the user's configuration by ID.
 *
 * @param id - The id of the user.
 * @param configurationId - The id of the configuration.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/configurations#delete-api-v1-users-id-configurations-configurationid}
 */
export const deleteConfigurationOfUserByID = async (
    id: IdType,
    configurationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.DELETE_CONFIGURATION_OF_USER_BY_ID, {
        id,
        configurationId,
    });
    const response = await jfwAxios.get<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Deactivate a user
 *
 * Deactivate a user. Perform this operation only on users with an Active status.
 * We send a deactivation email to the user, and they will have an Inactive status when the deactivation process is complete.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/deactivate-a-user}
 */
export const deactivateUser = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.DEACTIVATE_USER, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        null,
        config,
    );

    return response.data;
};

/**
 * # Delete a user
 *
 * This deletes the user information for the given user id.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/delete-a-user}
 */
export const deleteUser = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(USER_PATH.DELETE_USER, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Verify user email address
 *
 * Sends the email to verify user's email address.
 * The email will contain a link to verify the email address.
 *
 * @param returnURL - The return URL after the user clicks the link in the email.
 * @param id - The user id to send the email.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#post-api-v1-users-id-email-address-verify-send}
 */
export const sendEmailToVerifyEmailAddressOfUser = async (
    id: IdType,
    returnURL: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        USER_PATH.SEND_EMAIL_TO_VERIFY_EMAIL_ADDRESS_OF_USER,
        {
            id,
        },
    );
    const response = await jfwAxios.post<HttpResponse<boolean>>(url, null, {
        params: {
            returnURL,
        },
        ...config,
    });

    return response.data;
};

/**
 * # Actives the user email address
 *
 * Actives the user email address.
 *
 * @param token - The token to active the email address. This is the token that was received from the request to send the OTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#put-api-v1-users-email-address-active}
 */
export const activeUserEmailAddress = async (
    token: string,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.ACTIVE_USER_EMAIL_ADDRESS;

    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        {
            token,
        },
        config,
    );

    return response.data;
};

/**
 * # Forgot password
 *
 * Sends to the user an email with a link to reset their password.
 *
 * @param params - The params for sending to the user an email with a link to reset their password.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/forgot-password}
 */
export const forgotPassword = async (
    params: IForgotPasswordParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.FORGOT_PASSWORD;
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Get a user by username
 *
 * Gets the user information for the given username.
 *
 * @param username - The username of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user-by-username}
 */
export const getUserByUsername = async (
    username: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.GET_USER_BY_USERNAME, {
        username,
    });
    const response = await jfwAxios.get<HttpResponse<IUser>>(url, config);

    return response.data;
};

/**
 * # Gets a user
 *
 * Gets the user information for the given id.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user}
 */
export const getUser = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(USER_PATH.GET_USER, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IUser>>(url, config);

    return response.data;
};

/**
 * # Get app integration authenticate URLs
 *
 * Gets the app integration authenticate URLs.
 *
 * Get app integration authenticate URLs for the given callback URL, return URL, device code, and type response.
 *
 * @param params - The params of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-app-integration-authenticate-urls}
 */
export const getAppIntegrationAuthenticateURLs = async (
    params: IGetAppIntegrationAuthenticateURLsParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.GET_APP_INTEGRATION_AUTHENTICATE_URLS;
    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationAuthenticateURL[]>
    >(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Get devices from a user
 *
 * Get devices from a user.
 *
 * @param userId - The id of the user
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-devices-from-a-user}
 */
export const getDevicesFromUser = async (
    userId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.GET_DEVICES_FROM_USER, {
        userId,
    });
    const response = await jfwAxios.get<HttpResponse<IDevice[]>>(url, config);

    return response.data;
};

/**
 * # Get users
 *
 * Get users in your system.
 *
 * A subset of users can be returned that match a supported filter expression or search criteria.
 *
 * @param params - The params for getting users in your system.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-users}
 */
export const getUsers = async (params: IGetUsersParams) => {
    const url = USER_PATH.GET_USERS;
    const response = await jfwAxios.get<HttpResponseList<IUser>>(url, {
        params,
    });

    return response.data;
};

/**
 * # Get users
 *
 * Gets the users by id list.
 *
 * @param ids - The ids to get the users.The maximum number of ids is 100.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-users#get-api-v1-users-by-list-id}
 */
export const getUsersByIdList = async (
    ids: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.GET_USERS_BY_ID_LIST;
    const response = await jfwAxios.get<HttpResponse<IUser[]>>(url, {
        params: {
            ids,
        },
        paramsSerializer: {
            indexes: true,
        },
        ...config,
    });

    return response.data;
};

/**
 * # Gets roles assigned to the user
 *
 * Gets the roles assigned to the user.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/gets-roles-assigned-to-the-user}
 */
export const getRolesAssignedToUser = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.GET_ROLES_ASSIGNED_TO_USER, { id });
    const response = await jfwAxios.get<HttpResponse<IRole[]>>(url, config);

    return response.data;
};

/**
 * # Gets the current user logged in
 *
 * Gets the current user logged in.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-current-user-logged-in}
 */
export const getCurrentUserLoggedIn = async (config?: AxiosRequestConfig) => {
    const url = USER_PATH.GET_CURRENT_USER_LOGGED_IN;
    const response = await jfwAxios.get<HttpResponse<IUser>>(url, config);

    return response.data;
};

/**
 * # Gets the referees of a user
 *
 * Gets the referees of the user.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-referees-of-a-user}
 */
export const getRefereeOfUser = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.GET_REFEREES_OF_USER, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IBaseUser[]>>(url, config);

    return response.data;
};

/**
 * # List all the brand partners authenticate
 *
 * Gets the connection authenticate brand status.
 *
 * @param userId - The id of the user to get the connection authenticate brand status for.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/list-all-brand-partner-auth}
 */
export const listAllBrandPartnersAuthenticate = async (
    userId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.LIST_ALL_BRAND_PARTNERS_AUTHENTICATE, {
        userId,
    });
    const response = await jfwAxios.get<
        HttpResponse<IBrandPartnerAuthenticate>
    >(url, config);

    return response.data;
};

/**
 * # Lock a user
 *
 * Perform this operation only on users with an `Active` status.
 * We send a notification email to the user, and they will have an `Locked` status when the process completes.
 *
 * Locked users can't sign in to Jframework.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/lock-a-user}
 */
export const lockUser = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(USER_PATH.LOCK_USER, {
        id,
    });

    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        null,
        config,
    );

    return response.data;
};

/**
 * # Register a new user
 *
 * Registers a new user with the given information.
 *
 * @param params - The params for registering a new user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/register-a-new-user}
 */
export const registerNewUser = async (
    params: IRegisterNewUserParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.REGISTER_NEW_USER;
    const response = await jfwAxios.post<HttpResponse<IUser>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Remove a device from a user
 *
 * Remove a device from a user.
 *
 * @param params - The params for removing a device from a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/remove-a-device-from-a-user}
 */
export const removeDeviceFromUser = async (
    params: IRemoveDeviceFromUserParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.REGISTER_NEW_USER;
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Reset password
 *
 * Resets the user's password from the reset password token.
 *
 * @param params - The params for resetting the password.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/reset-password}
 */
export const resetPassword = async (
    params: IResetPasswordParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.RESET_PASSWORD;
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Revokes roles from the user
 *
 * Revokes roles from the user.
 *
 * @param id - The id of the user to revoke the roles from.
 * @param roleIds - The role ids to revoke.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/revokes-roles-from-a-user}
 */
export const revokeRolesFromUser = async (
    id: IdType,
    roleIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.REVOKE_ROLES_FROM_USER, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, {
        params: {
            roleIds,
        },
        paramsSerializer: {
            indexes: true, // use brackets with indexes
        },
        ...config,
    });

    return response.data;
};

/**
 * # Statistics users
 *
 * Statistics users for the given filter.
 *
 * @param params - The params for user statistics.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/statistics-users}
 */
export const statisticUsers = async (
    params: IStatisticsUsersParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.STATISTIC_USERS;
    const response = await jfwAxios.get<HttpResponse<IStatisticsUsers[]>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * # Suspend a user
 *
 * Suspend a user. Perform this operation only on users with an `Active` status. We send a notification email to the user,, and they will have an `Suspended` status when the process is complete.
 *
 * Suspended users can't sign in to Jframework.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/suspend-a-user}
 */
export const suspendUser = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(USER_PATH.SUSPEND_USER, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<true>>(url, null, config);

    return response.data;
};

/**
 * # Unlock a user
 *
 * Unlock a user with a `Locked` status or a user with an `Active` status who is blocked from unknown devices.
 * Unlocked users have an `Active` status and can sign in with their current password.
 *
 * @param id - The id of the user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/unlock-a-user}
 */
export const unlockUser = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(USER_PATH.UNLOCK_USER, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        null,
        config,
    );

    return response.data;
};

/**
 * # Unsuspend a user
 *
 * Unsuspend a user and return them to the `Active` status. This operation can only be performed on users with a `Suspended` status.
 *
 * @param options - The options for unsuspend a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/unsuspend-a-user}
 */
export const unsuspendUser = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.UNSUSPEND_USER, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        null,
        config,
    );

    return response.data;
};

/**
 * # Updates a user
 *
 * Updates the user information for the given user id.
 *
 * @param id - The id of the user.
 * @param params - The params for updates a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/update-a-user}
 */
export const updateUser = async (
    id: IdType,
    params: IUpdateUserParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.UPDATE_USER, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<IUser>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Update user type
 *
 * Updates the user type.
 *
 * This endpoint allows you to update the user type for a specific user by their id.
 * Just Super Admins can update the user type.
 *
 * @param id - The id of the user.
 * @param type - The user type.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/update-type-user}
 */
export const updateUserType = async (
    id: IdType,
    type: UserType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.UPDATE_USER_TYPE, {
        id,
        type,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Verify email address OTP to authentication
 *
 * Verifies the OTP code that was sent to the user's email.
 *
 * @param params - The params for verifying the email address OTP to authentication.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/verify-email-otp-code}
 */
export const verifyUserEmailAddress = async (
    params: IVerifyUserEmailAddressParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.VERIFY_EMAIL_ADDRESS_OTP_TO_AUTHENTICATION;
    const response = await jfwAxios.post<HttpResponse<IAuthenticateResponse>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Verify SMS OTP to authentication
 *
 * Verifies the OTP code that was sent to the user's phone number.
 *
 * @param params - The params for verifying the SMS OTP to authentication.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/verify-sms-otp-code}
 */
export const verifySMSOTPToAuthentication = async (
    params: IVerifySMSOTPToAuthenticationParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.VERIFY_SMS_OTP_TO_AUTHENTICATION;
    const response = await jfwAxios.post<HttpResponse<IAuthenticateResponse>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * Check auth key available
 */
export const checkAuthKeyAvailable = async (
    data: ICheckAuthKeyAvailableParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.CHECK_AUTH_KEY_AVAILABLE;

    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};
