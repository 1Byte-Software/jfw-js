import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { FEATURE_PATH } from './paths';
import {
    ICreateFeatureParams,
    IFeature,
    IQueryFeatureParams,
    IUpdateFeatureParams,
} from './types';

/**
 * Gets the list of all features by the given filter.
 */
export const queryFeatureAPI = async (
    params?: IQueryFeatureParams,
): Promise<IFeature[]> => {
    const url = FEATURE_PATH.QUERY;
    const response = await jfwAxios.get(url, {
        params,
    });
    return response.data;
};

/**
 * Get a feature
 */
export const getFeatureByIdAPI = async (id: IdType): Promise<IFeature> => {
    const url = generatePath(FEATURE_PATH.GET_BY_ID, {
        id,
    });

    const response = await jfwAxios.get(url);
    return response.data;
};

/**
 * Adds a new feature.
 */
export const createFeatureAPI = async (payload: ICreateFeatureParams) => {
    const url = FEATURE_PATH.CREATE;

    const response = await jfwAxios.post(url, payload);

    return response.data;
};

/**
 * Updates the feature data.
 */
export const updateFeatureByIdAPI = async (
    id: IdType,
    payload: IUpdateFeatureParams,
) => {
    const url = generatePath(FEATURE_PATH.UPDATE_BY_ID, {
        id,
    });

    const response = await jfwAxios.patch(url, payload);

    return response.data;
};

/**
 * Deletes a feature by data ID.
 */
export const deleteFeatureByIdAPI = async (id: IdType) => {
    const url = generatePath(FEATURE_PATH.DELETE_BY_ID, {
        id,
    });

    const response = await jfwAxios.delete(url);

    return response.data;
};
