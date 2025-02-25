import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';

export interface ICountry {
    id: IdType;
    name: string;
    iso3: string;
    phoneCode: string;
    region: string;
    subregion: string;
    tld: string;
    native: string;
    capital: string;
    numericCode: string;
    iso3166: string;
    currency: string;
    createdDate: DateType;
}

//#region API types
export interface IQueryCountryParams extends IPageable, ISortable {
    name?: string;
    countryCode?: string;
    stateCode?: string;
}
//#endregion
