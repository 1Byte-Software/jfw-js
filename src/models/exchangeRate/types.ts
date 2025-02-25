export interface IExchangeRate {
    fromCurrencyCode: string;
    toCurrencyCode: string;
    rate: number;
}
export type IUserExchange = Omit<IExchangeRate, 'rate'>;
//#region API types
//#endregion
