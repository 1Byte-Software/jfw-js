import { DateType, IdType } from "../types";
import { IPaginationParams } from "./common";
import { ICurrency } from "./currency";

export interface IGetWalletParams {
    userId: string;
}
export interface IWallet {
    currencyCode: string;
    id: IdType;
    code: string;
    amount: number;
    currency?: ICurrency;
    displayAmount?: string;
}
export interface ICreateWalletPath {
    currencyCode: string;
}
export interface IGetWalletHistoriesParams extends IPaginationParams {
    status?: string;
}
export interface IWalletHistory {
    id: IdType;
    amount: number;
    description: string;
    paymentDate: DateType;
    status: string;
}
export interface IEarnEvent {
    code: string;
    amount: number;
    description: string;
}
export interface IGetEarnEventParams {
    type: string;
}
export interface IExchangeWalletPayload {
    originalWalletId: string;
    targetWalletId: string;
    fee: number;
    totalAmount: number;
}
export interface IApplyRedeemPath {
    walletId: string;
    redeemCode: string;
}
export interface IAddMoneyPayload {
    currencyCode: string;
    amount: number;
    returnLink: string;
    cancelLink: string;
}
export interface IFirebaseCoinData {
    amount: number;
    message: string;
}