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
    description?: string | null;
    status: AppIntegrationSMTPStatus;
    createdDate: DateType;
}

//#region API types
export interface IGetAppIntegrationSMTPsParams {}

export interface ICreateAppIntegrationSMTPData {
    /**
     * The type of the SMTP integration.
     */
    appIntegrationId: string;

    /**
     * The name of the SMTP integration.
     */
    name?: string | null;

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
