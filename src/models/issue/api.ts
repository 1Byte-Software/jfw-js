import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ISSUE_PATH } from './paths';
import {
    ICreateIssueParams,
    IIssue,
    IQueryIssueParams,
    IUpdateIssueParams,
} from './types';

/**
 * Gets the list of issues.
 */
export const queryIssueAPI = async (
    params?: IQueryIssueParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponseList<IIssue>> => {
    const url = ISSUE_PATH.QUERY;
    const response = await jfwAxios.get(url, { ...config, params });

    return response.data;
};

/**
 * Creates a new issue.
 */
export const createIssueAPI = async (
    params: ICreateIssueParams,
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_PATH.CREATE;

    return await jfwAxios.post(url, params, config);
};

/**
 * Deletes a issue by ID.
 */
export const deleteIssueByIdAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_PATH.DELETE_BY_ID, {
        id,
    });

    return await jfwAxios.delete(url, config);
};

/**
 * #JFW-43: Sửa lại getIssueByIds trong jfw-js
 * Gets the list of issues. The maximum number of issues is 100.
 */
export const getIssueByIdsAPI = async (
    params: string,
    config?: AxiosRequestConfig,
): Promise<HttpResponseList<IIssue>> => {
    const url = `${ISSUE_PATH.GET_BY_LIST}?${params}`;
    const response = await jfwAxios.get(url, config);

    return response.data;
};

/**
 * Gets the children of a issue by ID.
 */
export const getIssueChildrenAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
): Promise<IIssue[]> => {
    const url = generatePath(ISSUE_PATH.GET_CHILDREN, {
        id,
    });
    const response = await jfwAxios.get(url, config);

    return response.data;
};

/**
 * Gets an issue by ID.
 */
export const getIssueByIdAPI = async (id: IdType): Promise<IIssue> => {
    const url = generatePath(ISSUE_PATH.GET_BY_ID, {
        id,
    });
    const response = await jfwAxios.get(url);

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

    const response = await jfwAxios.patch(url, params);

    return response.data;
};
