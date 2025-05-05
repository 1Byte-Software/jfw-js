import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ISSUE_PATH } from './paths';
import {
    ICreateIssueData,
    ICreateIssueReactionData,
    IGetIssuesParams,
    IIssue,
    IUpdateIssueData,
} from './types';

/**
 * Creates a new issue.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/create-an-issue}
 */
export const createIssueAPI = async (
    data: ICreateIssueData,
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_PATH.CREATE_ISSUE;

    const response = await jfwAxios.post<HttpResponse<IIssue>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Create an issue reaction
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/create-an-issue-reaction}
 */
export const createIssueReactionAPI = async (
    data: ICreateIssueReactionData,
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_PATH.CREATE_ISSUE_REACTION;

    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes an issue by id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue}
 */
export const deleteIssueAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_PATH.DELETE_ISSUE, {
        id,
    });

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Deletes an issue reaction by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue-reaction}
 */
export const deleteIssueReactionAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_PATH.DELETE_ISSUE_REACTION, {
        id,
    });

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets the list of issues.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues}
 */
export const getIssuesAPI = async (
    params?: IGetIssuesParams,
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_PATH.GET_ISSUES;
    const response = await jfwAxios.get<HttpResponseList<IIssue>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Gets an issue by id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-an-issue}
 */
export const getIssueAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_PATH.GET_ISSUE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IIssue>>(url, config);

    return response.data;
};

/**
 * Gets the list of issues. The maximum number of issues is 100.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues-by-list-id}
 */
export const getIssuesByListIdAPI = async (
    ids: IdType[],
    config?: AxiosRequestConfig,
): Promise<HttpResponseList<IIssue>> => {
    const url = ISSUE_PATH.GET_ISSUES_BY_LIST_ID;
    const response = await jfwAxios.get(url, {
        params: {
            ids,
        },
        paramsSerializer: {
            indexes: true,
        },
        ...config,
    });

    return response.data;
};

/**
 * Get the children of a issue by id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-children-issues}
 */
export const getChildrenIssuesAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_PATH.GET_CHILDREN_ISSUES, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IIssue[]>>(url, config);

    return response.data;
};

/**
 * Update an issue by id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/update-an-issue}
 */
export const updateIssueAPI = async (
    id: IdType,
    data: IUpdateIssueData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_PATH.UPDATE_ISSUE, {
        id,
    });

    const response = await jfwAxios.patch<HttpResponse<IIssue>>(url, data, config);

    return response.data;
};
