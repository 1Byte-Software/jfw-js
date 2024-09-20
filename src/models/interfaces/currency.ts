import { IPaginationParams, ISortParams } from './filter';

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
  isDefault: boolean;
  decimalDigits: number;
  isCoin: boolean;
}
export interface IGetListCurrenciesParams
  extends ISortParams,
    IPaginationParams {}
export interface IExchangeRate {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  rate: number;
}
type IUserExchange = Omit<IExchangeRate, 'rate'>;
