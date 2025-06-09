import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';

export interface ICountry {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * The region of the country.
     */
    region?: string | null;

    /**
     * The subregion of the country.
     */
    subregion?: string | null;

    /**
     * The alpha 2 code of the country.
     *
     * @remarks min: 1
     */
    codeAlpha2: string;

    /**
     * The alpha 3 code of the country.
     */
    codeAlpha3?: string | null;

    /**
     * The numeric code of the country.
     *
     * @remarks int32
     */
    codeNumeric?: number | null;

    /**
     * The phone code of the country.
     */
    codePhone?: string | null;

    /**
     * The name of the country.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The capital of the country.
     */
    capital?: string | null;

    /**
     * The currency of the country.
     *
     * @remarks min: 1
     */
    currency: string;

    /**
     * The top level domain of the country.
     *
     * @remarks min: 1
     */
    tld: string;

    /**
     * The native name of the country.
     */
    native?: string | null;

    /**
     * The tags of the country.
     */
    tags?: string | null;
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
