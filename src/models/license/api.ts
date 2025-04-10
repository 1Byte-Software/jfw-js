import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { LICENSE_PATH } from './paths';
import {
    IApplyLicenseToGivenUserParams,
    IApplyLicenseToLoginNameParams,
    ICreateLicenseParams,
    IGenerateLicenseKeyParams,
    IGetLicenseStatisticParams,
    ILicense,
    ILicenseStatistic,
    IPurchaseLicenseCheckoutLinkParams,
    IPurchaseLicenseWalletParams,
    IQueryLicenseParams,
} from './types';

/**
 * Applies a license to the logged user.
 * After applying the license, the user will be able to use the features of the license.
 * And send the email to the user to notify the license is applied.
 */
export const applyLicenseToLoggedUserAPI = async (
    licenseKey: string,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.APPLY_TO_LOGGED_USER;

    return await jfwAxios.post<HttpResponse<boolean>>(url, null, {
        params: {
            licenseKey,
        },
        ...config,
    });
};

/**
 * Applies a license key for the given login name.
 * After applying the license, the user will be able to use the features of the license.
 * And send the email to the user to notify the license is applied.
 */
export const applyLicenseToLoginNameAPI = async (
    params: IApplyLicenseToLoginNameParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.APPLY_TO_LOGIN_NAME;

    return await jfwAxios.post<HttpResponse<boolean>>(url, null, {
        params,
        ...config,
    });
};

/**
 * Applies a license key for the given user id.
 * After applying the license, the user will be able to use the features of the license.
 * And send the email to the user to notify the license is applied.
 */
export const applyLicenseToGivenUserAPI = async (
    params: IApplyLicenseToGivenUserParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.APPLY_TO_GIVEN_USER;

    return await jfwAxios.post<HttpResponse<boolean>>(url, null, {
        params,
        ...config,
    });
};

/**
 * Checks the license status for the given license key.
 */
export const checkLicenseKeyAPI = async (
    licenseKey: string,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.CHECK;

    const response = await jfwAxios.get<HttpResponse<boolean>>(url, {
        ...config,
        params: {
            licenseKey,
        },
    });

    return response.data;
};

/**
 * Create a new license from the given data.
 */
export const createLicenseAPI = async (payload: ICreateLicenseParams) => {
    const url = LICENSE_PATH.CREATE;

    const response = await jfwAxios.post<HttpResponse<number>>(url, payload);

    return response.data;
};

/**
 * Counts the number of licenses created by each user.
 */
export const countLicenseCreatedAPI = async () => {
    const url = LICENSE_PATH.COUNT_LICENSES_CREATED;

    const response = await jfwAxios.get<HttpResponse<number>>(url);

    return response.data;
};

/**
 * Deletes a license.
 */
export const deleteLicenseAPI = async (id: IdType) => {
    const url = generatePath(LICENSE_PATH.DELETE_BY_ID, {
        id,
    });

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url);

    return response.data;
};

/**
 * Gets the list of the license.
 */
export const getLicensesAPI = async (
    params: IQueryLicenseParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.GET;
    const response = await jfwAxios.get<HttpResponseList<ILicense>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Gets the license by id.
 */
export const getLicenseAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(LICENSE_PATH.GET_BY_ID, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<ILicense>>(url, config);

    return response.data;
};

/**
 * Generate the license key, but this license does not store in the database.
 */
export const generateLicenseKeyAPI = async (
    params: IGenerateLicenseKeyParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.GENERATE_LICENSE_KEY;

    const response = await jfwAxios.get<HttpResponse<string>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Generate the checkout link to purchase the license.
 */
export const purchaseLicenseByCheckoutLinkAPI = async (
    payload: IPurchaseLicenseCheckoutLinkParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.PURCHASE.CHECKOUT_LINK;

    const response = await jfwAxios.post<HttpResponse<string>>(
        url,
        payload,
        config,
    );

    return response.data;
};

/**
 * Purchase to add license by the user's wallet.
 */
export const purchaseLicenseWalletAPI = async (
    params: IPurchaseLicenseWalletParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.PURCHASE.WALLET;

    const { walletId, ...restParams } = params;
    const response = await jfwAxios.post<HttpResponse<string>>(
        url,
        restParams,
        {
            params: {
                walletId,
            },
            ...config,
        },
    );
    return response.data;
};

/**
 * Statistics the percentage licenses used.
 */
export const getLicenseStatisticAPI = async (
    params: IGetLicenseStatisticParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.STATISTIC.PERCENTAGE_USED;
    const response = await jfwAxios.get<HttpResponse<ILicenseStatistic>>(url, {
        params,
        ...config,
    });

    return response.data;   
};
