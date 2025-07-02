import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { LicenseStatus, LicenseType } from './constants';

export interface ILicense {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType;

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
     * The description of the license.
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

export interface IGetLicensesParams extends IPageable, ISortable {
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
 * Contains the data for the license code create form.
 */
export interface ICreateLicensesParams {
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
     * The license code custom. 
     * If the license code has value, we create with the license otherwise auto generate license code.
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
    quantity?: number;

    /**
     * The user code of the license. If the userCode is empty, we get the current user logged in.
     *
     * @remarks min: 1
     */
    userCode?: string | null;
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

export interface IStatisticsPercentageLicensesUsedParams {
    /**
     * The start date.
     *
     * @remarks date-time
     */
    startDate?: DateType;

    /**
     * The end date.
     *
     * @remarks date-time
     */
    endDate?: DateType;

    /**
     * The test mode.
     *
     * @defaultValue `false`
     */
    testMode?: boolean;
}

//#endregion
