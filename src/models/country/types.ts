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
    /**
     * The region of the country.
     */
    region?: string;

    /**
     * The subregion of the country.
     */
    subregion?: string;

    /**
     * The code alpha 2 of the country.
     */
    codeAlpha2?: string;

    /**
     * The code alpha 3 of the country.
     */
    codeAlpha3?: string;

    /**
     * The code numeric of the country.
     *
     * @remarks int32
     */
    codeNumeric?: number;

    /**
     * The code phone of the country.
     */
    codePhone?: string;

    /**
     * The name of the country.
     */
    name?: string;

    /**
     * The capital of the country.
     */
    capital?: string;

    /**
     * The currency of the country.
     */
    currency?: string;

    /**
     * The tld of the country.
     */
    tld?: string;

    /**
     * The native of the country.
     */
    native?: string;

    /**
     * The tags of the country.
     */
    tags?: string;

    /**
     * Filter by keywords.
     */
    keywords?: string;
}
//#endregion
