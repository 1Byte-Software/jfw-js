import { DateType, IdType } from '../base';
import { ICurrency } from '../currency';
import { IPageable } from '../../core';

export interface IWallet {
    currencyCode: string;
    id: IdType;
    code: string;
    amount: number;
    currency?: ICurrency;
    displayAmount?: string;
}

export interface IWalletHistory {
    id: IdType;
    amount: number;
    description: string;
    paymentDate: DateType;
    status: string;
    currencyCode?: string;
    displayAmount?: string;
}

export interface IFirebaseCoinData {
    amount: number;
    message: string;
}

//#region API types
export interface IGetWalletParams {
    userId: string;
    testMode?: boolean;
}
export interface IGetWalletHistoryParams extends IPageable {
    status?: string;
}
export interface IGetEarnEventParams {
    type: string;
}
export interface IConvertWalletMoneyParams {
    originalWalletId: string;
    targetWalletId: string;
    fee: number;
    totalAmount: number;
}
export interface IApplyRedeemParams {
    walletId: string;
    redeemCode: string;
}
export interface IAddMoneyParams {
    currencyCode: string;
    amount: number;
    returnLink: string;
    cancelLink: string;
}
export interface ICreateWalletParams {
    testMode: boolean;
}
//#endregion
