import { IPageable, ISortable } from '../../core';

export interface ICity {
    countryCode: string;
    stateCode: string;
    name: string;
    tags: string | null;
}

//#region API types

export interface IGetCitiesParams extends IPageable, ISortable {
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
