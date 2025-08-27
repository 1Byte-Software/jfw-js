import { IBaseObject, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationPushNotificationStatus } from './constants';

export interface IAppIntegrationPushNotification extends IBaseObject {
    /**
     * The app integration dto.
     */
    appIntegration: IAppIntegration;

    /**
     * The code of the push notification.
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the push notification.
     * @remarks min: 1
     */
    name: string;

    /**
     * The project ID of the push notification.
     * @remarks min: 1
     */
    projectId: IdType;

    /**
     * The client email of the push notification.
     * @remarks min: 1
     */
    clientEmail: string;

    /**
     * The client ID of the push notification.
     */
    clientId?: string | null;

    /**
     * The private key of the push notification.
     * @remarks min: 1
     */
    privateKey: string;

    /**
     * The authentication URL of the push notification.
     * @remarks uri
     */
    authURL?: string | null;

    /**
     * The token URL of the push notification.
     * @remarks uri
     */
    tokenURL?: string | null;

    /**
     * The authentication provider X509 certificate URL of the push notification.
     * @remarks uri
     */
    authProviderX509CertURL?: string | null;

    /**
     * The client X509 certificate URL of the push notification.
     * @remarks uri
     */
    clientX509CertURL?: string | null;

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
     * The app ID of the push notification.
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
     * Flag to indicate if the push notification integration is the default.
     */
    isDefault: boolean;

    /**
     * @remarks enum
     */
    status: AppIntegrationPushNotificationStatus;
}

//#region API types
/**
 * The request data transfer object for the push notification integration when creating.
 */
export interface ICreateAppIntegrationPushNotificationParams {
    /**
     * The app integration provider ID of the push notification.
     *
     * @remarks min: 1
     */
    appIntegrationId: IdType;

    /**
     * The code of the push notification.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the push notification.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The project ID of the push notification.
     *
     * @remarks min: 1
     */
    projectId: IdType;

    /**
     * The client email of the push notification.
     *
     * @remarks min: 1
     */
    clientEmail: string;

    /**
     * The client ID of the push notification.
     *
     * @remarks min: 1
     */
    clientId?: string | null;

    /**
     * The private key of the push notification.
     *
     * @remarks min: 1
     */
    privateKey: string;

    /**
     * The authentication URL of the push notification.
     *
     * @remarks uri
     */
    authURL?: string | null;

    /**
     * The token URL of the push notification.
     *
     * @remarks uri
     */
    tokenURL?: string | null;

    /**
     * The authentication provider X509 certificate URL of the push notification.
     *
     * @remarks uri
     */
    authProviderX509CertURL?: string | null;

    /**
     * The client X509 certificate URL of the push notification.
     *
     * @remarks uri
     */
    clientX509CertURL?: string | null;

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
     * Flag to indicate if the push notification integration is the default.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean;
}

export interface ICreateAppIntegrationPushNotificationWithImportFileSettingsParams {
    /**
     * The id of the app integration to import.
     *
     * @remarks min: 1
     */
    appIntegrationId: IdType;

    /**
     * The file setting to import.
     *
     * @remarks min: 1
     */
    file: File;
}

/**
 * The request data transfer object for the push notification integration when updating.
 */
export interface IUpdateAppIntegrationPushNotificationParams
    extends ICreateAppIntegrationPushNotificationParams {
    /**
     * The id of the app integration push notification.
     */
    id: IdType;
}

//#endregion
