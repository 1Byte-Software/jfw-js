import { getAppIntegrations } from './api';
import {
    createAppIntegrationAuthentication,
    createAppIntegrationAuthenticationWithImportFileSettings,
    deleteAppIntegrationAuthentication,
    getAppIntegrationAuthentication,
    getAppsIntegrationAuthenticationWithBrand,
    testBuildingAuthenticationURL,
    updateAppIntegrationAuthentication,
} from './authentication';
import {
    createAppIntegrationPaymentGateway,
    deleteAppIntegrationPaymentGateway,
    getAppIntegrationPaymentGateway,
    getAppsIntegrationPaymentGatewayWithBrand,
    testCreatingCheckoutLink,
    updateAppIntegrationPaymentGateway,
} from './paymentGateway';
import {
    createAppIntegrationPushNotification,
    createAppIntegrationPushNotificationWithImportFileSettings,
    deleteAppIntegrationPushNotification,
    getAppIntegrationPushNotification,
    getAppIntegrationPushNotificationsWithBrand,
    updateAppIntegrationPushNotification,
} from './pushNotification';
import {
    createAppIntegrationReCAPTCHA,
    deleteAppIntegrationReCAPTCHA,
    getAppIntegrationReCAPTCHA,
    getAppsIntegrationReCAPTCHAWithBrand,
    updateAppIntegrationReCAPTCHA,
} from './recaptcha';
import {
    createAppIntegrationSMS,
    deleteAppIntegrationSMS,
    getAppIntegrationSMS,
    getAppsIntegrationSMSWithBrand,
    testSendingSMSMessage,
    updateAppIntegrationSMS,
} from './sms';
import {
    createAppIntegrationSMTP,
    deleteAppIntegrationSMTP,
    getAppIntegrationSMTP,
    getAppsIntegrationSMTPWithBrand,
    testSendingEmailAddress,
    updateAppIntegrationSMTP,
} from './smtp';

export * from './constants';
export * from './types';

export const appIntegration = {
    getAppIntegrations,

    authentication: {
        createAppIntegrationAuthentication,
        createAppIntegrationAuthenticationWithImportFileSettings,
        deleteAppIntegrationAuthentication,
        getAppIntegrationAuthentication,
        getAppsIntegrationAuthenticationWithBrand,
        testBuildingAuthenticationURL,
        updateAppIntegrationAuthentication,
    },

    paymentGateway: {
        createAppIntegrationPaymentGateway,
        deleteAppIntegrationPaymentGateway,
        getAppIntegrationPaymentGateway,
        getAppsIntegrationPaymentGatewayWithBrand,
        testCreatingCheckoutLink,
        updateAppIntegrationPaymentGateway,
    },

    pushNotification: {
        createAppIntegrationPushNotification,
        createAppIntegrationPushNotificationWithImportFileSettings,
        deleteAppIntegrationPushNotification,
        getAppIntegrationPushNotification,
        getAppIntegrationPushNotificationsWithBrand,
        updateAppIntegrationPushNotification,
    },

    recaptcha: {
        createAppIntegrationReCAPTCHA,
        deleteAppIntegrationReCAPTCHA,
        getAppIntegrationReCAPTCHA,
        getAppsIntegrationReCAPTCHAWithBrand,
        updateAppIntegrationReCAPTCHA,
    },

    sms: {
        createAppIntegrationSMS,
        deleteAppIntegrationSMS,
        getAppIntegrationSMS,
        getAppsIntegrationSMSWithBrand,
        testSendingSMSMessage,
        updateAppIntegrationSMS,
    },

    smtp: {
        createAppIntegrationSMTP,
        deleteAppIntegrationSMTP,
        getAppIntegrationSMTP,
        getAppsIntegrationSMTPWithBrand,
        testSendingEmailAddress,
        updateAppIntegrationSMTP,
    },
};
