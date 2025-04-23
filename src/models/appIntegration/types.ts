import { IdType } from '../base';
import { AppIntegrationStatus, AppIntegrationType } from './constants';

export interface IAppIntegration {
    type: string;
    name: string;
    domain: string;
    description: string;
    logoUrl: string;
    status: AppIntegrationStatus;
    id: IdType;
    createdDate: string;
}

//#region API types
export interface IGetAppIntegrationsParams {
    keywords?: string;
    type?: AppIntegrationType;
}
//#endregion
