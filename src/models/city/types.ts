import { DateType, IdType } from '../base';

export interface ICity {
    id: IdType;
    name: string;
    countryCode: string;
    stateCode: string;
    createdDate: DateType;
}
//#region API types
export interface IQueryCityParams {
    name?: string;
    countryCode?: string;
    stateCode?: string;
}

//#endregion
