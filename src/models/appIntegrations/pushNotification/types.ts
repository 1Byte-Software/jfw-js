import { IdType } from '../../asdas';

export interface IIntegrationPushNotification {
    code: string;
    name: string;
    projectId: string;
    clientEmail: string;
    clientId: string;
    privateKey: string;
    authUrl: string;
    tokenUrl: string;
    authProviderX509CertUrl: string;
    clientX509CertUrl: string;
    universeDomain: string;
    apiKey: string;
    authDomain: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
    vapidKey: string;
    id: IdType;
}

export interface IFirebaseSettings {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

//#region API types
export interface IQueryIntegrationPushNotificationParams {}

export interface ICreateIntegrationPushNotificationParams {
    name: string;
    description?: string;
    smtpHost: string;
    smtpPort: number;
    smtpUsername: string;
    useTls?: boolean;
    isDefault?: boolean;
}

export type IUpdateIntegrationPushNotificationParams =
    ICreateIntegrationPushNotificationParams;

//#endregion
