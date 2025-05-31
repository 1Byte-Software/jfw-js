import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface IUpdateUserPathParameters {
    /**
     * The id of the user.
     */
    id: IdType;
}

export interface IUpdateUserParameters extends Partial<IBaseParameters> {
    pathParameters: IUpdateUserPathParameters;
}

/**
 * The presentation data transfer object for updating the user.
 */
export interface IUpdateUserBody {
    /**
     * The username of the user.
     * @example "username"
     * @remarks min: 1
     */
    username: string;

    /**
     * The email address of the user.
     * @example "example@jframework.io"
     * @remarks email - min: 1
     */
    emailAddress: string;

    /**
     * The nickname of the user.
     * @example "example"
     */
    nickName?: string | null;

    /**
     * The first name of the user.
     * @example "John"
     */
    firstName?: string | null;

    /**
     * The last name of the user.
     * @example "Doe"
     */
    lastName?: string | null;

    /**
     * The language code of the user.
     * The language code is composed of two parts: the language code and the country code.
     * The language code is a lowercase two-letter code derived from ISO 639-1.
     * The country code is an uppercase two-letter code derived from ISO 3166.
     *
     * @example "en-US"
     */
    languageCode?: string | null;

    /**
     * The id time zone of the user.
     */
    timeZoneId?: IdType | null;

    /**
     * The primary phone number of the user.
     * The phone number is in the E.164 format.
     *
     * @example "+1234567890"
     * @remarks tel
     */
    phoneNumber?: string | null;

    /**
     * The phone number 1 of the user.
     * The phone number is in the E.164 format.
     *
     * @example "+1234567890"
     * @remarks tel
     */
    phoneNumber1?: string | null;

    /**
     * The avatar of the user.
     * The avatar is a URL of the image.
     *
     * @remarks uri
     */
    avatar?: string | null;

    /**
     * The bio is a short description of the user.
     * @example "example"
     */
    bio?: string | null;

    /**
     * The website of the user want to update.
     * The website is a URL of the user.
     *
     * @example "https://mywebsite.com"
     * @remarks uri
     */
    website?: string | null;
}

export interface IUpdateUserOptions extends IUpdateUserParameters {
    body: IUpdateUserBody;
}
