import { axiosInstanceJfw } from "@/config/axios/axiosClient";
import {
    IAddReactionPayload,
    IById,
    ICreateIssuePayload,
    IDeleteReactionPath,
    IGetListIssueTypesParams,
    IGetListIssuesParams,
    IIssue,
    IIssueType,
    IListResponse,
} from "@/models/interfaces";

const REST = "issues";
const REST_REACTION = "issue-reactions";
const REST_TYPE = "issue-types";
const BY_LIST = "by-list";
const CHILDREN = "children";

export const createIssueAPI = async (payload: ICreateIssuePayload) => {
    const url = `${REST}`;

    return await axiosInstanceJfw.post(url, payload);
};

export const getListIssuesAPI = async (
    params: IGetListIssuesParams
): Promise<IListResponse<IIssue>> => {
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

export const deleteIssueAPI = async (path: IById) => {
    const { id } = path;
    const url = `${REST}/${id}`;

    return await axiosInstanceJfw.delete(url);
};

export const createIssueReactionAPI = async (payload: IAddReactionPayload) => {
    const url = `${REST_REACTION}`;

    return await axiosInstanceJfw.post(url, payload);
};

export const deleteReactionAPI = async (path: IDeleteReactionPath) => {
    const { id } = path;
    const url = `${REST_REACTION}/${id}`;

    return await axiosInstanceJfw.delete(url);
};

export const getListIssueTypesAPI = async (
    params: IGetListIssueTypesParams
): Promise<IIssueType[]> => {
    const url = `${REST_TYPE}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    return response.data;
};

export const getListIssuesByIdsAPI = async (path: string): Promise<IListResponse<IIssue>> => {
    const url = `${REST}/${BY_LIST}?${path}`;
    const response = await axiosInstanceJfw.get(url);

    return response.data;
};

export const getListIssueChildren = async (path: IById): Promise<IIssue[]> => {
    const { id } = path;
    const url = `${REST}/${id}/${CHILDREN}`;
    const response = await axiosInstanceJfw.get(url);

    return response.data;
};
