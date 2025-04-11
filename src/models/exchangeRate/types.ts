export interface IExchangeRate {
    fromCurrencyCode: string;
    toCurrencyCode: string;
    rate: number;
}
export type IUserExchange = Omit<IExchangeRate, 'rate'>;
//#region API types

export interface IConvertCurrencyParams {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
}
//#endregion
