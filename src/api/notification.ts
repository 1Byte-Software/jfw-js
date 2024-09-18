import { axiosInstanceJfw } from "@/config/axios/axiosClient";
import { IById, IListResponse } from "@/models/interfaces";
import {
    IGetNotificationRequestParams,
    INotification,
    IUpdateAllNotificationsParams,
    IUpdateNotificationRequestParams,
} from "@/models/interfaces/notification";

const REST = "notifications";
const UPDATE_ALL_STATUS = "update-all-status";
const STATUS = "update-status";

export const getNotificationsAPI = async (
    params: IGetNotificationRequestParams
): Promise<IListResponse<INotification>> => {
    const url = REST;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });
    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

export const updateNotificationsAPI = async (
    path: IById,
    params: IUpdateNotificationRequestParams
) => {
    const { id } = path;
    const url = `${REST}/${id}/${STATUS}`;
    const response = await axiosInstanceJfw.put(url, null, {
        params,
    });
    return response.data;
};

export const deleteNotificationsAPI = async (path: IById) => {
    const { id } = path;
    const url = `${REST}/${id}`;
    const response = await axiosInstanceJfw.delete(url);
    return response.data;
};

export const updateAllNotificationsAPI = async (params: IUpdateAllNotificationsParams) => {
    const url = `${REST}/${UPDATE_ALL_STATUS}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    return response.data;
};
