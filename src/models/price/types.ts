import { IBaseObject, IdType } from '../base';
import { ICurrency } from '../currency';
import { IPackage } from '../packages';

export interface IPrice extends IBaseObject {
    id: IdType;
    packageId: IdType;
    subscriptionTypeId: IdType;

    package?: IPackage;
    currencyData?: ICurrency;

    code: string;

    amount: number;
    description: string;
    checkoutLink: string;
    currency: string;
    name: string;
    tags: string | null;
    packageName: string;
    subscriptionName: string;
    zOrder: number;
    displayAmount?: string;
}

//#region API types
export interface IQueryPriceParams {
    packageId?: IdType;
    subscriptionTypeId?: IdType;

    brandCode?: string;
    code?: string;

    name?: string;
}

export interface IGenerateCheckoutLinkParams {
    providerMethod: string;
}

export interface ICreatePriceParams {
    brandId: IdType;
    paymentMethodId: IdType;
    packageId: IdType;
    subscriptionTypeId: IdType;
    code: string;
    name: string;
    description?: string;
    amount: number;
    currency: string;
    checkoutLink: string;
    status: number;
}

export type IUpdatePriceParams = ICreatePriceParams;
//#endregion
