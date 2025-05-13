import { IPageable } from '../../core';
import { IBaseObject } from '../base';
import { IdType } from '../base';
import { BrandStatus } from './constants';
import { IBrandDomain } from './domain';
import { IBrandProfile } from './profile';
import { IBrandSetting } from './setting';

export interface IBrand extends IBaseObject {
    parentId?: IdType;

    /**
     * @deprecated use getBrandDomainsAPI instead
     */
    domains: IBrandDomain[];
    profile: IBrandProfile;
    setting: IBrandSetting;

    code: string;
    abbr: string;
    isSystem: boolean;

    name: string;
    description: string;
    alias: string;
    tags: string | null;
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
    productAlias?: string;
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

export interface ICreateBrandData {
    name: string;
    abbr: string;
    description?: string | null;

    profile: {
        faviconUrl?: string | null;
        logoUrl?: string | null;
        slogan?: string | null;
    };

    setting: {
        domain: string;
    };

    // setting: Pick<IBrandSetting, 'domain'>;
}
export interface IUpdateBrandData {
    /**
     * The name of the Brand.
     * @remarks string · min: 1
     */
    name: string;

    /**
     * This is the abbreviation of the Brand.
     * @remarks string · min: 1
     */
    abbr: string;

    /**
     * The description of the Brand.
     */
    description?: string | null;

    /**
     * The tags of the Brand.
     */
    tags?: string | null;
}

//#endregion
