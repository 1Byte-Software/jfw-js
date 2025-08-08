import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ISSUE_PATH } from './paths';
import {
    ICreateIssueParams,
    ICreateIssueReactionParams,
    IGetIssuesParams,
    IIssue,
    IUpdateIssueParams,
} from './types';

/**
 * # Create an issue
 *
 * Creates a new issue.
 *
 * @param params - The params for creating an issue.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/create-an-issue}
 */
export const createIssue = async (
    params: ICreateIssueParams,
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_PATH.CREATE_ISSUE;
    const response = await jfwAxios.post<HttpResponse<IIssue>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete an issue.
 *
 * Deletes an issue by id.
 *
 * @param id - The id of issue.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue}
 */
export const deleteIssue = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(ISSUE_PATH.DELETE_ISSUE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get issues
 *
 * Get issues
 *
 * @param params - The params for getting issues.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues}
 */
export const getIssues = async (
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
 * # Get an issue
 *
 * Gets an issue by id.
 *
 * @param id - The id of issue.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-an-issue}
 */
export const getIssue = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(ISSUE_PATH.GET_ISSUE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IIssue>>(url, config);

    return response.data;
};

/**
 * # Get issues by list id
 *
 * Gets the list of issues. The maximum number of issues is 100.
 *
 * @param ids - The list of the id to apply.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues-by-list-id}
 */
export const getIssuesByListId = async (
    ids: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_PATH.GET_ISSUES_BY_LIST_ID;
    const response = await jfwAxios.get<HttpResponse<IIssue[]>>(url, {
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
 * # Get children issues
 *
 * Get the children of a issue by id.
 *
 * @param id - The id of issue.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-children-issues}
 */
export const getChildrenIssues = async (
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
 * # Update an issue
 *
 * Update an issue by id.
 *
 * @param params - The params for updating an issue.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/update-an-issue}
 */
export const updateIssue = async (
    params: IUpdateIssueParams,
    config?: AxiosRequestConfig,
) => {
    const { id, ...bodyParams } = params;
    const url = generatePath(ISSUE_PATH.UPDATE_ISSUE, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<IIssue>>(
        url,
        bodyParams,
        config,
    );

    return response.data;
};

/**
 * # Create an issue reaction
 *
 * Create an issue reaction
 *
 * @param params - The params for creating an issue reaction.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/issue-reactions/create-an-issue-reaction}
 */
export const createIssueReaction = async (
    params: ICreateIssueReactionParams,
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_PATH.CREATE_ISSUE_REACTION;
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * Deletes an issue reaction by the given id.
 *
 * @param id - The id of the issue reaction.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue-reaction}
 */
export const deleteIssueReaction = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_PATH.DELETE_ISSUE_REACTION, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};
