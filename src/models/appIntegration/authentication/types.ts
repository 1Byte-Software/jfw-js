import { DateType, IdType } from '../../base';

export interface IIntegrationAuthentication {
    id: IdType;
    name: string;
    description?: string;
    smtpHost: string;
    smtpPort: number;
    smtpUsername: string;
    useTls: boolean;
    isDefault: boolean;
    createdDate: DateType;
}

//#region API types
export interface IQueryIntegrationAuthenticationParams {}

export interface ICreateIntegrationAuthenticationParams {
    name: string;
    description?: string;
    smtpHost: string;
    smtpPort: number;
    smtpUsername: string;
    useTls?: boolean;
    isDefault?: boolean;
}

export type IUpdateIntegrationAuthenticationParams =
    ICreateIntegrationAuthenticationParams;

//#endregion
