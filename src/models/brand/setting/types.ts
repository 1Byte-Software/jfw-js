import { IBaseObject } from '../../base';

export interface IBrandSetting extends IBaseObject {
    cdnFolder: string;
    cdnUrl: string;
    coinCurrencyCode?: string | null;
    domainWhiteListUrls?: string | null;
    googleAnalyticsAccount?: string | null;
    menuCode?: string | null;
    productAlias?: string | null;
    productName?: string | null;
    productPrefixName?: string | null;
    productWebsiteUrl?: string | null;
    websiteAdminTool2Url?: string | null;
    websiteAdminTool3Url?: string | null;
    websiteAdminToolUrl?: string | null;
    websiteCPanelUrl?: string | null;
    websiteProtocolUrl?: string | null;
    reCaptchaKey?: string | null;
}

//#region API types
//#endregion
