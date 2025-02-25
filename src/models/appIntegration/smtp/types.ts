import { DateType, IdType } from '../../base';

export interface IIntegrationSMTP {
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
export interface IQueryIntegrationSMTPParams {}

export interface ICreateIntegrationSMTPParams {
    name: string;
    description?: string;
    smtpHost: string;
    smtpPort: number;
    smtpUsername: string;
    useTls?: boolean;
    isDefault?: boolean;
}

export type IUpdateIntegrationSMTPParams = ICreateIntegrationSMTPParams;

//#endregion
