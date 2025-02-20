import { DateType, IdType } from '../base';

export interface IState {
    id: IdType;
    code: string;
    name: string;
    countryCode: string;
    stateType: string;
    createdDate: DateType;
}
//#region API types
export interface IQueryStateParams {
    name?: string;
    countryCode?: string;
    stateCode?: string;
}

//#endregion
