import { AppIntegrationStatus, AppIntegrationType } from './constants';

/**
 * The app integration dto.
 */
export interface IAppIntegration {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: string;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: string | null;

    /**
     * The type of the app integration.
     *
     * @remarks enum
     */
    type: AppIntegrationType;

    /**
     * The name of the app integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The domain of the app integration.
     *
     * @remarks min: 1
     */
    domain: string;

    /**
     * The description of the app integration.
     */
    description?: string | null;

    /**
     * The URL of the logo in the app integration.
     *
     * @remarks uri
     */
    logoURL?: string | null;

    /**
     * The status of the app integration.
     *
     * @remarks enum
     */
    status: AppIntegrationStatus;
}

//#region API types
export interface IGetAppIntegrationsParams {
    /**
     * The type of the app integration to get.
     *
     * @remarks enum
     */
    type?: AppIntegrationType;

    /**
     * The status of the app integration to filter.
     *
     * @remarks enum
     */
    status?: AppIntegrationStatus;

    /**
     * The keywords of the app integration to get.
     */
    keywords?: string;
}
//#endregion
