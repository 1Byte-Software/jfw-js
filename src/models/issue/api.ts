import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { ISSUE_PATH } from './paths';
import {
    ICreateIssueParams,
    ICreateIssueReactionParams,
    IGetIssuesParams,
    IIssue,
    IUpdateIssueParams,
} from './types';

export class IssueAPI extends AbstractAPI {
    /**
     * # Create an issue
     *
     * Creates a new issue.
     *
     * @param params - The params for creating an issue.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/create-an-issue}
     */
    public async createIssue(
        params: ICreateIssueParams,
        config?: AxiosRequestConfig,
    ) {
        const url = ISSUE_PATH.CREATE_ISSUE;
        const response = await this.axios.post<HttpResponse<IIssue>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete an issue.
     *
     * Deletes an issue by id.
     *
     * @param id - The id of issue.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue}
     */
    public async deleteIssue(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ISSUE_PATH.DELETE_ISSUE, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get issues
     *
     * Get issues
     *
     * @param params - The params for getting issues.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues}
     */
    public async getIssues(
        params?: IGetIssuesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = ISSUE_PATH.GET_ISSUES;
        const response = await this.axios.get<HttpResponseList<IIssue>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get an issue
     *
     * Gets an issue by id.
     *
     * @param id - The id of issue.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-an-issue}
     */
    public async getIssue(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ISSUE_PATH.GET_ISSUE, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IIssue>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get issues by list id
     *
     * Gets the list of issues. The maximum number of issues is 100.
     *
     * @param ids - The list of the id to apply.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues-by-list-id}
     */
    public async getIssuesByListId(ids: IdType[], config?: AxiosRequestConfig) {
        const url = ISSUE_PATH.GET_ISSUES_BY_LIST_ID;
        const response = await this.axios.get<HttpResponse<IIssue[]>>(url, {
            params: {
                ids,
            },
            paramsSerializer: {
                indexes: true,
            },
            ...config,
        });

        return response.data;
    }

    /**
     * # Get children issues
     *
     * Get the children of a issue by id.
     *
     * @param id - The id of issue.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/get-children-issues}
     */
    public async getChildrenIssues(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ISSUE_PATH.GET_CHILDREN_ISSUES, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IIssue[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Update an issue
     *
     * Update an issue by id.
     *
     * @param params - The params for updating an issue.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/update-an-issue}
     */
    public async updateIssue(
        params: IUpdateIssueParams,
        config?: AxiosRequestConfig,
    ) {
        const { id, ...bodyParams } = params;
        const url = generatePath(ISSUE_PATH.UPDATE_ISSUE, {
            id,
        });
        const response = await this.axios.put<HttpResponse<IIssue>>(
            url,
            bodyParams,
            config,
        );

        return response.data;
    }

    /**
     * # Create an issue reaction
     *
     * Create an issue reaction
     *
     * @param params - The params for creating an issue reaction.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/issue-reactions/create-an-issue-reaction}
     */
    public async createIssueReaction(
        params: ICreateIssueReactionParams,
        config?: AxiosRequestConfig,
    ) {
        const url = ISSUE_PATH.CREATE_ISSUE_REACTION;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * Deletes an issue reaction by the given id.
     *
     * @param id - The id of the issue reaction.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue-reaction}
     */
    public async deleteIssueReaction(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ISSUE_PATH.DELETE_ISSUE_REACTION, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }
}
