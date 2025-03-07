import { RawAxiosRequestHeaders } from 'axios';
import { get, patch, post, remove } from '../../utils/axiosHelper222';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ISSUE_CATEGORY_PATH } from './paths';
import {
    ICreateIssueCategoryParams,
    IIssueCategory,
    IQueryIssueCategoryParams,
} from './types';

/**
 * Gets the list of issue category.
 */
export const queryIssueCategoryAPI = async (
    params?: IQueryIssueCategoryParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IIssueCategory[]> => {
    const url = ISSUE_CATEGORY_PATH.QUERY;
    const response = await get(url, { params }, userHeaders);

    return response.data;
};

/**
 * Gets an issue category by the given id.
 */
export const getIssueCategoryByIdAPI = async (
    id: IdType,
): Promise<IIssueCategory> => {
    const url = generatePath(ISSUE_CATEGORY_PATH.GET_BY_ID, {
        id,
    });
    const response = await get(url);

    return response.data;
};

/**
 * Creates a new issue category.
 */
export const createIssueCategoryAPI = async (
    payload: ICreateIssueCategoryParams,
) => {
    const url = `${REST}`;
    const response = await post(url, payload);

    return response.data;
};

/**
 * Updates an issue category by the given id.
 */
export const updateIssueCategoryAPI = async (
    id: IdType,
    payload: ICreateIssueCategoryParams,
) => {
    const url = generatePath(ISSUE_CATEGORY_PATH.UPDATE_BY_ID, {
        id,
    });

    const response = await patch(url, payload);

    return response.data;
};

/**
 * Deletes an issue category by the given id.
 */
export const deleteIssueCategoryAPI = async (id: IdType) => {
    const url = generatePath(ISSUE_CATEGORY_PATH.DELETE_BY_ID, {
        id,
    });

    const response = await remove(url);

    return response.data;
};
