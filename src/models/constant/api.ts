import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { CONSTANT_PATH } from './paths';

/**
 * # Brand Link
 *
 * Gets all the brand link types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/brand-link}
 */
export const getBrandLinkTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_BRAND_LINK_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Black List
 *
 * Gets all the black list types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/black-list}
 */
export const getBlackListTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_BLACK_LIST_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Coupon
 *
 * Gets all the coupon statuses.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/coupon}
 */
export const getCouponStatuses = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_COUPON_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Commission Rate
 *
 * Gets all the commission rate types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/commission-rate#get-api-v1-constants-commission-rate-types}
 */
export const getCommissionRateTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_COMMISSION_RATE_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Device
 *
 * Gets all the device status.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/device#get-api-v1-constants-device-status}
 */
export const getDeviceStatuses = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_DEVICE_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Device
 *
 * Gets all the device types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/device#get-api-v1-constants-device-types}
 */
export const getDeviceTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_DEVICE_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Invoice
 *
 * Gets all the invoice status.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/invoice#get-api-v1-constants-invoice-status}
 */
export const getInvoiceStatuses = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_INVOICE_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Invoice
 *
 * Gets all the invoice types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/invoice#get-api-v1-constants-invoice-types}
 */
export const getInvoiceTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_INVOICE_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Issue
 *
 * Gets all the issue priorities..
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/issue}
 */
export const getIssuePriorities = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_ISSUE_PRIORITIES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # License
 *
 * Gets all the licenses sources.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/license#get-api-v1-constants-license-sources}
 */
export const getLicenseSources = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_LICENSE_SOURCES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # License
 *
 * Gets all the licenses types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/license#get-api-v1-constants-license-types}
 */
export const getLicenseTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_LICENSE_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # License
 *
 * Gets all the licenses statuses.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/license#get-api-v1-constants-license-status}
 */
export const getLicenseStatuses = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_LICENSE_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Organization
 *
 * Gets all the organization user statuses.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/organization}
 */
export const getOrganizationUserStatuses = async (
    config?: AxiosRequestConfig,
) => {
    const url = CONSTANT_PATH.GET_ORGANIZATION_USER_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Payment
 *
 * Gets all the payment statuses.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/payment}
 */
export const getPaymentStatuses = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_PAYMENT_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Transaction
 *
 * Gets all the transaction statuses.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/transaction#get-api-v1-constants-transaction-status}
 */
export const getTransactionStatuses = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_TRANSACTION_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Transaction
 *
 * Gets all the transaction types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/transaction#get-api-v1-constants-transaction-types}
 */
export const getTransactionTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_TRANSACTION_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Tracking Event
 *
 * Gets all the transaction types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-event}
 */
export const getTrackingEventTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_TRACKING_EVENT_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Tracking Notification
 *
 * Gets all the notification types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-notification#get-api-v1-constants-tracking-notification-types}
 */
export const getTrackingNotificationTypes = async (
    config?: AxiosRequestConfig,
) => {
    const url = CONSTANT_PATH.GET_TRACKING_NOTIFICATION_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Tracking Notification
 *
 * Gets all the notification channel types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-notification#get-api-v1-constants-tracking-notification-channel-types}
 */
export const getTrackingNotificationChannelTypes = async (
    config?: AxiosRequestConfig,
) => {
    const url = CONSTANT_PATH.GET_TRACKING_NOTIFICATION_CHANNEL_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Tracking Notification
 *
 * Gets all the tracking notification reaction statuses.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-notification#get-api-v1-constants-tracking-notification-reaction-status}
 */
export const getTrackingNotificationReactionStatuses = async (
    config?: AxiosRequestConfig,
) => {
    const url = CONSTANT_PATH.GET_TRACKING_NOTIFICATION_REACTION_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Feature
 *
 * Gets all the feature types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/feature}
 */
export const getFeatureTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_FEATURE_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # User
 *
 * Gets all the user statuses.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/user#get-api-v1-constants-user-status}
 */
export const getUserStatuses = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_USER_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # User
 *
 * Gets all the user types.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/user#get-api-v1-constants-user-types}
 */
export const getUserTypes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_USER_TYPES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Wallet
 *
 * Gets all the wallet statuses.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/wallet}
 */
export const getWalletStatuses = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_WALLET_STATUSES;
    const response = await jfwAxios.get<HttpResponse<string[]>>(url, config);

    return response.data;
};

/**
 * # Error
 *
 * Gets all the error codes in the system.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/error}
 */
export const getErrorCodes = async (config?: AxiosRequestConfig) => {
    const url = CONSTANT_PATH.GET_ERRORS;
    const response = await jfwAxios.get<
        HttpResponse<Record<string, Record<string, number>>>
    >(url, config);

    return response.data;
};
