import { IdType } from "../types";

export interface IPushNotificationSettings {
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
