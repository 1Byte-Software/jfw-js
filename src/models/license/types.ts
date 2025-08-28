import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';
import { LicenseStatus, LicenseType } from './constants';

export interface ILicense extends IBaseObject {
    /**
     * The id of the package.
     *
     * @remarks min: 1
     */
    packageId: IdType;

    /**
     * The id of the subscription type.
     *
     * @remarks min: 1
     */
    subscriptionTypeId: IdType;

    /**
     * The code of the license.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The type of the license.
     *
     * @remarks enum
     */
    type: LicenseType;

    /**
     * The amount value of a license to be created.
     *
     * @remarks double
     */
    amount: number;

    /**
     * The currency code in the ISO 4217 format, which is a three-letter uppercase code that identifies a specific currency.
     * This value should strictly follow the ISO 4217 standard.
     */
    currencyCode: string;

    /**
     * The description of the license.
     *
     * @remarks min:1
     */
    description?: string | null;

    /**
     * The start date of the license.
     *
     * @remarks date-time
     */
    startDate?: DateType;

    /**
     * The end date of the license.
     *
     * @remarks date-time
     */
    endDate?: DateType;

    /**
     * The tags of the license.
     */
    tags?: string | null;

    /**
     * The status of the license.
     *
     * @remarks enum
     */
    status: LicenseStatus;

    /**
     * The user id who used the license.
     */
    usedByUserId?: IdType | null;

    /**
     * The date when the license was used.
     *
     * @remarks date-time
     */
    usedDate?: DateType;

    /**
     * Flag to indicate if the license is in test mode.
     */
    testMode: boolean;

    /**
     * The modified date of the license.
     *
     * @remarks date-time
     */
    modifiedDate?: DateType;
}

export interface ILicenseStatistic {
    availablePercentage: number;
    unavailablePercentage: number;
    availableQuantity: number;
    unavailableQuantity: number;
}

/**
 * Represents detailed license statistics for a specific package and subscription type.
 */
export interface LicenseStatisticsItem {
    /**
     * The ID of the license package.
     */
    packageId: IdType | null;

    /**
     * The ID of the subscription type (e.g., 30 days, 90 days).
     */
    subscriptionTypeId: IdType | null;

    /**
     * Total number of licenses issued under this package and subscription type.
     *
     * @remarks int64
     */
    totalLicenses: number;

    /**
     * Total amount charged for these licenses.
     *
     * @remarks double
     */
    totalAmount: number;

    /**
     * The currency used for the total amount (e.g., USD, EUR).
     */
    currency: string | null;

    /**
     * Number of licenses that have been used.
     *
     * @remarks int32
     */
    usedLicenses: number;

    /**
     * Number of licenses that remain unused.
     *
     * @remarks int32
     */
    unusedLicenses: number;

    /**
     * The total normal (standard) amount before any discounts or refunds.
     *
     * @remarks double
     */
    totalNormalAmount: number;

    /**
     * Total amount refunded for licenses under this group.
     *
     * @remarks double
     */
    totalRefundAmount: number;

    /**
     * Total amount billed as postpaid .
     *
     * @remarks double
     */
    totalPostpaidAmount: number;

    /**
     * Total amount for licenses delivered via mail (if applicable).
     *
     * @remarks double
     */
    totalMailDeliveryAmount: number;

    /**
     * Number of licenses that are not yet started or activated.
     *
     * @remarks int32
     */
    notStartedLicenses: number;

    /**
     * Number of licenses that are currently inactive.
     *
     * @remarks int32
     */
    inactiveLicenses: number;

    /**
     * Number of licenses that are currently active.
     *
     * @remarks int32
     */
    activeLicenses: number;

    /**
     * Number of licenses that have expired.
     *
     * @remarks int32
     */
    expiredLicenses: number;
}

/**
 * Represents license statistics data for a specific day.
 */
export interface ILicenseStatisticsReport {
    /**
     * The date for which the statistics apply.
     */
    date: DateType;

    /**
     * The list of license statistic items for the given date.
     */
    items: LicenseStatisticsItem[] | null;
}

/**
 * Represents the summary report of license statistics.
 *
 * #NOTE: Will update tsdoc in future, after this api update in docs.
 */
export interface ILicenseStatisticsReportSummary {
    /**
     * Total number of licenses that are still remaining/available.
     *
     * @remarks int64
     */
    totalRemaining: number;

    /**
     * Total limit of licenses that the brand is allowed to create.
     *
     * @remarks int64
     */
    totalLimit: number;

    /**
     * Total number of licenses that have been created.
     *
     * @remarks int64
     */

    totalLicenses: number;

    /**
     * Collection of daily license statistics reports.
     */
    days: ILicenseStatisticsReport[];
}

//#region API types
export interface IApplyLicenseToGivenLoginNameParams {
    /**
     * The license code.
     */
    licenseCode: string;

    /**
     * The login name.
     */
    loginName: string;
}

export interface IApplyLicenseToGivenUserParams {
    /**
     * The license code.
     */
    licenseCode: string;

    /**
     * The user id.
     */
    userId: IdType;
}

export interface IGetLicensesParams
    extends IPageable,
        ISortable<
            'code' | 'type' | 'amount' | 'description' | 'tags' | 'status'
        > {
    /**
     * The package id filter.
     */
    packageId?: IdType;

    /**
     * The subscription type id filter.
     */
    subscriptionTypeId?: IdType;

    /**
     * The license code filter.
     */
    licenseCode?: string;

    /**
     * The source id filter.
     */
    sourceId?: string;

    /**
     * The reference license filter.
     */
    refLicense?: string;

    /**
     * The description filter.
     */
    description?: string;

    /**
     * This is used to filter the license by used status.
     */
    isUsed?: boolean;

    /**
     * The start date filter.
     *
     * @remarks date-time
     */
    startDate?: DateType;

    /**
     * The end date filter.
     *
     * @remarks date-time
     */
    endDate?: DateType;

    /**
     * The tags filter.
     */
    tags?: string;

    /**
     * The status filter.
     *
     * @remarks enum
     */
    status?: LicenseStatus;

    /**
     * The type filter.
     *
     * @remarks enum
     */
    type?: LicenseType;

    /**
     * The user who used the license. The value is code of the user.
     */
    usedBy?: string;

    /**
     * The used date filter.
     *
     * @remarks date-time
     */
    usedDate?: DateType;

    /**
     * The test mode filter. By default, the value is false.
     */
    testMode?: boolean;

    /**
     * The keyword to filter.
     */
    keywords?: string;

    /**
     * The user who created the license. The value is code of the user.
     */
    createdBy?: string;
}

/**
 * Contains the data for the license key create form.
 */
export interface ICreateLicensesParams {
    /**
     * The id of the package.
     *
     * @remarks min: 1
     */
    packageId: IdType;

    /**
     * The id of the subscription type.
     *
     * @remarks min: 1
     */
    subscriptionTypeId: IdType;

    /**
     * The license code custom.
     * If the license code has value, we create with the license otherwise auto generate license code.
     * Cannot be used when creating multiple licenses.
     */
    code?: string | null;

    /**
     * The amount value of a license to be created.
     *
     * @remarks double
     */
    amount: number;

    /**
     * The currency code in the ISO 4217 format, which is a three-letter uppercase code that identifies a specific currency.
     * This value should strictly follow the ISO 4217 standard.
     */
    currencyCode: string;

    /**
     * The start date of the license.
     *
     * @remarks date-time
     */
    startDate: DateType;

    /**
     * The end date of the license.
     *
     * @remarks date-time
     */
    endDate: DateType;

    /**
     * The description of the license.
     */
    description?: string | null;

    /**
     * The tags of the license.
     */
    tags?: string | null;

    /**
     * The test mode of the license. By default, it is set to false.
     *
     * @defaultValue `false`
     */
    testMode: boolean;

    /**
     * The quantity of the license to create. By default, it is 1.
     *
     * @remarks int32
     * @defaultValue `1`
     */
    quantity?: number;

    /**
     * The user code of the license. If the userCode is empty, we get the current user logged in.
     *
     * @remarks min: 1
     */
    userCode?: string | null;
}

export interface IUpdateLicenseParams
    extends Omit<ICreateLicensesParams, 'code' | 'quantity' | 'userCode'> {
    id: IdType;
}

export interface IGenerateLicenseCodeParams {
    /**
     * The packageId of the license.
     */
    packageId: IdType;

    /**
     * The subscriptionTypeId of the license.
     */
    subscriptionTypeId: IdType;

    /**
     * The startDate of the license.
     *
     * @remarks date-time
     */
    startDate?: DateType;
}

/**
 * This class is used to create a checkout link to add various licenses.
 */
export interface IPurchaseToAddLicensesByCheckoutLinkParams {
    /**
     * The return URL. If the payment is successful, the user will be redirected to this URL.
     *
     * @remarks uri
     */
    returnURL?: string | null;

    /**
     * The cancel URL. If the payment is canceled, the user will be redirected to this URL.
     *
     * @remarks uri
     */
    cancelURL?: string | null;

    /**
     * The package id of the license.
     *
     * @remarks min: 1
     */
    packageId: IdType;

    /**
     * The subscription type id of the license.
     *
     * @remarks min: 1
     */
    subscriptionTypeId: IdType;

    /**
     * The start date of the license.
     *
     * @remarks date-time
     * @example 2025-02-01
     */
    startDate: DateType;

    /**
     * The end date of the license.
     *
     * @remarks date-time
     * @example 2025-02-01
     */
    endDate: DateType;

    /**
     * The test mode of the license. By default, it is set to false.
     *
     * @defaultValue `false`
     * @example true
     */
    testMode?: boolean | null;

    /**
     * The quantity of the license to create. By default, it is 1.
     *
     * @remarks int32
     * @defaultValue `1`
     */
    quantity?: number;
}

export interface IPurchaseToAddLicensesByWalletParams {
    /**
     * The wallet id.
     */
    walletId: IdType;

    /**
     * The package Id of the license.
     *
     * @remarks min: 1
     */
    packageId: IdType;

    /**
     * The SubscriptionType Id of the license.
     *
     * @remarks min: 1
     */
    subscriptionTypeId: IdType;

    /**
     * The type of the license.
     *
     * @remarks enum
     */
    type: LicenseType;

    /**
     * The license code custom. If the license code has value, we create with the license otherwise auto generate license code.
     * Cannot be used when creating multiple licenses.
     */
    code?: string | null;

    /**
     * The start date of the license.
     *
     * @remarks date-time
     */
    startDate: DateType;

    /**
     * The end date of the license.
     *
     * @remarks date-time
     */
    endDate: DateType;

    /**
     * The description of the license.
     */
    description?: string | null;

    /**
     * The tags of the license.
     */
    tags?: string | null;

    /**
     * The test mode of the license. By default, it is set to false.
     *
     * @defaultValue `false`
     */
    testMode: boolean;

    /**
     * The quantity of the license to create. By default, it is 1.
     *
     * @remarks int32
     * @defaultValue `1`
     */
    quantity: number;

    /**
     * The user code of the license. If the userCode is empty, we get the current user logged in.
     *
     * @remarks min: 1
     */
    userCode: string;
}

// #NOTE: Will update tsdoc in future.
export interface IStatisticLicensesMonthlyParams {
    /**
     * The id of the package.
     */
    packageId?: IdType;

    /**
     * The id of the subscription type.
     */
    subscriptionTypeId?: IdType;

    /**
     * The type of the license.
     */
    type?: LicenseType;

    /**
     * The status of the license.
     */
    status?: LicenseStatus;
}

//#endregion
