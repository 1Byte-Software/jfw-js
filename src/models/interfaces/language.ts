import { IdType } from "../types";

export interface ILanguage {
    id: IdType;
    code: string;
    countryCode: string;
    name: string;
    nativeName: string;
}
