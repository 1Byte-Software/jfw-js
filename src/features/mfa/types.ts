import { IBaseObject } from '../base';

export interface IMFA extends IBaseObject {
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
