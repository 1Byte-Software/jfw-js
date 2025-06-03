import { PasswordPolicyLevel } from './constants';

export interface IBrandSetting {
    /**
     * The domain white list URLs.
     */
    domainWhiteListURLs?: string | null;

    /**
     * The Google Analytics account.
     */
    googleAnalyticsAccount?: string | null;

    /**
     * The reCaptcha key.
     */
    reCaptchaKey?: string | null;

    /**
     * The currency code of the brand.
     */
    currencyCode?: string | null;

    /**
     * The CDN URL.
     */
    cdnURL?: string | null;

    /**
     * The CDN folder.
     */
    cdnFolder?: string | null;

    /**
     * The password policy level.
     *
     * @remarks enum
     */
    passwordPolicyLevel: PasswordPolicyLevel;
}
//#region API types
export interface IUpdateBrandSettingParams {
    /**
     * The domain white list URLs.
     */
    domainWhiteListURLs?: string | null;

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
     * The cdn URL.
     */
    cdnURL?: string | null;

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
