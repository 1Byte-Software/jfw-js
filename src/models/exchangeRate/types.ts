import { IPageable, ISortable } from '../../core';
import { DateType } from '../base';

export interface IExchangeRate {
    fromCurrencyCode: string;
    toCurrencyCode: string;
    rate: number;
    lastUpdate: DateType;
}

export type IUserExchange = Omit<IExchangeRate, 'rate'>;
//#region API types

/**
 * #JFW-299
 */
export interface IGetExchangeRatesParams extends IPageable, ISortable {
    keywords?: string;

}

export interface IConvertCurrencyParams {
    /**
     * The currency to convert from.
     */
    fromCurrency: string;

    /**
     * The currency to convert to.
     */
    toCurrency: string;

    /**
     * The amount to convert.
     * @remarks number · double 
     */
    amount: number;
}
//#endregion
