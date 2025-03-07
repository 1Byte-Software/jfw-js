import { RawAxiosRequestHeaders } from 'axios';
import { post, remove } from '../../utils/axiosHelper222';
import { ICreateIssueReactionParams } from './types';
import { IdType } from '../base';
import { generatePath } from '../../utils/path';
import { ISSUE_REACTION_PATH } from './paths';

/**
 * Creates a new issue reaction.
 */
export const createIssueReactionAPI = async (
    params: ICreateIssueReactionParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = ISSUE_REACTION_PATH.CREATE;

    return await post(url, params, null, userHeaders);
};

/**
 * Deletes an issue reaction by the given id.
 */
export const deleteIssueReactionByIdAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(ISSUE_REACTION_PATH.DELETE_BY_ID, {
        id,
    });

    return await remove(url, userHeaders);
};
