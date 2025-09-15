import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { AbstractAPI } from '../base/AbstractAPI';
import { CONSTANT_PATH } from './paths';

export class ConstantAPI extends AbstractAPI {
    /**
     * # Brand Link
     *
     * Gets all the brand link types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/brand-link}
     */
    public async getBrandLinkTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_BRAND_LINK_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Black List
     *
     * Gets all the black list types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/black-list}
     */
    public async getBlackListTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_BLACK_LIST_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Coupon
     *
     * Gets all the coupon statuses.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/coupon}
     */
    public async getCouponStatuses(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_COUPON_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Commission Rate
     *
     * Gets all the commission rate types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/commission-rate#get-api-v1-constants-commission-rate-types}
     */
    public async getCommissionRateTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_COMMISSION_RATE_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Device
     *
     * Gets all the device status.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/device#get-api-v1-constants-device-status}
     */
    public async getDeviceStatuses(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_DEVICE_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Device
     *
     * Gets all the device types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/device#get-api-v1-constants-device-types}
     */
    public async getDeviceTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_DEVICE_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Invoice
     *
     * Gets all the invoice status.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/invoice#get-api-v1-constants-invoice-status}
     */
    public async getInvoiceStatuses(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_INVOICE_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Invoice
     *
     * Gets all the invoice types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/invoice#get-api-v1-constants-invoice-types}
     */
    public async getInvoiceTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_INVOICE_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Issue
     *
     * Gets all the issue priorities..
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/issue}
     */
    public async getIssuePriorities(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_ISSUE_PRIORITIES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # License
     *
     * Gets all the licenses sources.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/license#get-api-v1-constants-license-sources}
     */
    public async getLicenseSources(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_LICENSE_SOURCES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # License
     *
     * Gets all the licenses types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/license#get-api-v1-constants-license-types}
     */
    public async getLicenseTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_LICENSE_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # License
     *
     * Gets all the licenses statuses.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/license#get-api-v1-constants-license-status}
     */
    public async getLicenseStatuses(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_LICENSE_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Organization
     *
     * Gets all the organization user statuses.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/organization}
     */
    public async getOrganizationUserStatuses(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_ORGANIZATION_USER_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Payment
     *
     * Gets all the payment statuses.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/payment}
     */
    public async getPaymentStatuses(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_PAYMENT_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Transaction
     *
     * Gets all the transaction statuses.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/transaction#get-api-v1-constants-transaction-status}
     */
    public async getTransactionStatuses(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_TRANSACTION_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Transaction
     *
     * Gets all the transaction types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/transaction#get-api-v1-constants-transaction-types}
     */
    public async getTransactionTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_TRANSACTION_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Tracking Event
     *
     * Gets all the transaction types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-event}
     */
    public async getTrackingEventTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_TRACKING_EVENT_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Tracking Notification
     *
     * Gets all the notification types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-notification#get-api-v1-constants-tracking-notification-types}
     */
    public async getTrackingNotificationTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_TRACKING_NOTIFICATION_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Tracking Notification
     *
     * Gets all the notification channel types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-notification#get-api-v1-constants-tracking-notification-channel-types}
     */
    public async getTrackingNotificationChannelTypes(
        config?: AxiosRequestConfig,
    ) {
        const url = CONSTANT_PATH.GET_TRACKING_NOTIFICATION_CHANNEL_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Tracking Notification
     *
     * Gets all the tracking notification reaction statuses.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-notification#get-api-v1-constants-tracking-notification-reaction-status}
     */
    public async getTrackingNotificationReactionStatuses(
        config?: AxiosRequestConfig,
    ) {
        const url = CONSTANT_PATH.GET_TRACKING_NOTIFICATION_REACTION_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Feature
     *
     * Gets all the feature types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/feature}
     */
    public async getFeatureTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_FEATURE_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # User
     *
     * Gets all the user statuses.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/user#get-api-v1-constants-user-status}
     */
    public async getUserStatuses(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_USER_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # User
     *
     * Gets all the user types.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/user#get-api-v1-constants-user-types}
     */
    public async getUserTypes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_USER_TYPES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Wallet
     *
     * Gets all the wallet statuses.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/wallet}
     */
    public async getWalletStatuses(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_WALLET_STATUSES;
        const response = await this.axios.get<HttpResponse<string[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Error
     *
     * Gets all the error codes in the system.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/constants/error}
     */
    public async getErrorCodes(config?: AxiosRequestConfig) {
        const url = CONSTANT_PATH.GET_ERRORS;
        const response = await this.axios.get<
            HttpResponse<Record<string, Record<string, number>>>
        >(url, config);

        return response.data;
    }
}
