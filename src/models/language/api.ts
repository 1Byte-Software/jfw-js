import { RawAxiosRequestHeaders } from 'axios';
import { ILanguage } from './types';
import { get } from '../../utils/axiosHelper';
import { LANGUAGE_PATH } from './paths';

/**
 * Gets languages
 */
export const queryLanguageAPI = async (
    userHeaders?: RawAxiosRequestHeaders,
): Promise<ILanguage[]> => {
    const url = LANGUAGE_PATH.QUERY;
    const response = await get(url, null, userHeaders);
    return response.data;
};
