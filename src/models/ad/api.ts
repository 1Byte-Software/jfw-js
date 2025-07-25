import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AD_PATH } from './paths';
import { IAd, ICreateAdParams, IGetAdsParams, IUpdateAdParams } from './types';
import { AdPosition } from './constants';

/**
 * #NOTE: Will update tsdoc in future.
 */
export const createAd = async (
    params: ICreateAdParams,
    config?: AxiosRequestConfig,
) => {
    const url = AD_PATH.CREATE_AD;
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * #NOTE: Will update tsdoc in future.
 */
export const getAds = async (
    params?: IGetAdsParams,
    config?: AxiosRequestConfig,
) => {
    const url = AD_PATH.GET_ADS;
    const response = await jfwAxios.get<HttpResponseList<IAd>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * #NOTE: Will update tsdoc in future.
 */
export const getAd = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(AD_PATH.GET_AD, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IAd>>(url, config);

    return response.data;
};

/**
 * #NOTE: Will update tsdoc in future.
 */
export const deleteAd = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(AD_PATH.DELETE_AD, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * #NOTE: Will update tsdoc in future.
 */
export const updateAd = async (
    params: IUpdateAdParams,
    config?: AxiosRequestConfig,
) => {
    const { id, ...bodyParams } = params;
    const url = generatePath(AD_PATH.UPDATE_AD, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        bodyParams,
        config,
    );

    return response.data;
};

/**
 * #NOTE: Will update tsdoc in future.
 */
export const getAdsWithClientView = async (
    position: AdPosition,
    config?: AxiosRequestConfig,
) => {
    const url = AD_PATH.GET_ADS_WITH_CLIENT_VIEW;

    const response = await jfwAxios.get<HttpResponse<IAd[]>>(url, {
        params: {
            position,
        },
        ...config,
    });

    return response.data;
};

/**
 * #NOTE: Will update tsdoc in future.
 */
export const deactivateAd = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(AD_PATH.DEACTIVATE_AD, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        null,
        config,
    );

    return response.data;
};

/**
 * #NOTE: Will update tsdoc in future.
 */
export const activateAd = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(AD_PATH.ACTIVATE_AD, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        null,
        config,
    );

    return response.data;
};
