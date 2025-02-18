import { DateType, IdType } from '../../asdas';

export interface IIntegrationPaymentGateway {
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
export interface IQueryIntegrationPaymentGatewayParams {}

export interface ICreateIntegrationPaymentGatewayParams {
    name: string;
    description?: string;
    smtpHost: string;
    smtpPort: number;
    smtpUsername: string;
    useTls?: boolean;
    isDefault?: boolean;
}

export type IUpdateIntegrationPaymentGatewayParams =
    ICreateIntegrationPaymentGatewayParams;

//#endregion
