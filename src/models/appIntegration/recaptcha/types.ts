import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationReCAPTCHAStatus } from './constants';

/**
 * Provides a data transfer object for the ReCAPTCHA integration.
 */
export interface IAppIntegrationReCAPTCHA {
    /**
     * The id of the object.
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * The app integration dto.
     */
    appIntegration: IAppIntegration;

    /**
     * Gets or sets the version of the ReCaptcha being used (e.g., v2, v3).
     * Different versions may have different behavior and setup requirements.
     * @remarks min: 1
     */
    version: string;

    /**
     * This is the public key used on the client-side to render the ReCaptcha widget.
     *
     * @remarks min: 1
     */
    siteKey: string;

    /**
     * The verify URL of the app integration.
     */
    verifyURL?: string | null;

    /**
     * This is the private key used server-side to validate ReCaptcha responses.
     * It's optional to allow scenarios where only public configuration is required.
     *
     * @remarks min: 1
     */
    secretKey?: string | null;

    /**
     * Gets or sets any additional notes or identifiers related to the account or setup that manages this ReCaptcha configuration.
     *
     * @remarks min: 1
     */
    accountConfigNotes?: string | null;

    /**
     * Flag to indicate if the analytics integration is the default.
     *
     * @default `false`
     */
    isDefault?: boolean | null;

    status?: AppIntegrationReCAPTCHAStatus;
}

//#region API types
/**
 * Provides a data transfer object for the ReCaptcha integration which is used for command requests.
 */
export interface ICreateAppIntegrationReCAPTCHAParams {
    /**
     * This is used to associate this configuration with a specific integration instance.
     *
     * @remarks min: 1
     */
    appIntegrationId: IdType;

    /**
     * Gets or sets the version of the ReCaptcha being used (e.g., v2, v3).
     * Different versions may have different behavior and setup requirements.
     *
     * @remarks min: 1
     */
    version: string;

    /**
     * This is the public key used on the client-side to render the ReCaptcha widget.
     *
     * @remarks min: 1
     */
    siteKey: string;

    /**
     * The verify URL of the app integration.
     */
    verifyURL?: string | null;

    /**
     * This is the private key used server-side to validate ReCaptcha responses.
     * It's optional to allow scenarios where only public configuration is required.
     *
     * @remarks min: 1
     */
    secretKey?: string | null;

    /**
     * Gets or sets any additional notes or identifiers related to the account or setup that manages this ReCaptcha configuration.
     *
     * @remarks min: 1
     */
    accountConfigNotes?: string | null;

    /**
     * Flag to indicate if the analytics integration is the default.
     *
     * @default `false`
     */
    isDefault?: boolean | null;

    status?: AppIntegrationReCAPTCHAStatus;
}

/**
 * Provides a data transfer object for the ReCaptcha integration which is used for command requests.
 */
export interface IUpdateAppIntegrationReCAPTCHAParams
    extends ICreateAppIntegrationReCAPTCHAParams {
    /**
     * The app integration ReCaptcha id.
     */
    id: IdType;
}
//#endregion
