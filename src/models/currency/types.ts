import { IPageable, ISortable } from '../../core';

export interface ICurrency {
    code: string;
    name: string;
    symbol: string;
    isDefault: boolean;
    decimalDigits: number;
    isCoin: boolean;
}

//#region API types
export interface IQueryCurrencyParams extends ISortable, IPageable {}
//#endregion
