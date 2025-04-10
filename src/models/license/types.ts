import { IBaseObject, DateType, IdType } from '../base';
import { IPackage } from '../packages';
import { IUser } from '../user';

export interface ILicense extends IBaseObject {
    usedByUserId: IdType;
    packageId: IdType;
    subscriptionTypeId: IdType;

    user?: IUser;
    package?: IPackage;

    code: string;

    amount: number;
    isReadyToUse: boolean;
    startDate: DateType;
    isUsed?: boolean;
    endDate: DateType;
    usedDate: DateType;
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

export interface IQueryLicensesParams {
    brandId?: IdType;
    packageId?: IdType;
    usedBy?: IdType;

    code?: string;
    brandCode?: string;

    startDate?: DateType;
    endDate?: DateType;
    isUsed?: boolean;
    testMode?: boolean;
}

export interface ICreateLicenseParams {
    brandCode: string;
    packageId: string;
    subscriptionTypeId: string;
    key?: string;
    startDate: DateType;
    endDate: DateType;
    description?: string;
    tags?: string;
    testMode: boolean;
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

export interface IPurchaseToAddLicensesByWalletParams extends IPurchaseLicenseParams {
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
