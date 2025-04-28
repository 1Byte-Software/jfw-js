import { IBaseObject } from '../../base';
import { PasswordPolicyLevel } from './constants';

export interface IBrandSetting extends IBaseObject {
    /**
     * The cdn folder.
     */
    cdnFolder: string;

    /**
     * The cdn url.
     */
    cdnUrl: string;

    /**
     * The coin earning code of the brand system.
     */
    coinCurrencyCode: string | null;

    /**
     * The domain white list urls.
     */
    domainWhiteListUrls: string | null;

    /**
     * The google analytics account.
     */
    googleAnalyticsAccount: string | null;

    /**
     * The reCaptcha key.
     */
    reCaptchaKey: string | null;

    /**
     * Available options: 1 - Low | 2 - Medium | 3 - High
     */
    passwordPolicyLevel: PasswordPolicyLevel;
}

//#region API types
export interface IUpdateBrandSettingData {
    /**
     * The domain white list urls.
     */
    domainWhiteListUrls?: string | null;

    /**
     * The google analytics account.
     */
    googleAnalyticsAccount?: string | null;

    /**
     * The reCaptcha key.
     */
    reCaptchaKey?: string | null;

    /**
     * The coin earning code of the brand system.
     */
    coinCurrencyCode?: string | null;

    /**
     * The cdn url.
     */
    cdnUrl?: string | null;

    /**
     * The cdn folder.
     */
    cdnFolder?: string | null;

    /**
     * Available options: 1 - Low | 2 - Medium | 3 - High
     */
    passwordPolicyLevel?: PasswordPolicyLevel;
}
//#endregion
