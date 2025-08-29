import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';

/**
 * This class presents the Price Data Transfer Object.
 */
export interface IPrice extends IBaseObject {
    /**
     * The code of the price.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the price.
     */
    name: string;

    /**
     * The amount of the price.
     *
     * @remarks double
     */
    amount: number;

    /**
     * The currency code of the price.
     *
     * @remarks min: 1
     */
    currency: string;

    /**
     * The description of the price.
     */
    description?: string | null;

    /**
     * The checkout link of the price.
     */
    checkoutLink?: string | null;

    /**
     * The tags of the price.
     */
    tags?: string | null;

    /**
     * The package name.
     *
     * @remarks min: 1
     */
    packageName: string;

    /**
     * The package id.
     *
     * @remarks min: 1
     */
    packageId: IdType;

    /**
     * The subscription name.
     *
     * @remarks min: 1
     */
    subscriptionName: string;

    /**
     * The subscription type id.
     *
     * @remarks min: 1
     */
    subscriptionTypeId: IdType;

    /**
     * The z-order number of the price.
     *
     * @remarks int64
     */
    zOrder: number;
}

//#region API types
export interface IGetPricesParams extends IPageable, ISortable {
    /**
     * The id of the payment method.
     */
    paymentMethodId?: IdType;

    /**
     * The id of the package.
     */
    packageId?: IdType;

    /**
     * The id of the subscription type.
     */
    subscriptionTypeId?: IdType;

    /**
     * The code of the price.
     */
    code?: string;

    /**
     * The name of the price.
     */
    name?: string;

    /**
     * The description of the price.
     */
    description?: string;

    /**
     * The amount of the price.
     */
    amount?: number;

    /**
     * The currency of the price.
     */
    currency?: string;

    /**
     * The checkout link.
     */
    checkoutLink?: string;

    /**
     * The tags of the price.
     */
    tags?: string;

    /**
     * The z-order of the price.
     *
     * @remarks int64
     */
    zOrder?: number;
}

/**
 * This class presents the Price Command Request Data from the client.
 */
export interface ICreatePriceParams {
    /**
     * The package id.
     *
     * @remarks min: 1
     */
    packageId: string;

    /**
     * The subscription type id.
     *
     * @remarks min: 1
     */
    subscriptionTypeId: string;

    /**
     * The code of the price.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the price.
     */
    name: string;

    /**
     * The amount of the price.
     *
     * @remarks double
     */
    amount: number;

    /**
     * The currency code of the price.
     *
     * @remarks min: 1. Must be a valid ISO 4217 currency code.
     */
    currency: string;

    /**
     * The checkout link of the price.
     *
     * @remarks URI
     * When the user clicks on this link, they will be redirected to the checkout page.
     */
    checkoutLink?: string | null;

    /**
     * The description of the price.
     */
    description?: string | null;

    /**
     * The tags of the price.
     */
    tags?: string | null;

    /**
     * The order of the price.
     * This value is used to sort into the list of prices. By default, the value is 1.
     * If you want to change the order of the price, you can set this value to a higher number.
     *
     * @remarks int32
     * @defaultValue `1`
     */
    zOrder?: number | null;
}

/**
 * This class presents the Price Command Request Data from the client.
 */
export type IUpdatePriceParams = ICreatePriceParams;

export interface IGenerateCheckoutLinkParams {
    /**
     * The id of the price
     */
    priceId: IdType;

    /**
     * The id of the app integration
     */
    appIntegrationId: IdType;
}
//#endregion
