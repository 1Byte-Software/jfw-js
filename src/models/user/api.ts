import { AxiosRequestConfig } from 'axios';
import {
    HttpResponse,
    HttpResponseList,
    IStatistic,
    IStatisticCommonParams,
} from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { IConfiguration, ICreateConfigurationParams } from '../configuration';
import { USER_PATH } from './paths';
import {
    IApplyReferralCodeParams,
    IAuthenticateByEmailAddressParams,
    IAuthenticateResponse,
    IAuthenticationByGoogleParams,
    IAuthenticationParams,
    IChangePasswordParams,
    IForgotPasswordParams,
    IGetUserConfigurationParams,
    IQueryUserParams,
    IReferee,
    IRegisterParams,
    IResetPasswordParams,
    IUpdateProfileParams,
    IUpdateUserTypeParams,
    IUser,
} from './types';

/**
 * Gets all the users.
 */
export const queryUserAPI = async (params: IQueryUserParams) => {
    const url = USER_PATH.QUERY;
    const response = await jfwAxios.get<HttpResponseList<IUser>>(url, {
        params,
    });

    return response.data;
};

/**
 * Gets the current user logged in.
 */
export const getMeAPI = async (config?: AxiosRequestConfig) => {
    const url = USER_PATH.GET_ME;
    const response = await jfwAxios.get<HttpResponse<IUser>>(url, config);

    return response.data;
};

/**
 * #JFW-70: Thiếu tài liệu getUserByIds GET: api/users
 */
export const getUserByIdsAPI = async (
    path: string,
    config?: AxiosRequestConfig,
) => {
    const url = `${USER_PATH.GET_BY_IDS}?${path}`;
    const response = await jfwAxios.get<HttpResponse<IUser[]>>(url, config);

    return response.data;
};

/**
 * #JFW-65: Thiếu tài liệu GET: api/users/by-username/{username}
 */
export const getUserByUsernameAPI = async (username: string) => {
    const url = generatePath(USER_PATH.GET_BY_USERNAME, {
        username,
    });

    const response = await jfwAxios.get<HttpResponse<IUser>>(url, null);

    return response.data;
};

/**
 * Gets a user
 */
export const getUserByIdAPI = async (
    userId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.GET_BY_ID, {
        id: userId,
    });
    const response = await jfwAxios.get<HttpResponse<IUser>>(url, config);

    return response.data;
};

/**
 * Updates a user
 */
export const updateUserByIdAPI = async (
    userId: IdType,
    data: IUpdateProfileParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.UPDATE_BY_ID, {
        id: userId,
    });

    const response = await jfwAxios.put(url, data, config);

    return response.data;
};

/**
 * Delete a user
 */
export const deleteUserAPI = async (
    userId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.DELETE_BY_ID, {
        id: userId,
    });

    const response = await jfwAxios.delete(url, config);

    return response.data;
};

/**
 * Change the password of the user. If the user logs in to the system using the Google method, after calling the API change password successfully, we send an email to verify the user request.
 */
export const changePasswordAPI = async (
    data: IChangePasswordParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.CHANGE_PASSWORD;

    const response = await jfwAxios.put(url, data, config);

    return response.data;
};

/**
 * #JFW-66 Thiếu tài liệu GET, POST: api/users/{id}/configurations
 */
export const getUserConfigurationAPI = async (
    userId: IdType,
    params?: IGetUserConfigurationParams,
    config?: AxiosRequestConfig,
): Promise<IConfiguration[]> => {
    const url = generatePath(USER_PATH.CONFIGURATIONS.GET, {
        id: userId,
    });
    const response = await jfwAxios.get(url, { ...config, params });

    return response.data;
};

/**
 * #JFW-66 Thiếu tài liệu GET, POST: api/users/{id}/configurations
 */
export const createUserConfigurationAPI = async (
    userId: IdType,
    data: ICreateConfigurationParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.CONFIGURATIONS.CREATE, {
        id: userId,
    });

    return await jfwAxios.post(url, data, config);
};

/**
 * Gets the referees of the user.
 */
export const getRefereeAPI = async (
    userId: IdType,
    config?: AxiosRequestConfig,
): Promise<IReferee[]> => {
    const url = generatePath(USER_PATH.GET_REFEREE, {
        id: userId,
    });

    const response = await jfwAxios.get(url, config);

    return response.data;
};

/**
 * #JFW-69: Thiếu tài liệu GET: v1/users/referrals/{code}/check
 */
export const checkReferralCodeAPI = async (
    code: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.REFERRAL.CHECK, {
        code,
    });

    const response = await jfwAxios.get(url, config);

    return response.data;
};

/**
 * Applies the referral code to the user.
 */
export const applyReferralCodeAPI = async (
    userId: IdType,
    params: IApplyReferralCodeParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.REFERRAL.APPLY, {
        id: userId,
    });

    return await jfwAxios.post(url, null, {
        ...config,
        params,
    });
};

/**
 * Register a new user by the given information.
 */
export const registerAPI = async (
    data: IRegisterParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.REGISTER;
    const response = await jfwAxios.post<HttpResponse<string>>(
        url,
        data,
        config,
    );
    return response.data;
};

/**
 * Forgot password
 */
export const forgotPasswordAPI = async (
    data: IForgotPasswordParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.FORGOT_PASSWORD;
    const response = await jfwAxios.post(url, data, config);
    return response.data;
};

/**
 * Resets the user's password from the reset password token.
 */
export const resetPasswordAPI = async (
    data: IResetPasswordParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.RESET_PASSWORD;
    const response = await jfwAxios.post(url, data, config);

    return response.data;
};

/**
 * #JFW-67: Thiếu tài liệu GET api/users/statistics
 */
export const getUserStatisticAPI = async (
    params: IStatisticCommonParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.STATISTIC;
    const response = await jfwAxios.get<HttpResponse<IStatistic[]>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * #JFW-68: Thiếu tài liệu GET api/v1/users/{userCode}/type/{type}
 */
export const updateUserTypeAPI = async (
    params: IUpdateUserTypeParams,
    config?: AxiosRequestConfig,
) => {
    const { type, userCode } = params;
    const url = generatePath(USER_PATH.UPDATE_TYPE, {
        userCode,
        type,
    });

    const response = await jfwAxios.put(url, config);
    return response.data;
};

/**
 * Assigns roles to the user.
 */
export const assignRolesToUserAPI = async (
    userId: IdType,
    roleIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.ROLES.ASSIGN_TO_USER, {
        id: userId,
    });

    const response = await jfwAxios.patch<HttpResponse<boolean>>(url, null, {
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
 * Revokes roles from the user.
 */
export const revokeRolesFromUserAPI = async (
    userId: IdType,
    roleIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(USER_PATH.ROLES.REMOVE_FROM_USER, {
        id: userId,
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
 * Gets the Google login URL.
 */
export const authenticationByGoogleAPI = async (
    params: IAuthenticationByGoogleParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.AUTH.BY_GOOGLE;
    const response = await jfwAxios.get<HttpResponse<string>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * This gets user data, creates authentication token and returns it.
 */
export const authenticateAPI = async (
    data: IAuthenticationParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.AUTH.ROOT;
    const response = await jfwAxios.post<HttpResponse<IAuthenticateResponse>>(
        url,
        data,
        config,
    );

    console.debug('response', response);

    return response.data;
};

/**
 * Authenticates the user with the given email and brand URL.
 */
export const authenticateByEmailAddressAPI = async (
    data: IAuthenticateByEmailAddressParams,
    config?: AxiosRequestConfig,
) => {
    const url = USER_PATH.AUTH.BY_EMAIL_ADDRESS;

    const response = await jfwAxios.post<HttpResponse<null>>(url, data, config);

    return response.data;
};
