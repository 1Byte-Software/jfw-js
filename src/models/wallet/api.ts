import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { WALLET_PATH } from './paths';
import {
    IAddMoneyToWalletWithCheckoutLinkParams,
    IApplyRedeemCodeParams,
    IConvertWalletMoneyParams,
    IGetWalletHistoriesParams,
    IGetWalletsParams,
    IWallet,
    IWalletHistory,
} from './types';

/**
 * # Add money to a Wallet with checkout link
 *
 * Generate a checkout link to add money for the wallet.
 *
 * @param params - The params for generating a checkout link to add money for the wallet.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/add-money-to-a-wallet-with-checkout-link}
 */
export const addMoneyToWalletWithCheckoutLink = async (
    params: IAddMoneyToWalletWithCheckoutLinkParams,
    config?: AxiosRequestConfig,
) => {
    const url = WALLET_PATH.ADD_MONEY_TO_WALLET_WITH_CHECKOUT_LINK;
    const response = await jfwAxios.post<HttpResponse<string>>(url, null, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Apply redeem code
 *
 * Apply redeem
 *
 * This method applies a redeem code to the wallet.
 * The redeem code must be valid and the wallet must be open.
 *
 * @param params - The params for applying redeem code.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/apply-redeem}
 */
export const applyRedeemCode = async (
    params: IApplyRedeemCodeParams,
    config?: AxiosRequestConfig,
) => {
    const { redeemCode, walletId } = params;
    const url = generatePath(WALLET_PATH.APPLY_REDEEM_CODE, {
        walletId,
        redeemCode,
    });

    return await jfwAxios.post(url, null, config);
};

/**
 * # Create a wallet default
 *
 * Create a new wallet by the given currency code.
 *
 * @param currencyCode - The currency code. The currency code must be a valid ISO 4217 currency code.
 * @param testMode - The test mode. By default, it is false.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/create-a-wallet-default}
 */
export const createWalletDefault = async (
    currencyCode: string,
    testMode: boolean = false,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(WALLET_PATH.CREATE_WALLET_DEFAULT, {
        currencyCode,
    });
    return await jfwAxios.post<HttpResponse<IWallet>>(url, null, {
        params: {
            testMode,
        },
        ...config,
    });
};

/**
 * # Convert wallet money
 *
 * Convert wallet by the given data.
 *
 * @param params - The params for converting wallet money.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/convert-wallet-money}
 */
export const convertWalletMoney = async (
    params: IConvertWalletMoneyParams,
    config?: AxiosRequestConfig,
) => {
    const url = WALLET_PATH.CONVERT_WALLET_MONEY;
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Close wallet
 *
 * Close a wallet.
 *
 * @param id - The id of the wallet.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/close-wallet}
 */
export const closeWallet = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(WALLET_PATH.CLOSE_WALLET, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(url, null, {
        params: {
            id,
        },
        ...config,
    });

    return response.data;
};

/**
 * # Get wallets
 *
 * Gets the wallet information.
 *
 * @param params - The params for getting wallets.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/get-wallets}
 */
export const getWallets = async (
    params?: IGetWalletsParams,
    config?: AxiosRequestConfig,
) => {
    const url = WALLET_PATH.GET_WALLETS;
    const response = await jfwAxios.get<HttpResponse<IWallet[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Get the wallet histories
 *
 * Gets the wallet histories.
 *
 * @param id - The id of the wallet.
 * @param params - The params for getting wallet histories.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/get-the-wallet-histories}
 */
export const getWalletHistory = async (
    id: IdType,
    params: IGetWalletHistoriesParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(WALLET_PATH.GET_WALLET_HISTORIES, {
        id,
    });
    const response = await jfwAxios.get<HttpResponseList<IWalletHistory>>(url, {
        params,
        ...config,
    });

    return response.data;
};
