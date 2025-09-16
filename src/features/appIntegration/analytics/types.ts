import { IBaseObject, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationAnalyticsStatus } from './constants';

export interface IAppIntegrationAnalytics extends IBaseObject {
    /**
     * The app integration dto.
     */
    appIntegration: IAppIntegration;

    /**
     * This ID is used to track and associate events/data with a specific analytics property or project.
     *
     * @remarks min: 1
     */
    trackingId: string;

    /**
     * This is usually embedded in the frontend to initialize and send data to the analytics platform.
     *
     * @remarks min: 1
     */
    apiKey: string;

    /**
     * Gets or sets the API secret or verification URL used to authorize or validate requests from the Jframework.
     */
    apiSecret?: string | null;

    /**
     * This can include environment-specific data, custom flags, or platform-specific information.
     */
    metadata?: string | null;

    /**
     * Gets or sets any additional notes or identifiers related to the account or setup that manages this Analytics configuration.
     */
    accountConfigNotes?: string | null;

    /**
     * Flag to indicate if the analytics integration is the default.
     */
    isDefault?: boolean;

    status: AppIntegrationAnalyticsStatus;
}

//#region API types
/**
 * Provides a data transfer object for the Analytics integration which is used for command requests.
 */
export interface ICreateAppIntegrationAnalyticsParams {
    /**
     * The app integration provider ID of the analytics.
     *
     * @remarks min: 1
     */
    appIntegrationId: IdType;

    /**
     * This ID is used to track and associate events/data with a specific analytics property or project.
     *
     * @remarks min: 1
     */
    trackingId: string;

    /**
     * This is usually embedded in the frontend to initialize and send data to the analytics platform.
     *
     * @remarks min: 1
     */
    apiKey: string;

    /**
     * Gets or sets the API secret or verification URL used to authorize or validate requests from the Jframework.
     */
    apiSecret?: string | null;

    /**
     * This can include environment-specific data, custom flags, or platform-specific information.
     */
    metadata?: string | null;

    /**
     * Gets or sets any additional notes or identifiers related to the account or setup that manages this Analytics configuration.
     */
    accountConfigNotes?: string | null;

    /**
     * Flag to indicate if the analytics integration is the default.
     */
    isDefault?: boolean;

    status: AppIntegrationAnalyticsStatus;
}

/**
 * Provides a data transfer object for the Analytics integration which is used for command requests.
 */
export interface IUpdateAppIntegrationAnalyticsParams
    extends ICreateAppIntegrationAnalyticsParams {
    /**
     * The app integration analytics id.
     */
    id: IdType;
}

//#endregion
