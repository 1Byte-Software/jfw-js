import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationPushNotificationStatus } from './constants';

/**
 * Represents the full object model of a push notification integration for an app.
 * This interface reflects both the persisted data and optional configuration fields.
 */
export interface IAppIntegrationPushNotification {
    /**
     * The app integration details associated with this push notification configuration.
     */
    appIntegration: IAppIntegration;

    /**
     * The unique code identifying this push notification integration.
     */
    code: string;

    /**
     * The display name of the push notification integration.
     */
    name: string;

    /**
     * The ID of the project associated with this push integration.
     */
    projectId: IdType;

    /**
     * The client email used to authenticate with the push notification provider.
     */
    clientEmail: string;

    /**
     * The client ID provided by the push notification service (e.g., Firebase).
     * This field is optional and may be null.
     */
    clientId?: string | null;

    /**
     * The private key used for authentication with the push notification service.
     */
    privateKey: string;

    /**
     * The authentication URL used by the push notification provider.
     * Optional and nullable.
     */
    authUrl?: string | null;

    /**
     * The token URL for retrieving access tokens from the provider.
     * Optional and nullable.
     */
    tokenUrl?: string | null;

    /**
     * The authentication provider's X.509 certificate URL.
     * Optional and nullable.
     */
    authProviderX509CertUrl?: string | null;

    /**
     * The client X.509 certificate URL.
     * Optional and nullable.
     */
    clientX509CertUrl?: string | null;

    /**
     * The universe domain for the push notification provider.
     * Optional and nullable.
     */
    universeDomain?: string | null;

    /**
     * The API key used to authenticate requests to the push notification service.
     * Optional and nullable.
     */
    apiKey?: string | null;

    /**
     * The authentication domain (e.g., Firebase Auth domain).
     * Optional and nullable.
     */
    authDomain?: string | null;

    /**
     * The storage bucket used by the push notification service.
     * Optional and nullable.
     */
    storageBucket?: string | null;

    /**
     * The messaging sender ID for the push notification provider.
     * Optional and nullable.
     */
    messagingSenderId?: string | null;

    /**
     * The application ID. If using Firebase, this can be derived from the project ID.
     * Optional and nullable.
     */
    appId?: string | null;

    /**
     * The measurement ID used for analytics tracking.
     * Optional and nullable.
     */
    measurementId?: string | null;

    /**
     * The VAPID key used for web push notifications.
     * Optional and nullable.
     */
    vapidKey?: string | null;

    /**
     * Indicates whether this integration is the default.
     * Optional and nullable. Defaults to `false` if not specified.
     */
    isDefault?: boolean | null;

    /**
     * The unique identifier of this integration record.
     */
    id: IdType;

    /**
     * The current status of the push notification integration.
     */
    status: AppIntegrationPushNotificationStatus;

    /**
     * The timestamp when this integration was created.
     */
    createdDate: DateType;
}

//#region API types
export interface IGetAppIntegrationPushNotificationParams {}

/**
 * The request data transfer object for the push notification integration when creating.
 */
export interface ICreateAppIntegrationPushNotificationData {
    /**
     * The app integration provider ID of the push notification.
     */
    appIntegrationId: IdType;

    /**
     * The code of the push notification.
     */
    code: string;

    /**
     * The name of the push notification.
     */
    name: string;

    /**
     * The project ID of the push notification.
     */
    projectId: IdType;

    /**
     * The client email of the push notification.
     */
    clientEmail: string;

    /**
     * The client ID of the push notification.
     */
    clientId?: string | null;

    /**
     * The private key of the push notification.
     */
    privateKey: string;

    /**
     * The authentication URL of the push notification.
     */
    authUrl?: string | null;

    /**
     * The token URL of the push notification.
     */
    tokenUrl?: string | null;

    /**
     * The authentication provider X509 certificate URL of the push notification.
     */
    authProviderX509CertUrl?: string | null;

    /**
     * The client X509 certificate URL of the push notification.
     */
    clientX509CertUrl?: string | null;

    /**
     * The universe domain of the push notification.
     */
    universeDomain?: string | null;

    /**
     * The API key of the push notification.
     */
    apiKey?: string | null;

    /**
     * The authentication domain of the push notification.
     */
    authDomain?: string | null;

    /**
     * The storage bucket of the push notification.
     */
    storageBucket?: string | null;

    /**
     * The messaging sender ID of the push notification.
     */
    messagingSenderId?: string | null;

    /**
     * The app ID of the push notification. Use projectId instead if using Firebase service.
     */
    appId?: string | null;

    /**
     * The measurement ID of the push notification.
     */
    measurementId?: string | null;

    /**
     * The VAPID key of the push notification.
     */
    vapidKey?: string | null;

    /**
     * Flag to indicate if the push notification integration is the default. Default is false.
     */
    isDefault?: boolean | null;
}

/**
 * The request data transfer object for the push notification integration when updating.
 */
export type IUpdateAppIntegrationPushNotificationData =
    ICreateAppIntegrationPushNotificationData;

//#endregion
