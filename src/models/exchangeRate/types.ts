import { DateType } from '../base';

/**
 * This class represents the exchange rate data transfer object.
 */
export interface IExchangeRate {
    /**
     * The currency code from which the rate is calculated.
     *
     * @remarks min: 1
     */
    fromCurrencyCode: string;

    /**
     * The currency code to which the rate is calculated.
     *
     * @remarks min: 1
     */
    toCurrencyCode: string;

    /**
     * The rate amount from the from currency to the to currency.
     *
     * @remarks double
     */
    rate: number;

    /**
     * The last update date of the exchange rate.
     *
     * @remarks date-time
     */
    lastUpdate?: DateType | null;
}

export type IUserExchange = Omit<IExchangeRate, 'rate'>;
//#region API types

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
     * @remarks double
     */
    amount: number;
}
//#endregion
