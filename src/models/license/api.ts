import { RawAxiosRequestHeaders } from 'axios';
import { get, post, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IListResponse, IdType } from '../base';
import { LICENSE_PATH } from './paths';
import {
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
 * Get licenses
 */
export const queryLicenseAPI = async (
    params: IQueryLicenseParams,
): Promise<IListResponse<ILicense>> => {
    const url = LICENSE_PATH.QUERY;
    const response = await get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

export const getLicenseByIdAPI = async (id: IdType): Promise<ILicense> => {
    const url = generatePath(LICENSE_PATH.GET_BY_ID, {
        id,
    });
    const response = await get(url);

    return response.data;
};

/**
 * Create a license.
 */
export const createLicenseAPI = async (payload: ICreateLicenseParams) => {
    const url = LICENSE_PATH.CREATE;

    const response = await post(url, payload);
    return response.data;
};

export const deleteLicensesAPI = async (id: IdType) => {
    const url = generatePath(LICENSE_PATH.DELETE_BY_ID, {
        id,
    });

    const response = await remove(url);
    return response.data;
};

/**
 * Generate the license key.
 */
export const generateLicenseKeyAPI = async (
    params: IGenerateLicenseKeyParams,
): Promise<string> => {
    const url = LICENSE_PATH.GENERATE_KEY;

    const response = await get(url, {
        params,
    });

    return response.data;
};

/**
 * Purchase to add licenses by checkout link
 */
export const purchaseLicenseByCheckoutLinkAPI = async (
    payload: IPurchaseLicenseCheckoutLinkParams,
): Promise<string> => {
    const url = LICENSE_PATH.PURCHASE.CHECKOUT_LINK;
    const response = await post(url, payload);
    return response.data;
};

/**
 * Purchase to add license by wallet.
 */
export const purchaseLicenseWalletAPI = async (
    params: IPurchaseLicenseWalletParams,
): Promise<string> => {
    const url = LICENSE_PATH.PURCHASE.WALLET;

    const { walletId, ...restParams } = params;
    const response = await post(url, restParams, {
        params: {
            walletId,
        },
    });
    return response.data;
};

/**
 * #JFW-48: Thiếu tài liệu GET: api/licenses/count
 */
export const getCountLicenseAPI = async (): Promise<number> => {
    const url = LICENSE_PATH.GET_COUNT;

    const response = await get(url);

    return response.data;
};

/**
 * Statistics the percentage licenses used.
 */
export const getLicenseStatisticAPI = async (
    params: IGetLicenseStatisticParams,
): Promise<ILicenseStatistic> => {
    const url = LICENSE_PATH.STATISTIC.PERCENTAGE_USED;
    const response = await get(url, {
        params,
    });

    return response.data;
};

/**
 * Checks the license status for the given license key.
 */
export const checkLicenseAPI = async (
    licenseKey: string,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = LICENSE_PATH.CHECK;

    return await get(
        url,
        {
            params: {
                licenseKey,
            },
        },
        userHeaders,
    );
};

/**
 * Applies a license to the logged user.
 */
export const applyLicenseAPI = async (
    licenseKey: string,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = LICENSE_PATH.APPLY;

    return await post(
        url,
        null,
        {
            params: {
                licenseKey,
            },
        },
        userHeaders,
    );
};

/**
 * Applies a license to the given login name.
 * @feature Will make in feature.
 */
export const applyLicenseToLoginNameAPI = async () => {
    const url = LICENSE_PATH.APPLY_TO_LOGIN_NAME;
};

/**
 * Applies a license to the given user.
 * @feature Will make in feature.
 */
export const applyLicenseToUserAPI = async () => {
    const url = LICENSE_PATH.APPLY_TO_USER;
};
