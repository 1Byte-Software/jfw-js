import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { WALLET_PATH } from './paths';
import {
    IAddMoneyParams,
    IApplyRedeemParams,
    IConvertWalletMoneyParams,
    ICreateWalletParams,
    IGetWalletHistoryParams,
    IGetWalletParams,
    IWallet,
    IWalletHistory,
} from './types';

/**
 * Gets the wallet information.
 */
export const getWalletAPI = async (
    params: IGetWalletParams,
    config?: AxiosRequestConfig,
): Promise<IWallet[]> => {
    const url = WALLET_PATH.GET;
    const response = await jfwAxios.get(url, { ...config, params });

    return response.data;
};

/**
 * Get the wallet histories
 */
export const getWalletHistoryAPI = async (
    walletId: IdType,
    params: IGetWalletHistoryParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponseList<IWalletHistory>> => {
    const url = generatePath(WALLET_PATH.GET_HISTORY, {
        id: walletId,
    });
    const response = await jfwAxios.get(url, { ...config, params });

    return response.data;
};

// export const getListEarnEventsAPI = async (
//     params: IGetEarnEventParams,
//     config?: AxiosRequestConfig,
// ): Promise<IEarnEvent[]> => {
//     const url = `${REST_EVENT}`;
//     const response = await jfwAxios.get(url, { ...config, params });

//     return response.data;
// };

/**
 * Creates a new wallet by given currency.
 */
export const createWalletDefaultAPI = async (
    currencyCode: string,
    params?: ICreateWalletParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(WALLET_PATH.CREATE_DEFAULT, {
        currencyCode,
    });

    return await jfwAxios.post(url, null, { ...config, params });
};

/**
 * Convert wallet by the given data.
 */
export const convertWalletMoneyAPI = async (
    params: IConvertWalletMoneyParams,
    config?: AxiosRequestConfig,
) => {
    const url = WALLET_PATH.CONVERT;

    return await jfwAxios.post(url, params, config);
};

/**
 * Apply redeem
 */
export const applyRedeemAPI = async (
    params: IApplyRedeemParams,
    config?: AxiosRequestConfig,
) => {
    const { redeemCode, walletId } = params;
    const url = generatePath(WALLET_PATH.APPLY_REDEEM, {
        walletId,
        redeemCode,
    });

    return await jfwAxios.post(url, null, config);
};

/**
 * Add money to aWallets with checkout link.
 */
export const addMoneyAPI = async (
    params: IAddMoneyParams,
    config?: AxiosRequestConfig,
) => {
    const url = WALLET_PATH.ADD_MONEY_CHECKOUT_LINK;

    return await jfwAxios.post(url, null, {
        ...config,
        params,
    });
};

/**
 * Close the wallet by the given id
 */
export const closeWalletAPI = async (
    walletId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(WALLET_PATH.CLOSE, {
        id: walletId,
    });
};
