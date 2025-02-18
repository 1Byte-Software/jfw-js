import { IdType } from '../asdas';
import { IBaseObject } from '../base';
import { IPaymentProvider } from '../paymentProvider';

export interface IPaymentMethod extends IBaseObject {
    isDefault: boolean;
    publicKey: string;
    privateKey: string;
    returnLink: string;
    cancelLink: string;
    cancelLinkWithoutLogin: string;
    ipnListenerLink: string;
    paymentInfo: string;
    paymentProviderId: IdType;
    interalNote: string;
    paymentProvider?: IPaymentProvider;
}

//#region API types
export interface IQueryPaymentMethodParams {
    brandId?: IdType;
    interalNote?: string;
}

export interface ICreatePaymentMethodParams {
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

export type IUpdatePaymentMethodParams = ICreatePaymentMethodParams;

//#endregion
