import { DateType, IdType } from '../asdas';
import { IPageable, ISortable } from '../base';

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
