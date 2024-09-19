import { IdType } from "../types";

export interface IBrandProfile {
    description?: string;
    faviconUrl?: string;
    logoUrl?: string;
    name: string;
    slogan?: string;
    websiteUrl?: string;
    primaryColor?: string;
    tertiaryColor?: string;
    primaryColorHover?: string;
    secondaryColor?: string;
}
export interface IBrandSetting {
    cdnFolder: string;
    cdnUrl: string;
    domainWhiteListUrls?: string;
    googleAnalyticsAccount?: string;
    menuCode?: string;
    productAlias: string;
    productName?: string;
    productPrefixName: string;
    productWebsiteUrl?: string;
    websiteAdminTool2Url?: string;
    websiteAdminTool3Url?: string;
    websiteAdminToolUrl?: string;
    websiteCPanelUrl?: string;
    websiteProtocolUrl?: string;
    reCaptchaKey: string;
}

export interface IGetBrandInfoPath {
    brandUrl: string;
}
export interface IBrandInfo {
    alias: string;
    code: string;
    description: string;
    id: IdType;
    name: string;
    parentId?: string;
    profile: IBrandProfile;
    setting: IBrandSetting;
}
export interface IBrandLink {
    items: IBrandLink[];
    link: string;
    name: string;
}
export interface IBrandEmail {
    chargebackNotificationEmail?: string;
    developerTeamEmail?: string;
    id: IdType;
    loginNotificationEmail?: string;
    loginNotificationTitleEmail?: string;
    maintenanceTeamEmail?: string;
    orderNotificationEmail?: string;
    purchaseNotificationEmail?: string;
    refundNotificationEmail?: string;
    supportEmail?: string;
    supportTitleEmail?: string;
    systemEmail?: string;
    systemTitleEmail?: string;
}
export interface IGetListBrandLinksPath {
    id: string;
    type: string;
}
