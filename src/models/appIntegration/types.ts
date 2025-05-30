import { IdType } from '../base';
import { AppIntegrationStatus, AppIntegrationType } from './constants';

export interface IAppIntegration {
    type: string;
    name: string;
    domain: string;
    description: string;
    logoURL: string;
    status: AppIntegrationStatus;
    id: IdType;
    createdDate: string;
}

//#region API types
export interface IGetAppIntegrationsParams {
    /**
     * The type of the app integration to get.
     *
     * @remarks string - enum
     */
    type?: AppIntegrationType;

    /**
     * The keywords of the app integration to get.
     */
    keywords?: string;
}
//#endregion
