import { DateType, IBaseObject, IdType } from '../base';

/**
 * This class represents the language data transfer object.
 */
export interface ILanguage extends IBaseObject {
    /**
     * The country code.
     *
     * @remarks min: 1
     */
    countryCode: string;

    /**
     * The language code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The language name.
     */
    name?: string | null;

    /**
     * The native language name.
     */
    nativeName?: string | null;

    /**
     * The date format.
     *
     * @remarks min: 1
     */
    dateFormat: string;

    /**
     * The language tags.
     */
    tags?: string | null;
}

//#region API types
//#endregion
