import { IdType } from "../base";

export interface ITimezone {
    id: IdType;
    code: string;
    countryCode: string;
    name: string;
    value: string;
    displayName: string;
    description: string;
}

//#region API types
export interface IGetTimezoneParams {
    keywords?: string;
    name?: string;
    countryCode?: string;
}

//#endregion
