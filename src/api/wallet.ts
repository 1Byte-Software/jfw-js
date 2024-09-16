import { axiosInstanceJfw } from "@/config/axios/axiosClient";
import {
    IAddMoneyPayload,
    IApplyRedeemPath,
    IById,
    ICreateWalletPath,
    IEarnEvent,
    IExchangeWalletPayload,
    IGetEarnEventParams,
    IGetWalletHistoriesParams,
    IGetWalletParams,
    IListResponse,
    IWallet,
    IWalletHistory,
} from "@/models/interfaces";

const REST = "wallets";
const REST_EVENT = "wallet-earning-events";
const HISTORY = "histories";
const CONVERT = "convert";
const APPLY_REDEEM = "apply-redeem";
const ADD_MONEY = "add-money/checkout-link";
const CLOSE = "close";

export const getWalletAPI = async (params: IGetWalletParams): Promise<IWallet[]> => {
    const url = `${REST}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    return response.data;
};

export const getWalletHistoriesAPI = async (
    path: IById,
    params: IGetWalletHistoriesParams
): Promise<IListResponse<IWalletHistory>> => {
    const { id } = path;
    const url = `${REST}/${id}/${HISTORY}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    return response.data;
};

export const getListEarnEventsAPI = async (params: IGetEarnEventParams): Promise<IEarnEvent[]> => {
    const url = `${REST_EVENT}`;
    const response = await axiosInstanceJfw.get(url, {
        params,
    });

    return response.data;
};

export const createWalletAPI = async (path: ICreateWalletPath) => {
    const { currencyCode } = path;
    const url = `${REST}/${currencyCode}`;

    return await axiosInstanceJfw.post(url);
};

export const exchangeWalletAPI = async (payload: IExchangeWalletPayload) => {
    const url = `${REST}/${CONVERT}`;

    return await axiosInstanceJfw.post(url, payload);
};

export const applyRedeemAPI = async (path: IApplyRedeemPath) => {
    const { redeemCode, walletId } = path;

    const url = `${REST}/${walletId}/${APPLY_REDEEM}/${redeemCode}`;

    return await axiosInstanceJfw.post(url);
};

export const addMoneyAPI = async (params: IAddMoneyPayload) => {
    const url = `${REST}/${ADD_MONEY}`;

    return await axiosInstanceJfw.post(url, null, {
        params,
    });
};

export const closeWalletAPI = async (path: IById) => {
    const { id } = path;
    const url = `${REST}/${id}/${CLOSE}`;

    return await axiosInstanceJfw.put(url);
};
