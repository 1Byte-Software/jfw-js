export interface IBrandProfile {
    /**
     * The slogan.
     *
     * @remarks min: 1
     */
    slogan: string;

    /**
     * The logo URL.
     *
     * @remarks uri
     */
    logoURL?: string | null;

    /**
     * The favicon URL.
     *
     * @remarks uri
     */
    faviconURL?: string | null;

    /**
     * The primary color.
     *
     * Color for primary actions, buttons, text links.
     * 3 and 6 digit hex code values accepted.
     */
    primaryColor?: string | null;

    /**
     * The primary color hover.
     *
     * Color for primary actions, buttons, text links hover.
     * 3 and 6 digit hex code values accepted.
     */
    primaryColorHover?: string | null;

    /**
     * The secondary color of the brand.
     *
     * Color for background to accent your UI.
     * 3 and 6 digit hex code values accepted.
     */
    secondaryColor?: string | null;

    /**
     * The tertiary color of the brand.
     *
     * Color for background to accent your UI.
     * 3 and 6 digit hex code values accepted.
     */
    tertiaryColor?: string | null;
}

//#region API types

/**
 * This class provides the Brand Profile Dto.
 */
export interface IUpdateBrandProfileParams {
    /**
     * The slogan.
     *
     * @remarks min: 1
     */
    slogan: string;

    /**
     * The logo URL.
     *
     * @remarks uri
     */
    logoURL?: string | null;

    /**
     * The favicon URL.
     *
     * @remarks uri
     */
    faviconURL?: string | null;

    /**
     * The primary color. Color for primary actions, buttons, text links. 3 and 6 digit hex code values accepted.
     */
    primaryColor?: string | null;

    /**
     * The primary color hover. Color for primary actions, buttons, text links hover. 3 and 6 digit hex code values accepted.
     */
    primaryColorHover?: string | null;

    /**
     * This value is used to determine the secondary color of the brand. Color for background to accent your UI. 3 and 6 digit hex code values accepted.
     */
    secondaryColor?: string | null;

    /**
     * This value is used to determine the tertiary color of the brand. Color for background to accent your UI. 3 and 6 digit hex code values accepted.
     */
    tertiaryColor?: string | null;
}
//#endregion
