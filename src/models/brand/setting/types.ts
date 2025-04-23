import { IBaseObject } from '../../base';

export interface IBrandSetting extends IBaseObject {
    cdnFolder: string;
    cdnUrl: string;
    coinCurrencyCode: string | null;
    domainWhiteListUrls: string | null;
    googleAnalyticsAccount?: string | null;
    reCaptchaKey: string | null;
}

//#region API types
//#endregion
