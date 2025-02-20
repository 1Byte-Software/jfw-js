import { DateType, IdType } from '../base';
import { IPageable, ISortable } from '../../core';

export interface ITimezone {
    code: string;
    countryCode: string;
    description: string;
    displayName?: string;
    id: IdType;
    name: string;
    value: string;
    createdDate: DateType;
}

//#region API types
export interface IGetTimezoneParams {
    name?: string;
    countryCode?: string;
}

//#endregion
