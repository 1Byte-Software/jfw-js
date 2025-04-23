import { IBaseObject } from '../../base';

export interface IBrandProfile extends IBaseObject {
    /**
     * The favicon url.
     */
    faviconUrl: string | null;

    /**
     * The logo url.
     */
    logoUrl: string | null;

    /**
     * The slogan.
     */
    slogan: string | null;

    /**
     * The primary color. Color for primary actions, buttons, text links. 3 and 6 digit hex code values accepted.
     */
    primaryColor: string | null;

    /**
     * The primary color hover. Color for primary actions, buttons, text links hover. 3 and 6 digit hex code values accepted.
     */
    primaryColorHover: string | null;

    /**
     * This value is used to determine the secondary color of the brand. Color for background to accent your UI. 3 and 6 digit hex code values accepted.
     */
    secondaryColor: string | null;

    /**
     * This value is used to determine the tertiary color of the brand. Color for background to accent your UI. 3 and 6 digit hex code values accepted.
     */
    tertiaryColor: string | null;
}

//#region API types
//#endregion
