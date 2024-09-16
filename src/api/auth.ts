import { axiosInstanceJfw } from "@/config/axios/axiosClient";
import { BRAND_URL } from "@/utils/common";
import {
    IForgotPasswordPayload,
    IGetGoogleLinkParams,
    ILoginUsingEmailPayload,
    IResetPasswordPayload,
    ISignInPayload,
    ISignInResponse,
    ISignUpPayload,
} from "@/models/interfaces";

const REST = "users";
const GOOGLE = `v1/${REST}/auth/integrations/google/authenticate-url`;
const AUTH = `v1/${REST}/auth`;
const REGISTER = `${REST}/register`;
const FORGOT_PASSWORD = `${REST}/forgot-password`;
const RESET_PASSWORD = `${REST}/reset-password`;
const AUTH_BY_EMAIL = `${REST}/auth/by-email`;
const CHECK_FIRST_LOGIN = `${REST}/check-first-login-today`;
const REST_TOKEN = "token";
const REFRESH_TOKEN = `${REST_TOKEN}/refresh-token`;

export const getGoogleLinkAPI = async (params: IGetGoogleLinkParams): Promise<string> => {
    const url = `${GOOGLE}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });
    return response.data;
};

export const signInAPI = async (payload: ISignInPayload): Promise<ISignInResponse> => {
    const url = `${AUTH}`;
    const body = {
        brandUrl: BRAND_URL,
        ...payload,
    };
    const response = await axiosInstanceJfw.post<ISignInResponse>(url, body);
    return response.data;
};

export const signUpAPI = async (payload: ISignUpPayload) => {
    const url = `${REGISTER}`;
    const body = {
        brandUrl: BRAND_URL,
        ...payload,
    };
    const response = await axiosInstanceJfw.post(url, body);
    return response.data;
};

export const forgotPasswordAPI = async (payload: IForgotPasswordPayload) => {
    const url = `${FORGOT_PASSWORD}`;
    const body = {
        brandUrl: BRAND_URL,
        ...payload,
    };
    const response = await axiosInstanceJfw.post(url, body);
    return response.data;
};

export const resetPasswordAPI = async (payload: IResetPasswordPayload) => {
    const url = `${RESET_PASSWORD}`;
    const body = {
        brandUrl: BRAND_URL,
        ...payload,
    };
    const response = await axiosInstanceJfw.post(url, body);
    return response.data;
};

export const loginUsingEmailAPI = async (payload: ILoginUsingEmailPayload) => {
    const url = `${AUTH_BY_EMAIL}`;

    const response = await axiosInstanceJfw.post(url, payload);

    return response.data;
};

export const checkFirstLoginTodayAPI = async (): Promise<boolean> => {
    const url = `${CHECK_FIRST_LOGIN}`;

    const response = await axiosInstanceJfw.get(url);

    return response.data;
};
