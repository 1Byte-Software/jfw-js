import { axiosInstanceJfw } from '@/config/axios/axiosClient';
import { AUTH_KEY } from '@/models/constants';
import {
    IApplyCodeParams,
    IById,
    IChangePasswordPayload,
    ICheckCodePath,
    IEditProfilePayload,
    IPaginationParams,
    IReferee,
    IUser,
} from '@/models/interfaces';
import {
    IConfiguration,
    IConfigurationPayload,
    IGetConfigurationParams,
    IUpdateUserConfigurationPath,
} from '@/models/interfaces/configuration';
import { Cookies } from 'react-cookie';

const REST = 'users';
const ME = `v1/${REST}/me`;
const CHANGE_PASSWORD = 'change-password';
const CONFIGURATION = 'configurations';
const REFEREE = 'referees';
const REFERRAL = 'referrals';
const CHECK = 'check';
const APPLY = 'apply';

export const getUserInfoAPI = async (): Promise<IUser> => {
    const url = `${ME}`;
    const response = await axiosInstanceJfw.get<IUser>(url);

    return response.data;
};

export const getUserinfoByIdsAPI = async (path: string): Promise<IUser[]> => {
    const url = `${REST}?${path}`;
    const response = await axiosInstanceJfw.get<IUser[]>(url);

    return response.data;
};

export const getUserinfoByIdAPI = async (path: IById): Promise<IUser> => {
    const { id } = path;
    const url = `${REST}/${id}`;
    const response = await axiosInstanceJfw(url);

    return response.data;
};

export const updateUserAPI = async (path: IById, payload: IEditProfilePayload) => {
    const { id } = path;
    const url = `${REST}/${id}`;

    const response = await axiosInstanceJfw.put(url, payload);

    return response.data;
};

export const changePasswordAPI = async (payload: IChangePasswordPayload) => {
    const url = `${REST}/${CHANGE_PASSWORD}`;
    const cookies = new Cookies();
    const authKey = cookies.get(AUTH_KEY);

    const response = await axiosInstanceJfw.put(url, payload, {
        params: {
            authKey,
        },
    });

    return response.data;
};

export const getListUserConfigurationsAPI = async (
    path: IById,
    params: IGetConfigurationParams
): Promise<IConfiguration[]> => {
    const { id } = path;
    const url = `${REST}/${id}/${CONFIGURATION}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    return response.data;
};

export const createUserConfigurationsAPI = async (path: IById, payload: IConfigurationPayload) => {
    const { id } = path;
    const url = `${REST}/${id}/${CONFIGURATION}`;

    return await axiosInstanceJfw.post(url, payload);
};

export const updateUserConfigurationsAPI = async (
    path: IUpdateUserConfigurationPath,
    payload: IConfigurationPayload
) => {
    const { configurationId } = path;
    const url = `${CONFIGURATION}/${configurationId}`;

    return await axiosInstanceJfw.put(url, payload);
};

export const getRefereesAPI = async (
    path: IById,
    params: IPaginationParams
): Promise<IReferee[]> => {
    const { id } = path;
    const url = `${REST}/${id}/${REFEREE}`;

    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    return response.data;
};

export const checkCodeValidAPI = async (path: ICheckCodePath) => {
    const { code } = path;
    const url = `${REST}/${REFERRAL}/${code}/${CHECK}`;

    const response = await axiosInstanceJfw.get(url);

    return response.data;
};

export const applyCodeAPI = async (path: IById, params: IApplyCodeParams) => {
    const { id } = path;
    const url = `v1/${REST}/${id}/${REFERRAL}/${APPLY}`;

    return await axiosInstanceJfw.post(url, null, {
        params,
    });
};
