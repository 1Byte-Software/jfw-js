import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
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

export class WalletAPI extends AbstractAPI {
    /**
     * # Add money to a Wallet with checkout link
     *
     * Generate a checkout link to add money for the wallet.
     *
     * @param params - The params for generating a checkout link to add money for the wallet.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/add-money-to-a-wallet-with-checkout-link}
     */
    public async addMoneyToWalletWithCheckoutLink(
        params: IAddMoneyToWalletWithCheckoutLinkParams,
        config?: AxiosRequestConfig,
    ) {
        const url = WALLET_PATH.ADD_MONEY_TO_WALLET_WITH_CHECKOUT_LINK;
        const response = await this.axios.post<HttpResponse<string>>(
            url,
            null,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

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
    public async applyRedeemCode(
        params: IApplyRedeemCodeParams,
        config?: AxiosRequestConfig,
    ) {
        const { redeemCode, walletId } = params;
        const url = generatePath(WALLET_PATH.APPLY_REDEEM_CODE, {
            walletId,
            redeemCode,
        });

        return await this.axios.post(url, null, config);
    }

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
    public async createWalletDefault(
        currencyCode: string,
        testMode: boolean = false,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(WALLET_PATH.CREATE_WALLET_DEFAULT, {
            currencyCode,
        });
        return await this.axios.post<HttpResponse<IWallet>>(url, null, {
            params: {
                testMode,
            },
            ...config,
        });
    }

    /**
     * # Convert wallet money
     *
     * Convert wallet by the given data.
     *
     * @param params - The params for converting wallet money.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/convert-wallet-money}
     */
    public async convertWalletMoney(
        params: IConvertWalletMoneyParams,
        config?: AxiosRequestConfig,
    ) {
        const url = WALLET_PATH.CONVERT_WALLET_MONEY;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Close wallet
     *
     * Close a wallet.
     *
     * @param id - The id of the wallet.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/close-wallet}
     */
    public async closeWallet(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(WALLET_PATH.CLOSE_WALLET, {
            id,
        });
        const response = await this.axios.put<HttpResponse<boolean>>(
            url,
            null,
            {
                params: {
                    id,
                },
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Get wallets
     *
     * Gets the wallet information.
     *
     * @param params - The params for getting wallets.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/wallets/get-wallets}
     */
    public async getWallets(
        params?: IGetWalletsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = WALLET_PATH.GET_WALLETS;
        const response = await this.axios.get<HttpResponse<IWallet[]>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

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
    public async getWalletHistories(
        id: IdType,
        params?: IGetWalletHistoriesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(WALLET_PATH.GET_WALLET_HISTORIES, {
            id,
        });
        const response = await this.axios.get<HttpResponseList<IWalletHistory>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }
}
