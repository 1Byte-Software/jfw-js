import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationSMSStatus } from './constants';

export interface IAppIntegrationSMS {
    id: IdType;
    appIntegration: IAppIntegration;
    name: string;
    username: string;
    password: string;
    phoneNumber: string;
    description?: string | null;
    status: AppIntegrationSMSStatus;
    isDefault: boolean;
    createdDate: DateType;
}

//#region API types
export interface IGetAppIntegrationSMSParams {}

export interface ICreateAppIntegrationSMSData {
    /**
     * The app integration provider ID of the SMS.
     */
    appIntegrationId: string;

    /**
     * The name of the SMS integration.
     */
    name: string;

    /**
     * The username of the SMS integration.
     */
    username: string;

    /**
     * The password of the SMS integration.
     */
    password: string;

    /**
     * The phone number of the SMS integration. The phone number should be following the E.164 format.
     */
    phoneNumber: string;

    /**
     * The description of the SMS integration.
     */
    description?: string | null;

    /**
     * Available options: 0 - Inactive, 1 - Active
     */
    status?: AppIntegrationSMSStatus;

    /**
     * Flag to indicate if the app integration sms setting is default. By default, it is false.
     */
    isDefault?: boolean;
}

export type IUpdateAppIntegrationSMSData = ICreateAppIntegrationSMSData;

/**
 * Represents the data required to test sending an SMS using an external SMS integration (e.g., Twilio). This DTO is typically used to verify the integration credentials and messaging capabilities.
 */
export interface ISendSMSTextMessageData {
    /**
     * The username or identifier for the SMS integration. For Twilio, this is the Account SID (String Identifier).
     */
    username: string;

    /**
     * The password or authentication token for the SMS integration. For Twilio, this is the Auth Token.
     */
    password: string;

    /**
     * The sender's phone number used by the SMS integration. Must be in E.164 format (e.g., +1234567890).
     */
    phoneNumberFrom: string;

    /**
     * The recipient's phone number to which the test SMS will be sent. Must be in E.164 format (e.g., +1234567890).
     */
    phoneNumberTo: string;

    /**
     * The content of the SMS message to be sent during the test.
     */
    message: string;
}

//#endregion
