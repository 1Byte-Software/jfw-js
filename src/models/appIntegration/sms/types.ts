import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationSMSStatus } from './constants';

/**
 * Provides a data transfer object for the SMS integration.
 */
export interface IAppIntegrationSMS {
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
     * The name of the SMS integration.
     * @remarks min: 1
     */
    name: string;

    /**
     * The username or identifier for the SMS integration. For Twilio, this is the Account SID (String Identifier).
     * @remarks min: 1
     */
    username: string;

    /**
     * The password or authentication token for the SMS integration. For Twilio, this is the Auth Token.
     * @remarks min: 1
     */
    password: string;

    /**
     * The phone number of the SMS integration. The phone number should be following the E.164 format.
     * @remarks min: 1
     */
    phoneNumber: string;

    /**
     * The description of the SMS integration.
     */
    description?: string | null;

    /**
     * @remarks enum
     */
    status: AppIntegrationSMSStatus;

    /**
     * Flag to indicate if the SMS integration is the default.
     */
    isDefault: boolean;
}

//#region API types
/**
 * Provides a data transfer object for the SMS integration which is used for command requests.
 */
export interface ICreateAppIntegrationSMSParams {
    /**
     * The app integration provider ID of the SMS.
     *
     * @remarks min: 1
     */
    appIntegrationId: string;

    /**
     * The name of the SMS integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The username or identifier for the SMS integration. For Twilio, this is the Account SID (String Identifier).
     *
     * @remarks min: 1
     */
    username: string;

    /**
     * The password or authentication token for the SMS integration. For Twilio, this is the Auth Token.
     *
     * @remarks min: 1
     */
    password: string;

    /**
     * The phone number of the SMS integration. The phone number should be following the E.164 format.
     *
     * @remarks min: 1
     */
    phoneNumber: string;

    /**
     * The description of the SMS integration.
     */
    description?: string | null;

    /**
     * The status of the app integration.
     *
     * @remarks enum
     */
    status?: AppIntegrationSMSStatus;

    /**
     * Flag to indicate if the app integration SMS setting is default.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean;
}

/**
 * Provides a data transfer object for the SMS integration which is used for command requests.
 */
export interface IUpdateAppIntegrationSMSParams {
    /**
     * The app integration provider ID of the SMS.
     *
     * @remarks min: 1
     */
    appIntegrationId: string;

    /**
     * The name of the SMS integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The username or identifier for the SMS integration. For Twilio, this is the Account SID (String Identifier).
     *
     * @remarks min: 1
     */
    username: string;

    /**
     * The password or authentication token for the SMS integration. For Twilio, this is the Auth Token.
     *
     * @remarks min: 1
     */
    password: string;

    /**
     * The phone number of the SMS integration. The phone number should be following the E.164 format.
     *
     * @remarks min: 1
     */
    phoneNumber: string;

    /**
     * The description of the SMS integration.
     */
    description?: string | null;

    /**
     * The status of the app integration.
     *
     * @remarks enum
     */
    status?: AppIntegrationSMSStatus;

    /**
     * Flag to indicate if the app integration SMS setting is default.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean;
}

/**
 * Represents the data required to test sending an SMS using an external SMS integration (e.g., Twilio). This DTO is typically used to verify the integration credentials and messaging capabilities.
 */
export interface ITestSendingSMSMessageParams {
    /**
     * The username or identifier for the SMS integration. For Twilio, this is the Account SID (String Identifier).
     *
     * @remarks min: 1
     */
    username: string;

    /**
     * The password or authentication token for the SMS integration. For Twilio, this is the Auth Token.
     *
     * @remarks min: 1
     */
    password: string;

    /**
     * The sender's phone number used by the SMS integration. Must be in E.164 format (e.g., +1234567890).
     *
     * @remarks min: 1
     */
    phoneNumberFrom: string;

    /**
     * The recipient's phone number to which the test SMS will be sent. Must be in E.164 format (e.g., +1234567890).
     *
     * @remarks min: 1
     */
    phoneNumberTo: string;

    /**
     * The content of the SMS message to be sent during the test.
     *
     * @remarks min: 1
     */
    message: string;
}
//#endregion
