import { IdType } from '../base';

export interface ILanguage {
    id: IdType;
    code: string;
    countryCode: string;
    name: string;
    nativeName: string;
    dateFormat: string;
    tags: string;
}

//#region API types
export interface IGetLanguagesParams {
    
}
//#endregion
