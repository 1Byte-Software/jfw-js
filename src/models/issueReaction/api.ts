import { AxiosRequestConfig } from 'axios';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ISSUE_REACTION_PATH } from './paths';
import { ICreateIssueReactionParams } from './types';

/**
 * Creates a new issue reaction.
 */
export const createIssueReactionAPI = async (
    params: ICreateIssueReactionParams,
    config?: AxiosRequestConfig,
) => {
    const url = ISSUE_REACTION_PATH.CREATE;

    return await jfwAxios.post(url, params, config);
};

/**
 * Deletes an issue reaction by the given id.
 */
export const deleteIssueReactionByIdAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ISSUE_REACTION_PATH.DELETE_BY_ID, {
        id,
    });

    return await jfwAxios.delete(url, config);
};
