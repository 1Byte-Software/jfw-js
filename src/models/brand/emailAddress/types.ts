import { DateType, IdType } from '../../base';

/**
 * This class provides the Brand Email Address Dto.
 */
export interface IEmailAddress {
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
     * The placeholder key of the title, that value relate with email template.
     */
    placeholderKeyTitle?: string | null;

    /**
     * The title of the email address.
     *
     * @remarks min: 1
     */
    title: string;

    /**
     * The placeholder key of the email address, that value relate with email template.
     */
    placeholderKeyEmailAddress?: string | null;

    /**
     * The email address value.
     *
     * @remarks email - min: 1
     */
    emailAddress: string;

    /**
     * The description.
     */
    description?: string | null;
}

//#region API types
/**
 * This class is used to create, update for the brand email address.
 */
export interface ICreateEmailAddressParams {
    /**
     *  The id of the brand.
     */
    brandId: IdType;

    /**
     * The placeholder key of the title, that value relate with email template.
     */
    placeholderKeyTitle?: string | null;

    /**
     * The title of the email address.
     *
     * @remarks min: 1
     */
    title: string;

    /**
     * The placeholder key of the email address, that value relate with email template.
     */
    placeholderKeyEmailAddress?: string | null;

    /**
     * The email address value.
     *
     * @remarks email - min: 1
     */
    emailAddress: string;

    /**
     * The description.
     */
    description?: string | null;
}

/**
 * This class is used to create, update for the brand email address.
 */
export type IUpdateEmailAddressParams = ICreateEmailAddressParams;

export interface IDeleteEmailAddressParams {
    /**
     * The id of the brand.
     */
    brandId: IdType;

    /**
     * The id of the email address to get.
     */
    emailAddressId: IdType;
}

export interface IGetEmailAddressParams {
    /**
     * The id of the brand.
     */
    brandId: IdType;

    /**
     * The id of the email address to get.
     */
    emailAddressId: IdType;
}

//#endregion
