import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationSMTPStatus } from './constants';

/**
 * The response data transfer object representing an SMTP integration configuration.
 *
 * This DTO is returned from the backend when retrieving or managing email delivery configurations
 * via SMTP providers such as Gmail, SendGrid, or custom mail servers.
 */
export interface IAppIntegrationSMTP {
    /**
     * The unique identifier of this SMTP integration.
     */
    id: IdType;

    /**
     * The app integration that this SMTP configuration is associated with.
     */
    appIntegration: IAppIntegration;

    /**
     * The name of the SMTP configuration.
     */
    name: string;

    /**
     * The SMTP server hostname or IP address.
     * Example: smtp.gmail.com
     */
    host: string;

    /**
     * The port used to connect to the SMTP server.
     * Common ports: 587 (TLS), 465 (SSL), 25 (non-secure).
     */
    port: number;

    /**
     * The username or email address used for SMTP authentication.
     */
    username: string;

    /**
     * The password or app-specific token used for SMTP authentication.
     */
    password: string;

    /**
     * Indicates whether the SMTP connection uses TLS (Transport Layer Security).
     * For secure email delivery, this should be set to true.
     */
    useTls: boolean;

    /**
     * Flag indicating whether this SMTP configuration is the default one.
     * Used when sending emails without explicitly selecting a config.
     */
    isDefault: boolean;

    /**
     * A short description of the SMTP integration.
     * Useful for distinguishing between different mail server configurations.
     */
    description?: string | null;

    /**
     * The current status of the SMTP integration.
     * Available options: 0 - Inactive, 1 - Active.
     */
    status: AppIntegrationSMTPStatus;

    /**
     * The timestamp representing when this SMTP configuration was created.
     */
    createdDate: DateType;
}

//#region API types
export interface IGetAppIntegrationSMTPsParams {}

/**
 * The request data transfer object for the SMS integration.
 */
export interface ICreateAppIntegrationSMTPData {
    /**
     * The type of the SMTP integration.
     */
    appIntegrationId: string;

    /**
     * The name of the SMTP integration.
     */
    name: string;

    /**
     * The host of the SMTP integration.
     */
    host: string;

    /**
     * The port of the SMTP integration.
     */
    port: number;

    /**
     * The username of the SMTP integration.
     */
    username: string;

    /**
     * The password of the SMTP integration.
     */
    password: string;

    /**
     * Flag to indicate if the SMTP integration uses TLS. By default, it is set to false.
     */
    useTls?: boolean | null;

    /**
     * Flag to indicate if the SMTP integration is the default. By default, it is set to false.
     */
    isDefault?: boolean | null;

    /**
     * Available options: 0 - Inactive, 1 - Active
     */
    status?: AppIntegrationSMTPStatus;

    /**
     * The description of the SMTP integration.
     */
    description?: string | null;
}

/**
 * The request data transfer object for the SMS integration.
 */
export type IUpdateAppIntegrationSMTPData = ICreateAppIntegrationSMTPData;

export interface ISendTestEmailData {
    /**
     * The SMTP server hostname or IP (e.g., smtp.gmail.com).
     */
    host: string;

    /**
     * The port number for the SMTP server (typically 587 or 465).
     */
    port: number;

    /**
     * The username/email for SMTP authentication.
     */
    username: string;

    /**
     * The password for SMTP authentication.
     */
    password: string;

    /**
     * Whether to enable SSL for SMTP connection.
     */
    useTls: boolean;

    /**
     * The sender email address.
     */
    emailAddressFrom: string;

    /**
     * The recipient email address.
     */
    emailAddressTo: string;

    /**
     * The subject of the test email.
     */
    subject: string;

    /**
     * The body content of the test email.
     */
    body: string;
}

//#endregion
