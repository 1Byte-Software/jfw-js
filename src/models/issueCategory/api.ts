import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ISSUE_CATEGORY_PATH } from './paths';
import {
    ICreateIssueCategoryData,
    IGetIssueCategoriesParams,
    IIssueCategory
} from './types';

/**
 * Creates a new issue category.
 *
 * @param data - The data for creating a new issue category.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/create-an-issue-category}
 */
export const createIssueCategoryAPI = async (
    data: ICreateIssueCategoryData,
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_CATEGORY_PATH.CREATE_ISSUE_CATEGORY;
    const response = await jfwAxios.post<HttpResponse<IIssueCategory>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes an issue category by the given id.
 *
 * @param id - The id for deleting an issue category.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/delete-an-issue-category}
 */
export const deleteIssueCategoryAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_CATEGORY_PATH.DELETE_ISSUE_CATEGORY, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets the list of issue category.
 *
 * @param params - The parameters for getting lst of issue category.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-issue-categories}
 */
export const getIssueCategoriesAPI = async (
    params?: IGetIssueCategoriesParams,
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_CATEGORY_PATH.GET_ISSUE_CATEGORIES;
    const response = await jfwAxios.get<HttpResponseList<IIssueCategory>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Gets an issue category by the given id.
 *
 * @param id - The id of the issue category.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-an-issue-category}
 */
export const getIssueCategoryAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_CATEGORY_PATH.GET_ISSUE_CATEGORY, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IIssueCategory>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Updates an issue category by the given id.
 *
 * @param id - The id of the issue category.
 * @param data - The data for updating a issue category.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/issue-categories/update-an-issue-category}
 */
export const updateIssueCategoryAPI = async (
    id: IdType,
    data: ICreateIssueCategoryData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_CATEGORY_PATH.UPDATE_ISSUE_CATEGORY, {
        id,
    });
    const response = await jfwAxios.patch<HttpResponse<IIssueCategory>>(url, data, config);

    return response.data;
};
