import { axiosInstanceJfw } from "@/config/axios/axiosClient";
import {
    IGetGoogleLinkParams,
    ILoginUsingEmailPayload,
    ISignInPayload,
    ISignInResponse,
} from "@/models/interfaces";
import { BRAND_URL } from "@/utils/common";

const REST = "users";
const GOOGLE = `v1/${REST}/auth/integrations/google/authenticate-url`;
const AUTH = `v1/${REST}/auth`;
const AUTH_BY_EMAIL = `${REST}/auth/by-email`;

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

export const loginUsingEmailAPI = async (payload: ILoginUsingEmailPayload) => {
    const url = `${AUTH_BY_EMAIL}`;

    const response = await axiosInstanceJfw.post(url, payload);

    return response.data;
};
