import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { EMAIL_ADDRESS_PATTERN_PATH } from './paths';
import {
    ICreateEmailAddressPatternParams,
    IEmailAddressPattern,
    IEmailAddressPatternPlaceholderKey,
    IQueryEmailAddressPatternParams,
    IUpdateEmailAddressPatternParams,
} from './types';

const REST = 'email-address-patterns';
const PLACEHOLDER_KEYS = 'placeholder-keys';

/**
 * Gets the list off all email address patterns by the given filter.
 */
export const queryEmailAddressPatternAPI = async (
    params: IQueryEmailAddressPatternParams,
): Promise<HttpResponseList<IEmailAddressPattern>> => {
    const url = EMAIL_ADDRESS_PATTERN_PATH.QUERY;
    const response = await jfwAxios.get(url, {
        params,
    });

    return response.data;
};

/**
 * Gets an email address pattern by the given hashed id.
 */
export const getEmailAddressPatternByIdAPI = async (
    id: IdType,
): Promise<IEmailAddressPattern> => {
    const url = generatePath(EMAIL_ADDRESS_PATTERN_PATH.GET_BY_ID, {
        id,
    });
    const response = await jfwAxios.get(url);

    return response.data;
};

/**
 * Creates an email address pattern.
 */
export const createEmailAddressPatternAPI = async (
    params: ICreateEmailAddressPatternParams,
) => {
    const url = EMAIL_ADDRESS_PATTERN_PATH.CREATE;
    const response = await jfwAxios.post(url, params);

    return response.data;
};

/**
 * Updates an email address pattern by the given hashed id.
 */
export const updateEmailAddressPatternAPI = async (
    id: IdType,
    params: IUpdateEmailAddressPatternParams,
) => {
    const url = generatePath(EMAIL_ADDRESS_PATTERN_PATH.UPDATE_BY_ID, {
        id,
    });
    const response = await jfwAxios.put(url, params);

    return response.data;
};

/**
 * Deletes an email pattern by the given hashed id.
 */
export const deleteEmailAddressPatternByIdAPI = async (id: IdType) => {
    const url = generatePath(EMAIL_ADDRESS_PATTERN_PATH.DELETE_BY_ID, {
        id,
    });
    const response = await jfwAxios.delete(url);

    return response.data;
};

/**
 * Gets all placeholder keys.
 */
export const getEmailAddressPatternPlaceholderKeyAPI =
    async (): Promise<IEmailAddressPatternPlaceholderKey> => {
        const url = `${REST}/${PLACEHOLDER_KEYS}`;
        const response = await jfwAxios.get(url);

        return response.data;
    };
