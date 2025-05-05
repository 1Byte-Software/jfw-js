import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';
import { LicenseStatus, LicenseType } from './constants';

export interface ILicense extends IBaseObject {
    packageId: IdType;
    subscriptionTypeId: IdType;
    code: string;
    type: LicenseType;
    description: string;
    startDate: DateType;
    endDate: DateType;
    tags: string;
    status: LicenseStatus;
    usedByUserId: IdType;
    usedDate: DateType;
    testMode: boolean;
    modifiedDate: DateType;
}

export interface IPriceInfoDetails {
    subTotal: string;
    discount: string;
    total: string;
    numberTotal: number;
    one: string;
}

export interface IPriceInfo {
    [key: string]: IPriceInfoDetails;
}

/**
 * @deprecated It seems this interface is redundant.
 */
export interface ILicenseStorage extends IPurchaseLicenseParams {
    walletCode: string | null;
    priceInfo: IPriceInfo[];
    priceSelected?: IPriceInfo;
    packageName: string;
    subscriptionTypeName: string;
}

export interface ILicenseStatistic {
    availablePercentage: number;
    unavailablePercentage: number;
    availableQuantity: number;
    unavailableQuantity: number;
}
//#region API types
export interface IApplyLicenseToLoginNameParams {
    licenseKey: string;
    loginName: string;
}

export interface IApplyLicenseToGivenUserParams {
    licenseKey: string;
    userId: IdType;
}

export interface IGetLicensesParams extends IPageable, ISortable {
    keywords?: string;
    brandId?: IdType;
    packageId?: IdType;
    usedBy?: IdType;

    code?: string;
    brandCode?: string;

    startDate?: DateType;
    endDate?: DateType;
    isUsed?: boolean;
    testMode?: boolean;
    status?: LicenseStatus;
}

export interface ICreateLicenseData {
    packageId?: IdType | null;
    subscriptionTypeId?: IdType | null;
    type?: LicenseType;
    key?: string | null;
    startDate?: DateType;
    endDate?: DateType;
    description?: string | null;
    tags?: string | null;
    testMode?: boolean | null;
    quantity?: number;
    isOneQuantity?: boolean;
    userCode?: string | null;
}

export interface IMutateLicenseParams {
    licenseKey: string;
}
export interface IApplyLicenseForUserParams {
    brandUrl: string;
    licenseKey: string;
    userCode: string;
}
export interface IGenerateLicenseKeyParams {
    packageId: IdType;
    subscriptionTypeId: IdType;
    startDate?: DateType;
}
export interface IPurchaseLicenseParams {
    packageId: string;
    subscriptionTypeId: string;
    startDate: DateType;
    endDate: DateType;
    description: string;
    tags: string;
    testMode: boolean;
    quantity: number;
}

export interface IPurchaseToAddLicensesByCheckoutLinkParams
    extends IPurchaseLicenseParams {
    returnUrl: string;
    cancelUrl: string;
}

export interface IPurchaseToAddLicensesByWalletParams
    extends IPurchaseLicenseParams {
    walletId: IdType;
    brandCode: string;
    userCode: string;
}

export interface IStatisticsPercentageLicensesUsedParams {
    userId: string;
    startDate?: DateType;
    endDate?: DateType;
    testMode?: boolean;
}

//#endregion
