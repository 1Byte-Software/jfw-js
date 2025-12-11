import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { IConfiguration } from '../configuration';
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
    IAuthenticationByPhoneNumberParams,
    IAuthenticationParams,
    IUserBase,
    IBrandPartnerAuthenticate,
    IChangePasswordForAnotherUserParams,
    IChangePasswordParams,
    ICheckAuthKeyAvailableParams,
    ICreateConfigurationOfUserParams,
    IDeviceOfUser,
    IForgotPasswordParams,
    IGenerateEmailAddressOTPForAuthenticationParams,
    IGenerateNewOTPForParingAuthenticationResponse,
    IGenerateNewQRCodeForParingAuthenticationResponse,
    IGenerateNewQRCodeParams,
    IGenerateSMSOTPParams,
    IGetAppIntegrationAuthenticateURLsParams,
    IGetCodeStatusResponse,
    IGetConfigurationsOfUserParams,
    IGetDevicesFromUserParams,
    IGetNotificationRelatedToUserParams,
    IGetNotificationsByUserParams,
    IGetUsersParams,
    IMarkNotificationAsReadParams,
    IRegisterNewUserParams,
    IRemoveDeviceFromUserParams,
    IResetPasswordParams,
    IStatisticsUsers,
    IStatisticsUsersParams,
    IUpdateUserParams,
    IUser,
    IUserNotification,
    IVerifyOTPCodeParams,
} from './types';

export class UserAPI extends AbstractAPI {
    /**
     * # Activate a user
     *
     * We send a activation email to the user, and they will have an `Active` status when the activation process is complete.
     *
     * @param id - The id of the user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/activate-a-user}
     */
    public async activateUser(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.ACTIVATE_USER, {
            id,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Add a device to a user
     *
     * Add a device to a user.
     *
     * @param params - The params to adding a device to a user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/add-a-device-to-a-user}
     */
    public async addDeviceToUser(
        params: IAddDeviceToUserParams,
        config?: AxiosRequestConfig,
    ) {
        const { userId, deviceId, ...bodyParams } = params;
        const url = generatePath(USER_PATH.ADD_DEVICE_TO_USER, {
            userId,
            deviceId,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            bodyParams,
            config,
        );

        return response.data;
    }

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
    public async applyReferralCodeToUser(
        id: IdType,
        params: IApplyReferralCodeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.APPLY_REFERRAL_CODE_TO_USER, {
            id,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            {
                ...config,
                params,
            },
        );

        return response.data;
    }

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
    public async assignRolesToUser(
        id: IdType,
        roleIds: IdType[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.ASSIGN_ROLES_TO_USER, {
            id,
        });
        const response = await this.axios.post<HttpResponse<true>>(url, null, {
            params: {
                roleIds,
            },
            paramsSerializer: {
                indexes: true, // use brackets with indexes
            },
            ...config,
        });

        return response.data;
    }

    /**
     * # Authentication by Apple
     *
     * Gets the Apple login URL.
     *
     * @param callbackURL - The callback URL that the user will be redirected to after logging in.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-apple}
     */
    public async authenticationByApple(
        callbackURL: string,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.AUTHENTICATION_BY_APPLE;
        const response = await this.axios.post<HttpResponse<string>>(
            url,
            null,
            {
                params: {
                    callbackURL,
                },
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Authentication by Google
     *
     * Gets the Google login URL.
     *
     * @param params - The params for authentication with google
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-google}
     */
    public async authenticationByGoogle(
        params: IAuthenticationByGoogleParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.AUTHENTICATION_BY_GOOGLE;
        const response = await this.axios.get<HttpResponse<string>>(url, {
            ...config,
            params,
        });

        return response.data;
    }

    /**
     * # Authentication by phone number
     *
     * Authenticates the user with the given phone number and password.
     *
     * @param params - The params for authentication by phone number
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-phone}
     */
    public async authenticationByPhoneNumber(
        params: IAuthenticationByPhoneNumberParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.AUTHENTICATION_BY_PHONE_NUMBER;
        const response = await this.axios.post<
            HttpResponse<IAuthenticateResponse>
        >(url, params, config);

        return response.data;
    }

    /**
     * # Authentication
     *
     * Authenticates the user with the given email and password.
     *
     * @param params - The params for authentication.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/authentication}
     */
    public async authentication(
        params: IAuthenticationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.AUTHENTICATION;
        const response = await this.axios.post<
            HttpResponse<IAuthenticateResponse>
        >(url, params, config);

        return response.data;
    }

    /**
     * # Change password
     *
     * Changes the user's password.
     *
     * @param params - The params for changing password.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/change-password}
     */
    public async changePassword(
        params: IChangePasswordParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.CHANGE_PASSWORD;
        const response = await this.axios.put<HttpResponse<true>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Change password for another user
     *
     * Change password for another user.
     *
     * @param params - The params for changing password for another user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/change-password-by-user-id}
     */
    public async changePasswordForAnotherUser(
        params: IChangePasswordForAnotherUserParams,
        config?: AxiosRequestConfig,
    ) {
        const { id, ...bodyParams } = params;
        const url = generatePath(USER_PATH.CHANGE_PASSWORD_FOR_ANOTHER_USER, {
            id,
        });
        const response = await this.axios.put<HttpResponse<true>>(
            url,
            bodyParams,
            config,
        );

        return response.data;
    }

    /**
     * # Check referral user code
     *
     * Checks if the referral code is exists in the system.
     *
     * @param code - The referral code to check.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/check-referral-user-code}
     */
    public async checkReferralUserCode(
        code: string,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.CHECK_REFERRAL_USER_CODE, {
            code,
        });
        const response = await this.axios.get<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Check AuthKey available
     *
     * Check if the authKey is available.
     *
     * @param params - The params for checking auth key available.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/check-auth-key-available}
     */
    public async checkAuthKeyAvailable(
        params: ICheckAuthKeyAvailableParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.CHECK_AUTH_KEY_AVAILABLE;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    //#region Configurations
    /**
     * Creates a new configuration for the user.
     *
     * @param userId - The id of the user.
     * @param params - The params for creating a new configuration for the user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/configurations#post-api-users-id-configurations}
     */
    public async createNewConfigurationForUser(
        userId: IdType,
        params: ICreateConfigurationOfUserParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.CREATE_NEW_CONFIGURATION_FOR_USER, {
            userId,
        });
        const response = await this.axios.post<HttpResponse<IConfiguration>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Gets the user's configurations.
     *
     * @param userId - The id of the user.
     * @param params - The params for getting the user's configurations.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/configurations#get-api-v1-users-id-configurations}
     */
    public async getConfigurationsOfUser(
        userId: IdType,
        params?: IGetConfigurationsOfUserParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.GET_CONFIGURATION_OF_USER, {
            userId,
        });
        const response = await this.axios.get<HttpResponse<IConfiguration[]>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Deletes the user's configuration by ID.
     *
     * @param userId - The id of the user.
     * @param configurationId - The id of the configuration.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/configurations#delete-api-v1-users-id-configurations-configurationid}
     */
    public async deleteConfigurationOfUserByID(
        userId: IdType,
        configurationId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.DELETE_CONFIGURATION_OF_USER_BY_ID, {
            userId,
            configurationId,
        });
        const response = await this.axios.get<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }
    //#endregion

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
    public async deactivateUser(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.DEACTIVATE_USER, {
            id,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a user
     *
     * This deletes the user information for the given user id.
     *
     * @param id - The id of the user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/delete-a-user}
     */
    public async deleteUser(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.DELETE_USER, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    //#region Email address verification
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
    public async sendEmailToVerifyEmailAddressOfUser(
        id: IdType,
        returnURL: string,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.SEND_EMAIL_TO_VERIFY, {
            id,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            {
                params: {
                    returnURL,
                },
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Actives the user email address
     *
     * Actives the user email address.
     *
     * @param token - The token to active the email address. This is the token that was received from the request to send the OTP.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#put-api-v1-users-email-address-active}
     */
    public async activeUserEmailAddress(
        token: string,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.ACTIVE_USER_EMAIL_ADDRESS;

        const response = await this.axios.put<HttpResponse<boolean>>(
            url,
            {
                token,
            },
            config,
        );

        return response.data;
    }
    //#endregion

    /**
     * # Forgot password
     *
     * Sends to the user an email with a link to reset their password.
     *
     * @param params - The params for sending to the user an email with a link to reset their password.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/forgot-password}
     */
    public async forgotPassword(
        params: IForgotPasswordParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.FORGOT_PASSWORD;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Get a user by username
     *
     * Gets the user information for the given username.
     *
     * @param username - The username of the user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user-by-username}
     */
    public async getUserByUsername(
        username: string,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.GET_USER_BY_USERNAME, {
            username,
        });
        const response = await this.axios.get<HttpResponse<IUser>>(url, config);

        return response.data;
    }

    /**
     * # Gets a user
     *
     * Gets the user information for the given id.
     *
     * @param id - The id of the user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user}
     */
    public async getUser(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.GET_USER, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IUser>>(url, config);

        return response.data;
    }

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
    public async getAppIntegrationAuthenticateURLs(
        params: IGetAppIntegrationAuthenticateURLsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.GET_APP_INTEGRATION_AUTHENTICATE_URLS;
        const response = await this.axios.get<
            HttpResponse<IAppIntegrationAuthenticateURL[]>
        >(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get devices from a user
     *
     * Get devices from a user.
     *
     * @param userId - The id of the user
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-devices-from-a-user}
     */
    public async getDevicesFromUser(
        userId: IdType,
        params?: IGetDevicesFromUserParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.GET_DEVICES_FROM_USER, {
            userId,
        });
        const response = await this.axios.get<HttpResponse<IDeviceOfUser[]>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Get users
     *
     * Gets the users by id list.
     *
     * @param ids - The ids to get the users. The maximum number of ids is 100.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-users#get-api-v1-users-by-list-id}
     */
    public async getUsersByListIDs(ids: IdType[], config?: AxiosRequestConfig) {
        const url = USER_PATH.GET_USERS_BY_LIST_IDS;
        const response = await this.axios.get<HttpResponse<IUser[]>>(url, {
            params: {
                ids,
            },
            paramsSerializer: {
                indexes: true,
            },
            ...config,
        });

        return response.data;
    }

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
    public async getUsers(
        params: IGetUsersParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.GET_USERS;
        const response = await this.axios.get<HttpResponseList<IUser>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Gets roles assigned to the user
     *
     * Gets the roles assigned to the user.
     *
     * @param id - The id of the user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/gets-roles-assigned-to-the-user}
     */
    public async getRolesAssignedToUser(
        id: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.GET_ROLES_ASSIGNED_TO_USER, { id });
        const response = await this.axios.get<HttpResponse<IRole[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Gets the current user logged in
     *
     * Gets the current user logged in.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-current-user-logged-in}
     */
    public async getCurrentUserLoggedIn(config?: AxiosRequestConfig) {
        const url = USER_PATH.GET_CURRENT_USER_LOGGED_IN;
        const response = await this.axios.get<HttpResponse<IUser>>(url, config);

        return response.data;
    }

    /**
     * # Gets the referees of a user
     *
     * Gets the referees of the user.
     *
     * @param id - The id of the user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-referees-of-a-user}
     */
    public async getRefereeOfUser(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.GET_REFEREES_OF_USER, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IUserBase[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # List all the brand partners authenticate
     *
     * Gets the connection authenticate brand status.
     *
     * @param userId - The id of the user to get the connection authenticate brand status for.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/list-all-brand-partner-auth}
     */
    public async listAllBrandPartnersAuthenticate(
        userId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            USER_PATH.LIST_ALL_BRAND_PARTNERS_AUTHENTICATE,
            {
                userId,
            },
        );
        const response = await this.axios.get<
            HttpResponse<IBrandPartnerAuthenticate>
        >(url, config);

        return response.data;
    }

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
    public async lockUser(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.LOCK_USER, {
            id,
        });

        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Refresh auth key
     *
     * Not implemented yet.
     */
    public refreshAuthKey() {}

    /**
     * # Register a new user
     *
     * Registers a new user with the given information.
     *
     * @param params - The params for registering a new user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/register-a-new-user}
     */
    public async registerNewUser(
        params: IRegisterNewUserParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.REGISTER_NEW_USER;
        const response = await this.axios.post<HttpResponse<IUser>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Register a new user by email
     *
     * Not implemented yet.
     */
    public registerNewUserByEmail() {}

    /**
     * # Register a new user by phone
     *
     * Not implemented yet.
     */
    public registerNewUserByPhone() {}

    /**
     * # Remove a device from a user
     *
     * Remove a device from a user.
     *
     * @param params - The params for removing a device from a user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/remove-a-device-from-a-user}
     */
    public async removeDeviceFromUser(
        params: IRemoveDeviceFromUserParams,
        config?: AxiosRequestConfig,
    ) {
        const { deviceId, userId } = params;
        const url = generatePath(USER_PATH.REMOVE_DEVICE_FROM_USER, {
            deviceId,
            userId,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Reset password
     *
     * Resets the user's password from the reset password token.
     *
     * @param params - The params for resetting the password.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/reset-password}
     */
    public async resetPassword(
        params: IResetPasswordParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.RESET_PASSWORD;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

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
    public async revokeRolesFromUser(
        id: IdType,
        roleIds: IdType[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.REVOKE_ROLES_FROM_USER, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(url, {
            params: {
                roleIds,
            },
            paramsSerializer: {
                indexes: true, // use brackets with indexes
            },
            ...config,
        });

        return response.data;
    }

    /**
     * # Statistics users
     *
     * Statistics users for the given filter.
     *
     * @param params - The params for user statistics.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/statistics-users}
     */
    public async statisticUsers(
        params: IStatisticsUsersParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.STATISTIC_USERS;
        const response = await this.axios.get<HttpResponse<IStatisticsUsers[]>>(
            url,
            {
                ...config,
                params,
            },
        );

        return response.data;
    }

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
    public async suspendUser(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.SUSPEND_USER, {
            id,
        });
        const response = await this.axios.post<HttpResponse<true>>(
            url,
            null,
            config,
        );

        return response.data;
    }

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
    public async unlockUser(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.UNLOCK_USER, {
            id,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Unsuspend a user
     *
     * Unsuspend a user and return them to the `Active` status. This operation can only be performed on users with a `Suspended` status.
     *
     * @param options - The options for unsuspend a user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/unsuspend-a-user}
     */
    public async unsuspendUser(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.UNSUSPEND_USER, {
            id,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }

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
    public async updateUser(
        id: IdType,
        params: IUpdateUserParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.UPDATE_USER, {
            id,
        });
        const response = await this.axios.put<HttpResponse<IUser>>(
            url,
            params,
            config,
        );

        return response.data;
    }

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
    public async updateUserType(
        id: IdType,
        type: UserType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.UPDATE_USER_TYPE, {
            id,
            type,
        });
        const response = await this.axios.put<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Update user device
     *
     * Not implemented yet.
     */
    public updateUserDevice() {}

    /**
     * # Update device data related authorized user
     *
     * Not implemented yet.
     */
    public updateDeviceDataRelatedAuthorizedUser() {}

    //#region Notification
    /**
     * # Get a notification related to a user
     *
     * Get a notification detail by the given userId and notificationId.
     *
     * This endpoint allows you to update the user type for a specific user by their id.
     * Just Super Admins can update the user type.
     *
     * @param params - The params for getting a notification related to user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/notification/get-a-notification}
     */
    public async getNotificationRelatedToUser(
        params: IGetNotificationRelatedToUserParams,
        config?: AxiosRequestConfig,
    ) {
        const { userId, notificationId } = params;
        const url = generatePath(USER_PATH.GET_NOTIFICATION_RELATED_TO_USER, {
            userId,
            notificationId,
        });
        const response = await this.axios.get<HttpResponse<IUserNotification>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Get notifications by the user's id
     *
     * Get notifications by the user's id.
     *
     * @param params - The params for getting notifications by the user's id
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/notification/get-notifications-from-a-user}
     */
    public async getNotificationsByUser(
        params: IGetNotificationsByUserParams,
        config?: AxiosRequestConfig,
    ) {
        const { userId, ...restParams } = params;
        const url = generatePath(USER_PATH.GET_NOTIFICATIONS_BY_USER_ID, {
            userId,
        });
        const response = await this.axios.get<
            HttpResponseList<IUserNotification, { unreadCount: number }>
        >(url, {
            params: restParams,
            ...config,
        });

        return response.data;
    }

    /**
     * # Mark a notification as read
     *
     * Marks the notification as read for the user.
     *
     * @param params - The params for marking a notifications as read.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/notification/mark-as-read}
     */
    public async markNotificationAsRead(
        params: IMarkNotificationAsReadParams,
        config?: AxiosRequestConfig,
    ) {
        const { notificationId, userId } = params;
        const url = generatePath(USER_PATH.MARK_NOTIFICATION_AS_READ, {
            notificationId,
            userId,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Mark all notifications read
     *
     * Marks all notifications as read for the user.
     *
     * @param params - The params for marking a notifications as read.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/notification/mark-all-notifications-read}
     */
    public async markAllNotificationsAsRead(
        userId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.MARK_ALL_NOTIFICATIONS_AS_READ, {
            userId,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }
    //#endregion

    //#region Passwordless
    //#region Email
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
    public async authenticationByMagicLink(
        params: IAuthenticationByMagicLinkParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.AUTHENTICATION_BY_EMAIL_MAGIC_LINK;
        const response = await this.axios.get<HttpResponse<boolean>>(url, {
            ...config,
            params,
        });

        return response.data;
    }

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
    public async generateEmailOTPForAuthentication(
        params: IGenerateEmailAddressOTPForAuthenticationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.GENERATE_EMAIL_OTP_FOR_AUTHENTICATION;
        const response = await this.axios.post<HttpResponse<string>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Verify email address OTP to authentication
     *
     * Verifies the OTP code that was sent to the user's email.
     *
     * @param params - The params for verifying email address OTP to authentication.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/email/verify-email-otp-code}
     */
    public async verifyEmailAddressOTPToAuthentication(
        params: IVerifyOTPCodeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.VERIFY_EMAIL_OTP_FOR_AUTHENTICATION;
        const response = await this.axios.post<
            HttpResponse<IAuthenticateResponse>
        >(url, params, config);

        return response.data;
    }
    //#endregion

    //#region Phone
    /**
     * # Generate SMS OTP
     *
     * Authenticates the user with the given phone number and we send an OTP to the user's phone number.
     *
     * @param params - The params for generating SMS OTP.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/phone/authentication-sms-otp-code}
     */
    public async generateSMSOTP(
        params: IGenerateSMSOTPParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.GENERATE_SMS_OTP;
        const response = await this.axios.post<HttpResponse<string>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Verify SMS OTP code
     *
     * Verifies the OTP code that was sent to the user's phone number.
     *
     * @param params - The params for verifying SMS OTP code.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/phone/verify-sms-otp-code}
     */
    public async verifyPhoneOTPForAuthentication(
        params: IVerifyOTPCodeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.VERIFY_SMS_OTP_CODE;
        const response = await this.axios.post<
            HttpResponse<IAuthenticateResponse>
        >(url, params, config);

        return response.data;
    }
    //#endregion

    //#region QR Code
    /**
     * # Generate a new QR code
     *
     * Generate a new QR Code for pairing authentication between two devices.
     *
     * This endpoint is called by the initiating device (Admin or Client) to start the pairing process. The generated QR Code contains a link with pairing session ID as a parameter.
     * Example Flow:
     * Device A calls this endpoint to get QR Code data.
     * Device B scans the QR Code and calls POST api/v1/users/auth/passwordless/qrcode/:qrCodeId/approve to approve.
     *
     * @param params - The params for generating a new QR code.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/generate-qr-code-auth}
     */
    public async generateNewQRCode(
        params?: IGenerateNewQRCodeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.GENERATE_NEW_QR_CODE;
        const response = await this.axios.post<
            HttpResponse<IGenerateNewQRCodeForParingAuthenticationResponse>
        >(url, { params, ...config });

        return response.data;
    }

    /**
     * # Get the current status of a QR code
     *
     * Get the current status of a QR Code pairing request.
     *
     * Possible statuses: pending, approved, expired, rejected. This endpoint is usually polled every few seconds by the initiating device until the QR Code is approved or expired.
     *
     * @param qrCodeId - The unique identifier of the QR Code session.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code}
     */
    public async getCurrentStatusOfQRCode(
        qrCodeId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.GET_CURRENT_STATUS_OF_QR_CODE, {
            qrCodeId,
        });
        const response = await this.axios.get<
            HttpResponse<IGetCodeStatusResponse>
        >(url, config);

        return response.data;
    }

    /**
     * # Approve a QR code
     *
     * Approve a QR Code pairing request.
     *
     * This endpoint is called after scanning a QR Code generated by POST api/v1/users/auth/passwordless/qrcode/generate. Once approved, the QR Code's status changes to "approved" and can be used for login.
     *
     * @param qrCodeId - The unique identifier of the QR Code session.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code}
     */
    public async approveQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.APPROVE_QR_CODE, {
            qrCodeId,
        });
        const response = await this.axios.post<
            HttpResponse<IGetCodeStatusResponse>
        >(url, null, config);

        return response.data;
    }

    /**
     * # Log in using an approved QR code
     *
     * Log in using an approved QR Code pairing request.
     *
     * This endpoint is called by the initiating device after the QR Code status is "Approved" to retrieve the authentication key (AuthKey) for the paired account.
     * After a successful authentication, the following headers must be included to register or update the user’s device:
     *
     * - X-Device-Code: A unique identifier for the device.
     * - X-Device-Token: The Firebase device token used for push notifications.
     * - X-Device-Name: The name/model of the device.
     * - X-App-Version-Number: The version of the application.
     * - X-Os-Device: The operating system of the device (iOS, Android).
     *
     * @param qrCodeId - The unique identifier of the approved QR Code session.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code}
     *
     * @deprecated Use `authWithApprovedQRCode` instead
     */
    public async loginUsingApprovedQRCode(
        qrCodeId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.LOGIN_IN_USING_APPROVED_QR_CODE, {
            qrCodeId,
        });
        const response = await this.axios.post<
            HttpResponse<IAuthenticateResponse>
        >(url, null, config);

        return response.data;
    }

    /**
     * # Auth with an approved QR code
     *
     * Log in using an approved QR Code pairing request.
     *
     * This endpoint is called by the initiating device after the QR Code status is "Approved" to retrieve the authentication key (AuthKey) for the paired account.
     * After a successful authentication, the following headers must be included to register or update the user’s device:
     *
     * - X-Device-Code: A unique identifier for the device.
     * - X-Device-Token: The Firebase device token used for push notifications.
     * - X-Device-Name: The name/model of the device.
     * - X-App-Version-Number: The version of the application.
     * - X-Os-Device: The operating system of the device (iOS, Android).
     *
     * @param qrCodeId - The unique identifier of the approved QR Code session.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/auth-with-qr-code}
     */
    public async authWithApprovedQRCode(
        qrCodeId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.AUTH_WITH_APPROVED_QR_CODE, {
            qrCodeId,
        });
        const response = await this.axios.post<
            HttpResponse<IAuthenticateResponse>
        >(url, null, config);

        return response.data;
    }
    //#endregion

    //#region OTP Code
    /**
     *
     * # Generate a new OTP Code
     *
     * Generate a new OTP Code for pairing authentication between two devices.
     *
     * Similar to QR Code pairing but uses a numeric or alphanumeric code instead.
     * The OTP Code should have a short TTL (e.g., 60 seconds).
     *
     * @param params - The params for generating a new OTP code.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/generate-otp-code-auth}
     */
    public async generateNewOTPCode(
        params?: IGenerateNewQRCodeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = USER_PATH.GENERATE_NEW_OTP_CODE;
        const response = await this.axios.post<
            HttpResponse<IGenerateNewOTPForParingAuthenticationResponse>
        >(url, { params, ...config });

        return response.data;
    }

    /**
     * # Get the current status of a OTP code
     *
     * Get the current status of an OTP Code pairing request.
     *
     * Possible statuses: pending, approved, expired, rejected.
     * This endpoint is usually polled every few seconds by the initiating device until the OTP Code is approved or expired.
     *
     * @param otpCode - Get the current status of a OTP code
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/get-otp-code}
     */
    public async getCurrentStatusOfOTPCode(
        otpCode: string,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.GET_CURRENT_STATUS_OF_OTP_CODE, {
            otpCode,
        });
        const response = await this.axios.get<
            HttpResponse<IGetCodeStatusResponse>
        >(url, config);

        return response.data;
    }

    /**
     * # Approve a OTP Code
     *
     * Approve an OTP Code pairing request.
     *
     * This endpoint is called by the target device after receiving the OTP code generated by POST api/v1/users/auth/passwordless/otp/generate.
     * Once approved, the OTP Code's status changes to "Approved".
     *
     * @param otpCode - The OTP code value.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/approve-otp-code}
     */
    public async approveOTPCode(otpCode: string, config?: AxiosRequestConfig) {
        const url = generatePath(USER_PATH.APPROVE_OTP_CODE, {
            otpCode,
        });
        const response = await this.axios.post<
            HttpResponse<IGetCodeStatusResponse>
        >(url, null, config);

        return response.data;
    }

    /**
     * # Log in using an approved OTP code
     *
     * Log in using an approved OTP Code pairing request.
     *
     * This endpoint is called by the initiating device after the OTP Code status is "Approved" to retrieve the authentication key (AuthKey) for the paired account.
     *
     * After a successful authentication, the following headers must be included to register or update the user’s device:
     *
     * - X-Device-Code: A unique identifier for the device.
     * - X-Device-Token: The Firebase device token used for push notifications.
     * - X-Device-Name: The name/model of the device.
     * - X-App-Version-Number: The version of the application.
     * - X-Os-Device: The operating system of the device (iOS, Android).
     *
     * @param otpCode - The OTP code value.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/login-otp-code}
     *
     * @deprecated Use `authWithApprovedOTPCode` instead
     */
    public async loginUsingApprovedOTPCode(
        otpCode: string,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.LOGIN_IN_USING_APPROVED_OTP_CODE, {
            otpCode,
        });
        const response = await this.axios.post<
            HttpResponse<IAuthenticateResponse>
        >(url, null, config);

        return response.data;
    }

    /**
     * # Auth with an approved OTP code
     *
     * Log in using an approved OTP Code pairing request.
     *
     * This endpoint is called by the initiating device after the OTP Code status is "Approved" to retrieve the authentication key (AuthKey) for the paired account.
     *
     * After a successful authentication, the following headers must be included to register or update the user’s device:
     *
     * - X-Device-Code: A unique identifier for the device.
     * - X-Device-Token: The Firebase device token used for push notifications.
     * - X-Device-Name: The name/model of the device.
     * - X-App-Version-Number: The version of the application.
     * - X-Os-Device: The operating system of the device (iOS, Android).
     *
     * @param otpCode - The OTP code value.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/auth-with-otp-code}
     */
    public async authWithApprovedOTPCode(
        otpCode: string,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(USER_PATH.AUTH_WITH_APPROVED_OTP_CODE, {
            otpCode,
        });
        const response = await this.axios.post<
            HttpResponse<IAuthenticateResponse>
        >(url, null, config);

        return response.data;
    }

    /**
     * #WAIT_TSDOC
     */
    public async getPermissionOfUser(id: IdType) {
        return this.callAPI<HttpResponse<string[]>>({
            method: 'GET',
            path: USER_PATH.GET_PERMISSIONS_OF_USER,
            pathParams: {
                id,
            },
        });
    }
}
//#endregion
