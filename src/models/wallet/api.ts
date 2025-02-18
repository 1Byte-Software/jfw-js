import { RawAxiosRequestHeaders } from 'axios';
import { get, post, put } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../asdas';
import { IListResponse } from '../interfaces';
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
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IWallet[]> => {
    const url = WALLET_PATH.GET;
    const response = await get(url, { params }, userHeaders);

    return response.data;
};

/**
 * Get the wallet histories
 */
export const getWalletHistoryAPI = async (
    walletId: IdType,
    params: IGetWalletHistoryParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IWalletHistory>> => {
    const url = generatePath(WALLET_PATH.GET_HISTORY, {
        id: walletId,
    });
    const response = await get(url, { params }, userHeaders);

    return response.data;
};

// export const getListEarnEventsAPI = async (
//     params: IGetEarnEventParams,
//     userHeaders?: RawAxiosRequestHeaders,
// ): Promise<IEarnEvent[]> => {
//     const url = `${REST_EVENT}`;
//     const response = await get(url, { params }, userHeaders);

//     return response.data;
// };

/**
 * Creates a new wallet by given currency.
 */
export const createWalletDefaultAPI = async (
    currencyCode: string,
    params?: ICreateWalletParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(WALLET_PATH.CREATE_DEFAULT, {
        currencyCode,
    });

    return await post(url, null, { params }, userHeaders);
};

/**
 * Convert wallet by the given data.
 */
export const convertWalletMoneyAPI = async (
    params: IConvertWalletMoneyParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = WALLET_PATH.CONVERT;

    return await post(url, params, null, userHeaders);
};

/**
 * Apply redeem
 */
export const applyRedeemAPI = async (
    params: IApplyRedeemParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const { redeemCode, walletId } = params;
    const url = generatePath(WALLET_PATH.APPLY_REDEEM, {
        walletId,
        redeemCode,
    });

    return await post(url, null, null, userHeaders);
};

/**
 * Add money to aWallets with checkout link.
 */
export const addMoneyAPI = async (
    params: IAddMoneyParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = WALLET_PATH.ADD_MONEY_CHECKOUT_LINK;

    return await post(
        url,
        null,
        {
            params,
        },
        userHeaders,
    );
};

/**
 * Close the wallet by the given id
 */
export const closeWalletAPI = async (
    walletId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(WALLET_PATH.CLOSE, {
        id: walletId,
    });

    return await put(url, null, null, userHeaders);
};
