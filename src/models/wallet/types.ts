import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { WalletHistoryStatus, WalletHistoryType } from './constants';

/**
 * The wallet data transfer object.
 */
export interface IWallet {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * The wallet code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * Amount of the wallet.
     *
     * @remarks double
     */
    amount: number;

    /**
     * Display amount of the wallet.
     *
     * @remarks min: 1
     */
    displayAmount: string;

    /**
     * The currency code of the wallet.
     *
     * @remarks min: 1
     */
    currencyCode: string;

    /**
     * Flag to indicate if the wallet is default.
     */
    isDefault: boolean;

    /**
     * The tags of the wallet.
     */
    tags?: string | null;
}

/**
 * Wallet transaction history information.
 */
export interface IWalletHistory {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * This class is used to return user information to client.
     */
    user: any;

    /**
     * The transaction code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * @remarks enum
     */
    type: WalletHistoryType;

    /**
     * The amount of the transaction.
     *
     * @remarks double
     */
    amount: number;

    /**
     * The currency code.
     *
     * @remarks min: 1
     */
    currencyCode: string;

    /**
     * The notes of the transaction.
     */
    notes?: string | null;

    /**
     * The tags of the transaction.
     */
    tags?: string | null;

    /**
     * The description of the transaction.
     */
    description?: string | null;

    /**
     * @remarks enum
     */
    status: WalletHistoryStatus;

    /**
     * The payment date.
     *
     * @remarks date-time
     */
    paymentDate?: DateType;
}

//#region API types
/**
 * Params for getting wallet list.
 */
export interface IGetWalletsParams {
    /**
     * The currency code.
     */
    currencyCode?: string;

    /**
     * The wallet status.
     *
     * @default Open
     */
    status?: string;

    /**
     * The test mode. By default, it is false.
     *
     * @default false
     */
    testMode?: boolean;
}

export interface IGetWalletHistoriesParams extends IPageable, ISortable {
    /**
     * The transaction code to filter the transactions.
     */
    code?: string;

    /**
     * The reference object to filter the transactions.
     */
    refObject?: string;

    /**
     * The reference id to filter the transactions.
     *
     * @remarks int64
     */
    refId?: number;

    /**
     * The tags to filter the transactions.
     */
    tags?: string;

    /**
     * The type of the transaction to filter the transactions.
     *
     * @remarks enum
     */
    type?: WalletHistoryType;

    /**
     * The status of the transaction to filter the transactions.
     *
     * @remarks enum
     */
    status?: WalletHistoryStatus;
}

export interface IGetEarnEventParams {
    type: string;
}

export interface IConvertWalletMoneyParams {
    /**
     * The id of the original wallet.
     *
     * @remarks min: 1
     */
    originalWalletId: string;

    /**
     * The id of the target wallet.
     *
     * @remarks min: 1
     */
    targetWalletId: string;

    /**
     * The fee of the convert.
     *
     * @remarks double
     */
    fee?: number | null;

    /**
     * The total amount convert.
     *
     * @remarks double
     */
    totalAmount: number;
}

export interface IApplyRedeemCodeParams {
    /**
     * The id of the wallet.
     */
    walletId: IdType;

    /**
     * The redeem code to apply.
     */
    redeemCode: string;
}

export interface IAddMoneyToWalletWithCheckoutLinkParams {
    /**
     * The currency code. The currency code must be a valid ISO 4217 currency code.
     */
    currencyCode: string;

    /**
     * The amount to add. The amount must be greater than 0.
     *
     * @remarks double
     */
    amount: number;

    /**
     * The return link after the payment is successful.
     *
     * @remarks uri
     */
    returnLink: string;

    /**
     * The cancel link after the payment is canceled.
     *
     * @remarks uri
     */
    cancelLink: string;

    /**
     * The test mode. By default, it is false.
     *
     * @defaultValue false
     */
    testMode?: boolean;
}

export interface ICreateWalletParams {
    testMode: boolean;
}
//#endregion
