import { IBaseObject } from '../base';

export interface ILanguage extends IBaseObject {
    code: string;
    countryCode: string;
    
    name: string;
    nativeName: string;
}

//#region API types
//#endregion
