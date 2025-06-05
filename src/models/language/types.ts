import { DateType, IdType } from '../base';

/**
 * This class represents the language data transfer object.
 */
export interface ILanguage {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType;

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
