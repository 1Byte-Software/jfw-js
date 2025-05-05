import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';

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
    keywords?: string;

    code?: string;
    name?: string;
    namePlural?: string;
    symbol?: string;
    symbolNative?: string;
    decimalDigits?: number;
    rounding?: number;
    tags?: string;
    isCoin?: boolean;
}
//#endregion
