import { DateType, IdType } from '../asdas';

export interface IPaymentProvider {
    id: IdType;
    merchantType: IdType;

    code: string;

    name: string;
    description: string;
    website: string;

    zOrder: number | null;
    status: string;
    isDefault: boolean | null;
    isSystem: boolean;
    createdDate: DateType;
}

//#region API types
export interface IQueryPaymentProviderParams {
    id?: IdType;
    name?: string;
}

export interface ICreatePaymentProviderParams {
    brandId: IdType;

    interalNote?: string;
    returnLink: string;
    cancelLink: string;
    cancelLinkWithoutLogin: string;
    ipnListenerLink: string;
    paymentInfo: string;
    publicKey: string;
    privateKey: string;
    paymentProviderId: IdType;
    status: number;
}

export type IUpdatePaymentProviderParams = ICreatePaymentProviderParams;

//#endregion
