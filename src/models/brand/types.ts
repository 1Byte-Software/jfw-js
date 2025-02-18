import { IdType } from '../asdas';
import { IBaseObject, IPageable } from '../base';
import { IBrandProfile } from './profile';
import { IBrandSetting } from './setting';

export interface IBrandInfo extends IBaseObject {
    parentId?: IdType;

    profile: IBrandProfile;
    setting: IBrandSetting;

    code: string;

    name: string;
    description: string;
    alias: string;
}

//#region API types
export interface IGetBrandDetailPath {
    brandCode: string;
}

export interface IGetQueryBrandParams extends IPageable {
    parentBrandId?: IdType;

    /**
     * @deprecated use code instead
     */
    brandCode?: string;
    code?: string;

    name?: string;
    abbr?: string;
    description?: string;
    tags?: string;
    emailSupport?: string;
    emailSupportTitle?: string;
    systemEmail?: string;
    systemEmailTitle?: string;
    loginNotificationEmails?: string;
    purchaseNotificationEmails?: string;
    orderNotificationEmails?: string;
    refundNotificationEmails?: string;
    chargebackNotificationEmails?: string;
    developerTeamEmails?: string;
    maintenanceTeamEmails?: string;
    systemAdminNotificationEmails?: string;
    systemAdminEmails?: string;
    bccNotificationEmails?: string;
    productWebsite?: string;
    productName?: string;
    productAlias?: string;
    productPrefixName?: string;
    websiteCPanel?: string;
    websiteAdminTool?: string;
    websiteAdminTool2?: string;
    websiteAdminTool3?: string;
    websiteProtocol?: string;
    domainWhiteList?: string;
    googleAnalyticsAccount?: string;
    cdnUrl?: string;
    cdnFolder?: string;
    companyName?: string;
    website?: string;
    logoUrl?: string;
    faviconUrl?: string;
    titlePage?: string;
}

export interface IUpdateBrandParams extends IBrandInfo {}

//#endregion
