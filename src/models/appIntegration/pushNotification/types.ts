import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';

export interface IAppIntegrationPushNotification {
    appIntegration: IAppIntegration;
    code: string;
    name?: string | null;
    projectId: IdType;
    clientEmail: string;
    clientId?: string | null;
    privateKey: string;
    authUrl?: string | null;
    tokenUrl?: string | null;
    authProviderX509CertUrl?: string | null;
    clientX509CertUrl?: string | null;
    universeDomain?: string | null;
    apiKey?: string | null;
    authDomain?: string | null;
    storageBucket?: string | null;
    messagingSenderId?: string | null;
    appId: IdType;
    measurementId?: string | null;
    vapidKey: string;
    id: IdType;
    createdDate: DateType;
}

//#region API types
export interface IGetAppIntegrationPushNotificationParams {}

export interface ICreateAppIntegrationPushNotificationData {
    appIntegrationId: IdType;
    code: string;
    name?: string | null;
    projectId: IdType;
    clientEmail: string;
    clientId?: string | null;
    privateKey: string;
    authUrl?: string | null;
    tokenUrl?: string | null;
    authProviderX509CertUrl?: string | null;
    clientX509CertUrl?: string | null;
    universeDomain?: string | null;
    apiKey?: string | null;
    authDomain?: string | null;
    storageBucket?: string | null;
    messagingSenderId?: string | null;
    appId?: IdType | null;
    measurementId?: string | null;
    vapidKey?: string | null;
}

export type IUpdateAppIntegrationPushNotificationData =
    ICreateAppIntegrationPushNotificationData;

//#endregion
