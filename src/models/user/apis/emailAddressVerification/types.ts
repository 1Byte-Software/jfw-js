import { IBaseParameters } from '../../../../core';
import { IdType } from '../../../base';

export interface IEmailAddressVerificationPathParameters {
    /**
     * The user id to send the email.
     */
    userId: IdType;
}

export interface IEmailAddressVerificationQueryParameters {
    /**
     * The return URL after the user clicks the link in the email.
     */
    returnUrl: string;
}

export interface IEmailAddressVerificationParameters
    extends Partial<IBaseParameters> {
    pathParameters: IEmailAddressVerificationPathParameters;
    queryParameters: IEmailAddressVerificationQueryParameters;
}

export interface IEmailAddressVerificationOptions
    extends IEmailAddressVerificationParameters {}
