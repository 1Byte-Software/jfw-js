import { DateType, IdType } from '../base';

/**
 * This class represents the timezone data transfer object.
 */
export interface ITimezone {
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
    createdDate?: DateType | null;

    /**
     * The timezone code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The country code.
     */
    countryCode?: string | null;

    /**
     * The timezone name.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The timezone value.
     *
     * @remarks min: 1
     */
    value: string;

    /**
     * The timezone display name. Ex: (UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
     *
     * @remarks min: 1
     */
    displayName: string;

    /**
     * The timezone description.
     */
    description?: string | null;
}

//#region API types

//#endregion
