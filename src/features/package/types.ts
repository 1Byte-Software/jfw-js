import { ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { FeatureType, IFeature } from '../feature';
import { IPrice } from '../price';
import { ResetPolicy } from './constants';

export interface IPackage extends IBaseObject {
    /**
     * The code of the package.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the package.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The image URL of the package.
     *
     * @remarks uri
     */
    imageURL?: string | null;

    /**
     * The pattern avatar URL of the package. This value is used to display the pattern avatar for the user having the package.
     *
     * @remarks uri
     */
    patternAvatarURL?: string | null;

    /**
     * The styles of the package. This value is a JSON string.
     */
    styles?: string | null;

    /**
     * The description of the package.
     */
    description?: string | null;

    /**
     * The tags of the package.
     */
    tags?: string | null;

    /**
     * Flag to indicate if the package is free.
     */
    isFree: boolean;

    /**
     * The order of the package.
     *
     * @remarks int64
     */
    zOrder?: number | null;

    /**
     * The features of the package.
     */
    features: IFeatureOfPackage[];

    /**
     * The prices of the package.
     */
    prices: IPrice[];

    /**
     * Flag to indicate if the package is default.
     */
    isDefault: boolean;

    /**
     * Will update doc in future.
     */
    tier: number;
}

export interface IFeatureOfPackageBase {
    type: FeatureType;

    /**
     * The title of the package feature.
     * This title is used to display the feature in the UI.
     *
     * @remarks min: 1
     */
    title?: string | null;

    /**
     * The value of the package feature.
     * If the feature is unlimited, the value is null.
     *
     * @remarks int32
     */
    value?: number | null;

    /**
     * Flag to indicate if the feature is unlimited.
     * If true, the feature is unlimited.
     * If false, the feature is limited to the quantity.
     */
    isUnlimited?: boolean;

    resetPolicy?: ResetPolicy | null;

    /**
     * @remarks int32
     */
    customIntervalDays?: number | null;
}

export interface ICheckoutTax {
    /**
     * The percentage of the tax applied to the total amount.
     *
     * @remarks double
     */
    percent?: number;

    /**
     * The amount of tax calculated based on the total amount and the tax percentage.
     *
     * @remarks double
     */
    amount?: number;
}

export interface ICalculateTotalPriceCheckoutResponse {
    /**
     * The amount of the wallet used for the payment. This is the amount that will be deducted from the user's wallet balance.
     *
     * @remarks double
     */
    walletUsed?: number;

    /**
     * The amount of the wallet that will be refunded. This is the amount that will be refunded to the user's wallet balance after the payment is processed.
     *
     * @remarks double
     */
    refundAmountWallet?: number;

    /**
     * The prorated amount for the package. This is the amount that will be charged or refunded based on the remaining time in the current billing cycle.
     *
     * @remarks double
     */
    prorateAmount?: number;

    /**
     * The subtotal amount for the package. This is the total amount before tax and any discounts or wallet deductions.
     *
     * @remarks double
     */
    subtotal?: number;

    /**
     * Represents the tax response data transfer object.
     */
    tax?: ICheckoutTax;

    /**
     * The total amount for the package after applying any discounts, wallet deductions, and taxes. This is the final amount that the user needs to pay. It includes the subtotal, tax, and any prorated charges or refunds. The currency is typically in USD, but can be adjusted based on the user's locale or preferences.
     *
     * @remarks double
     */
    total?: number;

    /**
     * The currency in which the total amount is denominated.
     */
    currency?: string | null;
}

/**
 * This class provides the Feature of Package Dto.
 */
export interface IFeatureOfPackage extends IFeature, IFeatureOfPackageBase {}

//#region API types

// #NOTE: Will update tsdoc in feature.
export interface IGetPackagesParams extends ISortable<'zOrder'> {
    /**
     * Filter by the name.
     */
    name?: string;

    /**
     * Filter by the code.
     */
    code?: string;

    /**
     * Filter by the description
     */
    description?: string;

    /**
     * Filter by the tags.
     */
    tags?: string;

    /**
     * Filter by the default package
     */
    isDefault?: boolean;

    /**
     * Filter by the keywords.
     */
    keywords?: string;
}

/**
 * This class is used to present the package command request data transfer object.
 */
export interface ICreatePackageParams {
    /**
     * The code of the package.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the package.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The image URL of the package.
     *
     * @remarks uri
     */
    imageURL?: string | null;

    /**
     * The pattern avatar URL of the package.
     *
     * @remarks uri
     */
    patternAvatarURL?: string | null;

    /**
     * The styles of the package. This value is a JSON string.
     */
    styles?: string | null;

    /**
     * The description of the package.
     */
    description?: string | null;

    /**
     * The tags of the package.
     */
    tags?: string | null;

    /**
     * The order of the package.
     *
     * @remarks int64
     * @defaultValue 1
     */
    zOrder?: number;

    /**
     * Flag to indicate if the package is default.
     *
     * @defaultValue false
     */
    isDefault?: boolean;
}
/**
 * This class is used to present the package command request data transfer object.
 */
export type IUpdatePackageParams = ICreatePackageParams;

export interface IUpdatePackageFeatureDataPathParams {
    packageId: IdType;
    featureId: IdType;
}

/**
 * The package feature request to add feature into package.
 */
export interface IAddFeatureToPackageParams extends IFeatureOfPackageBase {
    /**
     * The feature id.
     *
     * @remarks min: 1
     */
    featureId: IdType;
}

export interface IUpdatePackageFeatureDataParams
    extends IFeatureOfPackageBase {}

/**
 * Represents a request to calculate the total price of a package.
 */
export interface ICalculateTotalPriceCheckoutParams {
    /**
     * The ID of the package for which the total price is being calculated.
     */
    packageId: IdType;

    /**
     * The ID of the package to calculate the total price for.
     *
     * @remarks min: 1
     */
    priceId: IdType;

    /**
     * The ID of the app integration payment gateway to use for the calculation.
     */
    walletId?: IdType | null;

    /**
     * The coupon code to apply for the price calculation, if any.
     */
    couponCode?: string | null;
}

/**
 * Represents a request to upgrade a package.
 * This class extends the CalculateTotalPricePackageRequestDto to include additional properties specific to package upgrades
 */
export interface IRenewalOrUpgradeUserPackageParams {
    /**
     * The id of the package.
     */
    packageId: IdType;

    /**
     * The ID of the package to calculate the total price for.
     *
     * @remarks min: 1
     */
    priceId: IdType;

    /**
     * The ID of the app integration payment gateway to use for the calculation.
     */
    walletId?: string | null;

    /**
     * #DOC: Will update doc in feature.
     *
     *  The ID of the wallet to refund if the proration amount exceeds the upgrade price.
     *  The refund will be processed to this wallet during the package upgrade.
     */
    refundWalletId?: string | null;

    /**
     * The coupon code to apply for the price calculation, if any.
     */
    couponCode?: string | null;

    /**
     * The id of the app integration associated with the package upgrade. This property is optional and can be null if not applicable.
     */
    appIntegrationId?: string | null;
}

/**
 * Represents a response for a package upgrade response.
 */
export interface IRenewalOrUpgradeUserPackageResponse {
    /**
     * The amount to be Withdrawal from the wallet after the package upgrade.
     *
     * @remarks double
     */
    walletWithdrawalAmount?: number;

    /**
     * The amount to be refunded to the wallet after the package upgrade.
     *
     * @remarks double
     */
    walletRefundAmount?: number | null;

    /**
     * #DOC: Will update doc in feature.
     */
    walletRefundCurrency?: string | null;

    /**
     * The checkout link for the package upgrade.
     */
    checkoutLink?: string | null;
}

//#endregion
