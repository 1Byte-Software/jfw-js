# JFramework (JFW) - @jframework/jfw-js

## About

JFramework (JFW) is a comprehensive backend API client library for JavaScript, part of the JFW ecosystem. It provides a set of APIs to interact with various resources such as brands, users, roles and more, enabling developers to build robust applications with features like authentication, payments, and content management. The `@jframework/jfw-js` package is designed for client-side and server-side JavaScript environments and integrates seamlessly with Axios for HTTP requests.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Setup Your Brand](#setup-your-brand)
    -   [Quick Start](#quick-start)
-   [API Reference](#api-reference)
    -   [Ad API](#ad-api)
        -   [activateAd(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#activateadid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [deactivateAd(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deactivateadid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [createAd(params: ICreateAdParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#createadparams-icreateadparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [deleteAd(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteadid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getAdsClientView(position: AdPosition, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAd[]>>](#getadsclientviewposition-adposition-config-axiosrequestconfig--promisehttpresponseiad)
        -   [getAds(params?: IGetAdsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IAd>>](#getadsparams-igetadsparams-config-axiosrequestconfig--promisehttpresponselistiad)
        -   [getAd(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAd>>](#getadid-idtype-config-axiosrequestconfig--promisehttpresponseiad)
        -   [updateAd(params: IUpdateAdParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#updateadparams-iupdateadparams-config-axiosrequestconfig--promisehttpresponseboolean)
    -   [App Integration API](#app-integration-api)
        -   [getAppIntegrations(params?: IGetAppIntegrationsParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegration[]>>](#getappintegrationsparams-igetappintegrationsparams-config-axiosrequestconfig--promisehttpresponseiappintegration)
        -   [AppIntegrationAnalyticsAPI](#appintegrationanalyticsapi)
            -   [createAppIntegrationAnalytics(params: ICreateAppIntegrationAnalyticsParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAnalytics>>](#createappintegrationanalyticsparams-icreateappintegrationanalyticsparams-config-axiosrequestconfig--promisehttpresponseiappintegrationanalytics)
            -   [deleteAppIntegrationAnalytics(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteappintegrationanalyticsid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [getAppIntegrationAnalytics(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAnalytics>>](#getappintegrationanalyticsid-idtype-config-axiosrequestconfig--promisehttpresponseiappintegrationanalytics)
            -   [getAppIntegrationAnalyticsWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAnalytics[]>>](#getappintegrationanalyticswithbrandconfig-axiosrequestconfig--promisehttpresponseiappintegrationanalytics)
            -   [updateAppIntegrationAnalytics(params: IUpdateAppIntegrationAnalyticsParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAnalytics>>](#updateappintegrationanalyticsparams-iupdateappintegrationanalyticsparams-config-axiosrequestconfig--promisehttpresponseiappintegrationanalytics)
        -   [AppIntegrationAuthenticationAPI](#appintegrationauthenticationapi)
            -   [createAppIntegrationAuthentication(params: ICreateAppIntegrationAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAuthentication>>](#createappintegrationauthenticationparams-icreateappintegrationauthenticationparams-config-axiosrequestconfig--promisehttpresponseiappintegrationauthentication)
            -   [createAppIntegrationAuthenticationWithImportFileSettings(params: ICreateAppIntegrationAuthenticationWithImportFileSettingsParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAuthentication>>](#createappintegrationauthenticationwithimportfilesettingsparams-icreateappintegrationauthenticationwithimportfilesettingsparams-config-axiosrequestconfig--promisehttpresponseiappintegrationauthentication)
            -   [deleteAppIntegrationAuthentication(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteappintegrationauthenticationid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [getAppIntegrationAuthentication(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAuthentication>>](#getappintegrationauthenticationid-idtype-config-axiosrequestconfig--promisehttpresponseiappintegrationauthentication)
            -   [getAppsIntegrationAuthenticationWithBrand(params?: IGetAppIntegrationAuthenticationsWithBrandParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAuthentication[]>>](#getappsintegrationauthenticationwithbrandparams-igetappintegrationauthenticationswithbrandparams-config-axiosrequestconfig--promisehttpresponseiappintegrationauthentication)
            -   [testBuildingAuthenticationURL(appIntegrationId: IdType, params: ITestBuildingAuthenticationURLParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<string>>](#testbuildingauthenticationurlappintegrationid-idtype-params-itestbuildingauthenticationurlparams-config-axiosrequestconfig--promisehttpresponsestring)
            -   [updateAppIntegrationAuthentication(id: IdType, params: IUpdateAppIntegrationAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAuthentication>>](#updateappintegrationauthenticationid-idtype-params-iupdateappintegrationauthenticationparams-config-axiosrequestconfig--promisehttpresponseiappintegrationauthentication)
        -   [AppIntegrationPaymentGatewayAPI](#appintegrationpaymentgatewayapi)
            -   [createAppIntegrationPaymentGateway(params: ICreateAppIntegrationPaymentGatewayParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationPaymentGateway>>](#createappintegrationpaymentgatewayparams-icreateappintegrationpaymentgatewayparams-config-axiosrequestconfig--promisehttpresponseiappintegrationpaymentgateway)
            -   [deleteAppIntegrationPaymentGateway(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteappintegrationpaymentgatewayid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [getAppIntegrationPaymentGateway(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationPaymentGateway>>](#getappintegrationpaymentgatewayid-idtype-config-axiosrequestconfig--promisehttpresponseiappintegrationpaymentgateway)
            -   [getAppsIntegrationPaymentGatewayWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationPaymentGateway[]>>](#getappsintegrationpaymentgatewaywithbrandconfig-axiosrequestconfig--promisehttpresponseiappintegrationpaymentgateway)
            -   [testCreatingCheckoutLink(appIntegrationId: IdType, params: ITestCreatingCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<string>>](#testcreatingcheckoutlinkappintegrationid-idtype-params-itestcreatingcheckoutlinkparams-config-axiosrequestconfig--promisehttpresponsestring)
            -   [updateAppIntegrationPaymentGateway(id: IdType, params: IUpdateAppIntegrationPaymentGatewayParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationPaymentGateway>>](#updateappintegrationpaymentgatewayid-idtype-params-iupdateappintegrationpaymentgatewayparams-config-axiosrequestconfig--promisehttpresponseiappintegrationpaymentgateway)
        -   [AppIntegrationPushNotificationAPI](#appintegrationpushnotificationapi)
            -   [createAppIntegrationPushNotification(params: ICreateAppIntegrationPushNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationPushNotification>>](#createappintegrationpushnotificationparams-icreateappintegrationpushnotificationparams-config-axiosrequestconfig--promisehttpresponseiappintegrationpushnotification)
            -   [createAppIntegrationPushNotificationWithImportFileSettings(params: ICreateAppIntegrationPushNotificationWithImportFileSettingsParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationPushNotification>>](#createappintegrationpushnotificationwithimportfilesettingsparams-icreateappintegrationpushnotificationwithimportfilesettingsparams-config-axiosrequestconfig--promisehttpresponseiappintegrationpushnotification)
            -   [deleteAppIntegrationPushNotification(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteappintegrationpushnotificationid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [getAppIntegrationPushNotification(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationPushNotification>>](#getappintegrationpushnotificationid-idtype-config-axiosrequestconfig--promisehttpresponseiappintegrationpushnotification)
            -   [getAppIntegrationPushNotificationsWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationPushNotification[]>>](#getappintegrationpushnotificationswithbrandconfig-axiosrequestconfig--promisehttpresponseiappintegrationpushnotification)
            -   [updateAppIntegrationPushNotification(id: IdType, params: IUpdateAppIntegrationPushNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationPushNotification>>](#updateappintegrationpushnotificationid-idtype-params-iupdateappintegrationpushnotificationparams-config-axiosrequestconfig--promisehttpresponseiappintegrationpushnotification)
        -   [AppIntegrationReCAPTCHAAPI](#appintegrationrecaptchaapi)
            -   [createAppIntegrationReCAPTCHA(params: ICreateAppIntegrationReCAPTCHAParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationReCAPTCHA>>](#createappintegrationrecaptchaparams-icreateappintegrationrecaptchaparams-config-axiosrequestconfig--promisehttpresponseiappintegrationrecaptcha)
            -   [deleteAppIntegrationReCAPTCHA(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteappintegrationrecaptchaid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [getAppIntegrationReCAPTCHA(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationReCAPTCHA>>](#getappintegrationrecaptchaid-idtype-config-axiosrequestconfig--promisehttpresponseiappintegrationrecaptcha)
            -   [getAppsIntegrationReCAPTCHAWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationReCAPTCHA[]>>](#getappsintegrationrecaptchawithbrandconfig-axiosrequestconfig--promisehttpresponseiappintegrationrecaptcha)
            -   [updateAppIntegrationReCAPTCHA(params: IUpdateAppIntegrationReCAPTCHAParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationReCAPTCHA>>](#updateappintegrationrecaptchaparams-iupdateappintegrationrecaptchaparams-config-axiosrequestconfig--promisehttpresponseiappintegrationrecaptcha)
        -   [AppIntegrationSMSAPI](#appintegrationsmsapi)
            -   [createAppIntegrationSMS(params: ICreateAppIntegrationSMSParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationSMS>>](#createappintegrationsmsparams-icreateappintegrationsmsparams-config-axiosrequestconfig--promisehttpresponseiappintegrationsms)
            -   [deleteAppIntegrationSMS(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteappintegrationsmsid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [getAppIntegrationSMS(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationSMS>>](#getappintegrationsmsid-idtype-config-axiosrequestconfig--promisehttpresponseiappintegrationsms)
            -   [getAppsIntegrationSMSWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationSMS[]>>](#getappsintegrationsmswithbrandconfig-axiosrequestconfig--promisehttpresponseiappintegrationsms)
            -   [testSendingSMSMessage(appIntegrationId: IdType, params: ITestSendingSMSMessageParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#testsendingmessageappintegrationid-idtype-params-itestsendingsmsmessageparams-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [updateAppIntegrationSMS(id: IdType, params: IUpdateAppIntegrationSMSParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationSMS>>](#updateappintegrationsmsid-idtype-params-iupdateappintegrationsmsparams-config-axiosrequestconfig--promisehttpresponseiappintegrationsms)
        -   [AppIntegrationSMTPAPI](#appintegrationsmtpapi)
            -   [createAppIntegrationSMTP(params: ICreateAppIntegrationSMTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationSMTP>>](#createappintegrationsmtpparams-icreateappintegrationsmtpparams-config-axiosrequestconfig--promisehttpresponseiappintegrationsmtp)
            -   [deleteAppIntegrationSMTP(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteappintegrationsmtpid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [getAppIntegrationSMTP(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationSMTP>>](#getappintegrationsmtpid-idtype-config-axiosrequestconfig--promisehttpresponseiappintegrationsmtp)
            -   [getAppsIntegrationSMTPWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationSMTP[]>>](#getappsintegrationsmtpwithbrandconfig-axiosrequestconfig--promisehttpresponseiappintegrationsmtp)
            -   [testSendingEmailAddress(params: ITestSendingEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#testsendingemailaddressparams-itestsendingemailaddressparams-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [updateAppIntegrationSMTP(id: IdType, params: IUpdateAppIntegrationSMTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationSMTP>>](#updateappintegrationsmtpid-idtype-params-iupdateappintegrationsmtpparams-config-axiosrequestconfig--promisehttpresponseiappintegrationsmtp)
    -   [Brand API](#brand-api)
        -   [BrandProfileAPI](#brandprofileapi)
            -   [updateBrandProfile(id: IdType, params: IUpdateBrandProfileParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#updatebrandprofileid-idtype-params-iupdatebrandprofileparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [BrandSettingAPI](#brandsettingapi)
            -   [updateBrandSetting(id: IdType, params: IUpdateBrandSettingParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#updatebrandsettingid-idtype-params-iupdatebrandsettingparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [EmailAddressAPI](#emailaddressapi)
            -   [createEmailAddress(params: ICreateEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEmailAddress>>](#createemailaddressparams-icreateemailaddressparams-config-axiosrequestconfig--promisehttpresponseiemailaddress)
            -   [deleteEmailAddress(params: IDeleteEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteemailaddressparams-ideleteemailaddressparams-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [getEmailAddress(params: IGetEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEmailAddress>>](#getemailaddressparams-igetemailaddressparams-config-axiosrequestconfig--promisehttpresponseiemailaddress)
            -   [getEmailAddresses(brandId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEmailAddress[]>>](#getemailaddressesbrandid-idtype-config-axiosrequestconfig--promisehttpresponseiemailaddress)
            -   [updateEmailAddress(emailAddressId: IdType, params: IUpdateEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEmailAddress>>](#updateemailaddressemailaddressid-idtype-params-iupdateemailaddressparams-config-axiosrequestconfig--promisehttpresponseiemailaddress)
        -   [BrandAPI](#brandapi)
            -   [checkDomainIfExists(domain: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#checkdomainifexistsdomain-string-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [createBrand(params: ICreateBrandParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IBrand>>](#createbrandparams-icreatebrandparams-config-axiosrequestconfig--promisehttpresponseibrand)
            -   [generateNewDomain(config?: AxiosRequestConfig) => Promise<HttpResponse\<IGeneratedDomain>>](#generatenewdomainconfig-axiosrequestconfig--promisehttpresponseigenerateddomain)
            -   [getBrand(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IBrand>>](#getbrandid-idtype-config-axiosrequestconfig--promisehttpresponseibrand)
            -   [getBrandByURL(config?: AxiosRequestConfig) => Promise<HttpResponse\<IBrand>>](#getbrandbyurlconfig-axiosrequestconfig--promisehttpresponseibrand)
            -   [getBrands(params?: IGetBrandsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IBrand>>](#getbrandsparams-igetbrandsparams-config-axiosrequestconfig--promisehttpresponselistibrand)
            -   [updateBrand(id: IdType, params: IUpdateBrandParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#updatebrandid-idtype-params-iupdatebrandparams-config-axiosrequestconfig--promisehttpresponseboolean)
    -   [CDN API](#cdn-api)
        -   [deleteFileCDN(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletefilecdnid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getFileCDN(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IFileCDN>>](#getfilecdnid-idtype-config-axiosrequestconfig--promisehttpresponseifilecdn)
        -   [getFilesCDN(params?: IGetFilesCDNParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IFileCDN>>](#getfilescdnparams-igetfilescdnparams-config-axiosrequestconfig--promisehttpresponselistifilecdn)
        -   [uploadFileCDN(params: IUploadFileParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUploadedFileCDN>>](#uploadfilecdnparams-iuploadfileparams-config-axiosrequestconfig--promisehttpresponseiuploadedfilecdn)
        -   [uploadFile(params: IUploadFileParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUploadedFileCDN>>](#uploadfileparams-iuploadfileparams-config-axiosrequestconfig--promisehttpresponseiuploadedfilecdn)
    -   [City API](#city-api)
        -   [getCities(params?: IGetCitiesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<ICity>>](#getcitiesparams-igetcitiesparams-config-axiosrequestconfig--promisehttpresponselisticity)
    -   [Commission Rate API](#commission-rate-api)
        -   [createCommissionRate(params?: ICreateCommissionRateParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ICommissionRate>>](#createcommissionrateparams-icreatecommissionrateparams-config-axiosrequestconfig--promisehttpresponseicommissionrate)
        -   [deleteCommissionRate(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletecommissionrateid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getCommissionRate(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<ICommissionRate>>](#getcommissionrateid-idtype-config-axiosrequestconfig--promisehttpresponseicommissionrate)
        -   [getDiscountValue(quantity: number, config?: AxiosRequestConfig) => Promise<HttpResponse\<number>>](#getdiscountvaluequantity-number-config-axiosrequestconfig--promisehttpresponsenumber)
        -   [getCommissionRates(params?: IGetCommissionRatesParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ICommissionRate[]>>](#getcommissionratesparams-igetcommissionratesparams-config-axiosrequestconfig--promisehttpresponseicommissionrate)
        -   [updateCommissionRate(id: IdType, params?: IUpdateCommissionRateParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#updatecommissionrateid-idtype-params-iupdatecommissionrateparams-config-axiosrequestconfig--promisehttpresponseboolean)
    -   [Configuration API](#configuration-api)
        -   [createConfiguration(params: ICreateConfigurationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IConfiguration>>](#createconfigurationparams-icreateconfigurationparams-config-axiosrequestconfig--promisehttpresponseiconfiguration)
        -   [deleteConfiguration(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteconfigurationid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getConfigurations(params?: IGetConfigurationsParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IConfiguration[]>>](#getconfigurationsparams-igetconfigurationsparams-config-axiosrequestconfig--promisehttpresponseiconfiguration)
        -   [getConfiguration(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IConfiguration>>](#getconfigurationid-idtype-config-axiosrequestconfig--promisehttpresponseiconfiguration)
        -   [updateConfiguration(id: IdType, params: IUpdateConfigurationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<unknown>>](#updateconfigurationid-idtype-params-iupdateconfigurationparams-config-axiosrequestconfig--promisehttpresponseunknown)
    -   [Constant API](#constant-api)
        -   [getBrandLinkTypes(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getbrandlinktypesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getBlackListTypes(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getblacklisttypesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getCouponStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getcouponstatusesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getCommissionRateTypes(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getcommissionratetypesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getDeviceStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getdevicestatusesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getDeviceTypes(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getdevicetypesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getInvoiceStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getinvoicestatusesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getInvoiceTypes(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getinvoicetypesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getIssuePriorities(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getissueprioritiesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getLicenseSources(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getlicensesourcesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getLicenseTypes(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getlicensetypesconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [getLicenseStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse\<string[]>>](#getlicensestatusesconfig-axiosrequestconfig--promisehttpresponsestring)
    -   [Country API](#country-api)
        -   [getCountries(config?: AxiosRequestConfig) => Promise<HttpResponse\<ICountry[]>>](#getcountriesconfig-axiosrequestconfig--promisehttpresponseicountry)
    -   [Coupon API](#coupon-api)
        -   [createCoupon(params: ICreateCouponParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ICoupon>>](#createcouponparams-icreatecouponparams-config-axiosrequestconfig--promisehttpresponseicoupon)
        -   [deleteCoupon(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletecouponid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getCoupon(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<ICoupon>>](#getcouponid-idtype-config-axiosrequestconfig--promisehttpresponseicoupon)
        -   [getCoupons(params?: IGetCouponsParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ICoupon[]>>](#getcouponsparams-igetcouponsparams-config-axiosrequestconfig--promisehttpresponseicoupon)
        -   [updateCoupon(id: IdType, params: IUpdateCouponParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ICoupon>>](#updatecouponid-idtype-params-iupdatecouponparams-config-axiosrequestconfig--promisehttpresponseicoupon)
    -   [Cryptography API](#cryptography-api)
        -   [decrypt(cipherText: string, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>](#decryptciphertext-string-config-axiosrequestconfig--promisehttpresponsestring)
        -   [encrypt(plainText: string, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>](#encryptplaintext-string-config-axiosrequestconfig--promisehttpresponsestring)
    -   [Currency API](#currency-api)
        -   [getCurrencies(config?: AxiosRequestConfig) => Promise<HttpResponse<ICurrency[]>>](#getcurrenciesconfig-axiosrequestconfig--promisehttpresponseicurrency)
    -   [State API](#state-api)
        -   [getStates(config?: AxiosRequestConfig) => Promise<HttpResponse\<IState[]>>](#getstatesconfig-axiosrequestconfig--promisehttpresponseistate)
    -   [Subscription Type API](#subscription-type-api)
        -   [createSubscriptionType(params: ICreateSubscriptionTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ISubscriptionType>>](#createsubscriptiontypeparams-icreatesubscriptiontypeparams-config-axiosrequestconfig--promisehttpresponseisubscriptiontype)
        -   [deleteSubscriptionType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletesubscriptiontypeid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getSubscriptionType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<ISubscriptionType>>](#getsubscriptiontypeid-idtype-config-axiosrequestconfig--promisehttpresponseisubscriptiontype)
        -   [getPricesFromSubscriptionType(subscriptionTypeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPrice[]>>](#getpricesfromsubscriptiontypesubscriptiontypeid-idtype-config-axiosrequestconfig--promisehttpresponseiprice)
        -   [getSubscriptionTypes(params?: IGetSubscriptionTypesParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ISubscriptionType[]>>](#getsubscriptiontypesparams-igetsubscriptiontypesparams-config-axiosrequestconfig--promisehttpresponseisubscriptiontype)
        -   [updateSubscriptionType(id: IdType, params: IUpdateSubscriptionTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ISubscriptionType>>](#updatesubscriptiontypeid-idtype-params-iupdatesubscriptiontypeparams-config-axiosrequestconfig--promisehttpresponseisubscriptiontype)
    -   [Timezone API](#timezone-api)
        -   [getTimezones(config?: AxiosRequestConfig) => Promise<HttpResponse\<ITimezone[]>>](#gettimezonesconfig-axiosrequestconfig--promisehttpresponseitimezone)
    -   [Tracking Activity API](#tracking-activity-api)
        -   [getTrackingActivities(params?: IGetTrackingActivitiesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<ITrackingActivity>>](#gettrackingactivitiesparams-igettrackingactivitiesparams-config-axiosrequestconfig--promisehttpresponselistitrackingactivity)
        -   [getTrackingActivity(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<ITrackingActivity>>](#gettrackingactivityid-idtype-config-axiosrequestconfig--promisehttpresponseitrackingactivity)
    -   [Tracking Email API](#tracking-email-api)
        -   [getTrackingEmail(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<ITrackingEmail>>](#gettrackingemailid-idtype-config-axiosrequestconfig--promisehttpresponseitrackingemail)
        -   [getTrackingEmails(params?: IGetTrackingEmailsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<ITrackingEmail>>](#gettrackingemailsparams-igettrackingemailsparams-config-axiosrequestconfig--promisehttpresponselistitrackingemail)
    -   [User API](#user-api)
        -   [activateUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#activateuserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [addDeviceToUser(params: IAddDeviceToUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#adddevicetouserparams-iadddevicetouserparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [applyReferralCodeToUser(id: IdType, params: IApplyReferralCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#applyreferralcodetouserid-idtype-params-iapplyreferralcodeparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [assignRolesToUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#assignrolestouserid-idtype-roleids-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [authenticationByApple(callbackURL: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<string>>](#authenticationbyapplecallbackurl-string-config-axiosrequestconfig--promisehttpresponsestring)
        -   [authenticationByGoogle(params: IAuthenticationByGoogleParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<string>>](#authenticationbygoogleparams-iauthenticationbygoogleparams-config-axiosrequestconfig--promisehttpresponsestring)
        -   [authenticationByPhoneNumber(params: IAuthenticationByPhoneNumberParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthenticateResponse>>](#authenticationbyphonenumberparams-iauthenticationbyphonenumberparams-config-axiosrequestconfig--promisehttpresponseiauthenticateresponse)
        -   [authentication(params: IAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthenticateResponse>>](#authenticationparams-iauthenticationparams-config-axiosrequestconfig--promisehttpresponseiauthenticateresponse)
        -   [changePassword(params: IChangePasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#changepasswordparams-ichangepasswordparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [changePasswordForAnotherUser(params: IChangePasswordForAnotherUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#changepasswordforanotheruserparams-ichangepasswordforanotheruserparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [checkReferralUserCode(code: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#checkreferralusercodecode-string-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [checkAuthKeyAvailable(params: ICheckAuthKeyAvailableParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#checkauthkeyavailableparams-icheckauthkeyavailableparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [deactivateUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deactivateuserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [deleteUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteuserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [sendEmailToVerifyEmailAddressOfUser(id: IdType, returnURL: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#sendemailtoverifyemailaddressofuserid-idtype-returnurl-string-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [activeUserEmailAddress(token: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#activeuseremailaddresstoken-string-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [forgotPassword(params: IForgotPasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#forgotpasswordparams-iforgotpasswordparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getUserByUsername(username: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#getuserbyusernameusername-string-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [getUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#getuserid-idtype-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [getAppIntegrationAuthenticateURLs(params: IGetAppIntegrationAuthenticateURLsParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAuthenticateURL[]>>](#getappintegrationauthenticateurlsparams-igetappintegrationauthenticateurlsparams-config-axiosrequestconfig--promisehttpresponseiappintegrationauthenticateurl)
        -   [getDevicesFromUser(userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IDeviceOfUser[]>>](#getdevicesfromuseruserid-idtype-config-axiosrequestconfig--promisehttpresponseideviceofuser)
        -   [getUsersByListIDs(ids: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser[]>>](#getusersbylistidsids-idtype-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [getUsers(params: IGetUsersParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IUser>>](#getusersparams-igetusersparams-config-axiosrequestconfig--promisehttpresponselistiuser)
        -   [getRolesAssignedToUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IRole[]>>](#getrolesassignedtouserid-idtype-config-axiosrequestconfig--promisehttpresponseirole)
        -   [getCurrentUserLoggedIn(config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#getcurrentuserloggedinconfig-axiosrequestconfig--promisehttpresponseiuser)
        -   [getRefereeOfUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IBaseUser[]>>](#getrefereeofuserid-idtype-config-axiosrequestconfig--promisehttpresponseibaseuser)
        -   [listAllBrandPartnersAuthenticate(userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IBrandPartnerAuthenticate>>](#listallbrandpartnersauthenticateuserid-idtype-config-axiosrequestconfig--promisehttpresponseibrandpartnerauthenticate)
        -   [lockUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#lockuserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [registerNewUser(params: IRegisterNewUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#registernewuserparams-iregisternewuserparams-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [removeDeviceFromUser(params: IRemoveDeviceFromUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#removedevicefromuserparams-iremovedevicefromuserparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [resetPassword(params: IResetPasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#resetpasswordparams-iresetpasswordparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [revokeRolesFromUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#revokerolesfromuserid-idtype-roleids-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [statisticUsers(params: IStatisticsUsersParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IStatisticsUsers[]>>](#statisticusersparams-istatisticsusersparams-config-axiosrequestconfig--promisehttpresponseistatisticsusers)
        -   [suspendUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#suspenduserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [unlockUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#unlockuserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [unsuspendUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#unsuspenduserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [updateUser(id: IdType, params: IUpdateUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#updateuserid-idtype-params-iupdateuserparams-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [updateUserType(id: IdType, type: UserType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#updateusertypeid-idtype-type-usertype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [Configurations](#configurations)
            -   [createNewConfigurationForUser(userId: IdType, params: ICreateConfigurationOfUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IConfiguration>>](#createnewconfigurationforuseruserid-idtype-params-icreateconfigurationofuserparams-config-axiosrequestconfig--promisehttpresponseiconfiguration)
            -   [getConfigurationsOfUser(userId: IdType, params?: IGetConfigurationOfUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IConfiguration[]>>](#getconfigurationsofuseruserid-idtype-params-igetconfigurationofuserparams-config-axiosrequestconfig--promisehttpresponseiconfiguration)
            -   [deleteConfigurationOfUserByID(userId: IdType, configurationId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteconfigurationofuserbyiduserid-idtype-configurationid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [Email Address Verification](#email-address-verification)
            -   [sendEmailToVerifyEmailAddressOfUser(id: IdType, returnURL: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#sendemailtoverifyemailaddressofuserid-idtype-returnurl-string-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [activeUserEmailAddress(token: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#activeuseremailaddresstoken-string-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [Notification](#notification)
            -   [getNotificationRelatedToUser(params: IGetNotificationRelatedToUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUserNotification>>](#getnotificationrelatedtouserparams-igetnotificationrelatedtouserparams-config-axiosrequestconfig--promisehttpresponseiusernotification)
            -   [getNotificationsByUser(params: IGetNotificationsByUserParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IUserNotification, { unreadCount: number }>>](#getnotificationsbyuserparams-igetnotificationsbyuserparams-config-axiosrequestconfig--promisehttpresponselistiusernotification-unreadcount-number)
            -   [markNotificationAsRead(params: IMarkNotificationAsReadParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#marknotificationasreadparams-imarknotificationasreadparams-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [markAllNotificationsAsRead(userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#markallnotificationsasreaduserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [Passwordless](#passwordless)
            -   [Email](#email)
                -   [authenticationByMagicLink(params: IAuthenticationByMagicLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#authenticationbymagiclinkparams-iauthenticationbymagiclinkparams-config-axiosrequestconfig--promisehttpresponseboolean)
                -   [generateEmailOTPForAuthentication(params: IGenerateEmailAddressOTPForAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<string>>](#generateemailotpforauthenticationparams-igenerateemailaddressotpforauthenticationparams-config-axiosrequestconfig--promisehttpresponsestring)
                -   [verifyEmailAddressOTPToAuthentication(params: IVerifyOTPCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthenticateResponse>>](#verifyemailaddressotptoauthenticationparams-iverifyotpcodeparams-config-axiosrequestconfig--promisehttpresponseiauthenticateresponse)
            -   [Phone](#phone)
                -   [generateSMSOTP(params: IGenerateSMSOTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<string>>](#generatesmsotpparams-igeneratesmsotpparams-config-axiosrequestconfig--promisehttpresponsestring)
                -   [verifyPhoneOTPForAuthentication(params: IVerifyOTPCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthenticateResponse>>](#verifyphoneotpforauthenticationparams-iverifyotpcodeparams-config-axiosrequestconfig--promisehttpresponseiauthenticateresponse)
            -   [QR Code](#qr-code)
                -   [generateNewQRCode(params?: IGenerateNewQRCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IGenerateNewQRCodeForParingAuthenticationResponse>>](#generatenewqrcodeparams-inewqrparams-config-axiosrequestconfig--promisehttpresponseigeneratenewqrcodeforparingauthenticationresponse)
                -   [getCurrentStatusOfQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IGetCodeStatusResponse>>](#getcurrentstatusofqrcodeqrcodeid-idtype-config-axiosrequestconfig--promisehttpresponseigetcodestatusresponse)
                -   [approveQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IGetCodeStatusResponse>>](#approveqrcodeqrcodeid-idtype-config-axiosrequestconfig--promisehttpresponseigetcodestatusresponse)
                -   [loginUsingApprovedQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthenticateResponse>>](#loginusingapprovedqrcodeqrcodeid-idtype-config-axiosrequestconfig--promisehttpresponseiauthenticateresponse)
                -   [authWithApprovedQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthenticateResponse>>](#authwithapprovedqrcodeqrcodeid-idtype-config-axiosrequestconfig--promisehttpresponseiauthenticateresponse)
            -   [OTP Code](#otp-code)
                -   [generateNewOTPCode(params?: IGenerateNewQRCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IGenerateNewOTPForParingAuthenticationResponse>>](#generatenewotpcodeparams-inewqrparams-config-axiosrequestconfig--promisehttpresponseigeneratenewotpforparingauthenticationresponse)
                -   [getCurrentStatusOfOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<IGetCodeStatusResponse>>](#getcurrentstatusofotpcodeotpcode-string-config-axiosrequestconfig--promisehttpresponseigetcodestatusresponse)
                -   [approveOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<IGetCodeStatusResponse>>](#approveotpcodeotpcode-string-config-axiosrequestconfig--promisehttpresponseigetcodestatusresponse)
                -   [loginUsingApprovedOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthenticateResponse>>](#loginusingapprovedotpcodeotpcode-string-config-axiosrequestconfig--promisehttpresponseiauthenticateresponse)
                -   [authWithApprovedOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthenticateResponse>>](#authwithapprovedotpcodeotpcode-string-config-axiosrequestconfig--promisehttpresponseiauthenticateresponse)
    -   [Wallet API](#wallet-api)
        -   [addMoneyToWalletWithCheckoutLink(params: IAddMoneyToWalletWithCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<string>>](#addmoneytowalletwithcheckoutlinkparams-iaddmoneytowalletwithcheckoutlinkparams-config-axiosrequestconfig--promisehttpresponsestring)
        -   [applyRedeemCode(params: IApplyRedeemCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<unknown>>](#applyredeemcodeparams-iapplyredeemcodeparams-config-axiosrequestconfig--promisehttpresponseunknown)
        -   [createWalletDefault(currencyCode: string, testMode: boolean = false, config?: AxiosRequestConfig) => Promise<HttpResponse\<IWallet>>](#createwalletdefaultcurrencycode-string-testmode-boolean--false-config-axiosrequestconfig--promisehttpresponseiwallet)
        -   [convertWalletMoney(params: IConvertWalletMoneyParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#convertwalletmoneyparams-iconvertwalletmoneyparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [closeWallet(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#closewalletid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getWallets(params?: IGetWalletsParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IWallet[]>>](#getwalletsparams-igetwalletsparams-config-axiosrequestconfig--promisehttpresponseiwallet)
        -   [getWalletHistory(id: IdType, params: IGetWalletHistoriesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IWalletHistory>>](#getwallethistoryid-idtype-params-igetwallethistoriesparams-config-axiosrequestconfig--promisehttpresponselistiwallethistory)

## Getting Started

### Setup Your Brand

To get started with JFramework, you need to set up your brand in the JFW dashboard:

1. Visit [my.jframework.io](https://my.jframework.io).
2. Register for a new account if you don't have one, or log in with your existing credentials.
3. Once logged in, navigate to the "Brands" section.
4. Click on "Create New Brand" and fill in the required details, such as brand name, description, and any associated domains or configurations.
5. Save your brand. You'll receive a brand ID and API keys (e.g., secret key) that you'll use to authenticate requests in your application.

This setup ensures your API calls are associated with your brand for proper authorization and resource management.

### Quick Start

#### Installation

Install the `@jframework/jfw-js` package using your preferred package manager:

```bash
npm install @jframework/jfw-js
```

Or with Yarn:

```bash
yarn add @jframework/jfw-js
```

#### Configuration

To initialize the backend API client, create an instance using your Axios instance configured with your JFW API base URL and authentication headers (e.g., using your secret key from the brand setup).

Example in Node.js:

```javascript
import { createJFWClient } from '@jframework/jfw-js';

export const jfwClient = createJFWClient({
    brandURL: 'https://api.jframework.io', // Replace with your brandURL you created in Setup Your Brand.
    protocolURL: 'https://protocol.jframework.io/api', // Replace with your protocolURL if you have custom protocol URL of JFW.
});

// Now you can use the client, e.g., to get your current brand info.
const currentBrand = await jfwClient.brand.getBrandByURL();
```

Make sure to handle errors appropriately, such as using try/catch for API calls, as they may throw errors on failure.

For framework-specific setups (e.g., Next.js, Express), refer to the detailed usage examples in the [API Reference](#api-reference).

## API Reference

The `createBackendApiClient` function returns an object with resource-specific API clients. Each client extends `AbstractAPI` and provides methods for CRUD operations and other resource-specific actions.

Below is a listing of all available API objects and their methods. Detailed documentation for each method includes parameters, return types (where applicable), and links to the full endpoint reference.

### Ad API

The `ad` object manages advertisements.

#### `activateAd(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Activates an ad.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the ad to activate._
    -   `config` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Activate an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/activate-an-ad)

#### `deactivateAd(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deactivates an ad.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the ad to deactivate._
    -   `config` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Deactivate an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/deactivate-an-ad)

#### `createAd(params: ICreateAdParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Creates an ad.**

-   **Parameters:**

    -   `params` _ICreateAdParams_  
        _The parameters for creating an ad._
    -   `config` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAdParams Fields:**

    -   `type` _AdType_  
        _The type of the advertisement._
    -   `title` _string_ - _min: 1_  
        _The title of the advertisement._
    -   `position` _AdPosition_ - _min: 1_  
        _The display position of the advertisement (e.g., homepage-top, sidebar)._
    -   `targetURL` _string_  
        _The target URL that the ad points to when clicked. uri - min: 1_
    -   `description` _string_  
        _The description of the advertisement._
    -   `tags` _string_  
        _The tags of the advertisement._
    -   `startDate` _DateType_  
        _The start date and time when the advertisement becomes active. Format: yyyy-MM-dd HH:mm:ss date-time_
    -   `endDate` _DateType_  
        _The end date and time when the advertisement expires. Format: yyyy-MM-dd HH:mm:ss date-time_
    -   `metadata` _string_  
        _The metadata of the advertisement._
    -   `languageCodes` _string[]_  
        _The list of supported language codes (ISO 639-1, e.g., "en", "vi"). If null, available for all languages._
    -   `countryCodes` _string[]_  
        _The list of supported country codes (ISO 3166-1 alpha-2, e.g., "US", "VN"). If null, available in all countries._
    -   `status` _AdStatus_  
        _The status of the advertisement._
    -   `imageURLs` _string[]_  
        _The list of image URLs. Allowed formats: JPG, PNG, GIF. Maximum: 5._
    -   `brandDomainIds` _IdType[]_  
        _The list of brand domains for the advertisement._

-   **See**: [Create an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/create-an-ad)

#### `deleteAd(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an ad.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the ad to delete._
    -   `config` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/delete-an-ad)

#### `getAdsClientView(position: AdPosition, config?: AxiosRequestConfig) => Promise<HttpResponse<IAd[]>>`

**Gets ads with the client view.**

-   **Parameters:**

    -   `position` _AdPosition_  
        _The position for getting ads._
    -   `config` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Ads Client View](https://developers.jframework.io/references/api-reference/endpoints/ads/get-ads-client-view)

#### `getAds(params?: IGetAdsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IAd>>`

**Gets ads.**

-   **Parameters:**

    -   `params` _IGetAdsParams_  
        _The parameters for getting ads._
    -   `config` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetAdsParams Fields:**

    -   `type` _AdType_  
        _The type to filter._
    -   `title` _string_  
        _The title to filter._
    -   `position` _AdPosition_  
        _The position to filter._
    -   `targetURL` _string_  
        _The target URL to filter._
    -   `description` _string_  
        _The description to filter._
    -   `status` _AdStatus_  
        _The status to filter._
    -   `keywords` _string_  
        _The keywords to filter._

-   **See**: [Get Ads](https://developers.jframework.io/references/api-reference/endpoints/ads/get-ads)

#### `getAd(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAd>>`

**Gets an ad.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the ad to get._
    -   `config` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/get-an-ad)

#### `updateAd(params: IUpdateAdParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Updates an ad.**

-   **Parameters:**

    -   `params` _IUpdateAdParams_  
        _The parameters for updating an ad._
    -   `config` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateAdParams Fields:**

    -   `id` _IdType_  
        _The ID of the ad to update._
    -   `type` _AdType_  
        _The type of the advertisement._
    -   `title` _string_ - _min: 1_  
        _The title of the advertisement._
    -   `position` _AdPosition_ - _min: 1_  
        _The display position of the advertisement (e.g., homepage-top, sidebar)._
    -   `targetURL` _string_  
        _The target URL that the ad points to when clicked. uri - min: 1_
    -   `description` _string_  
        _The description of the advertisement._
    -   `tags` _string_  
        _The tags of the advertisement._
    -   `startDate` _DateType_  
        _The start date and time when the advertisement becomes active. Format: yyyy-MM-dd HH:mm:ss date-time_
    -   `endDate` _DateType_  
        _The end date and time when the advertisement expires. Format: yyyy-MM-dd HH:mm:ss date-time_
    -   `metadata` _string_  
        _The metadata of the advertisement._
    -   `languageCodes` _string[]_  
        _The list of supported language codes (ISO 639-1, e.g., "en", "vi"). If null, available for all languages._
    -   `countryCodes` _string[]_  
        _The list of supported country codes (ISO 3166-1 alpha-2, e.g., "US", "VN"). If null, available in all countries._
    -   `status` _AdStatus_  
        _The status of the advertisement._
    -   `imageURLs` _string[]_  
        _The list of image URLs. Allowed formats: JPG, PNG, GIF. Maximum: 5._
    -   `brandDomainIds` _IdType[]_  
        _The list of brand domains for the advertisement._

-   **See**: [Update an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/update-an-ad)

### App Integration API

The `appIntegration` object manages various app integrations.

#### `getAppIntegrations(params?: IGetAppIntegrationsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegration[]>>`

**Lists all app integrations by type.**

-   **Parameters:**

    -   `params?` _IGetAppIntegrationsParams_  
        _The parameters for getting app integrations._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetAppIntegrationsParams Fields:**

    -   `type?` _AppIntegrationType_  
        _The type of the app integration to get._ enum
    -   `status?` _AppIntegrationStatus_  
        _The status of the app integration to filter._ enum
    -   `keywords?` _string_  
        _The keywords of the app integration to get._

-   **See**: [Get App Integrations](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/get-app-integrations)

#### AppIntegrationAnalyticsAPI

Handles analytics-related operations for app integrations.

##### `createAppIntegrationAnalytics(params: ICreateAppIntegrationAnalyticsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAnalytics>>`

**Creates a new app integration analytics record.**

-   **Parameters:**

    -   `params` _ICreateAppIntegrationAnalyticsParams_  
        _The parameters for creating analytics._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAppIntegrationAnalyticsParams Fields:**

    -   `appIntegrationId` _IdType_  
        _The app integration provider ID of the analytics._ min: 1
    -   `trackingId` _string_ - min: 1  
        _This ID is used to track and associate events/data with a specific analytics property or project._
    -   `apiKey` _string_ - min: 1  
        _This is usually embedded in the frontend to initialize and send data to the analytics platform._
    -   `apiSecret?` _string_  
        _Gets or sets the API secret or verification URL used to authorize or validate requests from the Jframework._
    -   `metadata?` _string_  
        _This can include environment-specific data, custom flags, or platform-specific information._
    -   `accountConfigNotes?` _string_  
        _Gets or sets any additional notes or identifiers related to the account or setup that manages this Analytics configuration._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the analytics integration is the default._
    -   `status` _AppIntegrationAnalyticsStatus_  
        _The status of the app integration._ enum

-   **See**: [Creates an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/creates-an-app-integration-analytics)

##### `deleteAppIntegrationAnalytics(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an app integration analytics record by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the analytics record._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Deletes an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/deletes-an-app-integration-analytics)

##### `getAppIntegrationAnalytics(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAnalytics>>`

**Gets an app integration analytics record by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the analytics record._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/gets-an-app-integration-analytics)

##### `getAppIntegrationAnalyticsWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAnalytics[]>>`

**Lists all app integration analytics associated with a brand.**

-   **Parameters:**

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Apps Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/get-apps-integration-analytics)

##### `updateAppIntegrationAnalytics(params: IUpdateAppIntegrationAnalyticsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAnalytics>>`

**Updates an app integration analytics record by ID.**

-   **Parameters:**

    -   `params` _IUpdateAppIntegrationAnalyticsParams_  
        _The parameters for updating analytics._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateAppIntegrationAnalyticsParams Fields:**

    -   `id` _IdType_  
        _The app integration analytics id._
    -   `appIntegrationId` _IdType_ - min: 1  
        _The app integration provider ID of the analytics._
    -   `trackingId` _string_ - min: 1  
        _This ID is used to track and associate events/data with a specific analytics property or project._
    -   `apiKey` _string_ - min: 1  
        _This is usually embedded in the frontend to initialize and send data to the analytics platform._
    -   `apiSecret?` _string_  
        _Gets or sets the API secret or verification URL used to authorize or validate requests from the Jframework._
    -   `metadata?` _string_  
        _This can include environment-specific data, custom flags, or platform-specific information._
    -   `accountConfigNotes?` _string_  
        _Gets or sets any additional notes or identifiers related to the account or setup that manages this Analytics configuration._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the analytics integration is the default._
    -   `status` _AppIntegrationAnalyticsStatus_  
        _The status of the app integration._ enum

-   **See**: [Updates an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/updates-an-app-integration-analytics)

#### AppIntegrationAuthenticationAPI

Manages authentication settings for app integrations.

##### `createAppIntegrationAuthentication(params: ICreateAppIntegrationAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication>>`

**Creates a new app integration authentication.**

-   **Parameters:**

    -   `params` _ICreateAppIntegrationAuthenticationParams_  
        _The parameters for creating authentication._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAppIntegrationAuthenticationParams Fields:**

    -   `appIntegrationId` _string_ - min: 1  
        _The app integration id._
    -   `code` _string_ - min: 1  
        _The code of the app integration._
    -   `name` _string_ - min: 1  
        _The name of the app integration._
    -   `projectId` _string_ - min: 1  
        _The project Id of the app integration._
    -   `clientId` _string_ - min: 1  
        _The client email of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the email of the service account._
    -   `clientSecret` _string_ - min: 1  
        _The client secret of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the private key of the service account._
    -   `redirectURI` _string_ - uri - min: 1  
        _The redirect URI of the app integration. After the user logs in, the user is redirected to this URI. This value is must be mapping with the application configuration on the OAuth2 provider._
    -   `scope` _string_ - min: 1  
        _The scope of the app integration._
    -   `authEndpoint?` _string_ - uri  
        _The authentication endpoint of the app integration._
    -   `tokenEndpoint?` _string_ - uri  
        _The token endpoint of the app integration._
    -   `iconURL?` _string_ - uri  
        _The icon URL of the app integration._
    -   `tags?` _string_  
        _The tags of the app integration._
    -   `description?` _string_  
        _The description of the app integration._
    -   `status?` _AppIntegrationAuthenticationStatus_  
        _The status of the app integration._ enum
    -   `isDefault?` _boolean_  
        _Flag to indicate if the authentication integration is the default._ defaultValue `false`

-   **See**: [Creates an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/creates-an-app-integration-authentication)

##### `createAppIntegrationAuthenticationWithImportFileSettings(params: ICreateAppIntegrationAuthenticationWithImportFileSettingsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication>>`

**Creates a new app integration authentication with import file settings.**

-   **Parameters:**

    -   `params` _ICreateAppIntegrationAuthenticationWithImportFileSettingsParams_  
        _The parameters for creating authentication with import file._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAppIntegrationAuthenticationWithImportFileSettingsParams Fields:**

    -   `appIntegrationId` _IdType_  
        _The app integration id._
    -   `file` _File_ - min: 1  
        _The file setting to import._

-   **See**: [Create an App Integration Authentication by Import File](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/create-an-app-integration-authentication-by-import-file)

##### `deleteAppIntegrationAuthentication(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an app integration authentication by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the authentication._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Deletes an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/deletes-an-app-integration-authentication)

##### `getAppIntegrationAuthentication(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication>>`

**Gets an app integration authentication by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the authentication._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/gets-an-app-integration-authentication)

##### `getAppsIntegrationAuthenticationWithBrand(params?: IGetAppIntegrationAuthenticationsWithBrandParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication[]>>`

**Gets app integration authentications for a brand.**

-   **Parameters:**

    -   `params?` _IGetAppIntegrationAuthenticationsWithBrandParams_  
        _The parameters for getting authentications._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetAppIntegrationAuthenticationsWithBrandParams Fields:**

    -   `appIntegrationId?` _string_  
        _The app integration id to filter._
    -   `code?` _string_  
        _The code to filter._
    -   `name?` _string_  
        _The name of filter._
    -   `description?` _string_  
        _The description of filter._
    -   `projectId?` _string_  
        _The project id of filter._
    -   `clientEmail?` _string_  
        _The client email of filter._
    -   `clientId?` _string_  
        _The client id of filter._
    -   `clientSecret?` _string_  
        _The client secret of filter._
    -   `privateKey?` _string_  
        _The private key of filter._
    -   `redirectURI?` _string_ - uri  
        _The redirect URI of filter._
    -   `scope?` _string_  
        _The scope of filter._
    -   `authEndpoint?` _string_ - uri  
        _The auth endpoint of filter._
    -   `tokenEndpoint?` _string_ - uri  
        _The token endpoint of filter._
    -   `iconURL?` _string_ - uri  
        _The icon URL of filter._
    -   `tags?` _string_  
        _The tags of filter._
    -   `status?` _AppIntegrationAuthenticationStatus_  
        _The status of filter._ string - enum - `0` - `Inactive` - `1` - `Active`

-   **See**: [List the Apps Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/list-the-apps-integration-authentication)

##### `testBuildingAuthenticationURL(appIntegrationId: IdType, params: ITestBuildingAuthenticationURLParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Simulates building an authentication URL for an app integration to validate settings.**

-   **Parameters:**

    -   `appIntegrationId` _IdType_  
        _The ID of the app integration._
    -   `params` _ITestBuildingAuthenticationURLParams_  
        _The parameters for testing authentication URL._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ITestBuildingAuthenticationURLParams Fields:**

    -   `clientId` _string_ - min: 1  
        _The client email of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the email of the service account._
    -   `redirectURI` _string_ - min: 1  
        _The redirect URI of the app integration. After the user logs in, the user is redirected to this URI._
    -   `scope` _string_ - min: 1  
        _The scope of the app integration._
    -   `state?` _string_  
        _The state of the app integration._

-   **See**: [Test Building an Authentication URL](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/test-building-an-authentication-url)

##### `updateAppIntegrationAuthentication(id: IdType, params: IUpdateAppIntegrationAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication>>`

**Updates an app integration authentication by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the authentication._
    -   `params` _IUpdateAppIntegrationAuthenticationParams_  
        _The parameters for updating authentication._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateAppIntegrationAuthenticationParams Fields:**

    -   `appIntegrationId` _string_ - min: 1  
        _The app integration id._
    -   `code` _string_ - min: 1  
        _The code of the app integration._
    -   `name` _string_ - min: 1  
        _The name of the app integration._
    -   `projectId` _string_ - min: 1  
        _The project Id of the app integration._
    -   `clientId` _string_ - min: 1  
        _The client email of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the email of the service account._
    -   `clientSecret` _string_ - min: 1  
        _The client secret of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the private key of the service account._
    -   `redirectURI` _string_ - uri - min: 1  
        _The redirect URI of the app integration. After the user logs in, the user is redirected to this URI. This value is must be mapping with the application configuration on the OAuth2 provider._
    -   `scope` _string_ - min: 1  
        _The scope of the app integration._
    -   `authEndpoint?` _string_ - uri  
        _The authentication endpoint of the app integration._
    -   `tokenEndpoint?` _string_ - uri  
        _The token endpoint of the app integration._
    -   `iconURL?` _string_ - uri  
        _The icon URL of the app integration._
    -   `tags?` _string_  
        _The tags of the app integration._
    -   `description?` _string_  
        _The description of the app integration._
    -   `status?` _AppIntegrationAuthenticationStatus_  
        _The status of the app integration._ enum
    -   `isDefault?` _boolean_  
        _Flag to indicate if the authentication integration is the default._ defaultValue `false`

-   **See**: [Updates an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/updates-an-app-integration-authentication)

#### AppIntegrationPaymentGatewayAPI

Manages payment gateway integrations for apps.

##### `createAppIntegrationPaymentGateway(params: ICreateAppIntegrationPaymentGatewayParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPaymentGateway>>`

**Creates a new app integration payment gateway.**

-   **Parameters:**

    -   `params` _ICreateAppIntegrationPaymentGatewayParams_  
        _The parameters for creating payment gateway._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAppIntegrationPaymentGatewayParams Fields:**

    -   `appIntegrationId` _string_ - min: 1  
        _The app integration id of the payment gateway._
    -   `name` _string_ - min: 1  
        _The name of the payment gateway integration._
    -   `ipnListenerLink` _string_ - uri - min: 1  
        _The IPN (Instant Payment Notification) listener link of the payment gateway. This endpoint will receive payment notifications from the gateway. For PayPal: This is your IPN listener URL for payment status updates. For Stripe: This would be your webhook URL for payment events._
    -   `cancelLinkWithoutLogin?` _string_ - uri  
        _The payment link of the payment gateway. This is used when unauthenticated users cancel payment and need to be redirected. For PayPal/Stripe: Fallback URL when session is lost or user isn't logged in._
    -   `cancelLink` _string_ - uri - min: 1  
        _The cancel link of the payment gateway. Users will be redirected here when they cancel a payment. For PayPal: Set as the cancel_url in PayPal checkout. For Stripe: Used as cancel_url in Stripe Checkout sessions._
    -   `returnLink` _string_ - uri - min: 1  
        _The return link of the payment gateway. Users will be redirected here after successful payment. For PayPal: Set as the return_url in PayPal checkout. For Stripe: Used as success_url in Stripe Checkout sessions._
    -   `publicKey` _string_ - min: 1  
        _The public key of the payment gateway. For PayPal: Client ID from your PayPal app credentials. For Stripe: Publishable key from your Stripe dashboard._
    -   `privateKey` _string_ - min: 1  
        _The private key of the payment gateway. For PayPal: Secret from your PayPal app credentials. For Stripe: Secret key from your Stripe dashboard._
    -   `description?` _string_  
        _Description of the payment gateway. For PayPal/Stripe: Optional description that appears in your dashboard._
    -   `notes?` _string_  
        _The notes of the payment gateway. For PayPal/Stripe: Internal notes about this integration._
    -   `testMode?` _boolean_  
        _Flag to indicate if the payment gateway is in test mode. When true, transactions will use the provider's sandbox environment. For PayPal: Uses https://api.sandbox.paypal.com instead of production. For Stripe: Uses test mode keys and endpoints._ defaultValue `false`
    -   `isDefault?` _boolean_  
        _Flag to indicate if the payment gateway integration is the default._
    -   `status?` _AppIntegrationPaymentGatewayStatus_  
        _The status of the payment gateway integration._ enum

-   **See**: [Creates an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/creates-an-app-integration-payment-gateway)

##### `deleteAppIntegrationPaymentGateway(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an app integration payment gateway by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the payment gateway._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Deletes an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/deletes-an-app-integration-payment-gateway)

##### `getAppIntegrationPaymentGateway(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPaymentGateway>>`

**Gets an app integration payment gateway by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the payment gateway._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-an-app-integration-payment-gateway)

##### `getAppsIntegrationPaymentGatewayWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPaymentGateway[]>>`

**Gets the list of app integration payment gateways for the current brand.**

-   **Parameters:**

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets App Integration Payment Gateways with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-app-integration-payment-gateways-with-brand)

##### `testCreatingCheckoutLink(appIntegrationId: IdType, params: ITestCreatingCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Tests generating a checkout link for an app integration.**

-   **Parameters:**

    -   `appIntegrationId` _IdType_  
        _The ID of the app integration._
    -   `params` _ITestCreatingCheckoutLinkParams_  
        _The parameters for testing checkout link creation._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ITestCreatingCheckoutLinkParams Fields:**

    -   `product` _IAppIntegrationPaymentGatewayProduct_  
        _This class represents the Checkout Payment Request PayPal Data Transfer Object._ object
    -   `publicKey` _string_ - min: 1  
        _The public key of the payment gateway used for authentication. For PayPal: Client ID from your PayPal app credentials (used with OAuth 2.0). For Stripe: Publishable key from your Stripe dashboard (used client-side)._
    -   `privateKey` _string_ - min: 1  
        _The private key of the payment gateway used for secure server-side operations. For PayPal: Secret from your PayPal app credentials. For Stripe: Secret key from your Stripe dashboard (used for server-side API calls). Note: This should never be exposed to client-side code._
    -   `displayName` _string_ - min: 1 - max: 127  
        _The display name shown to customers during checkout. For PayPal: Appears as the merchant name during PayPal checkout flow. For Stripe: Displayed as the company name on Stripe Checkout pages. Maximum length is typically 127 characters for most payment providers._

-   **See**: [Test Create Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/test-create-checkout-link)

##### `updateAppIntegrationPaymentGateway(id: IdType, params: IUpdateAppIntegrationPaymentGatewayParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPaymentGateway>>`

**Updates an app integration payment gateway by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the payment gateway._
    -   `params` _IUpdateAppIntegrationPaymentGatewayParams_  
        _The parameters for updating payment gateway._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateAppIntegrationPaymentGatewayParams Fields:**

    -   `appIntegrationId` _string_ - min: 1  
        _The app integration id of the payment gateway._
    -   `name` _string_ - min: 1  
        _The name of the payment gateway integration._
    -   `ipnListenerLink` _string_ - uri - min: 1  
        _The IPN (Instant Payment Notification) listener link of the payment gateway. This endpoint will receive payment notifications from the gateway. For PayPal: This is your IPN listener URL for payment status updates. For Stripe: This would be your webhook URL for payment events._
    -   `cancelLinkWithoutLogin?` _string_ - uri  
        _The payment link of the payment gateway. This is used when unauthenticated users cancel payment and need to be redirected. For PayPal/Stripe: Fallback URL when session is lost or user isn't logged in._
    -   `cancelLink` _string_ - uri - min: 1  
        _The cancel link of the payment gateway. Users will be redirected here when they cancel a payment. For PayPal: Set as the cancel_url in PayPal checkout. For Stripe: Used as cancel_url in Stripe Checkout sessions._
    -   `returnLink` _string_ - uri - min: 1  
        _The return link of the payment gateway. Users will be redirected here after successful payment. For PayPal: Set as the return_url in PayPal checkout. For Stripe: Used as success_url in Stripe Checkout sessions._
    -   `publicKey` _string_ - min: 1  
        _The public key of the payment gateway. For PayPal: Client ID from your PayPal app credentials. For Stripe: Publishable key from your Stripe dashboard._
    -   `privateKey` _string_ - min: 1  
        _The private key of the payment gateway. For PayPal: Secret from your PayPal app credentials. For Stripe: Secret key from your Stripe dashboard._
    -   `description?` _string_  
        _Description of the payment gateway. For PayPal/Stripe: Optional description that appears in your dashboard._
    -   `notes?` _string_  
        _The notes of the payment gateway. For PayPal/Stripe: Internal notes about this integration._
    -   `testMode?` _boolean_  
        _Flag to indicate if the payment gateway is in test mode. When true, transactions will use the provider's sandbox environment. For PayPal: Uses https://api.sandbox.paypal.com instead of production. For Stripe: Uses test mode keys and endpoints._ defaultValue `false`
    -   `isDefault?` _boolean_  
        _Flag to indicate if the payment gateway integration is the default._
    -   `status?` _AppIntegrationPaymentGatewayStatus_  
        _The status of the payment gateway integration._ enum

-   **See**: [Updates an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/updates-an-app-integration-payment-gateway)

#### AppIntegrationPushNotificationAPI

Manages push notification integrations for apps.

##### `createAppIntegrationPushNotification(params: ICreateAppIntegrationPushNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification>>`

**Creates a new app integration push notification.**

-   **Parameters:**

    -   `params` _ICreateAppIntegrationPushNotificationParams_  
        _The parameters for creating push notification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAppIntegrationPushNotificationParams Fields:**

    -   `appIntegrationId` _IdType_ - min: 1  
        _The app integration provider ID of the push notification._
    -   `code` _string_ - min: 1  
        _The code of the push notification._
    -   `name` _string_ - min: 1  
        _The name of the push notification._
    -   `projectId` _IdType_ - min: 1  
        _The project ID of the push notification._
    -   `clientEmail` _string_ - min: 1  
        _The client email of the push notification._
    -   `clientId?` _string_ - min: 1  
        _The client ID of the push notification._
    -   `privateKey` _string_ - min: 1  
        _The private key of the push notification._
    -   `authURL?` _string_ - uri  
        _The authentication URL of the push notification._
    -   `tokenURL?` _string_ - uri  
        _The token URL of the push notification._
    -   `authProviderX509CertURL?` _string_ - uri  
        _The authentication provider X509 certificate URL of the push notification._
    -   `clientX509CertURL?` _string_ - uri  
        _The client X509 certificate URL of the push notification._
    -   `universeDomain?` _string_  
        _The universe domain of the push notification._
    -   `apiKey?` _string_  
        _The API key of the push notification._
    -   `authDomain?` _string_  
        _The authentication domain of the push notification._
    -   `storageBucket?` _string_  
        _The storage bucket of the push notification._
    -   `messagingSenderId?` _string_  
        _The messaging sender ID of the push notification._
    -   `appId?` _string_  
        _The app ID of the push notification. Use projectId instead if using Firebase service._
    -   `measurementId?` _string_  
        _The measurement ID of the push notification._
    -   `vapidKey?` _string_  
        _The VAPID key of the push notification._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the push notification integration is the default._ defaultValue `false`

-   **See**: [Create an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/create-an-app-integration-push-notification)

##### `createAppIntegrationPushNotificationWithImportFileSettings(params: ICreateAppIntegrationPushNotificationWithImportFileSettingsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification>>`

**Creates a new app integration push notification with import file settings.**

-   **Parameters:**

    -   `params` _ICreateAppIntegrationPushNotificationWithImportFileSettingsParams_  
        _The parameters for creating push notification with import file._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAppIntegrationPushNotificationWithImportFileSettingsParams Fields:**

    -   `appIntegrationId` _IdType_  
        _The app integration id._
    -   `file` _File_ - min: 1  
        _The file setting to import._

-   **See**: [Create an App Integration Push Notification by Import File](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/create-an-app-integration-push-notification-by-import-file)

##### `deleteAppIntegrationPushNotification(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an app integration push notification by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the push notification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/delete-an-app-integration-push-notification)

##### `getAppIntegrationPushNotification(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification>>`

**Gets an app integration push notification by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the push notification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-an-app-integration-push-notification)

##### `getAppIntegrationPushNotificationsWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification[]>>`

**Gets the current brand's app integration push notifications.**

-   **Parameters:**

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get App Integration Push Notification with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-app-integration-push-notification-with-brand)

##### `updateAppIntegrationPushNotification(id: IdType, params: IUpdateAppIntegrationPushNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification>>`

**Updates an app integration push notification by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the push notification._
    -   `params` _IUpdateAppIntegrationPushNotificationParams_  
        _The parameters for updating push notification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateAppIntegrationPushNotificationParams Fields:**

    -   `appIntegrationId` _IdType_ - min: 1  
        _The app integration provider ID of the push notification._
    -   `code` _string_ - min: 1  
        _The code of the push notification._
    -   `name` _string_ - min: 1  
        _The name of the push notification._
    -   `projectId` _IdType_ - min: 1  
        _The project ID of the push notification._
    -   `clientEmail` _string_ - min: 1  
        _The client email of the push notification._
    -   `clientId?` _string_ - min: 1  
        _The client ID of the push notification._
    -   `privateKey` _string_ - min: 1  
        _The private key of the push notification._
    -   `authURL?` _string_ - uri  
        _The authentication URL of the push notification._
    -   `tokenURL?` _string_ - uri  
        _The token URL of the push notification._
    -   `authProviderX509CertURL?` _string_ - uri  
        _The authentication provider X509 certificate URL of the push notification._
    -   `clientX509CertURL?` _string_ - uri  
        _The client X509 certificate URL of the push notification._
    -   `universeDomain?` _string_  
        _The universe domain of the push notification._
    -   `apiKey?` _string_  
        _The API key of the push notification._
    -   `authDomain?` _string_  
        _The authentication domain of the push notification._
    -   `storageBucket?` _string_  
        _The storage bucket of the push notification._
    -   `messagingSenderId?` _string_  
        _The messaging sender ID of the push notification._
    -   `appId?` _string_  
        _The app ID of the push notification. Use projectId instead if using Firebase service._
    -   `measurementId?` _string_  
        _The measurement ID of the push notification._
    -   `vapidKey?` _string_  
        _The VAPID key of the push notification._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the push notification integration is the default._ defaultValue `false`

-   **See**: [Update an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/update-an-app-integration-push-notification)

#### AppIntegrationReCAPTCHAAPI

Manages reCAPTCHA integrations for apps.

##### `createAppIntegrationReCAPTCHA(params: ICreateAppIntegrationReCAPTCHAParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationReCAPTCHA>>`

**Creates a new app integration reCAPTCHA.**

-   **Parameters:**

    -   `params` _ICreateAppIntegrationReCAPTCHAParams_  
        _The parameters for creating reCAPTCHA._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAppIntegrationReCAPTCHAParams Fields:**

    -   `appIntegrationId` _IdType_ - min: 1  
        _This is used to associate this configuration with a specific integration instance._
    -   `version` _string_ - min: 1  
        _Gets or sets the version of the ReCaptcha being used (e.g., v2, v3). Different versions may have different behavior and setup requirements._
    -   `siteKey` _string_ - min: 1  
        _This is the public key used on the client-side to render the ReCaptcha widget._
    -   `verifyURL?` _string_ - uri  
        _The verify URL of the app integration._
    -   `secretKey?` _string_ - min: 1  
        _This is the private key used server-side to validate ReCaptcha responses. It's optional to allow scenarios where only public configuration is required._
    -   `accountConfigNotes?` _string_ - min: 1  
        _Gets or sets any additional notes or identifiers related to the account or setup that manages this ReCaptcha configuration._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the analytics integration is the default._ default `false`
    -   `status?` _AppIntegrationReCAPTCHAStatus_  
        _The status of the app integration._ enum

-   **See**: [Creates an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/creates-an-app-integration-recaptcha)

##### `deleteAppIntegrationReCAPTCHA(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an app integration reCAPTCHA by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the reCAPTCHA._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Deletes an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/deletes-an-app-integration-recaptcha)

##### `getAppIntegrationReCAPTCHA(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationReCAPTCHA>>`

**Gets an app integration reCAPTCHA by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the reCAPTCHA._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/gets-an-app-integration-recaptcha)

##### `getAppsIntegrationReCAPTCHAWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationReCAPTCHA[]>>`

**Lists all app integration reCAPTCHAs.**

-   **Parameters:**

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Apps Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/get-apps-integration-recaptcha)

##### `updateAppIntegrationReCAPTCHA(params: IUpdateAppIntegrationReCAPTCHAParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationReCAPTCHA>>`

**Updates an app integration reCAPTCHA by ID.**

-   **Parameters:**

    -   `params` _IUpdateAppIntegrationReCAPTCHAParams_  
        _The parameters for updating reCAPTCHA._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateAppIntegrationReCAPTCHAParams Fields:**

    -   `id` _IdType_  
        _The app integration ReCaptcha id._
    -   `appIntegrationId` _IdType_ - min: 1  
        _This is used to associate this configuration with a specific integration instance._
    -   `version` _string_ - min: 1  
        _Gets or sets the version of the ReCaptcha being used (e.g., v2, v3). Different versions may have different behavior and setup requirements._
    -   `siteKey` _string_ - min: 1  
        _This is the public key used on the client-side to render the ReCaptcha widget._
    -   `verifyURL?` _string_ - uri  
        _The verify URL of the app integration._
    -   `secretKey?` _string_ - min: 1  
        _This is the private key used server-side to validate ReCaptcha responses. It's optional to allow scenarios where only public configuration is required._
    -   `accountConfigNotes?` _string_ - min: 1  
        _Gets or sets any additional notes or identifiers related to the account or setup that manages this ReCaptcha configuration._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the analytics integration is the default._ default `false`
    -   `status?` _AppIntegrationReCAPTCHAStatus_  
        _The status of the app integration._ enum

-   **See**: [Updates an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/updates-an-app-integration-recaptcha)

#### AppIntegrationSMSAPI

Manages SMS integrations for apps.

##### `createAppIntegrationSMS(params: ICreateAppIntegrationSMSParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMS>>`

**Creates a new app integration SMS.**

-   **Parameters:**

    -   `params` _ICreateAppIntegrationSMSParams_  
        _The parameters for creating SMS integration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAppIntegrationSMSParams Fields:**

    -   `appIntegrationId` _string_ - min: 1  
        _The app integration provider ID of the SMS._
    -   `name` _string_ - min: 1  
        _The name of the SMS integration._
    -   `username` _string_ - min: 1  
        _The username or identifier for the SMS integration. For Twilio, this is the Account SID (String Identifier)._
    -   `password` _string_ - min: 1  
        _The password or authentication token for the SMS integration. For Twilio, this is the Auth Token._
    -   `phoneNumber` _string_ - min: 1  
        _The phone number of the SMS integration. The phone number should be following the E.164 format._
    -   `description?` _string_  
        _The description of the SMS integration._
    -   `status?` _AppIntegrationSMSStatus_  
        _The status of the app integration._ enum
    -   `isDefault?` _boolean_  
        _Flag to indicate if the app integration SMS setting is default._ defaultValue `false`

-   **See**: [Creates an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/creates-an-app-integration-sms)

##### `deleteAppIntegrationSMS(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an app integration SMS by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the SMS integration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Deletes an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/deletes-an-app-integration-sms)

##### `getAppIntegrationSMS(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMS>>`

**Gets an app integration SMS by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the SMS integration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms)

##### `getAppsIntegrationSMSWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMS[]>>`

**Lists all app integration SMS.**

-   **Parameters:**

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets an App Integration SMS with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms-with-brand)

##### `testSendingSMSMessage(appIntegrationId: IdType, params: ITestSendingSMSMessageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Sends a test SMS message using the configured SMS integration settings.**

-   **Parameters:**

    -   `appIntegrationId` _IdType_  
        _The ID of the app integration._
    -   `params` _ITestSendingSMSMessageParams_  
        _The parameters for testing sending an SMS message._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ITestSendingSMSMessageParams Fields:**

    -   `username` _string_ - min: 1  
        _The username or identifier for the SMS integration. For Twilio, this is the Account SID (String Identifier)._
    -   `password` _string_ - min: 1  
        _The password or authentication token for the SMS integration. For Twilio, this is the Auth Token._
    -   `phoneNumberFrom` _string_ - min: 1  
        _The sender's phone number used by the SMS integration. Must be in E.164 format (e.g., +1234567890)._
    -   `phoneNumberTo` _string_ - min: 1  
        _The recipient's phone number to which the test SMS will be sent. Must be in E.164 format (e.g., +1234567890)._
    -   `message` _string_ - min: 1  
        _The content of the SMS message to be sent during the test._

-   **See**: [Send SMS Test Message](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/send-sms-test-message)

##### `updateAppIntegrationSMS(id: IdType, params: IUpdateAppIntegrationSMSParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMS>>`

**Updates an app integration SMS by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the SMS integration._
    -   `params` _IUpdateAppIntegrationSMSParams_  
        _The parameters for updating SMS integration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateAppIntegrationSMSParams Fields:**

    -   `appIntegrationId` _string_ - min: 1  
        _The app integration provider ID of the SMS._
    -   `name` _string_ - min: 1  
        _The name of the SMS integration._
    -   `username` _string_ - min: 1  
        _The username or identifier for the SMS integration. For Twilio, this is the Account SID (String Identifier)._
    -   `password` _string_ - min: 1  
        _The password or authentication token for the SMS integration. For Twilio, this is the Auth Token._
    -   `phoneNumber` _string_ - min: 1  
        _The phone number of the SMS integration. The phone number should be following the E.164 format._
    -   `description?` _string_  
        _The description of the SMS integration._
    -   `status?` _AppIntegrationSMSStatus_  
        _The status of the app integration._ enum
    -   `isDefault?` _boolean_  
        _Flag to indicate if the app integration SMS setting is default._ defaultValue `false`

-   **See**: [Updates an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/update-an-app-integration-sms)

#### AppIntegrationSMTPAPI

Manages SMTP integrations for apps.

##### `createAppIntegrationSMTP(params: ICreateAppIntegrationSMTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMTP>>`

**Creates a new app integration SMTP.**

-   **Parameters:**

    -   `params` _ICreateAppIntegrationSMTPParams_  
        _The parameters for creating SMTP integration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateAppIntegrationSMTPParams Fields:**

    -   `appIntegrationId` _IdType_ - min: 1  
        _The type of the SMTP integration._
    -   `name` _string_ - min: 1  
        _The name of the SMTP integration._
    -   `host` _string_ - min: 1  
        _The host of the SMTP integration._
    -   `port` _number_ - int32  
        _The port of the SMTP integration._
    -   `username` _string_ - min: 1  
        _The username of the SMTP integration._
    -   `password` _string_ - min: 1  
        _The password of the SMTP integration._
    -   `useTls?` _boolean_  
        _Flag to indicate if the SMTP integration uses TLS._ defaultValue `false`
    -   `isDefault?` _boolean_  
        _Flag to indicate if the SMTP integration is the default._ defaultValue `false`
    -   `description?` _string_  
        _The description of the SMTP integration._
    -   `status?` _AppIntegrationSMTPStatus_  
        _The status of the SMTP integration._ enum

-   **See**: [Creates an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/creates-an-app-integration-smtp)

##### `deleteAppIntegrationSMTP(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an app integration SMTP by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the SMTP integration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Deletes an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/deletes-an-app-integration-smtp)

##### `getAppIntegrationSMTP(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMTP>>`

**Gets an app integration SMTP by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the SMTP integration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp)

##### `getAppsIntegrationSMTPWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMTP[]>>`

**Gets app integration SMTPs for a brand.**

-   **Parameters:**

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets an App Integration SMTP with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp-with-brand)

##### `testSendingEmailAddress(params: ITestSendingEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Sends a test email using the configured SMTP integration settings.**

-   **Parameters:**

    -   `params` _ITestSendingEmailAddressParams_  
        _The parameters for testing email sending._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ITestSendingEmailAddressParams Fields:**

    -   `host` _string_ - min: 1  
        _The SMTP server hostname or IP (e.g., smtp.gmail.com)._
    -   `port` _number_ - int32  
        _The port number for the SMTP server (typically 587 or 465)._
    -   `username` _string_ - min: 1  
        _The username/email address for SMTP authentication._
    -   `password` _string_ - min: 1  
        _The password for SMTP authentication._
    -   `useTls` _boolean_  
        _Whether to enable SSL for SMTP connection._
    -   `emailAddressFrom` _string_ - min: 1  
        _The sender email address._
    -   `emailAddressTo` _string_ - min: 1  
        _The recipient email address._
    -   `subject` _string_ - min: 1  
        _The subject of the test email._
    -   `body` _string_ - min: 1  
        _The body content of the test email._

-   **See**: [Send Test Email](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/send-test-email)

##### `updateAppIntegrationSMTP(id: IdType, params: IUpdateAppIntegrationSMTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMTP>>`

**Updates an app integration SMTP by ID.**

-   **Parameters:**

    -   `id` _IdType_  
        _The ID of the SMTP integration._
    -   `params` _IUpdateAppIntegrationSMTPParams_  
        _The parameters for updating SMTP integration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateAppIntegrationSMTPParams Fields:**

    -   `appIntegrationId` _IdType_ - min: 1  
        _The type of the SMTP integration._
    -   `name` _string_ - min: 1  
        _The name of the SMTP integration._
    -   `host` _string_ - min: 1  
        _The host of the SMTP integration._
    -   `port` _number_ - int32  
        _The port of the SMTP integration._
    -   `username` _string_ - min: 1  
        _The username of the SMTP integration._
    -   `password` _string_ - min: 1  
        _The password of the SMTP integration._
    -   `useTls?` _boolean_  
        _Flag to indicate if the SMTP integration uses TLS._ defaultValue `false`
    -   `isDefault?` _boolean_  
        _Flag to indicate if the SMTP integration is the default._ defaultValue `false`
    -   `description?` _string_  
        _The description of the SMTP integration._
    -   `status?` _AppIntegrationSMTPStatus_  
        _The status of the SMTP integration._ enum

-   **See**: [Updates an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/update-an-app-integration-smtp)

### BrandAPI

Manages brand-related operations.

##### `checkDomainIfExists(domain: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Checks if a brand exists by domain.**

-   **Parameters**:

    -   `domain` _string_  
        _The domain to check._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Check Domain Exists](https://developers.jframework.io/references/api-reference/endpoints/brands/check-domain-exists)

##### `createBrand(params: ICreateBrandParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrand>>`

**Creates a new brand.**

-   **Parameters**:

    -   `params` _ICreateBrandParams_  
        _Parameters for creating a brand._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateBrandParams Fields**:

    -   `name` _string_ - min: 1  
        _The name of the brand._
    -   `abbr` _string_ - min: 1  
        _The abbreviation of the brand._
    -   `description?` _string_  
        _The description of the brand._
    -   `setting` _ICreateBrandSettingParams_  
        _The setting of the brand._
    -   `profile` _ICreateBrandProfileParams_  
        _The profile of the brand._

-   **ICreateBrandSettingParams Fields**:

    -   `domain` _string_ - min: 1  
        _The domain of the brand. The value is the subdomain of the brand._

-   **ICreateBrandProfileParams Fields**:

    -   `logoUrl?` _string_ - uri  
        _The logo URL of the brand._
    -   `faviconUrl?` _string_ - uri  
        _The favicon URL of the brand._
    -   `slogan?` _string_  
        _The slogan of the brand, used with the brand name in page titles._

-   **See**: [Create a Brand](https://developers.jframework.io/references/api-reference/endpoints/brands/create-a-brand)

##### `generateNewDomain(config?: AxiosRequestConfig) => Promise<HttpResponse<IGeneratedDomain>>`

**Generates a new, unused domain name.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGeneratedDomain Fields**:

    -   `rootDomain` _string_ - min: 1  
        _The root part of the domain, typically the main domain name._
    -   `subDomain` _string_ - min: 1  
        _The subdomain part, often used to identify a specific brand or service._
    -   `fullDomain` _string_ - min: 1  
        _The full domain name, combining the root domain and subdomain._

-   **See**: [Generate Domain](https://developers.jframework.io/references/api-reference/endpoints/brands/generate-domain)

##### `getBrand(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrand>>`

**Gets a brand by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the brand._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Brand](https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand)

##### `getBrandByURL(config?: AxiosRequestConfig) => Promise<HttpResponse<IBrand>>`

**Gets a brand based on the client or host domain.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Brand by Brand URL](https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand-by-brand-url)

##### `getBrands(params?: IGetBrandsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IBrand>>`

**Gets brands by filter.**

-   **Parameters**:

    -   `params?` _IGetBrandsParams_  
        _Parameters for getting brands._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetBrandsParams Fields**:

    -   `code?` _string_  
        _The code of the brand._
    -   `name?` _string_  
        _The name of the brand._
    -   `abbr?` _string_  
        _The abbreviation of the brand._
    -   `description?` _string_  
        _The description of the brand._
    -   `tags?` _string_  
        _The tags of the brand._
    -   `status?` _BrandStatus_  
        _The status of the brand._
    -   `keywords?` _string_  
        _The keywords of the brand._

-   **See**: [Get Brands](https://developers.jframework.io/references/api-reference/endpoints/brands/get-brands)

##### `updateBrand(id: IdType, params: IUpdateBrandParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Updates a brand by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the brand._
    -   `params` _IUpdateBrandParams_  
        _Parameters for updating a brand._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateBrandParams Fields**:

    -   `name` _string_ - min: 1  
        _The name of the brand._
    -   `abbr` _string_ - min: 1  
        _The abbreviation of the brand._
    -   `description?` _string_  
        _The description of the brand._
    -   `tags?` _string_  
        _The tags of the brand._

-   **See**: [Update a Brand](https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand)

#### BrandProfileAPI

Manages brand profile operations.

##### `updateBrandProfile(id: IdType, params: IUpdateBrandProfileParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Updates a brand's profile by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the brand._
    -   `params` _IUpdateBrandProfileParams_  
        _Parameters for updating the brand profile._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateBrandProfileParams Fields**:

    -   `slogan` _string_ - min: 1  
        _The slogan of the brand._
    -   `logoURL?` _string_ - uri  
        _The logo URL of the brand._
    -   `faviconURL?` _string_ - uri  
        _The favicon URL of the brand._
    -   `primaryColor?` _string_  
        _The primary color for actions, buttons, and text links. Accepts 3 or 6 digit hex code values._
    -   `primaryColorHover?` _string_  
        _The hover color for primary actions, buttons, and text links. Accepts 3 or 6 digit hex code values._
    -   `secondaryColor?` _string_  
        _The secondary color for background accents in the UI. Accepts 3 or 6 digit hex code values._
    -   `tertiaryColor?` _string_  
        _The tertiary color for background accents in the UI. Accepts 3 or 6 digit hex code values._

-   **See**: [Update a Brand Profile](https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand-profile)

#### BrandSettingAPI

Manages brand setting operations.

##### `updateBrandSetting(id: IdType, params: IUpdateBrandSettingParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Updates a brand's settings by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the brand._
    -   `params` _IUpdateBrandSettingParams_  
        _Parameters for updating brand settings._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateBrandSettingParams Fields**:

    -   `domainWhiteListURLs?` _string_  
        _The whitelisted domain URLs for the brand._
    -   `googleAnalyticsAccount?` _string_  
        _The Google Analytics account ID for tracking._
    -   `reCaptchaKey?` _string_  
        _The reCAPTCHA key for verification._
    -   `coinCurrencyCode?` _string_  
        _The coin earning code of the brand system._
    -   `cdnURL?` _string_  
        _The CDN URL for serving assets._
    -   `cdnFolder?` _string_  
        _The CDN folder path for organizing assets._
    -   `passwordPolicyLevel?` _PasswordPolicyLevel_  
        _The password policy level. Options: 1 - Low, 2 - Medium, 3 - High._

-   **See**: [Update a Brand Setting](https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand-setting)

#### EmailAddressAPI

Manages email addresses associated with brands.

##### `createEmailAddress(params: ICreateEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailAddress>>`

**Creates an email address for a brand.**

-   **Parameters**:

    -   `params` _ICreateEmailAddressParams_  
        _Parameters for creating an email address._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateEmailAddressParams Fields**:

    -   `brandId` _IdType_  
        _The ID of the brand._
    -   `placeholderKeyTitle?` _string_  
        _The placeholder key for the email title, related to email templates._
    -   `title` _string_ - min: 1  
        _The title of the email address._
    -   `placeholderKeyEmailAddress?` _string_  
        _The placeholder key for the email address, related to email templates._
    -   `emailAddress` _string_ - email - min: 1  
        _The email address value._
    -   `description?` _string_  
        _The description of the email address._

-   **See**: [Create an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/create-an-email-address)

##### `deleteEmailAddress(params: IDeleteEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an email address.**

-   **Parameters**:

    -   `params` _IDeleteEmailAddressParams_  
        _Parameters for deleting an email address._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IDeleteEmailAddressParams Fields**:

    -   `brandId` _IdType_  
        _The ID of the brand._
    -   `emailAddressId` _IdType_  
        _The ID of the email address to delete._

-   **See**: [Delete an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/delete-an-email-address)

##### `getEmailAddress(params: IGetEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailAddress>>`

**Gets an email address.**

-   **Parameters**:

    -   `params` _IGetEmailAddressParams_  
        _Parameters for getting an email address._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetEmailAddressParams Fields**:

    -   `brandId` _IdType_  
        _The ID of the brand._
    -   `emailAddressId` _IdType_  
        _The ID of the email address to retrieve._

-   **See**: [Get an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/get-an-email-address)

##### `getEmailAddresses(brandId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailAddress[]>>`

**Gets email addresses for a brand.**

-   **Parameters**:

    -   `brandId` _IdType_  
        _The ID of the brand._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Email Addresses](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/get-email-addresses)

##### `updateEmailAddress(emailAddressId: IdType, params: IUpdateEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailAddress>>`

**Updates an email address.**

-   **Parameters**:

    -   `emailAddressId` _IdType_  
        _The ID of the email address._
    -   `params` _IUpdateEmailAddressParams_  
        _Parameters for updating an email address._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateEmailAddressParams Fields**:

    -   `brandId` _IdType_  
        _The ID of the brand._
    -   `placeholderKeyTitle?` _string_  
        _The placeholder key for the email title, related to email templates._
    -   `title` _string_ - min: 1  
        _The title of the email address._
    -   `placeholderKeyEmailAddress?` _string_  
        _The placeholder key for the email address, related to email templates._
    -   `emailAddress` _string_ - email - min: 1  
        _The email address value._
    -   `description?` _string_  
        _The description of the email address._

-   **See**: [Update an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/update-an-email-address)

### CDN API

The `cdn` object manages files on the Content Delivery Network (CDN).

#### `deleteFileCDN(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a file from the CDN.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the file._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a File CDN](https://developers.jframework.io/references/api-reference/endpoints/cdn/delete-a-file-cdn)

#### `getFileCDN(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IFileCDN>>`

**Gets a file from the CDN by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the file._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a File CDN](https://developers.jframework.io/references/api-reference/endpoints/cdn/get-a-file-cdn)

#### `getFilesCDN(params?: IGetFilesCDNParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IFileCDN>>`

**Gets a list of CDN items.**

-   **Parameters**:

    -   `params?` _IGetFilesCDNParams_  
        _Parameters for getting CDN files._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetFilesCDNParams Fields**:

    -   `userId?` _IdType_  
        _The ID of the user._
    -   `refObject?` _string_  
        _The reference object for filtering._
    -   `refId?` _number_ - int64  
        _The reference identifier for filtering._
    -   `mimeType?` _string_  
        _The MIME type for filtering._
    -   `originalFilename?` _string_  
        _The original file name for filtering._

-   **See**: [Get Files CDN](https://developers.jframework.io/references/api-reference/endpoints/cdn/get-files-cdn)

#### `uploadFileCDN(params: IUploadFileParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUploadedFileCDN>>`

**Uploads a file to the CDN. The `CdnPathType` specifies the root folder, defaulting to "User".**

-   **Parameters**:

    -   `params` _IUploadFileParams_  
        _Parameters for uploading a file._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUploadFileParams Fields**:

    -   `zOrder?` _number_ - int64  
        _The z-order of the uploaded file. Default value is 0 (e.g., 1, 2, 3, etc.)._
    -   `uploadFile` _File_  
        _The file to upload._
    -   `fileName?` _string_  
        _The name to save the file as (e.g., "profile.jpg", "feedback.png"). If not set, uses the uploaded file's name._
    -   `prefixFolder?` _string_  
        _The prefix folder before the file name (e.g., "profile", "assets")._
    -   `refObject?` _string_  
        _The object reference for the uploaded file._
    -   `refId?` _IdType_ - int64  
        _The reference ID of the uploaded file, used to reference the object ID._
    -   `notes?` _string_  
        _Notes for the uploaded file (e.g., "Profile picture", "Feedback screenshot")._
    -   `tags?` _string_  
        _Tags for the uploaded file (e.g., "#MyProfile", "#Feedback")._
    -   `cdnPathType?` _CDNFilePathType_  
        _The CDN path type specifying the root folder._
    -   `testMode?` _boolean_  
        _Indicates if the file upload is in test mode._

-   **See**: [Upload File](https://developers.jframework.io/references/api-reference/endpoints/cdn/upload-file)

#### `uploadFile(params: IUploadFileParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUploadedFileCDN>>`

**Deprecated. Use `uploadFileCDN` instead.**

-   **Parameters**:

    -   `params` _IUploadFileParams_  
        _Parameters for uploading a file._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUploadFileParams Fields**:

    -   `zOrder?` _number_ - int64  
        _The z-order of the uploaded file. Default value is 0 (e.g., 1, 2, 3, etc.)._
    -   `uploadFile` _File_  
        _The file to upload._
    -   `fileName?` _string_  
        _The name to save the file as (e.g., "profile.jpg", "feedback.png"). If not set, uses the uploaded file's name._
    -   `prefixFolder?` _string_  
        _The prefix folder before the file name (e.g., "profile", "assets")._
    -   `refObject?` _string_  
        _The object reference for the uploaded file._
    -   `refId?` _IdType_ - int64  
        _The reference ID of the uploaded file, used to reference the object ID._
    -   `notes?` _string_  
        _Notes for the uploaded file (e.g., "Profile picture", "Feedback screenshot")._
    -   `tags?` _string_  
        _Tags for the uploaded file (e.g., "#MyProfile", "#Feedback")._
    -   `cdnPathType?` _CDNFilePathType_  
        _The CDN path type specifying the root folder._
    -   `testMode?` _boolean_  
        _Indicates if the file upload is in test mode._

-   **See**: [Upload File](https://developers.jframework.io/references/api-reference/endpoints/cdn/upload-file)

### City API

The `city` object manages city data.

#### `getCities(params?: IGetCitiesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ICity>>`

**Gets a list of all cities.**

-   **Parameters**:

    -   `params?` _IGetCitiesParams_  
        _Parameters for getting cities._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetCitiesParams Fields**:

    -   `keywords?` _string_  
        _The keywords for filtering cities._
    -   `countryCode?` _string_  
        _The country code for filtering (ISO 3166-1 alpha-2, e.g., "US", "VN")._
    -   `stateCode?` _string_  
        _The state code for filtering._
    -   `name?` _string_  
        _The city name for filtering._

-   **See**: [Get Cities](https://developers.jframework.io/references/api-reference/endpoints/cities)

### Commission Rate API

The `commissionRate` object manages commission rates.

#### `createCommissionRate(params?: ICreateCommissionRateParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICommissionRate>>`

**Creates a new commission rate.**

-   **Parameters**:

    -   `params?` _ICreateCommissionRateParams_  
        _Parameters for creating a commission rate._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateCommissionRateParams Fields**:

    -   `type?` _CommissionRateType_  
        _The type of the commission rate._
    -   `unit` _string_ - min: 1  
        _The unit of the commission rate._
    -   `quantityFrom?` _number_ - int32  
        _The starting quantity for the commission rate._
    -   `quantityTo?` _number_ - int32  
        _The ending quantity for the commission rate._
    -   `percentage` _number_ - double  
        _The percentage of the commission rate._
    -   `description?` _string_  
        _The description of the commission rate._
    -   `isDefault?` _boolean_  
        _Indicates if this is the default commission rate._

-   **See**: [Create a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/create-a-commission-rate)

#### `deleteCommissionRate(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a commission rate by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the commission rate._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/delete-a-commission-rate)

#### `getCommissionRate(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ICommissionRate>>`

**Gets a commission rate by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the commission rate._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-a-commission-rate)

#### `getDiscountValue(quantity: number, config?: AxiosRequestConfig) => Promise<HttpResponse<number>>`

**Gets the discount value based on quantity, using the user's commission rate.**

-   **Parameters**:

    -   `quantity` _number_  
        _The quantity to check for discount._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Discount Value](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-discount-value)

#### `getCommissionRates(params?: IGetCommissionRatesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICommissionRate[]>>`

**Gets a list of commission rates.**

-   **Parameters**:

    -   `params?` _IGetCommissionRatesParams_  
        _Parameters for getting commission rates._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetCommissionRatesParams Fields**:

    -   `type?` _CommissionRateType_  
        _Filter by type. The type can be one of the following: Discount, Commission._
    -   `unit?` _string_  
        _The unit of the commission rate._
    -   `isDefault?` _boolean_  
        _Filter by whether the commission rate is default._

-   **See**: [Get Commission Rates](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-commission-rates)

#### `updateCommissionRate(id: IdType, params?: IUpdateCommissionRateParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Updates a commission rate by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the commission rate._
    -   `params?` _IUpdateCommissionRateParams_  
        _Parameters for updating a commission rate._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateCommissionRateParams Fields**:

    -   `type?` _CommissionRateType_  
        _The type of the commission rate._
    -   `unit` _string_ - min: 1  
        _The unit of the commission rate._
    -   `quantityFrom?` _number_ - int32  
        _The starting quantity for the commission rate._
    -   `quantityTo?` _number_ - int32  
        _The ending quantity for the commission rate._
    -   `percentage` _number_ - double  
        _The percentage of the commission rate._
    -   `description?` _string_  
        _The description of the commission rate._
    -   `isDefault?` _boolean_  
        _Indicates if this is the default commission rate._

-   **See**: [Update a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/update-a-commission-rate)

### Configuration API

The `configuration` object manages configurations.

#### `createConfiguration(params: ICreateConfigurationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration>>`

**Creates a new configuration.**

-   **Parameters**:

    -   `params` _ICreateConfigurationParams_  
        _Parameters for creating a configuration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateConfigurationParams Fields**:

    -   `groupCode` _string_ - min: 1  
        _The group code of the configuration._
    -   `code` _string_ - min: 1  
        _The code of the configuration._
    -   `name` _string_ - min: 1  
        _The name of the configuration._
    -   `description?` _string_  
        _The description of the configuration._
    -   `value` _string_ - min: 1  
        _The value of the configuration._
    -   `status?` _ConfigurationStatus_  
        _The status of the configuration._

-   **See**: [Create a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/create-a-configuration)

#### `deleteConfiguration(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a configuration by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the configuration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/delete-a-configuration)

#### `getConfigurations(params?: IGetConfigurationsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration[]>>`

**Gets a list of configurations.**

-   **Parameters**:

    -   `params?` _IGetConfigurationsParams_  
        _Parameters for getting configurations._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetConfigurationsParams Fields**:

    -   `groupCode?` _string_  
        _Filter by group code._
    -   `code?` _string_  
        _Filter by code._
    -   `name?` _string_  
        _Filter by name._
    -   `description?` _string_  
        _Filter by description._
    -   `value?` _string_  
        _Filter by value._
    -   `status?` _ConfigurationStatus_  
        _Filter by status._

-   **See**: [Get Configurations](https://developers.jframework.io/references/api-reference/endpoints/configurations/get-configurations)

#### `getConfiguration(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration>>`

**Gets a configuration by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the configuration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/get-a-configuration)

#### `updateConfiguration(id: IdType, params: IUpdateConfigurationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<unknown>>`

**Updates a configuration by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the configuration._
    -   `params` _IUpdateConfigurationParams_  
        _Parameters for updating a configuration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateConfigurationParams Fields**:

    -   `groupCode` _string_ - min: 1  
        _The group code of the configuration._
    -   `code` _string_ - min: 1  
        _The code of the configuration._
    -   `name` _string_ - min: 1  
        _The name of the configuration._
    -   `description?` _string_  
        _The description of the configuration._
    -   `value` _string_ - min: 1  
        _The value of the configuration._
    -   `status?` _ConfigurationStatus_  
        _The status of the configuration._

-   **See**: [Update a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/update-a-configuration)

### Constant API

The `constant` object retrieves various constant types and statuses.

#### `getBrandLinkTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all brand link types.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Brand Link](https://developers.jframework.io/references/api-reference/endpoints/constants/brand-link)

#### `getBlackListTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all black list types.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Black List](https://developers.jframework.io/references/api-reference/endpoints/constants/black-list)

#### `getCouponStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all coupon statuses.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Coupon](https://developers.jframework.io/references/api-reference/endpoints/constants/coupon)

#### `getCommissionRateTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all commission rate types.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/constants/commission-rate)

#### `getDeviceStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all device statuses.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Device Status](https://developers.jframework.io/references/api-reference/endpoints/constants/device)

#### `getDeviceTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all device types.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Device Types](https://developers.jframework.io/references/api-reference/endpoints/constants/device)

#### `getInvoiceStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all invoice statuses.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Invoice Status](https://developers.jframework.io/references/api-reference/endpoints/constants/invoice)

#### `getInvoiceTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all invoice types.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Invoice Types](https://developers.jframework.io/references/api-reference/endpoints/constants/invoice)

#### `getIssuePriorities(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all issue priorities.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Issue](https://developers.jframework.io/references/api-reference/endpoints/constants/issue)

#### `getLicenseSources(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all license sources.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [License Sources](https://developers.jframework.io/references/api-reference/endpoints/constants/license)

#### `getLicenseTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all license types.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [License Types](https://developers.jframework.io/references/api-reference/endpoints/constants/license)

#### `getLicenseStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

**Gets all license statuses.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [License Status](https://developers.jframework.io/references/api-reference/endpoints/constants/license)

### Country API

The `country` object manages country data.

#### `getCountries(config?: AxiosRequestConfig) => Promise<HttpResponse<ICountry[]>>`

**Gets a list of all countries.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetCountriesParams Fields**:

    -   `region?` _string_  
        _The region of the country._
    -   `subregion?` _string_  
        _The subregion of the country._
    -   `codeAlpha2?` _string_  
        _The code alpha 2 of the country._
    -   `codeAlpha3?` _string_  
        _The code alpha 3 of the country._
    -   `codeNumeric?` _number_ - int32  
        _The code numeric of the country._
    -   `codePhone?` _string_  
        _The code phone of the country._
    -   `name?` _string_  
        _The name of the country._
    -   `capital?` _string_  
        _The capital of the country._
    -   `currency?` _string_  
        _The currency of the country._
    -   `tld?` _string_  
        _The tld of the country._
    -   `native?` _string_  
        _The native of the country._
    -   `tags?` _string_  
        _The tags of the country._
    -   `keywords?` _string_  
        _Filter by keywords._

-   **See**: [Get Countries](https://developers.jframework.io/references/api-reference/endpoints/countries)

### Coupon API

The `coupon` object manages coupons.

#### `createCoupon(params: ICreateCouponParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICoupon>>`

**Creates a new coupon.**

-   **Parameters**:

    -   `params` _ICreateCouponParams_  
        _Parameters for creating a coupon._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateCouponParams Fields**:

    -   `name` _string_ - min: 1  
        _The name of the coupon._
    -   `code` _string_ - min: 1  
        _The code of the coupon._
    -   `percentage?` _number_ - double  
        _The percentage of the coupon._
    -   `quantity?` _number_ - int32  
        _The quantity of the coupon._
    -   `startDate` _DateType_ - date-time  
        _The start date and time of the coupon._
    -   `endDate` _DateType_ - date-time  
        _The end date and time of the coupon._
    -   `autoApplyToPrice?` _boolean_  
        _Is the coupon auto apply to price. If true, the coupon will be applied to the price automatically._
    -   `description?` _string_  
        _The description of the coupon._
    -   `tags?` _string_  
        _The tags of the coupon._
    -   `status?` _CouponStatus_  
        _The status of the coupon._
    -   `testMode?` _boolean_  
        _The test mode of the coupon._

-   **See**: [Create a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/create-a-coupon)

#### `deleteCoupon(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a coupon by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the coupon._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/delete-a-coupon)

#### `getCoupon(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ICoupon>>`

**Gets a coupon by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the coupon._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/get-a-coupon)

#### `getCoupons(params?: IGetCouponsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ICoupon>>`

**Gets a list of coupons.**

-   **Parameters**:

    -   `params?` _IGetCouponsParams_  
        _Parameters for getting coupons._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetCouponsParams Fields**:

    -   `name?` _string_  
        _Filter by the name of the coupon._
    -   `code?` _string_  
        _Filter by the code of the coupon._
    -   `description?` _string_  
        _Filter by the description of the coupon._
    -   `percentage?` _number_ - double  
        _Filter by the percentage of the coupon._
    -   `quantity?` _number_ - int32  
        _Filter by the quantity of the coupon._
    -   `autoApplyToPrice?` _boolean_  
        _Filter by the auto apply to price of the coupon._
    -   `tags?` _string_  
        _Filter by the tags of the coupon._
    -   `status?` _CouponStatus_  
        _Filter by the status of the coupon._
    -   `keywords?` _string_  
        _Filter by the keywords of the coupon._
    -   `testMode?` _boolean_  
        _Filter by the test mode of the coupon._

-   **See**: [Get Coupons](https://developers.jframework.io/references/api-reference/endpoints/coupons/get-coupons)

#### `updateCoupon(id: IdType, params: IUpdateCouponParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICoupon>>`

**Updates a coupon by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the coupon._
    -   `params` _IUpdateCouponParams_  
        _Parameters for updating a coupon._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateCouponParams Fields**:

    -   `name` _string_ - min: 1  
        _The name of the coupon._
    -   `code` _string_ - min: 1  
        _The code of the coupon._
    -   `percentage?` _number_ - double  
        _The percentage of the coupon._
    -   `quantity?` _number_ - int32  
        _The quantity of the coupon._
    -   `startDate` _DateType_ - date-time  
        _The start date and time of the coupon._
    -   `endDate` _DateType_ - date-time  
        _The end date and time of the coupon._
    -   `autoApplyToPrice?` _boolean_  
        _Is the coupon auto apply to price. If true, the coupon will be applied to the price automatically._
    -   `description?` _string_  
        _The description of the coupon._
    -   `tags?` _string_  
        _The tags of the coupon._
    -   `status?` _CouponStatus_  
        _The status of the coupon._
    -   `testMode?` _boolean_  
        _The test mode of the coupon._

-   **See**: [Update a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/update-a-coupon)

### Cryptography API

The `cryptography` object provides simple encryption and decryption utilities.

> ⚠️ These methods are **not secure** and should not be used for sensitive data.

#### `decrypt(cipherText: string, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Decrypts a string.**

-   **Parameters**:

    -   `cipherText` _string_ - min: 1  
        _The cipher text to decrypt._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Decrypt](https://developers.jframework.io/references/api-reference/endpoints/reame/decrypt)

---

#### `encrypt(plainText: string, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Encrypts a string.**

-   **Parameters**:

    -   `plainText` _string_  
        _The plain text to encrypt._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Encrypt](https://developers.jframework.io/references/api-reference/endpoints/reame/encrypt)

### Currency API

The `currency` object manages currency data.

#### `getCurrencies(config?: AxiosRequestConfig) => Promise<HttpResponse<ICurrency[]>>`

**Gets a list of all currencies.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetCurrenciesParams Fields**:

    -   `code?` _string_  
        _The code of the currency._
    -   `name?` _string_  
        _The name of the currency._
    -   `namePlural?` _string_  
        _The plural name of the currency._
    -   `symbol?` _string_  
        _The symbol of the currency._
    -   `symbolNative?` _string_  
        _The native symbol of the currency._
    -   `decimalDigits?` _number_ - int32  
        _The number of decimal digits for the currency._
    -   `rounding?` _number_ - double  
        _The rounding value for the currency._
    -   `tags?` _string_  
        _The tags for the currency._
    -   `isCoin?` _boolean_  
        _Flag to indicate if the currency is a coin._
    -   `keywords?` _string_  
        _The keywords for the currency._

-   **See**: [Get Currencies](https://developers.jframework.io/references/api-reference/endpoints/currencies)

### Device API

The `device` object manages device data.

#### `createDevice(params: ICreateDeviceParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IDevice>>`

**Creates a new device.**

-   **Parameters**:

    -   `params` _ICreateDeviceParams_  
        _Parameters for creating a device._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateDeviceParams Fields**:

    -   `type` _DeviceType_  
        _The type of the device._
    -   `code` _string_ - min: 1  
        _The code of the device._
    -   `isMobileApp?` _boolean_  
        _Flag indicating if the device is a mobile app._
    -   `tags?` _string_  
        _The tags of the device._
    -   `status?` _DeviceStatus_  
        _The status of the device._
    -   `isDefault?` _boolean_  
        _Flag indicating if the device is the default device._
    -   `testMode?` _boolean_  
        _The test mode of the device._
    -   `name` _string_ - min: 1  
        _The name of the device._
    -   `phoneNumber?` _string_  
        _The phone number of the device._
    -   `osDevice` _string_ - min: 1  
        _The operating system of the device._
    -   `appVersionNumber` _string_ - min: 1  
        _The version of the operating system of the device._
    -   `iccid?` _string_  
        _The ICCID of the device._
    -   `imsi?` _string_  
        _The IMSI of the device._
    -   `imei?` _string_  
        _The IMEI of the device._
    -   `simCardInfo?` _string_  
        _The SIM card info of the device._

-   **See**: [Create a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/create-a-device)

#### `deleteDevice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a device by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the device._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/delete-a-device)

#### `getDeviceByCode(deviceCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IDevice>>`

**Gets a device by its code.**

-   **Parameters**:

    -   `deviceCode` _string_  
        _The code of the device._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Device by Code](https://developers.jframework.io/references/api-reference/endpoints/devices/get-a-device-by-code)

#### `getDevice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IDevice>>`

**Gets a device by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the device._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/get-a-device)

#### `getDevicesByListOfDeviceCodes(codes: string[], config?: AxiosRequestConfig) => Promise<HttpResponse<IDevice[]>>`

**Gets devices by a list of device codes.**

-   **Parameters**:

    -   `codes` _string[]_  
        _The list of device codes._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Devices by List of Codes](https://developers.jframework.io/references/api-reference/endpoints/devices/get-devices-by-list-code)

#### `getDevices(params?: IGetDevicesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IDevice>>`

**Gets a list of devices.**

-   **Parameters**:

    -   `params?` _IGetDevicesParams_  
        _Parameters for getting devices._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetDevicesParams Fields**:

    -   `userId?` _string_  
        _Filter by ID of the user._
    -   `type?` _DeviceType_  
        _Filter by type of the device._
    -   `code?` _string_  
        _The code to filter._
    -   `name?` _string_  
        _The name to filter._
    -   `isMobileApp?` _boolean_  
        _Filter with is mobile app._
    -   `testMode?` _boolean_  
        _The test mode to filter._
    -   `status?` _DeviceStatus_  
        _The status to filter._
    -   `keywords?` _string_  
        _The keywords to filter._

-   **See**: [Get Devices](https://developers.jframework.io/references/api-reference/endpoints/devices/get-devices)

#### `updateDevice(id: IdType, params: IUpdateDeviceParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IDevice>>`

**Updates a device by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the device._
    -   `params` _IUpdateDeviceParams_  
        _Parameters for updating a device._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateDeviceParams Fields**:

    -   `name` _string_ - min: 1  
        _The name of the device._
    -   `phoneNumber?` _string_  
        _The phone number of the device._
    -   `tags?` _string_  
        _The tags of the device._
    -   `status?` _DeviceStatus_  
        _The status of the device._

-   **See**: [Update a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/update-a-device)

#### `checkUserAccessDevice(params: ICheckUserAccessDeviceParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Checks if a user has access to a device.**

-   **Parameters**:

    -   `params` _ICheckUserAccessDeviceParams_  
        _Parameters for checking user access to a device._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICheckUserAccessDeviceParams Fields**:

    -   `userId` _IdType_  
        _The ID of the user._
    -   `deviceCode` _string_  
        _The device code of the user._

-   **See**: [Check User Access Device](https://developers.jframework.io/references/api-reference/endpoints/devices/check-user-access-device)

#### `refreshDeviceToken(params: IRefreshDeviceTokenParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Refreshes a mobile device token for Firebase push notifications.**

-   **Parameters**:

    -   `params` _IRefreshDeviceTokenParams_  
        _Parameters for refreshing a device token._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IRefreshDeviceTokenParams Fields**:

    -   `oldToken` _string_ - min: 1  
        _The previous Firebase device token that is now obsolete._
    -   `newToken` _string_ - min: 1  
        _The new Firebase device token to replace the old one._

-   **See**: [Refresh Device Token](https://developers.jframework.io/references/api-reference/endpoints/devices/refresh-device-token)

### Domain API

The `domain` object manages domain-related operations.

#### BrandLinksAPI

Manages brand link operations.

##### `createBrandLink(params: ICreateBrandLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrandLink>>`

**Creates a new brand link.**

-   **Parameters**:

    -   `params` _ICreateBrandLinkParams_  
        _Parameters for creating a brand link._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Create a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/create-a-brand-link)

##### `deleteBrandLink(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a brand link by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the brand link._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/delete-a-brand-link)

##### `getBrandLink(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrandLink>>`

**Gets a brand link by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the brand link._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/get-a-brand-link)

##### `getBrandLinks(params?: IGetBrandLinksParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IBrandLink>>`

**Gets a list of brand links.**

-   **Parameters**:

    -   `params?` _IGetBrandLinksParams_  
        _Parameters for getting brand links._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Brand Links](https://developers.jframework.io/references/api-reference/endpoints/domains/get-brand-links)

##### `updateBrandLink(id: IdType, params: IUpdateBrandLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrandLink>>`

**Updates a brand link by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the brand link._
    -   `params` _IUpdateBrandLinkParams_  
        _Parameters for updating a brand link._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Update a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/update-a-brand-link)

#### `getDomains(params?: IGetDomainsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IDomain>>`

**Gets a list of domains.**

-   **Parameters**:

    -   `params?` _IGetDomainsParams_  
        _Parameters for getting domains._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetDomainsParams Fields**:

    -   `type?` _DomainType_  
        _The type of the domain._
    -   `protocol?` _DomainProtocol_  
        _The protocol of the domain._
    -   `domain?` _string_  
        _The domain name._
    -   `keywords?` _string_  
        _The keywords of the domain._
    -   `verified?` _boolean_  
        _Filter by the verified domain._
    -   `isDefault?` _boolean_  
        _Filter by the default domain._
    -   `isPrimary?` _boolean_  
        _Filter by the primary domain._

-   **See**: [Get Domains](https://developers.jframework.io/references/api-reference/endpoints/domains/get-domains)

### Event API

The `event` object manages events and their associated templates.

#### `getEvent(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IEvent>>`

**Gets an event by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the event._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get an Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-an-event)

#### `getEmailTemplateDefaultByEvent(eventId: IdType, params: IGetEmailTemplateDefaultByEventParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IDefaultEmailTemplate>>`

**Gets the default email template for an event by ID and specified language code.**

-   **Parameters**:

    -   `eventId` _IdType_  
        _The ID of the event._
    -   `params` _IGetEmailTemplateDefaultByEventParams_  
        _Parameters for getting the default email template._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetEmailTemplateDefaultByEventParams Fields**:

    -   `languageCode` _string_  
        _The code of the language. The language code must be in the ISO 639-1 format._

-   **See**: [Get Email Template Default by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-email-template-default-by-event)

#### `getEmailTemplateByEvent(eventId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailTemplate>>`

**Gets an email template by event ID.**

-   **Parameters**:

    -   `eventId` _IdType_  
        _The ID of the event._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get an Email Template by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-an-email-template-by-event)

#### `getEvents(params?: IGetEventsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IEvent>>`

**Gets a list of events.**

-   **Parameters**:

    -   `params?` _IGetEventsParams_  
        _Parameters for getting events._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetEventsParams Fields**:

    -   `groupCodeName?` _string_  
        _Filter by GroupCodeName._
    -   `code?` _string_  
        _Filter by Code._
    -   `name?` _string_  
        _Filter by Name._
    -   `description?` _string_  
        _Filter by Description._
    -   `tags?` _string_  
        _Filter by Tags._
    -   `zOrder?` _number_ - int64  
        _Filter by ZOrder._
    -   `status?` _EventStatus_  
        _Filter by Status._
    -   `isSystem?` _boolean_  
        _Filter by IsSystem._
    -   `includeParentBrand?` _boolean_  
        _Filter by IncludeParentBrand._
    -   `keywords?` _string_  
        _Filter by Keywords._

-   **See**: [Get Events](https://developers.jframework.io/references/api-reference/endpoints/events/get-events)

#### `getEventsEarningWallet(params?: IGetEventsEarningWalletParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IWalletEarningEvent>>`

**Gets events related to wallet earnings (default type: Earning).**

-   **Parameters**:

    -   `params?` _IGetEventsEarningWalletParams_  
        _Parameters for getting wallet earning events._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetEventsEarningWalletParams Fields**:

    -   `type?` _string_  
        _The type of the wallet earning event. The value can be Earning or Redeem._

-   **See**: [Get Events Earning Wallet](https://developers.jframework.io/references/api-reference/endpoints/events/get-events-earning-wallet)

#### `getEventsAssociatedWithEmailTemplates(config?: AxiosRequestConfig) => Promise<HttpResponse<IEvent[]>>`

**Gets events associated with email templates.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Events Email Templates](https://developers.jframework.io/references/api-reference/endpoints/events/get-events-email-templates)

#### `getEventsAssociatedWithPhoneTemplates(config?: AxiosRequestConfig) => Promise<HttpResponse<IEvent[]>>`

**Gets events associated with phone templates.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Events Phone Templates](https://developers.jframework.io/references/api-reference/endpoints/events/get-events-phone-templates)

#### `getPhoneTemplateByEvent(eventId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPhoneTemplate>>`

**Gets a phone template by event ID.**

-   **Parameters**:

    -   `eventId` _IdType_  
        _The ID of the event._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Phone Template by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-phone-template-by-event)

#### `getPhoneTemplateDefaultByEvent(eventId: IdType, params: IGetPhoneTemplateDefaultByEventParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IDefaultPhoneTemplate>>`

**Gets the default phone template for an event by ID and specified language code.**

-   **Parameters**:

    -   `eventId` _IdType_  
        _The ID of the event._
    -   `params` _IGetPhoneTemplateDefaultByEventParams_  
        _Parameters for getting the default phone template._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetPhoneTemplateDefaultByEventParams Fields**:

    -   `languageCode` _string_  
        _The code of the language. The language code must be in the ISO 639-1 format._

-   **See**: [Get Phone Template Default by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-phone-template-default-by-event)

### Exchange Rate API

The `exchangeRate` object manages exchange rates and currency conversions.

#### `getExchangeRates(config?: AxiosRequestConfig) => Promise<HttpResponse<IExchangeRate[]>>`

**Gets all exchange rates in the system, relative to the base USD currency.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Exchange Rates](https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/get-exchange-rates)

#### `convertCurrency(params: IConvertCurrencyParams, config?: AxiosRequestConfig) => Promise<HttpResponse<number>>`

**Converts an amount from one currency to another.**

-   **Parameters**:

    -   `params` _IConvertCurrencyParams_  
        _Parameters for converting currency._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IConvertCurrencyParams Fields**:

    -   `fromCurrency` _string_  
        _The currency to convert from._
    -   `toCurrency` _string_  
        _The currency to convert to._
    -   `amount` _number_ - double  
        _The amount to convert._

-   **See**: [Convert Currency](https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/convert-currency)

### Feature API

The `feature` object manages features and their associated packages.

#### `addPackagesToFeature(featureId: IdType, params: IAddPackageToFeatureParams[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Adds packages to a feature.**

-   **Parameters**:

    -   `featureId` _IdType_  
        _The ID of the feature._
    -   `params` _IAddPackageToFeatureParams[]_  
        _Parameters for adding packages to a feature._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IAddPackageToFeatureParams Fields**:

    -   `packageId` _IdType_ - min: 1  
        _The ID of the package._

-   **See**: [Add Packages to a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/add-packages-to-a-feature)

#### `createFeature(params: ICreateFeatureParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IFeature>>`

**Creates a new feature.**

-   **Parameters**:

    -   `params` _ICreateFeatureParams_  
        _Parameters for creating a feature._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateFeatureParams Fields**:

    -   `eventId?` _IdType_ - min: 1  
        _The event ID. This value represents the event that the feature belongs to. (Deprecated: Will be removed in the future.)_
    -   `type?` _FeatureType_  
        _The type of the feature._
    -   `code` _string_ - min: 1  
        _The code of the feature._
    -   `name` _string_ - min: 1  
        _The name of the feature._
    -   `unit?` _string_  
        _The unit of the feature._
    -   `defaultValue?` _number_ - int32  
        _The default value of the feature._
    -   `helpURL?` _string_ - uri  
        _The help URL of the feature. This value must be a valid URL._
    -   `image?` _string_ - uri  
        _The image of the feature. This value must be a valid URL._
    -   `styles?` _string_  
        _The style of the feature. It is a JSON string. You can use this property to store the CSS styles of the feature._
    -   `description?` _string_  
        _The description of the feature. The description can be a long text._
    -   `tags?` _string_  
        _The tags of the feature. You can use this property to store the tags of the feature._
    -   `zOrder?` _number_ - int64  
        _The zOrder number in the list. This property is used to sort the features in the list when displaying them._
    -   `status?` _FeatureStatus_  
        _The status of the feature._

-   **See**: [Create a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/create-a-feature)

#### `deleteFeature(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a feature by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the feature._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/delete-a-feature)

#### `getFeature(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IFeature>>`

**Gets a feature by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the feature._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/get-a-feature)

#### `getFeatures(params?: IGetFeaturesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IFeature>>`

**Gets a list of features.**

-   **Parameters**:

    -   `params?` _IGetFeaturesParams_  
        _Parameters for getting features._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetFeaturesParams Fields**:

    -   `packageId?` _IdType_  
        _Filter by the package ID._
    -   `eventId?` _IdType_  
        _Filter by the event ID. (Deprecated: Will be removed in the future.)_
    -   `type?` _FeatureType_  
        _Filter by the feature type._
    -   `code?` _string_  
        _Filter by the code._
    -   `name?` _string_  
        _Filter by the name._
    -   `description?` _string_  
        _Filter by the description._
    -   `tags?` _string_  
        _Filter by the tags._
    -   `notes?` _string_  
        _Filter by the notes._
    -   `status?` _FeatureStatus_  
        _Filter by the status._
    -   `keywords?` _string_  
        _Filter by the keywords._

-   **See**: [Get Features](https://developers.jframework.io/references/api-reference/endpoints/features/get-features)

#### `getPackagesFromFeature(featureId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage[]>>`

**Gets packages associated with a feature.**

-   **Parameters**:

    -   `featureId` _IdType_  
        _The ID of the feature._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Packages from Feature](https://developers.jframework.io/references/api-reference/endpoints/features/get-packages-from-feature)

#### `removePackagesFromFeature(featureId: IdType, packageIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Removes packages from a feature.**

-   **Parameters**:

    -   `featureId` _IdType_  
        _The ID of the feature._
    -   `packageIds` _IdType[]_  
        _The IDs of the packages to remove._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Remove Packages from a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/remove-packages-from-a-feature)

#### `updateFeature(id: IdType, params: IUpdateFeatureParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IFeature>>`

**Updates a feature by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the feature._
    -   `params` _IUpdateFeatureParams_  
        _Parameters for updating a feature._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateFeatureParams Fields**:

    -   `eventId?` _IdType_ - min: 1  
        _The event ID. This value represents the event that the feature belongs to. (Deprecated: Will be removed in the future.)_
    -   `type?` _FeatureType_  
        _The type of the feature._
    -   `code` _string_ - min: 1  
        _The code of the feature._
    -   `name` _string_ - min: 1  
        _The name of the feature._
    -   `unit?` _string_  
        _The unit of the feature._
    -   `defaultValue?` _number_ - int32  
        _The default value of the feature._
    -   `helpURL?` _string_ - uri  
        _The help URL of the feature. This value must be a valid URL._
    -   `image?` _string_ - uri  
        _The image of the feature. This value must be a valid URL._
    -   `styles?` _string_  
        _The style of the feature. It is a JSON string. You can use this property to store the CSS styles of the feature._
    -   `description?` _string_  
        _The description of the feature. The description can be a long text._
    -   `tags?` _string_  
        _The tags of the feature. You can use this property to store the tags of the feature._
    -   `zOrder?` _number_ - int64  
        _The zOrder number in the list. This property is used to sort the features in the list when displaying them._
    -   `status?` _FeatureStatus_  
        _The status of the feature._

-   **See**: [Update a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/update-a-feature)

### Invoice API

The `invoice` object manages invoices.

#### `deleteInvoice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an invoice by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the invoice._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete an Invoice](https://developers.jframework.io/references/api-reference/endpoints/invoices/delete-an-invoice)

#### `getInvoices(params?: IGetInvoicesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IInvoice>>`

**Gets a list of invoices.**

-   **Parameters**:

    -   `params?` _IGetInvoicesParams_  
        _Parameters for getting invoices._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetInvoicesParams Fields**:

    -   `userId?` _IdType_  
        _The ID of the user. If not provided, it will be the current user._
    -   `packageId?` _IdType_  
        _The package ID._
    -   `subscriptionTypeId?` _IdType_  
        _Filter by the subscription type ID._
    -   `type?` _InvoiceType_  
        _Filter by the invoice type._
    -   `code?` _string_  
        _Filter by the invoice code._
    -   `name?` _string_  
        _Filter by the invoice name._
    -   `description?` _string_  
        _Filter by the invoice description._
    -   `notes?` _string_  
        _Filter by the invoice notes._
    -   `tags?` _string_  
        _Filter by the invoice tags._
    -   `reminderedCount?` _number_ - int32  
        _Filter by the number of reminders sent._
    -   `deliveryInstructions?` _string_  
        _Filter by the delivery instructions._
    -   `confirmedDeliveryDate?` _DateType_ - date-time  
        _Filter by the confirmed delivery date._
    -   `invoiceDate?` _DateType_ - date-time  
        _Filter by the invoice date._
    -   `overdueDate?` _DateType_ - date-time  
        _Filter by the due date._
    -   `status?` _InvoiceStatus_  
        _Filter by the status._
    -   `keywords?` _string_  
        _Filter by the keywords._
    -   `testMode?` _boolean_  
        _Filter by the test mode. By default, it is false._

-   **See**: [Get Invoices](https://developers.jframework.io/references/api-reference/endpoints/invoices/get-invoices)

#### `getInvoice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IInvoice>>`

**Gets an invoice by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the invoice._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get an Invoice](https://developers.jframework.io/references/api-reference/endpoints/invoices/get-a-invoice)

#### `downloadInvoice(id: IdType, config?: AxiosRequestConfig) => Promise<Blob>`

**Downloads an invoice by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the invoice._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: (Documentation to be updated in the future)

### Issue API

The `issue` object manages issues and their reactions.

#### `createIssue(params: ICreateIssueParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue>>`

**Creates a new issue.**

-   **Parameters**:

    -   `params` _ICreateIssueParams_  
        _Parameters for creating an issue._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateIssueParams Fields**:

    -   `issueCategoryId?` _IdType_  
        _The ID of the issue category._
    -   `parentId?` _IdType_  
        _The parent ID of the issue. If the issue is a sub-issue, this is the parent issue ID._
    -   `content` _string_ - min: 1  
        _The content of the issue._
    -   `refId?` _number_ - int64  
        _The referrer ID of the issue._
    -   `refObject?` _string_  
        _The referrer object of the issue._
    -   `refType?` _number_ - int32  
        _The referrer type of the issue._
    -   `assigneeId?` _IdType_  
        _Assignee user ID of the issue._
    -   `priority?` _IssuePriority_  
        _The priority of the issue._
    -   `name?` _string_  
        _The name of the issue._
    -   `description?` _string_  
        _The description of the issue._
    -   `issueCc?` _string_  
        _The CC of the issue. This value is the email address of the user._
    -   `tags?` _string_  
        _The tags of the issue._

-   **See**: [Create an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/create-an-issue)

#### `deleteIssue(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an issue by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the issue._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue)

#### `getIssues(params?: IGetIssuesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IIssue>>`

**Gets a list of issues.**

-   **Parameters**:

    -   `params?` _IGetIssuesParams_  
        _Parameters for getting issues._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetIssuesParams Fields**:

    -   `onlyParent?` _boolean_  
        _This property represents the only parent filter._
    -   `userId?` _IdType_  
        _Filter with user ID._
    -   `deviceId?` _IdType_  
        _Filter with device ID._
    -   `assigneeId?` _IdType_  
        _Filter with assignee ID._
    -   `issueTypeId?` _IdType_  
        _Filter with issue type ID._
    -   `parentId?` _IdType_  
        _Filter with parent ID._
    -   `name?` _string_  
        _Filter with name._
    -   `description?` _string_  
        _Filter with description._
    -   `refType?` _number_ - int32  
        _Filter with reference type._
    -   `refObject?` _string_  
        _Filter with reference object._
    -   `refId?` _IdType_  
        _Filter with reference ID._
    -   `content?` _string_  
        _Filter with content._
    -   `issueCc?` _string_  
        _Filter with issue CC._
    -   `tags?` _string_  
        _Filter with tags._
    -   `status?` _IssueStatus_  
        _Filter with status._
    -   `keywords?` _string_  
        _Filter with keywords._

-   **See**: [Get Issues](https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues)

#### `getIssue(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue>>`

**Gets an issue by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the issue._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/get-an-issue)

#### `getIssuesByListId(ids: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue[]>>`

**Gets a list of issues by their IDs (maximum 100 issues).**

-   **Parameters**:

    -   `ids` _IdType[]_  
        _The list of issue IDs._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Issues by List ID](https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues-by-list-id)

#### `getChildrenIssues(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue[]>>`

**Gets the children of an issue by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the issue._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Children Issues](https://developers.jframework.io/references/api-reference/endpoints/issues/get-children-issues)

#### `updateIssue(params: IUpdateIssueParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue>>`

**Updates an issue by ID.**

-   **Parameters**:

    -   `params` _IUpdateIssueParams_  
        _Parameters for updating an issue, including `id`._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateIssueParams Fields**:

    -   `id` _IdType_  
        _The ID of the issue._
    -   `assigneeId?` _IdType_  
        _Assignee user ID of the issue._
    -   `name?` _string_  
        _The name of the issue._
    -   `description?` _string_  
        _The description of the issue._
    -   `content` _string_ - min: 1  
        _The content of the issue._
    -   `priority?` _IssuePriority_  
        _The priority of the issue._
    -   `issueCc?` _string_  
        _The CC of the issue. This value is the email address of the user._
    -   `tags?` _string_  
        _The tags of the issue._
    -   `status?` _IssueStatus_  
        _The status of the issue._

-   **See**: [Update an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/update-an-issue)

#### `createIssueReaction(params: ICreateIssueReactionParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Creates an issue reaction.**

-   **Parameters**:

    -   `params` _ICreateIssueReactionParams_  
        _Parameters for creating an issue reaction._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateIssueReactionParams Fields**:

    -   `issueId` _IdType_ - min: 1  
        _The ID of the issue._
    -   `issueReactionType` _IssueReactionType_  
        _The type of reaction for the issue._
    -   `status` _IssueReactionStatus_  
        _The status of the issue reaction._

-   **See**: [Create an Issue Reaction](https://developers.jframework.io/references/api-reference/endpoints/issues/issue-reactions/create-an-issue-reaction)

#### `deleteIssueReaction(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an issue reaction by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the issue reaction._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete an Issue Reaction](https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue-reaction)

### Issue Category API

The `issueCategory` object manages issue categories.

#### `createIssueCategory(params: ICreateIssueCategoryParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssueCategory>>`

**Creates a new issue category.**

-   **Parameters**:

    -   `params` _ICreateIssueCategoryParams_  
        _Parameters for creating an issue category._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateIssueCategoryParams Fields**:

    -   `groupCode?` _string_  
        _The group code of the issue category. If null, it is a root issue category._
    -   `code` _string_ - min: 1  
        _The code of the issue category._
    -   `name` _string_ - min: 1  
        _The name of the issue category._
    -   `description?` _string_  
        _The description of the issue category._
    -   `tags?` _string_  
        _The tags of the issue category._
    -   `suggestionURL?` _string_ - uri  
        _The links of the issue category._

-   **See**: [Create an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/create-an-issue-category)

#### `deleteIssueCategory(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an issue category by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the issue category._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/delete-an-issue-category)

#### `getIssueCategories(params?: IGetIssueCategoriesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssueCategory[]>>`

**Gets a list of issue categories.**

-   **Parameters**:

    -   `params?` _IGetIssueCategoriesParams_  
        _Parameters for getting issue categories._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetIssueCategoriesParams Fields**:

    -   `groupCode?` _string_  
        _Filter by group code._
    -   `code?` _string_  
        _Filter by code._
    -   `name?` _string_  
        _Filter by name._
    -   `description?` _string_  
        _Filter by description._
    -   `suggestionURL?` _string_  
        _Filter by suggestion URL._
    -   `tags?` _string_  
        _Filter by tags._
    -   `zOrder?` _number_ - int64  
        _Filter by z order._
    -   `status?` _IssueCategoryStatus_  
        _Filter by status. Examples: 0 - Inactive, 1 - Active._
    -   `isSystem?` _boolean_  
        _Filter by is system._

-   **See**: [Get Issue Categories](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-issue-categories)

#### `getIssueCategory(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssueCategory>>`

**Gets an issue category by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the issue category._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-an-issue-category)

#### `updateIssueCategory(id: IdType, params: IUpdateIssueCategoryParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssueCategory>>`

**Updates an issue category by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the issue category._
    -   `params` _IUpdateIssueCategoryParams_  
        _Parameters for updating an issue category._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateIssueCategoryParams Fields**:

    -   `groupCode?` _string_  
        _The group code of the issue category. If null, it is a root issue category._
    -   `code` _string_ - min: 1  
        _The code of the issue category._
    -   `name` _string_ - min: 1  
        _The name of the issue category._
    -   `description?` _string_  
        _The description of the issue category._
    -   `tags?` _string_  
        _The tags of the issue category._
    -   `suggestionURL?` _string_ - uri  
        _The links of the issue category._

-   **See**: [Update an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/update-an-issue-category)

### Language API

The `language` object manages languages.

#### `getLanguages(config?: AxiosRequestConfig) => Promise<HttpResponse<ILanguage[]>>`

**Gets a list of all languages.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Languages](https://developers.jframework.io/references/api-reference/endpoints/languages)

### License API

The `license` object manages licenses.

#### `activateLicense(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicense>>`

**Activates a license based on its current state. If NotStarted, sets StartDate to a valid past date. If Expired, sets EndDate to a future date. If Inactive, sets both if necessary. Does nothing if already Used.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the license._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Activate a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/activate-a-license)

#### `applyLicenseToLoggedUser(licenseCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Applies a license to the logged-in user, enabling the user to use the license's features and sending a notification email.**

-   **Parameters**:

    -   `licenseCode` _string_  
        _The license code to apply._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Applies a License to the Logged User](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-logged-user)

#### `applyLicenseToGivenLoginName(params: IApplyLicenseToGivenLoginNameParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Applies a license code to a user by their login name, enabling the user to use the license's features and sending a notification email.**

-   **Parameters**:

    -   `params` _IApplyLicenseToGivenLoginNameParams_  
        _Parameters for applying a license to a given login name._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IApplyLicenseToGivenLoginNameParams Fields**:

    -   `licenseCode` _string_  
        _The license code._
    -   `loginName` _string_  
        _The login name._

-   **See**: [Applies a License to the Given Login Name](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-login-name)

#### `applyLicenseToGivenUser(params: IApplyLicenseToGivenUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Applies a license code to a user by their user ID, enabling the user to use the license's features and sending a notification email.**

-   **Parameters**:

    -   `params` _IApplyLicenseToGivenUserParams_  
        _Parameters for applying a license to a given user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IApplyLicenseToGivenUserParams Fields**:

    -   `licenseCode` _string_  
        _The license code._
    -   `userId` _IdType_  
        _The user ID._

-   **See**: [Applies a License to the Given User](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-a-user)

#### `checkLicenseCode(licenseCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Checks the status of a given license code.**

-   **Parameters**:

    -   `licenseCode` _string_  
        _The license code to check._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Checks a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/checks-a-license)

#### `createLicenses(params: ICreateLicensesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICountSuccessResponse>>`

**Creates new licenses.**

-   **Parameters**:

    -   `params` _ICreateLicensesParams_  
        _Parameters for creating licenses._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateLicensesParams Fields**:

    -   `packageId` _IdType_ - min: 1  
        _The ID of the package._
    -   `subscriptionTypeId` _IdType_ - min: 1  
        _The ID of the subscription type._
    -   `code?` _string_  
        _The license code custom. If provided, creates with this code; otherwise, auto-generates. Cannot be used for multiple licenses._
    -   `amount` _number_ - double  
        _The amount value of a license to be created._
    -   `currencyCode` _string_  
        _The currency code in ISO 4217 format, a three-letter uppercase code identifying a specific currency._
    -   `startDate` _DateType_ - date-time  
        _The start date of the license._
    -   `endDate` _DateType_ - date-time  
        _The end date of the license._
    -   `description?` _string_  
        _The description of the license._
    -   `tags?` _string_  
        _The tags of the license._
    -   `testMode` _boolean_  
        _The test mode of the license. By default, it is set to false._
    -   `quantity?` _number_ - int32  
        _The quantity of licenses to create. By default, it is 1._
    -   `userCode?` _string_ - min: 1  
        _The user code of the license. If empty, uses the current logged-in user._

-   **See**: [Create the Licenses](https://developers.jframework.io/references/api-reference/endpoints/licenses/create-the-licenses)

#### `countLicensesCreated(config?: AxiosRequestConfig) => Promise<HttpResponse<ICountSuccessResponse>>`

**Counts the number of licenses created by each user.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Count Licenses Created](https://developers.jframework.io/references/api-reference/endpoints/licenses/count-licenses-created)

#### `deactivateLicense(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicense>>`

**Deactivates a license.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the license._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Deactivate a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/deactivate-a-license)

#### `deleteLicense(id: IdType) => Promise<HttpResponse<boolean>>`

**Deletes a license by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the license._

-   **See**: [Delete a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/delete-a-license)

#### `getLicenses(params?: IGetLicensesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ILicense>>`

**Gets a list of licenses.**

-   **Parameters**:

    -   `params?` _IGetLicensesParams_  
        _Parameters for getting licenses._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetLicensesParams Fields**:

    -   `packageId?` _IdType_  
        _The package ID filter._
    -   `subscriptionTypeId?` _IdType_  
        _The subscription type ID filter._
    -   `licenseCode?` _string_  
        _The license code filter._
    -   `sourceId?` _string_  
        _The source ID filter._
    -   `refLicense?` _string_  
        _The reference license filter._
    -   `description?` _string_  
        _The description filter._
    -   `isUsed?` _boolean_  
        _Used to filter the license by used status._
    -   `startDate?` _DateType_ - date-time  
        _The start date filter._
    -   `endDate?` _DateType_ - date-time  
        _The end date filter._
    -   `tags?` _string_  
        _The tags filter._
    -   `status?` _LicenseStatus_  
        _The status filter._
    -   `type?` _LicenseType_  
        _The type filter._
    -   `usedBy?` _string_  
        _The user who used the license. The value is the code of the user._
    -   `usedDate?` _DateType_ - date-time  
        _The used date filter._
    -   `testMode?` _boolean_  
        _The test mode filter. By default, the value is false._
    -   `keywords?` _string_  
        _The keyword to filter._
    -   `createdBy?` _string_  
        _The user who created the license. The value is the code of the user._

-   **See**: [Get Licenses](https://developers.jframework.io/references/api-reference/endpoints/licenses/get-licenses)

#### `getLicense(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicense>>`

**Gets a license by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the license._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/get-a-license)

#### `generateLicenseCode(params: IGenerateLicenseCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Generates a license code, which is not stored in the system.**

-   **Parameters**:

    -   `params` _IGenerateLicenseCodeParams_  
        _Parameters for generating a license code._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGenerateLicenseCodeParams Fields**:

    -   `packageId` _IdType_  
        _The package ID of the license._
    -   `subscriptionTypeId` _IdType_  
        _The subscription type ID of the license._
    -   `startDate?` _DateType_ - date-time  
        _The start date of the license._

-   **See**: [Generate License Code](https://developers.jframework.io/references/api-reference/endpoints/licenses/generate-code)

#### `purchaseToAddLicensesByCheckoutLink(params: IPurchaseToAddLicensesByCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Generates a checkout link to purchase licenses.**

-   **Parameters**:

    -   `params` _IPurchaseToAddLicensesByCheckoutLinkParams_  
        _Parameters for purchasing licenses via checkout link._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IPurchaseToAddLicensesByCheckoutLinkParams Fields**:

    -   `returnURL?` _string_ - uri  
        _The return URL. If the payment is successful, the user will be redirected to this URL._
    -   `cancelURL?` _string_ - uri  
        _The cancel URL. If the payment is canceled, the user will be redirected to this URL._
    -   `packageId` _IdType_ - min: 1  
        _The package ID of the license._
    -   `subscriptionTypeId` _IdType_ - min: 1  
        _The subscription type ID of the license._
    -   `startDate` _DateType_ - date-time  
        _The start date of the license._
    -   `endDate` _DateType_ - date-time  
        _The end date of the license._
    -   `testMode?` _boolean_  
        _The test mode of the license. By default, it is set to false._
    -   `quantity?` _number_ - int32  
        _The quantity of the license to create. By default, it is 1._

-   **See**: [Purchase to Add Licenses by Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-checkout-link)

#### `purchaseToAddLicensesByWallet(params: IPurchaseToAddLicensesByWalletParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Purchases licenses using the user's wallet.**

-   **Parameters**:

    -   `params` _IPurchaseToAddLicensesByWalletParams_  
        _Parameters for purchasing licenses via wallet._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IPurchaseToAddLicensesByWalletParams Fields**:

    -   `walletId` _IdType_  
        _The wallet ID._
    -   `packageId` _IdType_ - min: 1  
        _The package ID of the license._
    -   `subscriptionTypeId` _IdType_ - min: 1  
        _The subscription type ID of the license._
    -   `type` _LicenseType_  
        _The type of the license._
    -   `code?` _string_  
        _The license code custom. If provided, creates with this code; otherwise, auto-generates. Cannot be used for multiple licenses._
    -   `startDate` _DateType_ - date-time  
        _The start date of the license._
    -   `endDate` _DateType_ - date-time  
        _The end date of the license._
    -   `description?` _string_  
        _The description of the license._
    -   `tags?` _string_  
        _The tags of the license._
    -   `testMode` _boolean_  
        _The test mode of the license. By default, it is set to false._
    -   `quantity` _number_ - int32  
        _The quantity of the license to create. By default, it is 1._
    -   `userCode` _string_ - min: 1  
        _The user code of the license. If empty, uses the current logged-in user._

-   **See**: [Purchase to Add Licenses by User Wallet](https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-user-wallet)

#### `statisticsLicensesMonthly(params?: IStatisticLicensesMonthlyParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicenseStatisticsReportSummary>>`

**Retrieves monthly license usage statistics for reporting and analysis, including totals for licenses created, active, expired, used, unused, and financial details like total amount, refund, and postpaid billing.**

-   **Parameters**:

    -   `params?` _IStatisticLicensesMonthlyParams_  
        _Parameters for getting monthly license statistics._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IStatisticLicensesMonthlyParams Fields**:

    -   `packageId?` _IdType_  
        _The ID of the package._
    -   `subscriptionTypeId?` _IdType_  
        _The ID of the subscription type._
    -   `type?` _LicenseType_  
        _The type of the license._
    -   `status?` _LicenseStatus_  
        _The status of the license._

-   **See**: [Statistics Licenses Monthly](https://developers.jframework.io/references/api-reference/endpoints/licenses/statistics-licenses-monthly)

#### `updateLicense(params: IUpdateLicenseParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicense>>`

**Updates a license by ID.**

-   **Parameters**:

    -   `params` _IUpdateLicenseParams_  
        _Parameters for updating a license, including `id`._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateLicenseParams Fields**:

    -   `id` _IdType_  
        _The ID of the license._
    -   `packageId` _IdType_ - min: 1  
        _The ID of the package._
    -   `subscriptionTypeId` _IdType_ - min: 1  
        _The ID of the subscription type._
    -   `amount` _number_ - double  
        _The amount value of a license to be created._
    -   `currencyCode` _string_  
        _The currency code in ISO 4217 format, a three-letter uppercase code identifying a specific currency._
    -   `startDate` _DateType_ - date-time  
        _The start date of the license._
    -   `endDate` _DateType_ - date-time  
        _The end date of the license._
    -   `description?` _string_  
        _The description of the license._
    -   `tags?` _string_  
        _The tags of the license._
    -   `testMode` _boolean_  
        _The test mode of the license. By default, it is set to false._

-   **See**: [Update a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/update-a-license)

### MFA API

The `mfa` object manages multiple factor authentication methods.

#### `getListOfMFA(config?: AxiosRequestConfig) => Promise<HttpResponse<IMFA[]>>`

**Gets a list of multiple factor authentication methods available for the user.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a List of MFA](https://developers.jframework.io/references/api-reference/endpoints/multiple-factor-authentications/get-a-list-of-mfa)

### Notification API

The `notification` object manages notifications and broadcasts.

#### `createBroadcast(params: ICreateBroadcastParams, config?: AxiosRequestConfig) => Promise<HttpResponse<INotification>>`

**Creates a new broadcast, generating individual notifications for relevant users.**

-   **Parameters**:

    -   `params` _ICreateBroadcastParams_  
        _Parameters for creating a broadcast._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateBroadcastParams Fields**:

    -   `title` _string_ - min: 1  
        _The main title of the notification. Displayed prominently to the user._
    -   `type` _NotificationType_  
        _The type of the notification._
    -   `channel` _NotificationChannel_  
        _The channel of the notification._
    -   `content` _string_ - min: 1  
        _The main message or body of the notification._
    -   `actionURL?` _string | null_ - uri  
        _The action URL. Deep link URL for action buttons._
    -   `category?` _string | null_  
        _A general grouping or category label for notifications, useful for organizing and filtering._
    -   `topic?` _string | null_  
        _A more specific sub-label or theme related to the notification, such as a campaign name or feature tag._
    -   `metadata?` _Record<string, string> | null_  
        _Set of key-value pairs that you can attach to an object. Useful for storing additional information in a structured format._
    -   `scheduledDate?` _DateType | null_  
        _The date and time at which the notification should be sent. If null, it will be sent immediately._
    -   `conditions?` _Record<string, ISegmentCondition> | null_  
        _The conditions to filter the recipients._

-   **See**: [Create a Broadcast](https://developers.jframework.io/references/api-reference/endpoints/notifications/create-broadcast)

#### `getNotification(notificationId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<INotification>>`

**Gets a notification by ID.**

-   **Parameters**:

    -   `notificationId` _IdType_  
        _The ID of the notification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Notification](https://developers.jframework.io/references/api-reference/endpoints/notifications/get-a-notification)

#### `getNotifications(params?: IGetNotificationsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<INotification>>`

**Gets a list of notifications.**

-   **Parameters**:

    -   `params?` _IGetNotificationsParams_  
        _Parameters for getting notifications._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetNotificationsParams Fields**:

    -   `type?` _NotificationType_  
        _The type of the notification._
    -   `channel?` _NotificationChannel_  
        _The channel of the notification._
    -   `title?` _string_  
        _The title of the notification._
    -   `content?` _string_  
        _The content of the notification._
    -   `actionUrl?` _string_ - uri  
        _The action URL of the notification._
    -   `category?` _string_  
        _The category of the notification._
    -   `topic?` _string_  
        _The topic of the notification._
    -   `testMode?` _boolean_  
        _Flag to indicate if the notification is in test mode._
    -   `status?` _NotificationStatus | null_  
        _The status of the notification._

-   **See**: [Get Notifications](https://developers.jframework.io/references/api-reference/endpoints/notifications/get-notifications)

#### `pushNotificationMessageForTokens(params: IPushNotificationMessageForTokensParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPushNotificationResponse>>`

**Pushes a notification with the given title and body to the specified device tokens.**

-   **Parameters**:

    -   `params` _IPushNotificationMessageForTokensParams_  
        _Parameters for pushing a notification message._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IPushNotificationMessageForTokensParams Fields**:

    -   `title` _string_  
        _The title of the notification._
    -   `body` _string_  
        _The body of the notification._
    -   `deviceTokens` _string[]_  
        _The list of device tokens._

-   **See**: [Push Notification Message for Device Token](https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-message-for-device-token)

#### `pushNotificationDataMessageByTokens(deviceTokens: string[], data: Object, config?: AxiosRequestConfig) => Promise<HttpResponse<IPushNotificationResponse>>`

**Pushes a notification with data messages to the specified device tokens.**

-   **Parameters**:

    -   `deviceTokens` _string[]_  
        _The list of device tokens._
    -   `data` _Object_  
        _The data for the notification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Push Notification Data Message by Tokens](https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-data-message-by-tokens)

#### `testPushNotificationDataMessage(params: ITestPushNotificationDataMessageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICountSuccessResponse>>`

**Tests pushing a notification message to the given device tokens.**

-   **Parameters**:

    -   `params` _ITestPushNotificationDataMessageParams_  
        _Parameters for testing a push notification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ITestPushNotificationDataMessageParams Fields**:

    -   `projectId` _string_  
        _The ID of the project in the notification app._
    -   `privateKey` _string_  
        _The private key in the notification app._
    -   `clientEmail` _string_  
        _The client email in the notification app._
    -   `title` _string_  
        _The title of the notification._
    -   `body` _string_  
        _The body of the notification._
    -   `tokens` _string[]_  
        _The list of tokens._

-   **See**: [Test Push Notification Data Message](https://developers.jframework.io/references/api-reference/endpoints/notifications/test-push-notification-data-message)

### Organization API

The `organization` object manages organizations and their users.

#### `addNewUserToOrganization(id: IdType, userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Adds a new user to an organization.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the organization._
    -   `userId` _IdType_  
        _The ID of the user to add._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Add a User in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/add-a-user-in-an-organization)

#### `addUserForDefaultLanguageCodeOrganizationSystem(userId: IdType, languageCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Adds a new user to the organization system with the specified default language.**

-   **Parameters**:

    -   `userId` _IdType_  
        _The ID of the user to add._
    -   `languageCode` _string_  
        _The language code to use._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Adds a User for Default Language Code Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/adds-a-user-for-default-language-code-organization)

#### `assignRoleForUserInOrganization(organizationId: IdType, params: IAssignRoleForUserInOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Assigns a role to a user in an organization.**

-   **Parameters**:

    -   `organizationId` _IdType_  
        _The ID of the organization._
    -   `params` _IAssignRoleForUserInOrganizationParams_  
        _Parameters for assigning a role._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IAssignRoleForUserInOrganizationParams Fields**:

    -   `roleId` _IdType_ - min: 1  
        _The ID of the role to assign._
    -   `userId` _IdType_ - min: 1  
        _The ID of the user to assign the role to._

-   **See**: [Assign Role for a User in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/assign-role-for-a-user-in-an-organization)

#### `createOrganization(params: ICreateOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IOrganization>>`

**Creates a new organization.**

-   **Parameters**:

    -   `params` _ICreateOrganizationParams_  
        _Parameters for creating an organization._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateOrganizationParams Fields**:

    -   `countryCode?` _string | null_  
        _The country code of the organization._
    -   `languageCode?` _string | null_  
        _The language code of the organization._
    -   `name` _string_ - min: 1  
        _The name of the organization._
    -   `description` _string_ - min: 1  
        _The description of the organization._
    -   `avatar?` _string | null_ - uri  
        _The avatar of the organization._
    -   `isPrivate?` _boolean | null_  
        _The is private status of the organization. By default, it is set to false._
    -   `isDefault?` _boolean | null_  
        _The is default status of the organization. By default, it is set to false._
    -   `status?` _OrganizationStatus | null_  
        _The status of the organization._

-   **See**: [Create an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/create-an-organization)

#### `deleteOrganization(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes an organization by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the organization._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/delete-an-organization)

#### `getOrganization(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IOrganization>>`

**Gets an organization by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the organization._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-an-organization)

#### `getOrganizations(params?: IGetOrganizationsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IOrganization>>`

**Gets a list of organizations.**

-   **Parameters**:

    -   `params?` _IGetOrganizationsParams_  
        _Parameters for getting organizations._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetOrganizationsParams Fields**:

    -   `userId?` _IdType_  
        _The param UserId to apply filter._
    -   `countryCode?` _string_  
        _The param CountryCode to apply filter._
    -   `languageCode?` _string_  
        _The param LanguageCode to apply filter._
    -   `code?` _string_  
        _The param Code to apply filter._
    -   `name?` _string_  
        _The param Name to apply filter._
    -   `description?` _string_  
        _The param Description to apply filter._
    -   `avatar?` _string_  
        _The param Avatar to apply filter._
    -   `isPrivate?` _boolean_  
        _The param IsPrivate to apply filter._
    -   `status?` _OrganizationStatus_  
        _The param Status to apply filter._
    -   `userStatus?` _OrganizationUserStatus_  
        _The param Status to apply filter. This status is the status of the user in the organization._
    -   `keywords?` _string_  
        _The param Keywords to apply filter._

-   **See**: [Get Organizations](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-organizations)

#### `getUsersOfOrganization(organizationId: IdType, params?: IGetUsersOfOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IOrganizationUser>>`

**Gets the users of an organization.**

-   **Parameters**:

    -   `organizationId` _IdType_  
        _The ID of the organization._
    -   `params?` _IGetUsersOfOrganizationParams_  
        _Parameters for getting users._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetUsersOfOrganizationParams Fields**:

    -   `userId?` _IdType_  
        _The user ID filter._
    -   `roleId?` _IdType_  
        _The role ID filter._
    -   `status?` _OrganizationUserStatus | null_  
        _Filter by status of the user in the organization._

-   **See**: [Get Users of an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-users-of-an-organization)

#### `removeUserInOrganization(organizationId: IdType, userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Removes a user from an organization.**

-   **Parameters**:

    -   `organizationId` _IdType_  
        _The ID of the organization._
    -   `userId` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Remove a User in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/remove-a-user-in-an-organization)

#### `updateOrganization(id: IdType, params: IUpdateOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Updates an organization by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the organization._
    -   `params` _IUpdateOrganizationParams_  
        _Parameters for updating an organization._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateOrganizationParams Fields**:

    -   `countryCode?` _string | null_  
        _The country code of the organization._
    -   `languageCode?` _string | null_  
        _The language code of the organization._
    -   `name` _string_ - min: 1  
        _The name of the organization._
    -   `description` _string_ - min: 1  
        _The description of the organization._
    -   `avatar?` _string | null_ - uri  
        _The avatar of the organization._
    -   `isPrivate?` _boolean | null_  
        _The is private status of the organization. By default, it is set to false._
    -   `isDefault?` _boolean | null_  
        _The is default status of the organization. By default, it is set to false._
    -   `status?` _OrganizationStatus | null_  
        _The status of the organization._

-   **See**: [Updates an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-an-organization)

#### `updateUserStatusInOrganization(organizationId: IdType, params: IUpdateUserStatusInOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Updates a user's status in an organization.**

-   **Parameters**:

    -   `organizationId` _IdType_  
        _The ID of the organization._
    -   `params` _IUpdateUserStatusInOrganizationParams_  
        _Parameters for updating a user's status._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateUserStatusInOrganizationParams Fields**:

    -   `status` _OrganizationUserStatus_  
        _The status of the user in the organization._
    -   `userIds` _IdType[]_  
        _The list of user IDs._

-   **See**: [Updates Users Status in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-users-status-in-an-organization)

### Package API

The `package` object manages packages and their features.

#### `addFeaturesToPackage(packageId: IdType, params: IAddFeatureToPackageParams[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Adds features to a package.**

-   **Parameters**:

    -   `packageId` _IdType_  
        _The ID of the package._
    -   `params` _IAddFeatureToPackageParams[]_  
        _Parameters for adding features._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IAddFeatureToPackageParams Fields**:

    -   `featureId` _string_ - min: 1  
        _The feature ID._

-   **See**: [Add Features to a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/add-features-to-a-package)

#### `calculateTotalPriceCheckout(params: ICalculateTotalPriceCheckoutParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICalculateTotalPriceCheckoutResponse>>`

**Calculates the total price of a package at checkout, considering wallet, refund, prorate, subtotal, tax, and total price.**

-   **Parameters**:

    -   `params` _ICalculateTotalPriceCheckoutParams_  
        _Parameters for calculating total price._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICalculateTotalPriceCheckoutParams Fields**:

    -   `packageId` _IdType_  
        _The ID of the package for which the total price is being calculated._
    -   `priceId` _IdType_ - min: 1  
        _The ID of the package to calculate the total price for._
    -   `walletId?` _IdType | null_  
        _The ID of the app integration payment gateway to use for the calculation._
    -   `couponCode?` _string | null_  
        _The coupon code to apply for the price calculation, if any._

-   **See**: [Calculate Total Price Checkout](https://developers.jframework.io/references/api-reference/endpoints/packages/calculate-total-price-checkout)

#### `createPackage(params: ICreatePackageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage>>`

**Creates a new package.**

-   **Parameters**:

    -   `params` _ICreatePackageParams_  
        _Parameters for creating a package._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreatePackageParams Fields**:

    -   `code` _string_ - min: 1  
        _The code of the package._
    -   `name` _string_ - min: 1  
        _The name of the package._
    -   `imageURL?` _string | null_ - uri  
        _The image URL of the package._
    -   `patternAvatarURL?` _string | null_ - uri  
        _The pattern avatar URL of the package._
    -   `styles?` _string | null_  
        _The styles of the package. This value is a JSON string._
    -   `description?` _string | null_  
        _The description of the package._
    -   `tags?` _string | null_  
        _The tags of the package._
    -   `zOrder?` _number_ - int64  
        _The order of the package. Default is 1._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the package is default. Default is false._

-   **See**: [Create a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/create-a-package)

#### `deletePackage(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a package by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the package._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/delete-a-package)

#### `getPackage(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage>>`

**Gets a package by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the package._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/get-a-package)

#### `getFeaturesFromPackage(packageId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IFeatureOfPackage[]>>`

**Gets features associated with a package.**

-   **Parameters**:

    -   `packageId` _IdType_  
        _The ID of the package._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Features from Package](https://developers.jframework.io/references/api-reference/endpoints/packages/get-features-from-package)

#### `getPackages(params?: IGetPackagesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage[]>>`

**Gets a list of packages.**

-   **Parameters**:

    -   `params?` _IGetPackagesParams_  
        _Parameters for getting packages._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetPackagesParams Fields**:

    -   `name?` _string_  
        _Filter by the name._
    -   `code?` _string_  
        _Filter by the code._
    -   `description?` _string_  
        _Filter by the description._
    -   `tags?` _string_  
        _Filter by the tags._
    -   `isDefault?` _boolean_  
        _Filter by the default package._
    -   `keywords?` _string_  
        _Filter by the keywords._

-   **See**: [Get Packages](https://developers.jframework.io/references/api-reference/endpoints/packages/get-packages)

#### `getPricesFromPackage(packageId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice[]>>`

**Gets prices associated with a package by its ID.**

-   **Parameters**:

    -   `packageId` _IdType_  
        _The ID of the package._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Prices from a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/get-prices-from-a-package)

#### `removeFeaturesFromPackage(packageId: IdType, featureIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Removes features from a package.**

-   **Parameters**:

    -   `packageId` _IdType_  
        _The ID of the package._
    -   `featureIds` _IdType[]_  
        _The list of feature IDs to remove._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Remove Features from a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/remove-features-from-a-package)

#### `renewalOrUpgradeUserPackage(params: IRenewalOrUpgradeUserPackageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IRenewalOrUpgradeUserPackageResponse>>`

**Renews or upgrades a user's package.**

-   **Parameters**:

    -   `params` _IRenewalOrUpgradeUserPackageParams_  
        _Parameters for renewing or upgrading a package._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IRenewalOrUpgradeUserPackageParams Fields**:

    -   `packageId` _IdType_  
        _The ID of the package._
    -   `priceId` _IdType_ - min: 1  
        _The ID of the package to calculate the total price for._
    -   `walletId?` _string | null_  
        _The ID of the app integration payment gateway to use for the calculation._
    -   `refundWalletId?` _string | null_  
        _The ID of the wallet to refund if the proration amount exceeds the upgrade price._
    -   `couponCode?` _string | null_  
        _The coupon code to apply for the price calculation, if any._
    -   `appIntegrationId?` _string | null_  
        _The ID of the app integration associated with the package upgrade._

-   **See**: [Renewal or Upgrade User Package](https://developers.jframework.io/references/api-reference/endpoints/packages/renewal-or-upgrade-user-package)

#### `updatePackage(id: IdType, params: IUpdatePackageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage>>`

**Updates a package by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the package._
    -   `params` _IUpdatePackageParams_  
        _Parameters for updating a package._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdatePackageParams Fields**:

    -   `code` _string_ - min: 1  
        _The code of the package._
    -   `name` _string_ - min: 1  
        _The name of the package._
    -   `imageURL?` _string | null_ - uri  
        _The image URL of the package._
    -   `patternAvatarURL?` _string | null_ - uri  
        _The pattern avatar URL of the package._
    -   `styles?` _string | null_  
        _The styles of the package. This value is a JSON string._
    -   `description?` _string | null_  
        _The description of the package._
    -   `tags?` _string | null_  
        _The tags of the package._
    -   `zOrder?` _number_ - int64  
        _The order of the package. Default is 1._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the package is default. Default is false._

-   **See**: [Update a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/update-a-package)

#### `updatePackageFeatureData(pathParams: IUpdatePackageFeatureDataPathParams, params: IUpdatePackageFeatureDataParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Updates package feature data.**

-   **Parameters**:

    -   `pathParams` _IUpdatePackageFeatureDataPathParams_  
        _Path parameters for updating package feature data._
    -   `params` _IUpdatePackageFeatureDataParams_  
        _Parameters for updating package feature data._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdatePackageFeatureDataPathParams Fields**:

    -   `packageId` _IdType_  
        _The ID of the package._
    -   `featureId` _IdType_  
        _The ID of the feature._

-   **IUpdatePackageFeatureDataParams Fields**:

    -   `title?` _string | null_  
        _The title of the feature. This title is used to display the feature in the UI._
    -   `value?` _number | null_ - int32  
        _The value of the feature follow by package._
    -   `isUnlimited?` _boolean | null_  
        _Flag to indicate if the feature is unlimited. Default is false._

-   **See**: [Update Package Feature Data](https://developers.jframework.io/references/api-reference/endpoints/packages/update-package-feature-data)

### Payment API

The `payment` object manages payments.

#### `generatePaymentCheckoutLink(params: IGeneratePaymentCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPaymentGenerateCheckoutLinkResponse>>`

**Generates a checkout link to make a payment.**

-   **Parameters**:

    -   `params` _IGeneratePaymentCheckoutLinkParams_  
        _Parameters for generating a payment checkout link._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGeneratePaymentCheckoutLinkParams Fields**:

    -   `id` _IdType_  
        _The ID of the payment._
    -   `appIntegrationId?` _IdType_  
        _The identifier of the specific app integration payment gateway to use for generating the checkout link._

-   **See**: [Generate Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/prices/generate-checkout-link)

#### `getPayment(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPayment>>`

**Gets a payment by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the payment._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Payment](https://developers.jframework.io/references/api-reference/endpoints/payments/get-a-payment)

#### `getPayments(params?: IGetPaymentsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IPayment>>`

**Gets a list of payments based on the given filter.**

-   **Parameters**:

    -   `params?` _IGetPaymentsParams_  
        _Parameters for getting payments._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetPaymentsParams Fields**:

    -   `appIntegrationPaymentGatewayId?` _string_  
        _Filter by the app integration payment gateway ID._
    -   `priceId?` _string_  
        _The price ID._
    -   `code?` _string_  
        _The payment request code._
    -   `userId?` _IdType_  
        _The ID of the user._
    -   `referralUserCode?` _string_  
        _The reference user code._
    -   `status?` _PaymentStatus | null_  
        _The status of the payment request._
    -   `paymentType?` _string_  
        _The payment request type._
    -   `currencyCode?` _string_  
        _The currency code._
    -   `keywords?` _string_  
        _The keywords to filter._
    -   `testMode?` _boolean_  
        _The payment request amount._

-   **See**: [Get Payments](https://developers.jframework.io/references/api-reference/endpoints/payments/get-payments)

#### `getOverviewSellDashboard(testMode?: boolean, config?: AxiosRequestConfig) => Promise<HttpResponse<IPaymentDashboard>>`

**Calculates the metric overview dashboard for payments.**

-   **Parameters**:

    -   `testMode?` _boolean_  
        _Query parameter to enable test mode._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Gets the Overview Sell Dashboard](https://developers.jframework.io/references/api-reference/endpoints/payments/gets-the-overview-sell-dashboard)

### Permission API

The `permission` object manages permissions and their associated roles.

#### `addRolesToPermission(permissionId: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Adds roles to a permission.**

-   **Parameters**:

    -   `permissionId` _IdType_  
        _The ID of the permission._
    -   `roleIds` _IdType[]_  
        _The list of role IDs._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Add Roles to a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/add-roles-to-a-permission)

#### `createPermission(params: ICreatePermissionParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPermission>>`

**Creates a new permission.**

-   **Parameters**:

    -   `params` _ICreatePermissionParams_  
        _Parameters for creating a permission._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreatePermissionParams Fields**:

    -   `resourceTypeId` _IdType_ - min: 1  
        _The resource type ID._
    -   `code` _string_ - min: 1  
        _The permission code._
    -   `name` _string_ - min: 1  
        _The name of the permission._
    -   `description?` _string | null_  
        _The description of the permission._
    -   `tags?` _string | null_  
        _The tags of the permission._

-   **See**: [Create a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/add-roles-to-a-permission)

#### `deletePermission(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a permission by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the permission._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/delete-a-permission)

#### `getPermission(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPermission>>`

**Gets a permission by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the permission._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/get-a-permission)

#### `getPermissions(params?: IGetPermissionsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IPermission>>`

**Gets a list of all permissions.**

-   **Parameters**:

    -   `params?` _IGetPermissionsParams_  
        _Parameters for getting permissions._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetPermissionsParams Fields**:

    -   `resourceTypeId?` _string_  
        _Filter by resource type ID._
    -   `code?` _string_  
        _Filter by code._
    -   `name?` _string_  
        _Filter by name._
    -   `tags?` _string_  
        _Filter by tags._
    -   `description?` _string_  
        _Filter by description._
    -   `type?` _PermissionTypeFilter_  
        _Filter by type._
    -   `keywords?` _string_  
        _Filter by keywords._

-   **See**: [Get Permissions](https://developers.jframework.io/references/api-reference/endpoints/permissions/get-permissions)

#### `getRolesFromPermission(permissionId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole[]>>`

**Gets roles associated with a permission by its ID.**

-   **Parameters**:

    -   `permissionId` _IdType_  
        _The ID of the permission._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Roles from a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/get-roles-from-a-permission)

#### `removeRolesFromPermission(permissionId: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Removes roles from a permission.**

-   **Parameters**:

    -   `permissionId` _IdType_  
        _The ID of the permission._
    -   `roleIds` _IdType[]_  
        _The list of role IDs._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Remove Roles from a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/remove-roles-from-a-permission)

#### `updatePermission(id: IdType, params: IUpdatePermissionParams, config?: AxiosRequestConfig) => Promise<HttpResponse<unknown>>`

**Updates a permission by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the permission._
    -   `params` _IUpdatePermissionParams_  
        _Parameters for updating a permission._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdatePermissionParams Fields**:

    -   `resourceTypeId` _IdType_ - min: 1  
        _The resource type ID._
    -   `code` _string_ - min: 1  
        _The permission code._
    -   `name` _string_ - min: 1  
        _The name of the permission._
    -   `description?` _string | null_  
        _The description of the permission._
    -   `tags?` _string | null_  
        _The tags of the permission._

-   **See**: [Update a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/update-a-permission)

### Price API

The `price` object manages prices.

#### `createPrice(params: ICreatePriceParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice>>`

**Creates a new price.**

-   **Parameters**:

    -   `params` _ICreatePriceParams_  
        _Parameters for creating a price._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreatePriceParams Fields**:

    -   `packageId` _string_ - min: 1  
        _The package ID._
    -   `subscriptionTypeId` _string_ - min: 1  
        _The subscription type ID._
    -   `code` _string_ - min: 1  
        _The code of the price._
    -   `name` _string_  
        _The name of the price._
    -   `amount` _number_ - double  
        _The amount of the price._
    -   `currency` _string_ - min: 1  
        _The currency code of the price. Must be a valid ISO 4217 currency code._
    -   `checkoutLink?` _string | null_ - uri  
        _The checkout link of the price. Redirects to the checkout page._
    -   `description?` _string | null_  
        _The description of the price._
    -   `tags?` _string | null_  
        _The tags of the price._
    -   `zOrder?` _number | null_ - int32  
        _The order of the price. Default is 1._

-   **See**: [Create a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/create-a-price)

#### `deletePrice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a price by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the price._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/delete-a-price)

#### `generateCheckoutLink(params: IGenerateCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Generates a direct checkout link for a price, allowing the user to place an order.**

-   **Parameters**:

    -   `params` _IGenerateCheckoutLinkParams_  
        _Parameters for generating a checkout link._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGenerateCheckoutLinkParams Fields**:

    -   `priceId` _IdType_  
        _The ID of the price._
    -   `appIntegrationId` _IdType_  
        _The ID of the app integration._

-   **See**: [Generate Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/prices/generate-checkout-link)

#### `getPrice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice>>`

**Gets a price by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the price._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/get-a-price)

#### `getPrices(params?: IGetPricesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice[]>>`

**Gets a list of prices.**

-   **Parameters**:

    -   `params?` _IGetPricesParams_  
        _Parameters for getting prices._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetPricesParams Fields**:

    -   `paymentMethodId?` _IdType_  
        _The ID of the payment method._
    -   `packageId?` _IdType_  
        _The ID of the package._
    -   `subscriptionTypeId?` _IdType_  
        _The ID of the subscription type._
    -   `code?` _string_  
        _The code of the price._
    -   `name?` _string_  
        _The name of the price._
    -   `description?` _string_  
        _The description of the price._
    -   `amount?` _number_  
        _The amount of the price._
    -   `currency?` _string_  
        _The currency of the price._
    -   `checkoutLink?` _string_  
        _The checkout link._
    -   `tags?` _string_  
        _The tags of the price._
    -   `zOrder?` _number_ - int64  
        _The z-order of the price._

-   **See**: [Get Prices](https://developers.jframework.io/references/api-reference/endpoints/prices/get-prices)

#### `updatePrice(id: IdType, params: IUpdatePriceParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice>>`

**Updates a price by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the price._
    -   `params` _IUpdatePriceParams_  
        _Parameters for updating a price._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdatePriceParams Fields**:

    -   `packageId` _string_ - min: 1  
        _The package ID._
    -   `subscriptionTypeId` _string_ - min: 1  
        _The subscription type ID._
    -   `code` _string_ - min: 1  
        _The code of the price._
    -   `name` _string_  
        _The name of the price._
    -   `amount` _number_ - double  
        _The amount of the price._
    -   `currency` _string_ - min: 1  
        _The currency code of the price. Must be a valid ISO 4217 currency code._
    -   `checkoutLink?` _string | null_ - uri  
        _The checkout link of the price. Redirects to the checkout page._
    -   `description?` _string | null_  
        _The description of the price._
    -   `tags?` _string | null_  
        _The tags of the price._
    -   `zOrder?` _number | null_ - int32  
        _The order of the price. Default is 1._

-   **See**: [Update a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/update-a-price)

### Resource Type API

The `resourceType` object manages resource types.

#### `createResourceType(params: ICreateResourceTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IResourceType>>`

**Creates a new resource type.**

-   **Parameters**:

    -   `params` _ICreateResourceTypeParams_  
        _Parameters for creating a resource type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateResourceTypeParams Fields**:

    -   `code` _string_ - min: 1  
        _The resource type code._
    -   `name` _string_ - min: 1  
        _The name of the resource type._
    -   `description` _string_ - min: 1  
        _The description of the resource type._

-   **See**: [Create a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/create-a-resource-type)

#### `deleteResourceType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a resource type by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the resource type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/delete-a-resource-type)

#### `getResourceType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IResourceType>>`

**Gets a resource type by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the resource type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-a-resource-type)

#### `getResourceTypes(params?: IGetResourceTypesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IResourceType[]>>`

**Gets a list of resource types.**

-   **Parameters**:

    -   `params?` _IGetResourceTypesParams_  
        _Parameters for getting resource types._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetResourceTypesParams Fields**:

    -   `code?` _string_  
        _Filter by code._
    -   `name?` _string_  
        _Filter by name._
    -   `tags?` _string_  
        _Filter by tags._
    -   `description?` _string_  
        _Filter by description._
    -   `type?` _ResourceTypeTypeFilter_  
        _The param type to apply filter._
    -   `keywords?` _string_  
        _Filter by keywords._

-   **See**: [Get Resource Types](https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-resource-types)

#### `updateResourceType(id: IdType, params: IUpdateResourceTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IResourceType>>`

**Updates a resource type by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the resource type._
    -   `params` _IUpdateResourceTypeParams_  
        _Parameters for updating a resource type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateResourceTypeParams Fields**:

    -   `code` _string_ - min: 1  
        _The resource type code._
    -   `name` _string_ - min: 1  
        _The name of the resource type._
    -   `description` _string_ - min: 1  
        _The description of the resource type._

-   **See**: [Update a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/update-a-resource-type)

### Role API

The `role` object manages roles and their permissions.

#### `assignUsersToRole(id: IdType, userIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Assigns users to a role.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the role._
    -   `userIds` _IdType[]_  
        _The list of user IDs to assign._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Assign Users to a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/assign-users-to-a-role)

#### `deleteRole(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a role by ID, removing it from any assigned users and permissions.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the role._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/delete-a-role)

#### `createRole(params: ICreateRoleParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole>>`

**Creates a new role. New roles are not associated with permissions by default.**

-   **Parameters**:

    -   `params` _ICreateRoleParams_  
        _Parameters for creating a role._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateRoleParams Fields**:

    -   `code` _string_ - min: 1  
        _The code of the role._
    -   `name` _string_ - min: 1  
        _The name of the role._
    -   `description?` _string | null_  
        _The description of the role._
    -   `tags?` _string | null_  
        _The tags of the role._

-   **See**: [Create a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/create-a-role)

#### `getRole(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole>>`

**Gets a role by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the role._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/get-a-role)

#### `getRoles(params?: IGetRolesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IRole>>`

**Gets a list of roles in the brand.**

-   **Parameters**:

    -   `params?` _IGetRolesParams_  
        _Parameters for getting roles._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetRolesParams Fields**:

    -   `ids?` _string_  
        _The list ID of the role to filter._
    -   `code?` _string_  
        _The param code to apply filter._
    -   `name?` _string_  
        _The param name to apply filter._
    -   `description?` _string_  
        _The param description to apply filter._
    -   `type?` _RoleTypeFilter_  
        _The param type to apply filter._
    -   `keywords?` _string_  
        _Filter by keywords._

-   **See**: [Get Roles](https://developers.jframework.io/references/api-reference/endpoints/roles/get-roles)

#### `grantPermissionsToRole(roleId: IdType, permissionIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Grants one or more permissions to a specific role.**

-   **Parameters**:

    -   `roleId` _IdType_  
        _The ID of the role._
    -   `permissionIds` _IdType[]_  
        _The list of permission IDs._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Grant Permissions to a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/grant-permissions-to-a-role)

#### `getPermissionsGrantedByRole(roleId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPermission[]>>`

**Retrieves a detailed list of permissions granted by a specified role, including name, description, and resource server.**

-   **Parameters**:

    -   `roleId` _IdType_  
        _The ID of the role._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Permissions Granted by Role](https://developers.jframework.io/references/api-reference/endpoints/roles/get-permissions-granted-by-role)

#### `removePermissionsFromRole(roleId: IdType, permissionIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Removes one or more permissions from a specific role.**

-   **Parameters**:

    -   `roleId` _IdType_  
        _The ID of the role._
    -   `permissionIds` _IdType[]_  
        _The list of permission IDs._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Remove Permissions from a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/remove-permissions-from-a-role)

#### `updateRole(id: IdType, params: IUpdateRoleParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole>>`

**Updates a role by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the role._
    -   `params` _IUpdateRoleParams_  
        _Parameters for updating a role._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateRoleParams Fields**:

    -   `code` _string_ - min: 1  
        _The code of the role._
    -   `name` _string_ - min: 1  
        _The name of the role._
    -   `description?` _string | null_  
        _The description of the role._
    -   `tags?` _string | null_  
        _The tags of the role._

-   **See**: [Update a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/update-a-role)

### State API

The `state` object manages state data.

#### `getStates(config?: AxiosRequestConfig) => Promise<HttpResponse<IState[]>>`

**Gets a list of states.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get States](https://developers.jframework.io/references/api-reference/endpoints/states)

### Subscription Type API

The `subscriptionType` object manages subscription types.

#### `createSubscriptionType(params: ICreateSubscriptionTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ISubscriptionType>>`

**Creates a new subscription type.**

-   **Parameters**:

    -   `params` _ICreateSubscriptionTypeParams_  
        _Parameters for creating a new subscription type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **ICreateSubscriptionTypeParams Fields**:

    -   `name` _string_ - min: 1  
        _The name of the subscription type._
    -   `unit` _SubscriptionTypeUnit_ - min: 1  
        _The unit of the subscription type._
    -   `quantity?` _number_ - int32  
        _The quantity of the subscription type._
    -   `tags?` _string | null_  
        _The tags of the subscription type._
    -   `zOrder?` _number_ - int64  
        _The z-order of the subscription type. Default is 1._
    -   `status?` _SubscriptionTypeStatus_  
        _The status of the subscription type._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the subscription type is default. By default, it is false._
    -   `description?` _string | null_  
        _The description of the subscription type._

-   **See**: [Create a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/create-a-subscription-type)

#### `deleteSubscriptionType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a subscription type by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the subscription type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Delete a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/delete-a-subscription-type)

#### `getSubscriptionType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ISubscriptionType>>`

**Gets a subscription type by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the subscription type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-a-subscription-type)

#### `getPricesFromSubscriptionType(subscriptionTypeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice[]>>`

**Gets prices from a subscription type.**

-   **Parameters**:

    -   `subscriptionTypeId` _IdType_  
        _The ID of the subscription type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Get Prices from a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-prices-from-a-subscription-type)

#### `getSubscriptionTypes(params?: IGetSubscriptionTypesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ISubscriptionType[]>>`

**Gets a list of subscription types.**

-   **Parameters**:

    -   `params?` _IGetSubscriptionTypesParams_  
        _Parameters for getting subscription types._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IGetSubscriptionTypesParams Fields**:

    -   `name?` _string_  
        _The name to filter._
    -   `unit?` _SubscriptionTypeUnit_  
        _The unit to filter._
    -   `status?` _SubscriptionTypeStatus_  
        _The status to filter._
    -   `tags?` _string_  
        _The tags to filter._
    -   `description?` _string_  
        _The description to filter._
    -   `keywords?` _string_  
        _The keywords to filter._

-   **See**: [Get Subscription Types](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-subscription-types)

#### `updateSubscriptionType(id: IdType, params: IUpdateSubscriptionTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ISubscriptionType>>`

**Updates a subscription type by ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the subscription type._
    -   `params` _IUpdateSubscriptionTypeParams_  
        _Parameters for updating a subscription type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **IUpdateSubscriptionTypeParams Fields**:

    -   `name` _string_ - min: 1  
        _The name of the subscription type._
    -   `unit` _SubscriptionTypeUnit_ - min: 1  
        _The unit of the subscription type._
    -   `quantity?` _number_ - int32  
        _The quantity of the subscription type._
    -   `tags?` _string | null_  
        _The tags of the subscription type._
    -   `zOrder?` _number_ - int64  
        _The z-order of the subscription type. Default is 1._
    -   `status?` _SubscriptionTypeStatus_  
        _The status of the subscription type._
    -   `isDefault?` _boolean_  
        _Flag to indicate if the subscription type is default. By default, it is false._
    -   `description?` _string | null_  
        _The description of the subscription type._

-   **See**: [Update a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/update-a-subscription-type)

### Timezone API

The `timezone` object manages timezones.

#### `getTimezones(config?: AxiosRequestConfig) => Promise<HttpResponse<ITimezone[]>>`

**Lists all time zones.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration._

-   **See**: [Time Zones](https://developers.jframework.io/references/api-reference/endpoints/time-zones)

### Tracking Activity API

The `trackingActivity` object provides methods for managing tracking activities.

#### `getTrackingActivities(params?: IGetTrackingActivitiesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ITrackingActivity>>`

**Gets a list of tracking activities.**

-   **Parameters**:

    -   `params?` _IGetTrackingActivitiesParams_  
        _The parameters for getting tracking activities._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGetTrackingActivitiesParams Fields**:

    -   `userId?` _string_  
        _Filter by user id._
    -   `deviceId?` _string_  
        _Filter by device id._
    -   `trackingEventId?` _string_  
        _Filter by tracking event id._
    -   `url?` _string_  
        _Filter by the URL requested._
    -   `ipAddress?` _string_  
        _Filter by the ip address._
    -   `os?` _string_  
        _Filter by the os._
    -   `browserName?` _string_  
        _Filter by the browser name._
    -   `browserVersion?` _string_  
        _Filter by the browser version._
    -   `requestFromMobile?` _boolean_  
        _Filter by the request from mobile._
    -   `userAgent?` _string_  
        _Filter by the user agent._
    -   `location?` _string_  
        _Filter by the location._
    -   `latitude?` _number_ - double  
        _Filter by the latitude._
    -   `longitude?` _number_ - double  
        _Filter by the longitude._
    -   `description?` _string_  
        _Filter by the description._
    -   `tags?` _string_  
        _Filter by the tags._
    -   `keywords?` _string_  
        _Filter by the keywords._

-   **See**: [Get Activities](https://developers.jframework.io/references/api-reference/endpoints/tracking-activities/get-activities)

#### `getTrackingActivity(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ITrackingActivity>>`

**Gets a tracking activity by the given ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the activity._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get a Activity](https://developers.jframework.io/references/api-reference/endpoints/tracking-activities/get-a-activity)

### Tracking Email API

The `trackingEmail` object provides methods for managing tracking emails.

#### `getTrackingEmail(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ITrackingEmail>>`

**Gets a tracking email by the given ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the tracking email._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get a Tracking Email](https://developers.jframework.io/references/api-reference/endpoints/tracking-emails/get-a-tracking-email)

#### `getTrackingEmails(params?: IGetTrackingEmailsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ITrackingEmail>>`

**Gets a list of tracking emails.**

-   **Parameters**:

    -   `params?` _IGetTrackingEmailsParams_  
        _The parameters for getting tracking emails._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGetTrackingEmailsParams Fields**:

    -   `userId?` _IdType_  
        _The id of the user._
    -   `eventId?` _IdType_  
        _The id of the event._
    -   `countryCode?` _string_  
        _The country code. This is a two letter country code._
    -   `languageCode?` _string_  
        _The language code. This is a two letter language code._
    -   `type?` _TrackingEmailNotificationType_  
        _The notification type._
    -   `notificationChannelType?` _TrackingEmailNotificationChannelType_  
        _The notification channel type._
    -   `emailFrom?` _string_  
        _The email from._
    -   `emailTo?` _string_  
        _The email to._
    -   `emailCc?` _string_  
        _The email cc._
    -   `emailBcc?` _string_  
        _The email bcc._
    -   `emailSubject?` _string_  
        _The email subject._
    -   `emailBody?` _string_  
        _The email body._
    -   `testMode?` _boolean_  
        _Flag to indicate if the email is in test mode._
    -   `keywords?` _string_  
        _Filter by keywords._
    -   `tags?` _string_  
        _The tags._
    -   `status?` _TrackingEmailStatus_  
        _The status of the tracking email._

-   **See**: [Get Tracking Emails](https://developers.jframework.io/references/api-reference/endpoints/tracking-emails/get-tracking-emails)

### User API

The `user` object provides methods for managing users, including authentication, roles, devices, notifications, and passwordless login.

#### `activateUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Sends an activation email to the user, setting their status to Active upon completion.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Activate a User](https://developers.jframework.io/references/api-reference/endpoints/users/activate-a-user)

#### `addDeviceToUser(params: IAddDeviceToUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Adds a device to a user.**

-   **Parameters**:

    -   `params` _IAddDeviceToUserParams_  
        _The parameters for adding a device to a user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IAddDeviceToUserParams Fields**:

    -   `userId` _IdType_  
        _The id of the user._
    -   `deviceId` _IdType_  
        _The id of the device to add._
    -   `token?` _string | null_  
        _The token of the device data. This token is used when push notification for the device._
    -   `session?` _string | null_  
        _The session of the device data and related with user._
    -   `tags?` _string | null_  
        _The tags of the device._
    -   `status?` _UserDeviceStatus_  
        _The status of the device._

-   **See**: [Add a Device to a User](https://developers.jframework.io/references/api-reference/endpoints/users/add-a-device-to-a-user)

#### `applyReferralCodeToUser(id: IdType, params: IApplyReferralCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Applies a referral code to a user.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `params` _IApplyReferralCodeParams_  
        _The parameters for applying a referral code._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IApplyReferralCodeParams Fields**:

    -   `referralCode` _string_  
        _The referral code to apply._

-   **See**: [Applies the Referral Code to a User](https://developers.jframework.io/references/api-reference/endpoints/users/applies-the-referral-code-to-a-user)

#### `assignRolesToUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Assigns roles to a user.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `roleIds` _IdType[]_  
        _The role IDs to assign._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Assigns Roles to a User](https://developers.jframework.io/references/api-reference/endpoints/users/assigns-roles-to-a-user)

#### `authenticationByApple(callbackURL: string, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Gets the Apple login URL.**

-   **Parameters**:

    -   `callbackURL` _string_  
        _The callback URL for redirection after login._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Authentication by Apple](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-apple)

#### `authenticationByGoogle(params: IAuthenticationByGoogleParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Gets the Google login URL.**

-   **Parameters**:

    -   `params` _IAuthenticationByGoogleParams_  
        _The parameters for authentication with Google._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IAuthenticationByGoogleParams Fields**:

    -   `callbackURL` _string_  
        _The callback URL that the user will be redirected to after logging in._
    -   `returnURL` _string_  
        _The return URL that the user will be redirected to after canceling the login._
    -   `typeResponse?` _AuthenticationResponseType_  
        _The type response after the authentication success. The type includes the RedirectUrl or JsonFormat. By default, the type is RedirectUrl._

-   **See**: [Authentication by Google](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-google)

#### `authenticationByPhoneNumber(params: IAuthenticationByPhoneNumberParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

**Authenticates a user with phone number and password.**

-   **Parameters**:

    -   `params` _IAuthenticationByPhoneNumberParams_  
        _The parameters for authentication by phone number._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IAuthenticationByPhoneNumberParams Fields**:

    -   `phoneNumber` _string_ - min: 1  
        _This represents the phone number of the user._
    -   `password` _string_ - min: 1  
        _This represents the password of the user._

-   **See**: [Authentication by Phone](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-phone)

#### `authentication(params: IAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

**Authenticates a user with email and password.**

-   **Parameters**:

    -   `params` _IAuthenticationParams_  
        _The parameters for authentication._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IAuthenticationParams Fields**:

    -   `username` _string_ - min: 1  
        _This represents the username of the user._
    -   `password` _string_ - min: 1  
        _This represents the password of the user._

-   **See**: [Authentication](https://developers.jframework.io/references/api-reference/endpoints/users/authentication)

#### `changePassword(params: IChangePasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Changes the user's password.**

-   **Parameters**:

    -   `params` _IChangePasswordParams_  
        _The parameters for changing password._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IChangePasswordParams Fields**:

    -   `oldPassword` _string_ - min: 1  
        _The old password of the user._
    -   `newPassword` _string_ - min: 1  
        _The new password of the user._
    -   `confirmPassword` _string_ - min: 1  
        _The confirm password of the user._

-   **See**: [Change Password](https://developers.jframework.io/references/api-reference/endpoints/users/change-password)

#### `changePasswordForAnotherUser(params: IChangePasswordForAnotherUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Changes the password for another user.**

-   **Parameters**:

    -   `params` _IChangePasswordForAnotherUserParams_  
        _The parameters for changing password for another user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IChangePasswordForAnotherUserParams Fields**:

    -   `id` _IdType_  
        _The id of the user to change._
    -   `newPassword` _string_ - min: 1  
        _The new password of the user._
    -   `confirmPassword` _string_ - min: 1  
        _The confirm password of the user._

-   **See**: [Change Password by User ID](https://developers.jframework.io/references/api-reference/endpoints/users/change-password-by-user-id)

#### `checkReferralUserCode(code: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Checks if the referral code exists in the system.**

-   **Parameters**:

    -   `code` _string_  
        _The referral code to check._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Check Referral User Code](https://developers.jframework.io/references/api-reference/endpoints/users/check-referral-user-code)

#### `checkAuthKeyAvailable(params: ICheckAuthKeyAvailableParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Checks if the auth key is available.**

-   **Parameters**:

    -   `params` _ICheckAuthKeyAvailableParams_  
        _The parameters for checking auth key availability._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **ICheckAuthKeyAvailableParams Fields**:

    -   `authKey` _string_  
        _The auth key to check._

-   **See**: [Check Auth Key Available](https://developers.jframework.io/references/api-reference/endpoints/users/check-auth-key-available)

#### `deactivateUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deactivates a user, setting their status to Inactive after sending a deactivation email.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Deactivate a User](https://developers.jframework.io/references/api-reference/endpoints/users/deactivate-a-user)

#### `deleteUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a user by the given ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Delete a User](https://developers.jframework.io/references/api-reference/endpoints/users/delete-a-user)

#### `sendEmailToVerifyEmailAddressOfUser(id: IdType, returnURL: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Sends an email to verify the user's email address with a verification link.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `returnURL` _string_  
        _The return URL after verification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Verify User Email - Send](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#post-api-v1-users-id-email-address-verify-send)

#### `activeUserEmailAddress(token: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Activates the user's email address using the provided token.**

-   **Parameters**:

    -   `token` _string_  
        _The token to activate the email address._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Verify User Email - Active](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#put-api-v1-users-email-address-active)

#### `forgotPassword(params: IForgotPasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Sends an email with a link to reset the user's password.**

-   **Parameters**:

    -   `params` _IForgotPasswordParams_  
        _The parameters for forgot password._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IForgotPasswordParams Fields**:

    -   `emailAddress` _string_ - email - min: 1  
        _This represents the email of the user._
    -   `resetPasswordLink` _string_ - uri - min: 1  
        _This represents the reset password link to be sent to the user._

-   **See**: [Forgot Password](https://developers.jframework.io/references/api-reference/endpoints/users/forgot-password)

#### `getUserByUsername(username: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

**Gets a user by username.**

-   **Parameters**:

    -   `username` _string_  
        _The username of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get a User by Username](https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user-by-username)

#### `getUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

**Gets a user by the given ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get a User](https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user)

#### `getAppIntegrationAuthenticateURLs(params: IGetAppIntegrationAuthenticateURLsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthenticateURL[]>>`

**Gets app integration authenticate URLs for the given parameters.**

-   **Parameters**:

    -   `params` _IGetAppIntegrationAuthenticateURLsParams_  
        _The parameters for getting authenticate URLs._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGetAppIntegrationAuthenticateURLsParams Fields**:

    -   `callbackURL` _string_  
        _The callback URL. It is the URL that the user will be redirected to after logging in._
    -   `returnURL` _string_  
        _The return URL. It is the URL that the user will be redirected to after canceling the login._
    -   `deviceCode?` _string_  
        _The device code. It is the code that the user will be detected as a device._
    -   `typeResponse?` _AuthenticationResponseType_  
        _The type response. It is the type of the response after the authentication success._

-   **See**: [Get App Integration Authenticate URLs](https://developers.jframework.io/references/api-reference/endpoints/users/get-app-integration-authenticate-urls)

#### `getDevicesFromUser(userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IDeviceOfUser[]>>`

**Gets devices associated with a user.**

-   **Parameters**:

    -   `userId` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get Devices from a User](https://developers.jframework.io/references/api-reference/endpoints/users/get-devices-from-a-user)

#### `getUsersByListIDs(ids: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<IUser[]>>`

**Gets users by a list of IDs (maximum 100).**

-   **Parameters**:

    -   `ids` _IdType[]_  
        _The list of user IDs._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get Users by List ID](https://developers.jframework.io/references/api-reference/endpoints/users/get-users#get-api-v1-users-by-list-id)

#### `getUsers(params: IGetUsersParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IUser>>`

**Gets a list of users in the system, filtered by the provided parameters.**

-   **Parameters**:

    -   `params` _IGetUsersParams_  
        _The parameters for getting users._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGetUsersParams Fields**:

    -   `ids?` _string_  
        _The list id of the user to filter._
    -   `roleId?` _IdType_  
        _The role id of the user._
    -   `code?` _string_  
        _The code of the user._
    -   `username?` _string_  
        _The username of the user._
    -   `userType?` _string_  
        _The type of the user._
    -   `isEmailAddressVerified?` _boolean_  
        _Filter with is email address verified._
    -   `isUserVerified?` _boolean_  
        _Filter with is user verified._
    -   `testMode?` _boolean_  
        _The email address of the user._
    -   `status?` _UserStatus_  
        _The status of the user._
    -   `isSystem?` _boolean_  
        _Filter with is system user._
    -   `firstName?` _string_  
        _The first name of the user._
    -   `lastName?` _string_  
        _The last name of the user._
    -   `nickName?` _string_  
        _The nickname of the user._
    -   `avatar?` _string_ - uri  
        _The avatar of the user._
    -   `emailAddress?` _string_  
        _The email address of the user._
    -   `phoneNumber?` _string_ - tel  
        _The phone number 1 (deprecated)._
    -   `keywords?` _string_  
        _The keywords to search._
    -   `packageId?` _IdType_  
        _The package id of the user._
    -   `languageCode?` _string_  
        _The language code of the user._
    -   `timeZoneId?` _IdType_  
        _The time zone id of the user._
    -   `trackingLevel?` _number_ - int32  
        _The tracking level of the user._
    -   `referralCode?` _string_  
        _The referral code of the user._

-   **See**: [Get Users](https://developers.jframework.io/references/api-reference/endpoints/users/get-users)

#### `getRolesAssignedToUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole[]>>`

**Gets the roles assigned to a user.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Gets Roles Assigned to the User](https://developers.jframework.io/references/api-reference/endpoints/users/gets-roles-assigned-to-the-user)

#### `getCurrentUserLoggedIn(config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

**Gets the current logged-in user.**

-   **Parameters**:

    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Gets the Current User Logged In](https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-current-user-logged-in)

#### `getRefereeOfUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IBaseUser[]>>`

**Gets the referees of a user.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Gets the Referees of a User](https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-referees-of-a-user)

#### `listAllBrandPartnersAuthenticate(userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrandPartnerAuthenticate>>`

**Gets the connection authenticate brand status for a user.**

-   **Parameters**:

    -   `userId` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [List All Brand Partner Auth](https://developers.jframework.io/references/api-reference/endpoints/users/list-all-brand-partner-auth)

#### `lockUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Locks a user, setting their status to Locked after sending a notification email.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Lock a User](https://developers.jframework.io/references/api-reference/endpoints/users/lock-a-user)

#### `registerNewUser(params: IRegisterNewUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

**Registers a new user.**

-   **Parameters**:

    -   `params` _IRegisterNewUserParams_  
        _The parameters for registering a new user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IRegisterNewUserParams Fields**:

    -   `username?` _string | null_  
        _The username that the user is registering with._
    -   `phoneNumber?` _string | null_ - tel  
        _The phone number that the user is registering with. The phone number is in the E.164 format._
    -   `password` _string_ - min: 1  
        _The password that the user is registering with._
    -   `emailAddress?` _string | null_ - min: 1  
        _The email address that the user is registering with._
    -   `firstName?` _string | null_  
        _The first name of the user._
    -   `lastName?` _string | null_  
        _The last name of the user._
    -   `nickName?` _string | null_  
        _The nickname of the user._
    -   `referralCode?` _string | null_  
        _The invitation code that the user is using to register._
    -   `timeZoneId?` _string | null_  
        _The timezone id._

-   **See**: [Register a New User](https://developers.jframework.io/references/api-reference/endpoints/users/register-a-new-user)

#### `removeDeviceFromUser(params: IRemoveDeviceFromUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Removes a device from a user.**

-   **Parameters**:

    -   `params` _IRemoveDeviceFromUserParams_  
        _The parameters for removing a device from a user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IRemoveDeviceFromUserParams Fields**:

    -   `userId` _IdType_  
        _The id of the user._
    -   `deviceId` _IdType_  
        _The id of the device._

-   **See**: [Remove a Device from a User](https://developers.jframework.io/references/api-reference/endpoints/users/remove-a-device-from-a-user)

#### `resetPassword(params: IResetPasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Resets the user's password using the reset password token.**

-   **Parameters**:

    -   `params` _IResetPasswordParams_  
        _The parameters for resetting the password._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IResetPasswordParams Fields**:

    -   `emailAddress` _string_ - email - min: 1  
        _This represents the email of the user._
    -   `token` _string_ - min: 1  
        _This represents the token of the user._
    -   `newPassword` _string_ - min: 1  
        _This represents the new password of the user._

-   **See**: [Reset Password](https://developers.jframework.io/references/api-reference/endpoints/users/reset-password)

#### `revokeRolesFromUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Revokes roles from a user.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `roleIds` _IdType[]_  
        _The role IDs to revoke._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Revokes Roles from a User](https://developers.jframework.io/references/api-reference/endpoints/users/revokes-roles-from-a-user)

#### `statisticUsers(params: IStatisticsUsersParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IStatisticsUsers[]>>`

**Provides statistics for users based on the given filter.**

-   **Parameters**:

    -   `params` _IStatisticsUsersParams_  
        _The parameters for user statistics._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Statistics Users](https://developers.jframework.io/references/api-reference/endpoints/users/statistics-users)

#### `suspendUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Suspends a user, setting their status to Suspended after sending a notification email.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Suspend a User](https://developers.jframework.io/references/api-reference/endpoints/users/suspend-a-user)

#### `unlockUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Unlocks a user with Locked or Active status blocked from unknown devices, setting them to Active.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Unlock a User](https://developers.jframework.io/references/api-reference/endpoints/users/unlock-a-user)

#### `unsuspendUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Unsuspends a user, returning them to Active status.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Unsuspend a User](https://developers.jframework.io/references/api-reference/endpoints/users/unsuspend-a-user)

#### `updateUser(id: IdType, params: IUpdateUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

**Updates a user by the given ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `params` _IUpdateUserParams_  
        _The parameters for updating a user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IUpdateUserParams Fields**:

    -   `username` _string_ - min: 1  
        _The username of the user._
    -   `emailAddress?` _string | null_ - email - min: 1  
        _The email address of the user._
    -   `nickName?` _string | null_  
        _The nickname of the user._
    -   `firstName?` _string | null_  
        _The first name of the user._
    -   `lastName?` _string | null_  
        _The last name of the user._
    -   `languageCode?` _string | null_  
        _The language code of the user._
    -   `timeZoneId?` _IdType | null_  
        _The id time zone of the user._
    -   `phoneNumber?` _string | null_ - tel  
        _The primary phone number of the user._
    -   `phoneNumber1?` _string | null_ - tel  
        _The phone number 1 of the user (deprecated)._
    -   `avatar?` _string | null_ - uri  
        _The avatar of the user._
    -   `bio?` _string | null_  
        _The bio is a short description of the user._
    -   `website?` _string | null_ - uri  
        _The website of the user want to update._

-   **See**: [Update a User](https://developers.jframework.io/references/api-reference/endpoints/users/update-a-user)

#### `updateUserType(id: IdType, type: UserType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Updates the user type for a specific user (only Super Admins can perform this).**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `type` _UserType_  
        _The user type._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Update Type User](https://developers.jframework.io/references/api-reference/endpoints/users/update-type-user)

#### Configurations

##### `createNewConfigurationForUser(userId: IdType, params: ICreateConfigurationOfUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration>>`

**Creates a new configuration for the user.**

-   **Parameters**:

    -   `userId` _IdType_  
        _The ID of the user._
    -   `params` _ICreateConfigurationOfUserParams_  
        _The parameters for creating a configuration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [POST /users/:id/configurations](https://developers.jframework.io/references/api-reference/endpoints/users/configurations#post-api-users-id-configurations)

##### `getConfigurationsOfUser(userId: IdType, params?: IGetConfigurationOfUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration[]>>`

**Gets the user's configurations.**

-   **Parameters**:

    -   `userId` _IdType_  
        _The ID of the user._
    -   `params?` _IGetConfigurationOfUserParams_  
        _The parameters for getting configurations._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGetConfigurationOfUserParams Fields**:

    -   `groupCode?` _string_  
        _Filter by group code._
    -   `code?` _string_  
        _Filter by code._
    -   `name?` _string_  
        _Filter by name._
    -   `description?` _string_  
        _Filter by description._
    -   `value?` _string_  
        _Filter by value._
    -   `status?` _ConfigurationStatus_  
        _Filter by status._

-   **See**: [Get Configurations](https://developers.jframework.io/references/api-reference/endpoints/users/configurations#get-api-v1-users-id-configurations)

##### `deleteConfigurationOfUserByID(userId: IdType, configurationId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Deletes a user's configuration by ID.**

-   **Parameters**:

    -   `userId` _IdType_  
        _The ID of the user._
    -   `configurationId` _IdType_  
        _The ID of the configuration._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Delete Configuration](https://developers.jframework.io/references/api-reference/endpoints/users/configurations#delete-api-v1-users-id-configurations-configurationid)

#### Email Address Verification

##### `sendEmailToVerifyEmailAddressOfUser(id: IdType, returnURL: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Sends an email to verify the user's email address.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the user._
    -   `returnURL` _string_  
        _The return URL after verification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Verify User Email](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#post-api-v1-users-id-email-address-verify-send)

##### `activeUserEmailAddress(token: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Activates the user's email address using the token.**

-   **Parameters**:

    -   `token` _string_  
        _The token to activate the email address._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Active User Email Address](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#put-api-v1-users-email-address-active)

#### Notification

##### `getNotificationRelatedToUser(params: IGetNotificationRelatedToUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUserNotification>>`

**Gets a notification detail related to a user by user ID and notification ID.**

-   **Parameters**:

    -   `params` _IGetNotificationRelatedToUserParams_  
        _The parameters for getting a notification._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGetNotificationRelatedToUserParams Fields**:

    -   `userId` _IdType_  
        _The id of the user to get._
    -   `notificationId` _IdType_  
        _The id of the notification._

-   **See**: [Get a Notification](https://developers.jframework.io/references/api-reference/endpoints/users/notification/get-a-notification)

##### `getNotificationsByUser(params: IGetNotificationsByUserParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IUserNotification, { unreadCount: number }>>`

**Gets notifications by the user's ID.**

-   **Parameters**:

    -   `params` _IGetNotificationsByUserParams_  
        _The parameters for getting notifications._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGetNotificationsByUserParams Fields**:

    -   `userId` _IdType_  
        _The id of the user to get._
    -   `status?` _UserNotificationStatus | null_  
        _The status of the notification._

-   **See**: [Get Notifications from a User](https://developers.jframework.io/references/api-reference/endpoints/users/notification/get-notifications-from-a-user)

##### `markNotificationAsRead(params: IMarkNotificationAsReadParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Marks a notification as read for the user.**

-   **Parameters**:

    -   `params` _IMarkNotificationAsReadParams_  
        _The parameters for marking a notification as read._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IMarkNotificationAsReadParams Fields**:

    -   `userId` _IdType_  
        _The id of the user to get._
    -   `notificationId` _IdType_  
        _The id of the notification._

-   **See**: [Mark as Read](https://developers.jframework.io/references/api-reference/endpoints/users/notification/mark-as-read)

##### `markAllNotificationsAsRead(userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Marks all notifications as read for the user.**

-   **Parameters**:

    -   `userId` _IdType_  
        _The ID of the user._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Mark All Notifications Read](https://developers.jframework.io/references/api-reference/endpoints/users/notification/mark-all-notifications-read)

#### Passwordless

##### Email

###### `authenticationByMagicLink(params: IAuthenticationByMagicLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Authenticates the user by sending a magic link to their email.**

-   **Parameters**:

    -   `params` _IAuthenticationByMagicLinkParams_  
        _The parameters for authentication by magic link._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IAuthenticationByMagicLinkParams Fields**:

    -   `emailAddress` _string_ - min: 1  
        _This represents the email address of the user._
    -   `callbackURL` _string_ - uri - min: 1  
        _This represents the callback url._
    -   `returnURL?` _string | null_ - uri  
        _This represents the return url._

-   **See**: [Authentication by Email](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-email)

###### `generateEmailOTPForAuthentication(params: IGenerateEmailAddressOTPForAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Generates an email OTP for authentication.**

-   **Parameters**:

    -   `params` _IGenerateEmailAddressOTPForAuthenticationParams_  
        _The parameters for generating an email OTP._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGenerateEmailAddressOTPForAuthenticationParams Fields**:

    -   `emailAddress` _string_ - min: 1  
        _The email address._

-   **See**: [Authentication by Email](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-email)

###### `verifyEmailAddressOTPToAuthentication(params: IVerifyOTPCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

**Verifies the OTP code sent to the user's email for authentication.**

-   **Parameters**:

    -   `params` _IVerifyOTPCodeParams_  
        _The parameters for verifying the OTP code._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IVerifyOTPCodeParams Fields**:

    -   `token` _string_ - min: 1  
        _The token to verify. This is the token that was received from the request to send the OTP._
    -   `otp` _string_ - min: 1  
        _The OTP to verify._

-   **See**: [Verify Email OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/email/verify-email-otp-code)

##### Phone

###### `generateSMSOTP(params: IGenerateSMSOTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Generates an SMS OTP for authentication to the user's phone number.**

-   **Parameters**:

    -   `params` _IGenerateSMSOTPParams_  
        _The parameters for generating SMS OTP._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGenerateSMSOTPParams Fields**:

    -   `phoneNumber` _string_ - min: 1  
        _The phone number. The phone number should be following the E.164 format._

-   **See**: [Authentication SMS OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/phone/authentication-sms-otp-code)

###### `verifyPhoneOTPForAuthentication(params: IVerifyOTPCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

**Verifies the OTP code sent to the user's phone number.**

-   **Parameters**:

    -   `params` _IVerifyOTPCodeParams_  
        _The parameters for verifying SMS OTP code._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IVerifyOTPCodeParams Fields**:

    -   `token` _string_ - min: 1  
        _The token to verify. This is the token that was received from the request to send the OTP._
    -   `otp` _string_ - min: 1  
        _The OTP to verify._

-   **See**: [Verify SMS OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/phone/verify-sms-otp-code)

##### QR Code

###### `generateNewQRCode(params?: IGenerateNewQRCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IGenerateNewQRCodeForParingAuthenticationResponse>>`

**Generates a new QR Code for pairing authentication between two devices.**

-   **Parameters**:

    -   `params?` _IGenerateNewQRCodeParams_  
        _The parameters for generating a new QR code._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGenerateNewQRCodeParams Fields**:

    -   `callbackUrl?` _string_  
        _Optional URL for the QR Code link._

-   **See**: [Generate QR Code Auth](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/generate-qr-code-auth)

###### `getCurrentStatusOfQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IGetCodeStatusResponse>>`

**Gets the current status of a QR Code pairing request (pending, approved, expired, rejected).**

-   **Parameters**:

    -   `qrCodeId` _IdType_  
        _The unique identifier of the QR Code session._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code)

###### `approveQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IGetCodeStatusResponse>>`

**Approves a QR Code pairing request.**

-   **Parameters**:

    -   `qrCodeId` _IdType_  
        _The unique identifier of the QR Code session._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code)

###### `loginUsingApprovedQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

**Logs in using an approved QR Code pairing request (deprecated, use `authWithApprovedQRCode` instead).**

-   **Parameters**:

    -   `qrCodeId` _IdType_  
        _The unique identifier of the approved QR Code session._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code)

###### `authWithApprovedQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

**Authenticates using an approved QR Code pairing request.**

-   **Parameters**:

    -   `qrCodeId` _IdType_  
        _The unique identifier of the approved QR Code session._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Auth with QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/auth-with-qr-code)

##### OTP Code

###### `generateNewOTPCode(params?: IGenerateNewQRCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IGenerateNewOTPForParingAuthenticationResponse>>`

**Generates a new OTP Code for pairing authentication between two devices.**

-   **Parameters**:

    -   `params?` _IGenerateNewQRCodeParams_  
        _The parameters for generating a new OTP code._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGenerateNewQRCodeParams Fields**:

    -   `callbackUrl?` _string_  
        _Optional URL for the QR Code link._

-   **See**: [Generate OTP Code Auth](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/generate-otp-code-auth)

###### `getCurrentStatusOfOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IGetCodeStatusResponse>>`

**Gets the current status of an OTP Code pairing request (pending, approved, expired, rejected).**

-   **Parameters**:

    -   `otpCode` _string_  
        _The OTP code value._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Get OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/get-otp-code)

###### `approveOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IGetCodeStatusResponse>>`

**Approves an OTP Code pairing request.**

-   **Parameters**:

    -   `otpCode` _string_  
        _The OTP code value._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Approve OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/approve-otp-code)

###### `loginUsingApprovedOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

**Logs in using an approved OTP Code pairing request (deprecated, use `authWithApprovedOTPCode` instead).**

-   **Parameters**:

    -   `otpCode` _string_  
        _The OTP code value._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Login OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/login-otp-code)

###### `authWithApprovedOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

**Authenticates using an approved OTP Code pairing request.**

-   **Parameters**:

    -   `otpCode` _string_  
        _The OTP code value._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Auth with OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/auth-with-otp-code)

### Wallet API

The `wallet` object provides methods for managing wallets, including adding money, applying redeem codes, and conversions.

#### `addMoneyToWalletWithCheckoutLink(params: IAddMoneyToWalletWithCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

**Generates a checkout link to add money to a wallet.**

-   **Parameters**:

    -   `params` _IAddMoneyToWalletWithCheckoutLinkParams_  
        _The parameters for generating a checkout link._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IAddMoneyToWalletWithCheckoutLinkParams Fields**:

    -   `currencyCode` _string_  
        _The currency code. The currency code must be a valid ISO 4217 currency code._
    -   `amount` _number_ - double  
        _The amount to add. The amount must be greater than 0._
    -   `returnLink` _string_ - uri  
        _The return link after the payment is successful._
    -   `cancelLink` _string_ - uri  
        _The cancel link after the payment is canceled._
    -   `testMode?` _boolean_  
        _The test mode. By default, it is false._

-   **See**: [Add Money to a Wallet with Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/wallets/add-money-to-a-wallet-with-checkout-link)

#### `applyRedeemCode(params: IApplyRedeemCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<unknown>>`

**Applies a redeem code to a wallet (valid redeem code and open wallet required).**

-   **Parameters**:

    -   `params` _IApplyRedeemCodeParams_  
        _The parameters for applying a redeem code._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IApplyRedeemCodeParams Fields**:

    -   `walletId` _IdType_  
        _The id of the wallet._
    -   `redeemCode` _string_  
        _The redeem code to apply._

-   **See**: [Apply Redeem](https://developers.jframework.io/references/api-reference/endpoints/wallets/apply-redeem)

#### `createWalletDefault(currencyCode: string, testMode: boolean = false, config?: AxiosRequestConfig) => Promise<HttpResponse<IWallet>>`

**Creates a new wallet with the given currency code (default testMode: false).**

-   **Parameters**:

    -   `currencyCode` _string_  
        _The currency code (ISO 4217)._
    -   `testMode` _boolean_  
        _The test mode flag (default: false)._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Create a Wallet Default](https://developers.jframework.io/references/api-reference/endpoints/wallets/create-a-wallet-default)

#### `convertWalletMoney(params: IConvertWalletMoneyParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Converts money in a wallet to another currency.**

-   **Parameters**:

    -   `params` _IConvertWalletMoneyParams_  
        _The parameters for converting wallet money._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IConvertWalletMoneyParams Fields**:

    -   `originalWalletId` _string_ - min: 1  
        _The id of the original wallet._
    -   `targetWalletId` _string_ - min: 1  
        _The id of the target wallet._
    -   `fee?` _number | null_ - double  
        _The fee of the convert._
    -   `totalAmount` _number_ - double  
        _The total amount convert._

-   **See**: [Convert Wallet Money](https://developers.jframework.io/references/api-reference/endpoints/wallets/convert-wallet-money)

#### `closeWallet(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

**Closes a wallet by the given ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the wallet._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **See**: [Close Wallet](https://developers.jframework.io/references/api-reference/endpoints/wallets/close-wallet)

#### `getWallets(params?: IGetWalletsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IWallet[]>>`

**Gets a list of wallets.**

-   **Parameters**:

    -   `params?` _IGetWalletsParams_  
        _The parameters for getting wallets._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGetWalletsParams Fields**:

    -   `currencyCode?` _string_  
        _The currency code._
    -   `status?` _string_  
        _The wallet status._
    -   `testMode?` _boolean_  
        _The test mode. By default, it is false._

-   **See**: [Get Wallets](https://developers.jframework.io/references/api-reference/endpoints/wallets/get-wallets)

#### `getWalletHistory(id: IdType, params: IGetWalletHistoriesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IWalletHistory>>`

**Gets the wallet history for a given wallet ID.**

-   **Parameters**:

    -   `id` _IdType_  
        _The ID of the wallet._
    -   `params` _IGetWalletHistoriesParams_  
        _The parameters for getting wallet histories._
    -   `config?` _AxiosRequestConfig_  
        _Optional Axios request configuration object._

-   **IGetWalletHistoriesParams Fields**:

    -   `code?` _string_  
        _The transaction code to filter the transactions._
    -   `refObject?` _string_  
        _The reference object to filter the transactions._
    -   `refId?` _number_ - int64  
        _The reference id to filter the transactions._
    -   `tags?` _string_  
        _The tags to filter the transactions._
    -   `type?` _WalletHistoryType_  
        _The type of the transaction to filter the transactions._
    -   `status?` _WalletHistoryStatus_  
        _The status of the transaction to filter the transactions._

-   **See**: [Get the Wallet Histories](https://developers.jframework.io/references/api-reference/endpoints/wallets/get-the-wallet-histories)
