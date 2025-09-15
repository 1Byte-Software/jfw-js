import { DateType, IBaseObject, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationSMTPStatus } from './constants';

export interface IAppIntegrationSMTP extends IBaseObject {
    /**
     * The app integration dto.
     */
    appIntegration: IAppIntegration;

    /**
     * The name of the SMTP integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The host of the SMTP integration.
     *
     * @remarks min: 1
     */
    host: string;

    /**
     * The port of the SMTP integration.
     *
     * @remarks int32
     */
    port: number;

    /**
     * The username of the SMTP integration.
     *
     * @remarks min: 1
     */
    username: string;

    /**
     * The password of the SMTP integration.
     *
     * @remarks min: 1
     */
    password: string;

    /**
     * Flag to indicate if the SMTP integration uses TLS.
     */
    useTls: boolean;

    /**
     * Flag to indicate if the SMTP integration is the default.
     */
    isDefault: boolean;

    /**
     * The description of the SMTP integration.
     */
    description?: string | null;

    /**
     * The status of the app integration.
     *
     * @remarks enum
     */
    status: AppIntegrationSMTPStatus;
}

//#region API types
/**
 * The request data transfer object for the SMTP integration.
 */
export interface ICreateAppIntegrationSMTPParams {
    /**
     * The type of the SMTP integration.
     *
     * @remarks min: 1
     */
    appIntegrationId: IdType;

    /**
     * The name of the SMTP integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The host of the SMTP integration.
     *
     * @remarks min: 1
     */
    host: string;

    /**
     * The port of the SMTP integration.
     */
    port: number;

    /**
     * The username of the SMTP integration.
     *
     * @remarks min: 1
     */
    username: string;

    /**
     * The password of the SMTP integration.
     *
     * @remarks min: 1
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
     * The status of the SMTP integration.
     *
     * @remarks enum
     */
    status?: AppIntegrationSMTPStatus | null;
}

/**
 * The request data transfer object for the SMS integration.
 */
export interface IUpdateAppIntegrationSMTPParams {
    /**
     * The type of the SMTP integration.
     *
     * @remarks min: 1
     */
    appIntegrationId: IdType;

    /**
     * The name of the SMTP integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The host of the SMTP integration.
     *
     * @remarks min: 1
     */
    host: string;

    /**
     * The port of the SMTP integration.
     */
    port: number;

    /**
     * The username of the SMTP integration.
     *
     * @remarks min: 1
     */
    username: string;

    /**
     * The password of the SMTP integration.
     *
     * @remarks min: 1
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
     * The status of the SMTP integration.
     *
     * @remarks enum
     */
    status?: AppIntegrationSMTPStatus | null;
}

export interface ITestSendingEmailAddressParams {
    /**
     * The SMTP server hostname or IP (e.g., smtp.gmail.com).
     *
     * @remarks min: 1
     */
    host: string;

    /**
     * The port number for the SMTP server (typically 587 or 465).
     */
    port: number;

    /**
     * The username/email address for SMTP authentication.
     *
     * @remarks min: 1
     */
    username: string;

    /**
     * The password for SMTP authentication.
     *
     * @remarks min: 1
     */
    password: string;

    /**
     * Whether to enable SSL for SMTP connection.
     */
    useTls: boolean;

    /**
     * The sender email address.
     *
     * @remarks min: 1
     */
    emailAddressFrom: string;

    /**
     * The recipient email address.
     *
     * @remarks min: 1
     */
    emailAddressTo: string;

    /**
     * The subject of the test email.
     *
     * @remarks min: 1
     */
    subject: string;

    /**
     * The body content of the test email.
     *
     * @remarks min: 1
     */
    body: string;
}

//#endregion
