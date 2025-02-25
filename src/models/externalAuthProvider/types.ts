import { DateType, IdType } from '../base';

export interface IExternalAuthProvider {
    id: IdType;
    iconUrl: string;
    authEndpoint: string;
    tokenEndpoint?: string;
    scope: string;
    redirectUri: string;
    clientId: string;
    code: string;
    name: string;
    description?: string;
    clientSecret: string;
    createdDate: DateType;
}

//#region API types
export interface IQueryExternalAuthProviderParams {
    brandId: IdType;
}
export interface ICreateExternalAuthProviderParams {
    brandId: IdType;
    iconUrl?: string;
    authEndpoint?: string;
    tokenEndpoint?: string;
    scope: string;
    redirectUri: string;
    clientId: string;
    code: string;
    name: string;
    description?: string;
    clientSecret: string;
    status: number;
}

export type IUpdateExternalAuthProviderParams = ICreateExternalAuthProviderParams;

//#endregion
