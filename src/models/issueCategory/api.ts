import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { ISSUE_CATEGORY_PATH } from './paths';
import {
    ICreateIssueCategoryParams,
    IGetIssueCategoriesParams,
    IIssueCategory,
    IUpdateIssueCategoryParams,
} from './types';

export class IssueCategoryAPI extends AbstractAPI {
    /**
     * # Create an issue category
     *
     * Creates a new issue category.
     *
     * @param params - The params for creating a new issue category.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/create-an-issue-category}
     */
    public async createIssueCategory(
        params: ICreateIssueCategoryParams,
        config?: AxiosRequestConfig,
    ) {
        const url = ISSUE_CATEGORY_PATH.CREATE_ISSUE_CATEGORY;
        const response = await this.axios.post<HttpResponse<IIssueCategory>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete an issue category
     *
     * Deletes an issue category by the given id.
     *
     * @param id - The id of the issue category.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/delete-an-issue-category}
     */
    public async deleteIssueCategory(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ISSUE_CATEGORY_PATH.DELETE_ISSUE_CATEGORY, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get issue categories
     *
     * Gets the list of issue category.
     *
     * @param params - The params for getting lst of issue category.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-issue-categories}
     */
    public async getIssueCategories(
        params?: IGetIssueCategoriesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = ISSUE_CATEGORY_PATH.GET_ISSUE_CATEGORIES;
        const response = await this.axios.get<HttpResponse<IIssueCategory[]>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Get an issue category
     *
     * Gets an issue category by the given id.
     *
     * @param id - The id of the issue category.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-an-issue-category}
     */
    public async getIssueCategory(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ISSUE_CATEGORY_PATH.GET_ISSUE_CATEGORY, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IIssueCategory>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Update an issue category
     *
     * Updates an issue category by the given id.
     *
     * @param id - The id of the issue category.
     * @param data - The data for updating a issue category.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/update-an-issue-category}
     */
    public async updateIssueCategory(
        id: IdType,
        params: IUpdateIssueCategoryParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(ISSUE_CATEGORY_PATH.UPDATE_ISSUE_CATEGORY, {
            id,
        });
        const response = await this.axios.patch<HttpResponse<IIssueCategory>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
