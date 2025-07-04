import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { ICountSuccessResponse, IdType } from '../base';
import { LICENSE_PATH } from './paths';
import {
    IApplyLicenseToGivenLoginNameParams,
    IApplyLicenseToGivenUserParams,
    ICreateLicensesParams,
    IGenerateLicenseCodeParams,
    IGetLicensesParams,
    ILicense,
    ILicenseStatistic,
    IPurchaseToAddLicensesByCheckoutLinkParams,
    IPurchaseToAddLicensesByWalletParams,
    IStatisticsPercentageLicensesUsedParams,
} from './types';

/**
 * # Activate a license
 *
 * Activate a license
 *
 * @param id - The id of the license.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/activate-a-license}
 */
export const activateLicense = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(LICENSE_PATH.ACTIVATE_LICENSE, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<ILicense>>(
        url,
        null,
        config,
    );

    return response.data;
};

/**
 * # Applies a license to the logged user
 *
 * Applies a license to the logged user.
 *
 * After applying the license, the user will be able to use the features of the license.
 * And send the email to the user to notify the license is applied.
 *
 * @param licenseCode - The license code to apply.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-logged-user}
 */
export const applyLicenseToLoggedUser = async (
    licenseCode: string,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.APPLY_LICENSE_TO_LOGGED_USER;
    const response = await jfwAxios.post<HttpResponse<boolean>>(url, null, {
        params: {
            licenseCode,
        },
        ...config,
    });

    return response.data;
};

/**
 * # Applies a license to the given login name
 *
 * Applies a license code for the given login name.
 *
 * After applying the license, the user will be able to use the features of the license.
 * And send the email to the user to notify the license is applied.
 *
 * @param params - The params for applying a license to the given login name.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-login-name}
 */
export const applyLicenseToGivenLoginName = async (
    params: IApplyLicenseToGivenLoginNameParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.APPLY_LICENSE_TO_GIVEN_LOGIN_NAME;
    const response = await jfwAxios.post<HttpResponse<boolean>>(url, null, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Applies a license to the given a user
 *
 * Applies a license code for the given user id.
 *
 * After applying the license, the user will be able to use the features of the license.
 * And send the email to the user to notify the license is applied.
 *
 * @param params - The params for applying a license to the given a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-a-user}
 */
export const applyLicenseToGivenUser = async (
    params: IApplyLicenseToGivenUserParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.APPLY_LICENSE_TO_GIVEN_USER;
    const response = await jfwAxios.post<HttpResponse<boolean>>(url, null, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Checks a license code
 *
 * Checks the license status for the given license code.
 *
 * @param licenseCode - The license code to check.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/checks-a-license}
 */
export const checkLicenseCode = async (
    licenseCode: string,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.CHECK_A_LICENSE_CODE;
    const response = await jfwAxios.get<HttpResponse<boolean>>(url, {
        ...config,
        params: {
            licenseCode,
        },
    });

    return response.data;
};

/**
 * # Create the licenses
 *
 * Create a new license.
 *
 * @param params - The params for creating the licenses.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/create-the-licenses}
 */
export const createLicenses = async (
    params: ICreateLicensesParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.CREATE_LICENSES;
    const response = await jfwAxios.post<HttpResponse<ICountSuccessResponse>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Count licenses created
 *
 * Counts the number of licenses created by each user.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/count-licenses-created}
 */
export const countLicensesCreated = async (config?: AxiosRequestConfig) => {
    const url = LICENSE_PATH.COUNT_LICENSES_CREATED;
    const response = await jfwAxios.get<HttpResponse<ICountSuccessResponse>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Deactivate a license
 *
 * Deactivate a license
 *
 * @param id - The id of the license.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/deactivate-a-license}
 */
export const deactivateLicense = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(LICENSE_PATH.DEACTIVATE_LICENSE, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<ILicense>>(
        url,
        null,
        config,
    );

    return response.data;
};

/**
 * # Delete a license
 *
 * Deletes a license.
 *
 * @param id - The id of the license.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/delete-a-license}
 */
export const deleteLicense = async (id: IdType) => {
    const url = generatePath(LICENSE_PATH.DELETE_LICENSE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url);

    return response.data;
};

/**
 * # Get licenses
 *
 * Gets the list of the licenses.
 *
 * @param params - The params for getting the licenses.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/get-licenses}
 */
export const getLicenses = async (
    params?: IGetLicensesParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.GET_LICENSES;
    const response = await jfwAxios.get<HttpResponseList<ILicense>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Get a license
 *
 * Get a license.
 *
 * @param id - The id of the license.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/get-a-license}
 */
export const getLicense = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(LICENSE_PATH.GET_LICENSE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<ILicense>>(url, config);

    return response.data;
};

/**
 * # Generate license code
 *
 * Generate the license code
 *
 * The license code is not stored in the system. It is generated by the system.
 *
 * @param params - The params for generating license code.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/generate-code}
 */
export const generateLicenseCode = async (
    params: IGenerateLicenseCodeParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.GENERATE_LICENSE_CODE;
    const response = await jfwAxios.get<HttpResponse<string>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Purchase to add licenses by checkout link
 *
 * Generate the checkout link to purchase the license.
 *
 * @param params - The params for purchasing to add licenses by checkout link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-checkout-link}
 */
export const purchaseToAddLicensesByCheckoutLink = async (
    params: IPurchaseToAddLicensesByCheckoutLinkParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.PURCHASE_TO_ADD_LICENSES_BY_CHECKOUT_LINK;
    const response = await jfwAxios.post<HttpResponse<string>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Purchase to add licenses by wallet
 *
 * Purchase to add license by the user's wallet.
 *
 * @param params - The params for purchasing to add licenses by wallet.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-user-wallet}
 */
export const purchaseToAddLicensesByWallet = async (
    params: IPurchaseToAddLicensesByWalletParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.PURCHASE_TO_ADD_LICENSES_BY_WALLET;
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
 * # Statistics the percentage licenses used
 *
 * Statistics the percentage licenses used.
 *
 * @param params - The params for purchasing to add licenses by wallet.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/licenses/statistics-the-percentage-licenses-used}
 */
export const statisticsPercentageLicensesUsed = async (
    params: IStatisticsPercentageLicensesUsedParams,
    config?: AxiosRequestConfig,
) => {
    const url = LICENSE_PATH.STATISTICS_PERCENTAGE_LICENSES_USED;
    const response = await jfwAxios.get<HttpResponse<ILicenseStatistic>>(url, {
        params,
        ...config,
    });

    return response.data;
};
