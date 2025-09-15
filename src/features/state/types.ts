export interface IState {
    /**
     * The country code.
     *
     * @remarks min: 1
     */
    countryCode: string;

    /**
     * The state code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The state name.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The administrative division.
     */
    administrativeDivision?: string | null;

    /**
     * The tags.
     */
    tags?: string | null;
}
//#region API types

//#endregion
