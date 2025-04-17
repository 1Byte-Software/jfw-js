import { IdType } from '../base';
import { AppIntegrationType } from './constants';

export interface IAppIntegration {
    type: string;
    name: string;
    domain: string;
    description: string;
    logoUrl: string;
    status: string;
    id: IdType;
    createdDate: string;
}

//#region API types
export interface IGetAppIntegrationsParams {
    type?: AppIntegrationType
}
//#endregion
