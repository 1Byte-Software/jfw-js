import { IdType } from '../base';
import { ICurrency } from '../currency';

export interface IPrice {
    id: IdType;
    packageId: IdType;
    subscriptionTypeId: IdType;
    currencyData?: ICurrency;

    code: string;

    amount: number;
    description: string | null;
    checkoutLink: string;
    currency: string;
    name: string;
    tags: string | null;
    packageName: string;
    subscriptionName: string;
    zOrder: number;
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
