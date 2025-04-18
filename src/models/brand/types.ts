import { IPageable } from '../../core';
import { IBaseObject } from '../base';
import { IdType } from '../base';
import { BrandStatus } from './constants';
import { IBrandDomain } from './domain';
import { IBrandProfile } from './profile';
import { IBrandSetting } from './setting';

export interface IBrand extends IBaseObject {
    parentId?: IdType;

    domains: IBrandDomain[];
    profile: IBrandProfile;
    setting: IBrandSetting;

    code: string;
    abbr: string;
    isSystem: boolean;

    name: string;
    description: string;
    alias: string;
}

//#region API types
export interface IGetBrandDetailPath {
    brandCode: string;
}

export interface IGetQueryBrandParams extends IPageable {
    keywords?: string;

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
    status?: BrandStatus;
}

export interface IGeneratedDomain {
    rootDomain: string;
    subDomain: string;
    fullDomain: string;
}

export interface ICreateBrandParams {
    name: string;
    abbr: string;
    description?: string | null;

    profile: Pick<IBrandProfile, 'faviconUrl' | 'logoUrl' | 'slogan'>;

    setting: {
        domain: string;
    };

    // setting: Pick<IBrandSetting, 'domain'>;
}
export interface IUpdateBrandParams extends IBrand {}

//#endregion
