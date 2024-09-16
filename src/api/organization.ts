import { axiosInstanceJfw } from "@/config/axios/axiosClient";
import {
    IById,
    IGetListOrganizationsByViewerParams,
    IGetListOrganizationsParams,
    IGetListUsersOfOrganizationParams,
    IGetOrganizationDetailPath,
    IListResponse,
    IOrganization,
    IOrganizationUser,
    IResponse,
    IResponseNotPermission,
    IUpdateOrganizationUserParams,
    IUpdateOrganizationUserPath,
} from "@/models/interfaces";

const REST = "organizations";
const UPLOAD = "upload-file";
const USER = "users";

export const getListOrganizationsAPI = async (
    params: IGetListOrganizationsParams
): Promise<IListResponse<IOrganization>> => {
    const url = `${REST}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

export const getOrganizationDetailAPI = async (
    path: IGetOrganizationDetailPath
): Promise<IOrganization> => {
    const { identify } = path;
    const url = `${REST}/${identify}`;
    const response = await axiosInstanceJfw.get(url);

    return response.data;
};

export const uploadFileAPI = async (path: IById, payload: FormData) => {
    const { id } = path;
    const url = `${REST}/${id}/${UPLOAD}`;

    return axiosInstanceJfw.post(url, payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const getListOrganizationsByViewerAPI = async (
    params: IGetListOrganizationsByViewerParams
): Promise<IListResponse<IOrganization>> => {
    const url = `${REST}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

export const createOrganizationUserAPI = async (
    path: IUpdateOrganizationUserPath
): Promise<IResponse<IOrganizationUser>> => {
    const { userId, organizationId } = path;
    const url = `${REST}/${organizationId}/${USER}/${userId}`;

    return axiosInstanceJfw.post(url);
};

export const updateOrganizationUserAPI = async (
    path: IUpdateOrganizationUserPath,
    params: IUpdateOrganizationUserParams
): Promise<IResponse<IOrganizationUser> | IResponseNotPermission> => {
    const { userId, organizationId } = path;
    const url = `${REST}/${organizationId}/${USER}/${userId}`;

    return axiosInstanceJfw.patch(url, null, {
        params,
    });
};

export const deleteOrganizationUserAPI = async (path: IUpdateOrganizationUserPath) => {
    const { userId, organizationId } = path;
    const url = `${REST}/${organizationId}/${USER}/${userId}`;

    return axiosInstanceJfw.delete(url);
};

export const getListUsersOfOrganizationAPI = async (
    path: IById,
    params: IGetListUsersOfOrganizationParams
): Promise<IListResponse<IOrganizationUser>> => {
    const { id } = path;
    const url = `${REST}/${id}/${USER}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};
