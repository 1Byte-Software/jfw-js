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
export interface IGetExchangeRatesParams extends IPageable, ISortable {
    keywords?: string;

}

export interface IConvertCurrencyParams {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
}
//#endregion
