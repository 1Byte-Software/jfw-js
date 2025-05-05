import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { LICENSE_PATH } from './paths';
import {
    IApplyLicenseToGivenUserParams,
    IApplyLicenseToLoginNameParams,
    ICreateLicenseData,
    IGenerateLicenseKeyParams,
    IGetLicensesParams,
    ILicense,
    ILicenseStatistic,
    IPurchaseToAddLicensesByCheckoutLinkParams,
    IPurchaseToAddLicensesByWalletParams,
    IStatisticsPercentageLicensesUsedParams
} from './types';

/**
 * Applies a license to the logged user.
 * After applying the license, the user will be able to use the features of the license.
 * And send the email to the user to notify the license is applied.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-logged-user}
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
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-login-name}
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
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-a-user}
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
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/checks-a-license}
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
 * Create a new license.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/create-the-licenses}
 */
export const createLicenseAPI = async (payload: ICreateLicenseData) => {
    const url = LICENSE_PATH.CREATE;

    const response = await jfwAxios.post<HttpResponse<number>>(url, payload);

    return response.data;
};

/**
 * Counts the number of licenses created by each user.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/count-licenses-created}
 */
export const countLicenseCreatedAPI = async () => {
    const url = LICENSE_PATH.COUNT_LICENSES_CREATED;

    const response = await jfwAxios.get<HttpResponse<number>>(url);

    return response.data;
};

/**
 * Deletes a license.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/delete-a-license}
 */
export const deleteLicenseAPI = async (id: IdType) => {
    const url = generatePath(LICENSE_PATH.DELETE_BY_ID, {
        id,
    });

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url);

    return response.data;
};

/**
 * Gets the list of the licenses.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/get-licenses}
 */
export const getLicensesAPI = async (
    params: IGetLicensesParams,
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
 * Get a license.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/get-a-license}
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
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/generate-key}
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
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-checkout-link}
 */
export const purchaseToAddLicensesByCheckoutLinkAPI = async (
    payload: IPurchaseToAddLicensesByCheckoutLinkParams,
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
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-user-wallet}
 */
export const purchaseToAddLicensesByWalletAPI = async (
    params: IPurchaseToAddLicensesByWalletParams,
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
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/statistics-the-percentage-licenses-used}
 */
export const statisticsPercentageLicensesUsedAPI = async (
    params: IStatisticsPercentageLicensesUsedParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.STATISTIC.PERCENTAGE_USED;
    const response = await jfwAxios.get<HttpResponse<ILicenseStatistic>>(url, {
        params,
        ...config,
    });

    return response.data;
};
