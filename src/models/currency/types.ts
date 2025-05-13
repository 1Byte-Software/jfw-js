import { IPageable, ISortable } from '../../core';
import { IdType } from '../base';

export interface ICurrency {
    id: IdType;

    code: string;
    name: string;
    namePlural: string;
    symbol: string;
    symbolNative: string;
    decimalDigits: number;
    rounding: number;
    isDefault: boolean;
    isCoin: boolean;
}

//#region API types
export interface IGetCurrenciesParams extends ISortable, IPageable {
    /**
     * The code of the currency
     */
    code?: string;

    /**
     * The name of the currency
     */
    name?: string;

    /**
     * The plural name of the currency
     */
    namePlural?: string;

    /**
     * The symbol of the currency
     */
    symbol?: string;

    /**
     * The native symbol of the currency
     */
    symbolNative?: string;

    /**
     * The number of decimal digits for the currency
     * @remarks integer · int32
     */
    decimalDigits?: number;

    /**
     * The rounding value for the currency
     * @remarks number · double
     */
    rounding?: number;

    /**
     * The tags for the currency
     */
    tags?: string;

    /**
     * Flag to indicate if the currency is a coin
     */
    isCoin?: boolean;

    /**
     * The keywords for the currency
     */
    keywords?: string;
}
//#endregion
