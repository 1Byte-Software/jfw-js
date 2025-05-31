import { IBaseParameters } from '../../../../core';

export interface IRegisterNewUserParameters extends Partial<IBaseParameters> {}

/**
 * Contains the data for the registration form.
 */
export interface IRegisterNewUserBody {
    /**
     * The username that the user is registering with.
     *
     * This can be an email address or a username with format: [a-zA-Z0-9._-]{5}+
     *
     * @example "username"
     */
    username?: string | null;

    /**
     * The phone number that the user is registering with. The phone number is in the E.164 format.
     *
     * @example "+1234567890"
     * @remarks tel
     */
    phoneNumber?: string | null;

    /**
     * The password that the user is registering with.
     *
     * @example "password"
     * @remarks min: 1
     */
    password: string;

    /**
     * The email address that the user is registering with.
     *
     * This is used to receive emails from the system.
     *
     * @example "example@jframework.io"
     * @remarks min: 1
     */
    emailAddress: string;

    /**
     * The first name of the user.
     *
     * @example "John"
     */
    firstName?: string | null;

    /**
     * The last name of the user.
     *
     * @example "Doe"
     */
    lastName?: string | null;

    /**
     * The nickname of the user.
     *
     * @example "JohnDoe"
     */
    nickName?: string | null;

    /**
     * The invitation code that the user is using to register.
     *
     * @example "INVITATIONCODE"
     */
    referralCode?: string | null;

    /**
     * The timezone id.
     *
     * @example "KIplKnap0Kp"
     */
    timeZoneId?: string | null;
}

export interface IRegisterNewUserOptions extends IRegisterNewUserParameters {
    body: IRegisterNewUserBody;
}
