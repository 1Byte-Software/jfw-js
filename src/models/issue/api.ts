import { RawAxiosRequestHeaders } from 'axios';
import { get, patch, post, remove } from '../../utils/axiosHelper';
import { IdType } from '../asdas';
import { IListResponse } from '../interfaces';
import {
    ICreateIssueParams,
    IIssue,
    IQueryIssueParams,
    IUpdateIssueParams,
} from './types';
import { ISSUE_PATH } from './paths';
import { generatePath } from '../../utils/path';

/**
 * Gets the list of issues.
 */
export const queryIssueAPI = async (
    params?: IQueryIssueParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IIssue>> => {
    const url = ISSUE_PATH.QUERY;
    const response = await get(url, { params }, userHeaders);
    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

/**
 * Creates a new issue.
 */
export const createIssueAPI = async (
    params: ICreateIssueParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = ISSUE_PATH.CREATE;

    return await post(url, params, null, userHeaders);
};

/**
 * Deletes a issue by ID.
 */
export const deleteIssueByIdAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(ISSUE_PATH.DELETE_BY_ID, {
        id,
    });

    return await remove(url, userHeaders);
};

/**
 * #JFW-43: Sửa lại getIssueByIds trong jfw-js
 * Gets the list of issues. The maximum number of issues is 100.
 */
export const getIssueByIdsAPI = async (
    params: string,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IIssue>> => {
    const url = `${ISSUE_PATH.GET_BY_LIST}?${params}`;
    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * Gets the children of a issue by ID.
 */
export const getIssueChildrenAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IIssue[]> => {
    const url = generatePath(ISSUE_PATH.GET_CHILDREN, {
        id,
    });
    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * Gets an issue by ID.
 */
export const getIssueByIdAPI = async (id: IdType): Promise<IIssue> => {
    const url = generatePath(ISSUE_PATH.GET_BY_ID, {
        id,
    });
    const response = await get(url);

    return response.data;
};

/**
 * #JFW-45: Thiếu tài liệu PATCH: api/issues/{id}
 */
export const updateIssueByIdAPI = async (
    id: IdType,
    params: IUpdateIssueParams,
) => {
    const url = generatePath(ISSUE_PATH.UPDATE_BY_ID, {
        id,
    });

    const response = await patch(url, params);

    return response.data;
};
