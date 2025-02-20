import { RawAxiosRequestHeaders } from 'axios';
import { IResponse, IStatistic, IStatisticCommonParams } from '../../core';
import { get, patch, post, put, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IListResponse, IdType } from '../base';
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
export const queryUserAPI = async (
    params: IQueryUserParams,
): Promise<IListResponse<IUser>> => {
    const url = USER_PATH.QUERY;
    const response = await get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

/**
 * Gets the current user logged in.
 */
export const getMeAPI = async (
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IUser> => {
    const url = USER_PATH.GET_ME;
    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * #JFW-70: Thiếu tài liệu getUserByIds GET: api/users
 */
export const getUserByIdsAPI = async (
    path: string,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IUser[]> => {
    const url = `${REST}?${path}`;
    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * #JFW-65: Thiếu tài liệu GET: api/users/by-username/{username}
 */
export const getUserByUsernameAPI = async (
    username: string,
): Promise<IUser> => {
    const url = generatePath(USER_PATH.GET_BY_USERNAME, {
        username,
    });

    const response = await get(url, null);

    return response.data;
};

/**
 * Gets a user
 */
export const getUserByIdAPI = async (
    userId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IUser> => {
    const url = generatePath(USER_PATH.GET_BY_ID, {
        id: userId,
    });
    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * Updates a user
 */
export const updateUserByIdAPI = async (
    userId: IdType,
    payload: IUpdateProfileParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(USER_PATH.UPDATE_BY_ID, {
        id: userId,
    });

    const response = await put(url, payload, null, userHeaders);

    return response.data;
};

/**
 * Delete a user
 */
export const deleteUserAPI = async (userId: IdType) => {
    const url = generatePath(USER_PATH.DELETE_BY_ID, {
        id: userId,
    });

    const response = await remove(url);

    return response.data;
};

/**
 * Change the password of the user. If the user logs in to the system using the Google method, after calling the API change password successfully, we send an email to verify the user request.
 */
export const changePasswordAPI = async (
    params: IChangePasswordParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = USER_PATH.CHANGE_PASSWORD;

    const response = await put(url, params, null, userHeaders);

    return response.data;
};

/**
 * #JFW-66 Thiếu tài liệu GET, POST: api/users/{id}/configurations
 */
export const getUserConfigurationAPI = async (
    userId: IdType,
    params?: IGetUserConfigurationParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IConfiguration[]> => {
    const url = generatePath(USER_PATH.CONFIGURATIONS.GET, {
        id: userId,
    });
    const response = await get(url, { params }, userHeaders);

    return response.data;
};

/**
 * #JFW-66 Thiếu tài liệu GET, POST: api/users/{id}/configurations
 */
export const createUserConfigurationAPI = async (
    userId: IdType,
    payload: ICreateConfigurationParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(USER_PATH.CONFIGURATIONS.CREATE, {
        id: userId,
    });

    return await post(url, payload, null, userHeaders);
};

/**
 * Gets the referees of the user.
 */
export const getRefereeAPI = async (
    userId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IReferee[]> => {
    const url = generatePath(USER_PATH.GET_REFEREE, {
        id: userId,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * #JFW-69: Thiếu tài liệu GET: v1/users/referrals/{code}/check
 */
export const checkReferralCodeAPI = async (
    code: string,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(USER_PATH.REFERRAL.CHECK, {
        code,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * Applies the referral code to the user.
 */
export const applyReferralCodeAPI = async (
    userId: IdType,
    params: IApplyReferralCodeParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(USER_PATH.REFERRAL.APPLY, {
        id: userId,
    });

    return await post(
        url,
        null,
        {
            params,
        },
        userHeaders,
    );
};

/**
 * Register a new user by the given information.
 */
export const registerAPI = async (
    payload: IRegisterParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = USER_PATH.REGISTER;
    const response = await post(url, payload, null, userHeaders);
    return response.data;
};

/**
 * Forgot password
 */
export const forgotPasswordAPI = async (
    payload: IForgotPasswordParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = USER_PATH.FORGOT_PASSWORD;
    const response = await post(url, payload, null, userHeaders);
    return response.data;
};

/**
 * Resets the user's password from the reset password token.
 */
export const resetPasswordAPI = async (
    payload: IResetPasswordParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = USER_PATH.RESET_PASSWORD;
    const response = await post(url, payload, null, userHeaders);
    return response.data;
};

/**
 * #JFW-67: Thiếu tài liệu GET api/users/statistics
 */
export const getUserStatisticAPI = async (
    params: IStatisticCommonParams,
): Promise<IStatistic[]> => {
    const url = USER_PATH.STATISTIC;
    const response = await get(url, {
        params,
    });

    return response.data;
};

/**
 * #JFW-68: Thiếu tài liệu GET api/v1/users/{userCode}/type/{type}
 */
export const updateUserTypeAPI = async (params: IUpdateUserTypeParams) => {
    const { type, userCode } = params;
    const url = generatePath(USER_PATH.UPDATE_TYPE, {
        userCode,
        type,
    });

    const response = await put(url);
    return response.data;
};

/**
 * Assigns roles to the user.
 */
export const assignRolesToUserAPI = async (userId: IdType, params: string) => {
    const url = generatePath(USER_PATH.ROLES.ASSIGN_TO_USER, {
        id: userId,
    });

    const response = await patch(`${url}?${params}`);

    return response.data;
};

/**
 * Revokes roles from the user.
 */
export const revokeRolesFromUserAPI = async (
    userId: IdType,
    params: string,
) => {
    const url = generatePath(USER_PATH.ROLES.REMOVE_FROM_USER, {
        id: userId,
    });
    const response = await remove(`${url}?${params}`);

    return response.data;
};

/**
 * Gets the Google login URL.
 */
export const authenticationByGoogleAPI = async (
    params: IAuthenticationByGoogleParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<string> => {
    const url = USER_PATH.AUTH.BY_GOOGLE;
    const response = await get(url, { params }, userHeaders);

    return response.data;
};

/**
 * This gets user data, creates authentication token and returns it.
 */
export const authenticateAPI = async (
    payload: IAuthenticationParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IAuthenticateResponse> => {
    const url = USER_PATH.AUTH.ROOT;
    const response = await post(url, payload, null, userHeaders);

    return response.data;
};

/**
 * Authenticates the user with the given email and brand URL.
 */
export const authenticateByEmailAddressAPI = async (
    payload: IAuthenticateByEmailAddressParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<null>> => {
    const url = USER_PATH.AUTH.BY_EMAIL_ADDRESS;

    const response = await post(url, payload, null, userHeaders);

    return response.data;
};
