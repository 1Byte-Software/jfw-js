import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationSMTPStatus } from './constants';

export interface IAppIntegrationSMTP {
    id: IdType;
    appIntegration: IAppIntegration;
    name: string;
    host: string;
    port: number;
    username: string;
    password: string;
    useTls: boolean;
    isDefault: boolean;
    description: string | null;
    status: AppIntegrationSMTPStatus;
    createdDate: DateType;
}

//#region API types
export interface IGetAppIntegrationSMTPsParams {}

/**
 * The request data transfer object for the SMTP integration.
 */
export interface ICreateAppIntegrationSMTPData {
    /**
     * The type of the SMTP integration.
     *
     * @remarks string - min: 1
     */
    appIntegrationId: string;

    /**
     * The name of the SMTP integration.
     *
     * @remarks string - min: 1
     */
    name: string;

    /**
     * The host of the SMTP integration.
     *
     * @remarks string - min: 1
     */
    host: string;

    /**
     * The port of the SMTP integration.
     *
     * @remarks integer - int32
     */
    port: number;

    /**
     * The username of the SMTP integration.
     *
     * @remarks string - min: 1
     */
    username: string;

    /**
     * The password of the SMTP integration.
     *
     * @remarks string - min: 1
     */
    password: string;

    /**
     * Flag to indicate if the SMTP integration uses TLS.
     *
     * @defaultValue `false`
     */
    useTls?: boolean | null;

    /**
     * Flag to indicate if the SMTP integration is the default.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean | null;

    /**
     * The description of the SMTP integration.
     */
    description?: string | null;

    /**
     * Possible values
     * @remarks string - enum
     * - `0` - `Inactive`
     * - `1` - `Active`
     */
    status?: AppIntegrationSMTPStatus;
}

/**
 * The request data transfer object for the SMS integration.
 */
export type IUpdateAppIntegrationSMTPData = ICreateAppIntegrationSMTPData;

export interface ITestSendingEmailAddressData {
    /**
     * The SMTP server hostname or IP (e.g., smtp.gmail.com).
     *
     * @remarks string - min: 1
     */
    host: string;

    /**
     * The port number for the SMTP server (typically 587 or 465).
     *
     * @remarks integer - int32
     */
    port: number;

    /**
     * The username/email for SMTP authentication.
     *
     * @remarks string - min: 1
     */
    username: string;

    /**
     * The password for SMTP authentication.
     *
     * @remarks string - min: 1
     */
    password: string;

    /**
     * Whether to enable SSL for SMTP connection.
     *
     * @remarks boolean
     */
    useTls: boolean;

    /**
     * The sender email address.
     *
     * @remarks string - min: 1
     */
    emailAddressFrom: string;

    /**
     * The recipient email address.
     *
     * @remarks string - min: 1
     */
    emailAddressTo: string;

    /**
     * The subject of the test email.
     *
     * @remarks string - min: 1
     */
    subject: string;

    /**
     * The body content of the test email.
     *
     * @remarks string - min: 1
     */
    body: string;
}

//#endregion
