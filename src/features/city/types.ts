import { IPageable, ISortable } from '../../core';

export interface ICity {
    /**
     * The country code of the city.
     *
     * @remarks min: 1
     */
    countryCode: string;

    /**
     * The state code of the city.
     *
     * @remarks min: 1
     */
    stateCode: string;

    /**
     * The name of the city.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The tags of the city.
     */
    tags?: string | null;
}
//#region API types

export interface IGetCitiesParams extends IPageable, ISortable<'name'> {
    /**
     * The keywords for filter.
     */
    keywords?: string;

    /**
     * The CountryCode for filter.
     */
    countryCode?: string;

    /**
     * The StateCode for filter.
     */
    stateCode?: string;

    /**
     * The Name for filter.
     */
    name?: string;
}

//#endregion
