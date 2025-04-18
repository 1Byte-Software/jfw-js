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
    type?: number | null;
    name?: string | null;
    host: string;
    port: number;
    username: string;
    password: string;
    useTls?: boolean | null;
    isDefault?: boolean | null;
    description?: string | null;
}

export type IUpdateIntegrationSMTPParams = ICreateIntegrationSMTPParams;

//#endregion
