import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';

export interface ICountry extends IBaseObject {
    id: IdType;
    name: string;
    iso3: string;
    phoneCode: string;
    region: string;
    subregion: string;
    tld: string;
    native: string;
    capital: string;
    numericCode: number;
    iso3166: string;
    currency: string;
    codeAlpha2: string;
    codeAlpha3: string;
    codeNumeric: number;
    codePhone: string;
    tags: string | null;
}

//#region API types
export interface IGetCountriesParams extends IPageable, ISortable {
    keywords?: string;
    iso3166?: string;
    iso3?: string;
    numericCode?: number;
    phoneCode?: string;
    region?: string;
    subregion?: string;
    codeAlpha2?: string;
    codeAlpha3?: string;
    codeNumeric?: number;
    codePhone?: string;
    name?: string;
    capital?: string;
    currency?: string;
    tld?: string;
    native?: string;
    tags?: string;
    id?: IdType;
    limit?: number;
}
//#endregion
