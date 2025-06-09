import { DateType, IdType } from '../base';

export interface IMFA {
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
     * The code of the multiple factor authentication.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the multiple factor authentication.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the multiple factor authentication.
     */
    description?: string | null;
}

//#region API types
//#endregion
