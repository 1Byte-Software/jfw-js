import { IPageable, ISortable } from '../../core';
import { DateType } from '../base';

export interface ICurrency {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: string;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate: DateType | null;

    /**
     * The code of the Currency.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the Currency.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The plural name of the Currency.
     */
    namePlural?: string | null;

    /**
     * The symbol of the Currency.
     */
    symbol?: string | null;

    /**
     * The native symbol of the Currency.
     */
    symbolNative?: string | null;

    /**
     * The decimal digits of the Currency.
     *
     * @remarks int32
     */
    decimalDigits: number;

    /**
     * The rounding of the Currency.
     *
     * @remarks double
     */
    rounding: number;

    /**
     * The value is used to determine if the currency is a coin.
     */
    isCoin: boolean;

    /**
     * Is the Currency default.
     */
    isDefault: boolean;
}

//#region API types
export interface IGetCurrenciesParams extends IPageable, ISortable {
    /**
     * The code of the currency.
     */
    code?: string;

    /**
     * The name of the currency.
     */
    name?: string;

    /**
     * The plural name of the currency.
     */
    namePlural?: string;

    /**
     * The symbol of the currency.
     */
    symbol?: string;

    /**
     * The native symbol of the currency.
     */
    symbolNative?: string;

    /**
     * The number of decimal digits for the currency.
     *
     * @remarks int32
     */
    decimalDigits?: number;

    /**
     * The rounding value for the currency.
     *
     * @remarks double
     */
    rounding?: number;

    /**
     * The tags for the currency.
     */
    tags?: string;

    /**
     * Flag to indicate if the currency is a coin.
     */
    isCoin?: boolean;

    /**
     * The keywords for the currency.
     */
    keywords?: string;
}
//#endregion
