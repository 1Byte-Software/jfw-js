# JFramework (JFW) - jfw-js

## About

JFramework (JFW) is a comprehensive backend API client library for JavaScript, part of the JFW ecosystem. It provides a set of APIs to interact with various resources such as ads, brands, users, and more, enabling developers to build robust applications with features like authentication, payments, and content management. The `jfw-js` package is designed for server-side JavaScript environments and integrates seamlessly with Axios for HTTP requests.

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
        -   [getCoupons(params?: IGetCouponsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<ICoupon>>](#getcouponsparams-igetcouponsparams-config-axiosrequestconfig--promisehttpresponselisticoupon)
        -   [updateCoupon(id: IdType, params: IUpdateCouponParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ICoupon>>](#updatecouponid-idtype-params-iupdatecouponparams-config-axiosrequestconfig--promisehttpresponseicoupon)
    -   [Cryptography API](#cryptography-api)
        -   [generateRSAKeyPair(config?: AxiosRequestConfig) => Promise<HttpResponse\<IRSAKeyPair>>](#generatersakeypairconfig-axiosrequestconfig--promisehttpresponseirsakeypair)
    -   [Currency API](#currency-api)
        -   [getCurrencies(config?: AxiosRequestConfig) => Promise<HttpResponse\<ICurrency[]>>](#getcurrenciesconfig-axiosrequestconfig--promisehttpresponseicurrency)
    -   [Device API](#device-api)
        -   [createDevice(params: ICreateDeviceParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IDevice>>](#createdeviceparams-icreatedeviceparams-config-axiosrequestconfig--promisehttpresponseidevice)
        -   [deleteDevice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletedeviceid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getDevice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IDevice>>](#getdeviceid-idtype-config-axiosrequestconfig--promisehttpresponseidevice)
        -   [getDevices(params?: IGetDevicesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IDevice>>](#getdevicesparams-igetdevicesparams-config-axiosrequestconfig--promisehttpresponselistidevice)
        -   [updateDevice(id: IdType, params: IUpdateDeviceParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IDevice>>](#updatedeviceid-idtype-params-iupdatedeviceparams-config-axiosrequestconfig--promisehttpresponseidevice)
    -   [Domain API](#domain-api)
        -   [BrandLinksAPI](#brandlinksapi)
            -   [createBrandLink(params: ICreateBrandLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IBrandLink>>](#createbrandlinkparams-icreatebrandlinkparams-config-axiosrequestconfig--promisehttpresponseibrandlink)
            -   [deleteBrandLink(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletebrandlinkid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [getBrandLink(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IBrandLink>>](#getbrandlinkid-idtype-config-axiosrequestconfig--promisehttpresponseibrandlink)
            -   [getBrandLinks(params?: IGetBrandLinksParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IBrandLink>>](#getbrandlinksparams-igetbrandlinksparams-config-axiosrequestconfig--promisehttpresponselistibrandlink)
            -   [updateBrandLink(id: IdType, params: IUpdateBrandLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IBrandLink>>](#updatebrandlinkid-idtype-params-iupdatebrandlinkparams-config-axiosrequestconfig--promisehttpresponseibrandlink)
    -   [Email Template API](#email-template-api)
        -   [createEmailTemplate(params: ICreateEmailTemplateParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEmailTemplate>>](#createemailtemplateparams-icreateemailtemplateparams-config-axiosrequestconfig--promisehttpresponseiemailtemplate)
        -   [deleteEmailTemplate(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteemailtemplateid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getEmailTemplate(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEmailTemplate>>](#getemailtemplateid-idtype-config-axiosrequestconfig--promisehttpresponseiemailtemplate)
        -   [getEmailTemplates(params?: IGetEmailTemplatesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IEmailTemplate>>](#getemailtemplatesparams-igetemailtemplatesparams-config-axiosrequestconfig--promisehttpresponselistiemailtemplate)
        -   [updateEmailTemplate(id: IdType, params: IUpdateEmailTemplateParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEmailTemplate>>](#updateemailtemplateid-idtype-params-iupdateemailtemplateparams-config-axiosrequestconfig--promisehttpresponseiemailtemplate)
    -   [Event API](#event-api)
        -   [createEvent(params: ICreateEventParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEvent>>](#createeventparams-icreateeventparams-config-axiosrequestconfig--promisehttpresponseievent)
        -   [deleteEvent(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteeventid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getEvent(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEvent>>](#geteventid-idtype-config-axiosrequestconfig--promisehttpresponseievent)
        -   [getEvents(params?: IGetEventsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IEvent>>](#geteventsparams-igeventsparams-config-axiosrequestconfig--promisehttpresponselistievent)
        -   [updateEvent(id: IdType, params: IUpdateEventParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IEvent>>](#updateeventid-idtype-params-iupdateeventparams-config-axiosrequestconfig--promisehttpresponseievent)
    -   [Exchange Rate API](#exchange-rate-api)
        -   [getExchangeRate(params: IGetExchangeRateParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IExchangeRate>>](#getexchangerateparams-igetexchangerateparams-config-axiosrequestconfig--promisehttpresponseiexchangerate)
        -   [getExchangeRates(params?: IGetExchangeRatesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IExchangeRate>>](#getexchangeratesparams-igetexchangeratesparams-config-axiosrequestconfig--promisehttpresponselistiexchangerate)
    -   [Feature API](#feature-api)
        -   [createFeature(params: ICreateFeatureParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IFeature>>](#createfeatureparams-icreatefeatureparams-config-axiosrequestconfig--promisehttpresponseifeature)
        -   [deleteFeature(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletefeatureid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getFeature(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IFeature>>](#getfeatureid-idtype-config-axiosrequestconfig--promisehttpresponseifeature)
        -   [getFeatures(params?: IGetFeaturesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IFeature>>](#getfeaturesparams-igetfeaturesparams-config-axiosrequestconfig--promisehttpresponselistifeature)
        -   [updateFeature(id: IdType, params: IUpdateFeatureParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IFeature>>](#updatefeatureid-idtype-params-iupdatefeatureparams-config-axiosrequestconfig--promisehttpresponseifeature)
    -   [Invoice API](#invoice-api)
        -   [createInvoice(params: ICreateInvoiceParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IInvoice>>](#createinvoiceparams-icreateinvoiceparams-config-axiosrequestconfig--promisehttpresponseiinvoice)
        -   [deleteInvoice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteinvoiceid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getInvoice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IInvoice>>](#getinvoiceid-idtype-config-axiosrequestconfig--promisehttpresponseiinvoice)
        -   [getInvoices(params?: IGetInvoicesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IInvoice>>](#getinvoicesparams-igetinvoicesparams-config-axiosrequestconfig--promisehttpresponselistiinvoice)
        -   [updateInvoice(id: IdType, params: IUpdateInvoiceParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IInvoice>>](#updateinvoiceid-idtype-params-iupdateinvoiceparams-config-axiosrequestconfig--promisehttpresponseiinvoice)
    -   [Issue API](#issue-api)
        -   [createIssue(params: ICreateIssueParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IIssue>>](#createissueparams-icreateissueparams-config-axiosrequestconfig--promisehttpresponseiissue)
        -   [deleteIssue(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteissueid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getIssue(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IIssue>>](#getissueid-idtype-config-axiosrequestconfig--promisehttpresponseiissue)
        -   [getIssues(params?: IGetIssuesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IIssue>>](#getissuesparams-igetissuesparams-config-axiosrequestconfig--promisehttpresponselistiissue)
        -   [updateIssue(id: IdType, params: IUpdateIssueParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IIssue>>](#updateissueid-idtype-params-iupdateissueparams-config-axiosrequestconfig--promisehttpresponseiissue)
    -   [Issue Category API](#issue-category-api)
        -   [createIssueCategory(params: ICreateIssueCategoryParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IIssueCategory>>](#createissuecategoryparams-icreateissuecategoryparams-config-axiosrequestconfig--promisehttpresponseiissuecategory)
        -   [deleteIssueCategory(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteissuecategoryid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getIssueCategory(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IIssueCategory>>](#getissuecategoryid-idtype-config-axiosrequestconfig--promisehttpresponseiissuecategory)
        -   [getIssueCategories(params?: IGetIssueCategoriesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IIssueCategory>>](#getissuecategoriesparams-igetissuecategoriesparams-config-axiosrequestconfig--promisehttpresponselistiissuecategory)
        -   [updateIssueCategory(id: IdType, params: IUpdateIssueCategoryParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IIssueCategory>>](#updateissuecategoryid-idtype-params-iupdateissuecategoryparams-config-axiosrequestconfig--promisehttpresponseiissuecategory)
    -   [Language API](#language-api)
        -   [getLanguages(config?: AxiosRequestConfig) => Promise<HttpResponse\<ILanguage[]>>](#getlanguagesconfig-axiosrequestconfig--promisehttpresponseilanguage)
    -   [License API](#license-api)
        -   [createLicense(params: ICreateLicenseParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ILicense>>](#createlicenseparams-icreatelicenseparams-config-axiosrequestconfig--promisehttpresponseilicense)
        -   [deleteLicense(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletelicenseid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getLicense(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<ILicense>>](#getlicenseid-idtype-config-axiosrequestconfig--promisehttpresponseilicense)
        -   [getLicenses(params?: IGetLicensesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<ILicense>>](#getlicensesparams-igetlicensesparams-config-axiosrequestconfig--promisehttpresponselistilicense)
        -   [updateLicense(id: IdType, params: IUpdateLicenseParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ILicense>>](#updatelicenseid-idtype-params-iupdatelicenseparams-config-axiosrequestconfig--promisehttpresponseilicense)
    -   [MFA API](#mfa-api)
        -   [disableMFA(config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#disablemfaconfig-axiosrequestconfig--promisehttpresponseboolean)
        -   [enableMFA(config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#enablemfaconfig-axiosrequestconfig--promisehttpresponseboolean)
        -   [generateMFACode(config?: AxiosRequestConfig) => Promise<HttpResponse\<string>>](#generatemfacodeconfig-axiosrequestconfig--promisehttpresponsestring)
        -   [verifyMFACode(code: string, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#verifymfacodecode-string-config-axiosrequestconfig--promisehttpresponseboolean)
    -   [Notification API](#notification-api)
        -   [createNotification(params: ICreateNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<INotification>>](#createnotificationparams-icreatenotificationparams-config-axiosrequestconfig--promisehttpresponseinotification)
        -   [deleteNotification(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletenotificationid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getNotification(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<INotification>>](#getnotificationid-idtype-config-axiosrequestconfig--promisehttpresponseinotification)
        -   [getNotifications(params?: IGetNotificationsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<INotification>>](#getnotificationsparams-igetnotificationsparams-config-axiosrequestconfig--promisehttpresponselistinotification)
        -   [sendPushNotification(params: ISendPushNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#sendpushnotificationparams-isendpushnotificationparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [sendSMSNotification(params: ISendSMSNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#sendsmsnotificationparams-isendsmsnotificationparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [updateNotification(id: IdType, params: IUpdateNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<INotification>>](#updatenotificationid-idtype-params-iupdatenotificationparams-config-axiosrequestconfig--promisehttpresponseinotification)
    -   [Organization API](#organization-api)
        -   [createOrganization(params: ICreateOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IOrganization>>](#createorganizationparams-icreateorganizationparams-config-axiosrequestconfig--promisehttpresponseiorganization)
        -   [deleteOrganization(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteorganizationid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getOrganization(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IOrganization>>](#getorganizationid-idtype-config-axiosrequestconfig--promisehttpresponseiorganization)
        -   [getOrganizations(params?: IGetOrganizationsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IOrganization>>](#getorganizationsparams-igetorganizationsparams-config-axiosrequestconfig--promisehttpresponselistiorganization)
        -   [updateOrganization(id: IdType, params: IUpdateOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IOrganization>>](#updateorganizationid-idtype-params-iupdateorganizationparams-config-axiosrequestconfig--promisehttpresponseiorganization)
    -   [Package API](#package-api)
        -   [createPackage(params: ICreatePackageParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPackage>>](#createpackageparams-icreatepackageparams-config-axiosrequestconfig--promisehttpresponseipackage)
        -   [deletePackage(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletepackageid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getPackage(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPackage>>](#getpackageid-idtype-config-axiosrequestconfig--promisehttpresponseipackage)
        -   [getPackages(params?: IGetPackagesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IPackage>>](#getpackagesparams-igetpackagesparams-config-axiosrequestconfig--promisehttpresponselistipackage)
        -   [updatePackage(id: IdType, params: IUpdatePackageParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPackage>>](#updatepackageid-idtype-params-iupdatepackageparams-config-axiosrequestconfig--promisehttpresponseipackage)
    -   [Payment API](#payment-api)
        -   [createPayment(params: ICreatePaymentParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPayment>>](#createpaymentparams-icreatepaymentparams-config-axiosrequestconfig--promisehttpresponseipayment)
        -   [getPayment(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPayment>>](#getpaymentid-idtype-config-axiosrequestconfig--promisehttpresponseipayment)
        -   [getPayments(params?: IGetPaymentsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IPayment>>](#getpaymentsparams-igetpaymentsparams-config-axiosrequestconfig--promisehttpresponselistipayment)
    -   [Permission API](#permission-api)
        -   [addRolesToPermission(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#addrolestopermissionid-idtype-roleids-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [createPermission(params: ICreatePermissionParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPermission>>](#createpermissionparams-icreatepermissionparams-config-axiosrequestconfig--promisehttpresponseipermission)
        -   [deletePermission(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletepermissionid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getPermission(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPermission>>](#getpermissionid-idtype-config-axiosrequestconfig--promisehttpresponseipermission)
        -   [getPermissions(params?: IGetPermissionsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IPermission>>](#getpermissionsparams-igetpermissionsparams-config-axiosrequestconfig--promisehttpresponselistipermission)
        -   [getRolesFromPermission(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IRole[]>>](#getrolesfrompermissionid-idtype-config-axiosrequestconfig--promisehttpresponseirole)
        -   [removeRolesFromPermission(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#removerolesfrompermissionid-idtype-roleids-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [updatePermission(id: IdType, params: IUpdatePermissionParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPermission>>](#updatepermissionid-idtype-params-iupdatepermissionparams-config-axiosrequestconfig--promisehttpresponseipermission)
    -   [Price API](#price-api)
        -   [createPrice(params: ICreatePriceParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPrice>>](#createpriceparams-icreatepriceparams-config-axiosrequestconfig--promisehttpresponseiprice)
        -   [deletePrice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletepriceid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [generateCheckoutLink(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<string>>](#generatecheckoutlinkid-idtype-config-axiosrequestconfig--promisehttpresponsestring)
        -   [getPrice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPrice>>](#getpriceid-idtype-config-axiosrequestconfig--promisehttpresponseiprice)
        -   [getPrices(params?: IGetPricesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IPrice>>](#getpricesparams-igetpricesparams-config-axiosrequestconfig--promisehttpresponselistiprice)
        -   [updatePrice(id: IdType, params: IUpdatePriceParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPrice>>](#updatepriceid-idtype-params-iupdatepriceparams-config-axiosrequestconfig--promisehttpresponseiprice)
    -   [Resource Type API](#resource-type-api)
        -   [createResourceType(params: ICreateResourceTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IResourceType>>](#createresourcetypeparams-icreateresourcetypeparams-config-axiosrequestconfig--promisehttpresponseiresourcetype)
        -   [deleteResourceType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteresourcetypeid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getResourceType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IResourceType>>](#getresourcetypeid-idtype-config-axiosrequestconfig--promisehttpresponseiresourcetype)
        -   [getResourceTypes(params?: IGetResourceTypesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IResourceType>>](#getresourcetypesparams-igetresourcetypesparams-config-axiosrequestconfig--promisehttpresponselistiresourcetype)
        -   [updateResourceType(id: IdType, params: IUpdateResourceTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IResourceType>>](#updateresourcetypeid-idtype-params-iupdateresourcetypeparams-config-axiosrequestconfig--promisehttpresponseiresourcetype)
    -   [Role API](#role-api)
        -   [assignUsersToRole(id: IdType, userIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#assignuserstoroleid-idtype-userids-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [createRole(params: ICreateRoleParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IRole>>](#createroleparams-icreateroleparams-config-axiosrequestconfig--promisehttpresponseirole)
        -   [deleteRole(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteroleid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getRole(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IRole>>](#getroleid-idtype-config-axiosrequestconfig--promisehttpresponseirole)
        -   [getRoles(params?: IGetRolesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IRole>>](#getrolesparams-igetrolesparams-config-axiosrequestconfig--promisehttpresponselistirole)
        -   [grantPermissionsToRole(id: IdType, permissionIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#grantpermissionstoroleid-idtype-permissionids-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getPermissionsGrantedByRole(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPermission[]>>](#getpermissionsgrantedbyroleid-idtype-config-axiosrequestconfig--promisehttpresponseipermission)
        -   [removePermissionsFromRole(id: IdType, permissionIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#removepermissionsfromroleid-idtype-permissionids-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [updateRole(id: IdType, params: IUpdateRoleParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IRole>>](#updateroleid-idtype-params-iupdateroleparams-config-axiosrequestconfig--promisehttpresponseirole)
    -   [State API](#state-api)
        -   [getStates(params?: IGetStatesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IState>>](#getstatesparams-igetstatesparams-config-axiosrequestconfig--promisehttpresponselististate)
    -   [Subscription Type API](#subscription-type-api)
        -   [createSubscriptionType(params: ICreateSubscriptionTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<ISubscriptionType>>](#createsubscriptiontypeparams-icreatesubscriptiontypeparams-config-axiosrequestconfig--promisehttpresponseisubscriptiontype)
        -   [deleteSubscriptionType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deletesubscriptiontypeid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getSubscriptionType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<ISubscriptionType>>](#getsubscriptiontypeid-idtype-config-axiosrequestconfig--promisehttpresponseisubscriptiontype)
        -   [getPricesFromSubscriptionType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IPrice[]>>](#getpricesfromsubscriptiontypeid-idtype-config-axiosrequestconfig--promisehttpresponseiprice)
        -   [getSubscriptionTypes(params?: IGetSubscriptionTypesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<ISubscriptionType>>](#getsubscriptiontypesparams-igetsubscriptiontypesparams-config-axiosrequestconfig--promisehttpresponselistisubscriptiontype)
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
        -   [addDeviceToUser(userId: IdType, params: IAddDeviceToUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#adddevicetouseruserid-idtype-params-iadddevicetouserparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [applyReferralCodeToUser(params: IApplyReferralCodeToUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#applyreferralcodetouserparams-iapplyreferralcodetouserparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [assignRolesToUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#assignrolestouserid-idtype-roleids-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [authenticationByApple(params: IAuthenticationByAppleParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#authenticationbyappleparams-iauthenticationbyappleparams-config-axiosrequestconfig--promisehttpresponseiauthentication)
        -   [authenticationByGoogle(params: IAuthenticationByGoogleParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#authenticationbygoogleparams-iauthenticationbygoogleparams-config-axiosrequestconfig--promisehttpresponseiauthentication)
        -   [authenticationByPhoneNumber(params: IAuthenticationByPhoneNumberParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#authenticationbyphonenumberparams-iauthenticationbyphonenumberparams-config-axiosrequestconfig--promisehttpresponseiauthentication)
        -   [authentication(params: IAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#authenticationparams-iauthenticationparams-config-axiosrequestconfig--promisehttpresponseiauthentication)
        -   [changePassword(params: IChangePasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#changepasswordparams-ichangepasswordparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [changePasswordForAnotherUser(id: IdType, params: IChangePasswordForAnotherUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#changepasswordforanotheruserid-idtype-params-ichangepasswordforanotheruserparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [checkReferralUserCode(params: ICheckReferralUserCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#checkreferralusercodeparams-icheckreferralusercodeparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [checkAuthKeyAvailable(params: ICheckAuthKeyAvailableParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#checkauthkeyavailableparams-icheckauthkeyavailableparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [deactivateUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deactivateuserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [deleteUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteuserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [sendEmailToVerifyEmailAddressOfUser(params: ISendEmailToVerifyEmailAddressOfUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#sendemailtoverifyemailaddressofuserparams-isendemailtoverifyemailaddressofuserparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [activeUserEmailAddress(params: IActiveUserEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#activeuseremailaddressparams-iactiveuseremailaddressparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [forgotPassword(params: IForgotPasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#forgotpasswordparams-iforgotpasswordparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getUserByUsername(params: IGetUserByUsernameParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#getuserbyusernameparams-igetuserbyusernameparams-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [getUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#getuserid-idtype-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [getAppIntegrationAuthenticateURLs(config?: AxiosRequestConfig) => Promise<HttpResponse\<IAppIntegrationAuthenticateURL[]>>](#getappintegrationauthenticateurlsconfig-axiosrequestconfig--promisehttpresponseiappintegrationauthenticateurl)
        -   [getDevicesFromUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IDevice[]>>](#getdevicesfromuserid-idtype-config-axiosrequestconfig--promisehttpresponseidevice)
        -   [getUsersByListIDs(params: IGetUsersByListIDsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IUser>>](#getusersbylistidsparams-igetusersbylistidsparams-config-axiosrequestconfig--promisehttpresponselistiuser)
        -   [getUsers(params?: IGetUsersParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IUser>>](#getusersparams-igetusersparams-config-axiosrequestconfig--promisehttpresponselistiuser)
        -   [getRolesAssignedToUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IRole[]>>](#getrolesassignedtouserid-idtype-config-axiosrequestconfig--promisehttpresponseirole)
        -   [getCurrentUserLoggedIn(config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#getcurrentuserloggedinconfig-axiosrequestconfig--promisehttpresponseiuser)
        -   [getRefereeOfUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#getrefereeofuserid-idtype-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [listAllBrandPartnersAuthenticate(config?: AxiosRequestConfig) => Promise<HttpResponse\<IBrandPartner[]>>](#listallbrandpartnersauthenticateconfig-axiosrequestconfig--promisehttpresponseibrandpartner)
        -   [lockUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#lockuserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [registerNewUser(params: IRegisterNewUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#registernewuserparams-iregisternewuserparams-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [removeDeviceFromUser(userId: IdType, deviceId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#removedevicefromuseruserid-idtype-deviceid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [resetPassword(params: IResetPasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#resetpasswordparams-iresetpasswordparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [revokeRolesFromUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#revokerolesfromuserid-idtype-roleids-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [statisticUsers(params?: IStatisticUsersParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IStatisticUsers>>](#statisticusersparams-istatisticusersparams-config-axiosrequestconfig--promisehttpresponseistatisticusers)
        -   [suspendUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#suspenduserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [unlockUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#unlockuserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [unsuspendUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#unsuspenduserid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [updateUser(id: IdType, params: IUpdateUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IUser>>](#updateuserid-idtype-params-iupdateuserparams-config-axiosrequestconfig--promisehttpresponseiuser)
        -   [updateUserType(id: IdType, params: IUpdateUserTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#updateusertypeid-idtype-params-iupdateusertypeparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [Configurations](#configurations)
            -   [createNewConfigurationForUser(params: ICreateNewConfigurationForUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IConfiguration>>](#createnewconfigurationforuserparams-icreatenewconfigurationforuserparams-config-axiosrequestconfig--promisehttpresponseiconfiguration)
            -   [getConfigurationsOfUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IConfiguration[]>>](#getconfigurationsofuserid-idtype-config-axiosrequestconfig--promisehttpresponseiconfiguration)
            -   [deleteConfigurationOfUserByID(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#deleteconfigurationofuserbyidid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [Email Address Verification](#email-address-verification)
            -   [sendEmailToVerifyEmailAddressOfUser(params: ISendEmailToVerifyEmailAddressOfUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#sendemailtoverifyemailaddressofuserparams-isendemailtoverifyemailaddressofuserparams-config-axiosrequestconfig--promisehttpresponseboolean-1)
            -   [activeUserEmailAddress(params: IActiveUserEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#activeuseremailaddressparams-iactiveuseremailaddressparams-config-axiosrequestconfig--promisehttpresponseboolean-1)
        -   [Notification](#notification)
            -   [getNotificationRelatedToUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<INotification>>](#getnotificationrelatedtouserid-idtype-config-axiosrequestconfig--promisehttpresponseinotification)
            -   [getNotificationsByUser(id: IdType, params?: IGetNotificationsByUserParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<INotification>>](#getnotificationsbyuserid-idtype-params-igetnotificationsbyuserparams-config-axiosrequestconfig--promisehttpresponselistinotification)
            -   [markNotificationAsRead(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#marknotificationasreadid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
            -   [markAllNotificationsAsRead(config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#markallnotificationsasreadconfig-axiosrequestconfig--promisehttpresponseboolean)
        -   [Passwordless](#passwordless)
            -   [Email](#email)
                -   [authenticationByMagicLink(params: IAuthenticationByMagicLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#authenticationbymagiclinkparams-iauthenticationbymagiclinkparams-config-axiosrequestconfig--promisehttpresponseiauthentication)
                -   [generateEmailOTPForAuthentication(params: IGenerateEmailOTPForAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#generateemailotpforauthenticationparams-igenerateemailotpforauthenticationparams-config-axiosrequestconfig--promisehttpresponseboolean)
                -   [verifyEmailAddressOTPToAuthentication(params: IVerifyEmailAddressOTPToAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#verifyemailaddressotptoauthenticationparams-iverifyemailaddressotptoauthenticationparams-config-axiosrequestconfig--promisehttpresponseiauthentication)
            -   [Phone](#phone)
                -   [generateSMSOTP(params: IGenerateSMSOTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#generatesmsotpparams-igeneratesmsotpparams-config-axiosrequestconfig--promisehttpresponseboolean)
                -   [verifyPhoneOTPForAuthentication(params: IVerifyPhoneOTPForAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#verifyphoneotpforauthenticationparams-iverifyphoneotpforauthenticationparams-config-axiosrequestconfig--promisehttpresponseiauthentication)
            -   [QR Code](#qr-code)
                -   [generateNewQRCode(config?: AxiosRequestConfig) => Promise<HttpResponse\<IQRCode>>](#generatenewqrcodeconfig-axiosrequestconfig--promisehttpresponseiqrcode)
                -   [getCurrentStatusOfQRCode(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IQRCodeStatus>>](#getcurrentstatusofqrcodeid-idtype-config-axiosrequestconfig--promisehttpresponseiqrcodestatus)
                -   [approveQRCode(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#approveqrcodeid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
                -   [loginUsingApprovedQRCode(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#loginusingapprovedqrcodeid-idtype-config-axiosrequestconfig--promisehttpresponseiauthentication)
                -   [authWithApprovedQRCode(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#authwithapprovedqrcodeid-idtype-config-axiosrequestconfig--promisehttpresponseiauthentication)
            -   [OTP Code](#otp-code)
                -   [generateNewOTPCode(config?: AxiosRequestConfig) => Promise<HttpResponse\<IOTPCode>>](#generatenewotpcodeconfig-axiosrequestconfig--promisehttpresponseiotpcode)
                -   [getCurrentStatusOfOTPCode(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IOTPCodeStatus>>](#getcurrentstatusofotpcodeid-idtype-config-axiosrequestconfig--promisehttpresponseiotpcodestatus)
                -   [approveOTPCode(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#approveotpcodeid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
                -   [loginUsingApprovedOTPCode(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#loginusingapprovedotpcodeid-idtype-config-axiosrequestconfig--promisehttpresponseiauthentication)
                -   [authWithApprovedOTPCode(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<IAuthentication>>](#authwithapprovedotpcodeid-idtype-config-axiosrequestconfig--promisehttpresponseiauthentication)
    -   [Wallet API](#wallet-api)
        -   [addMoneyToWalletWithCheckoutLink(params: IAddMoneyToWalletWithCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#addmoneytowalletwithcheckoutlinkparams-iaddmoneytowalletwithcheckoutlinkparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [applyRedeemCode(params: IApplyRedeemCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#applyredeemcodeparams-iapplyredeemcodeparams-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [createWalletDefault(config?: AxiosRequestConfig) => Promise<HttpResponse\<IWallet>>](#createwalletdefaultconfig-axiosrequestconfig--promisehttpresponseiwallet)
        -   [convertWalletMoney(params: IConvertWalletMoneyParams, config?: AxiosRequestConfig) => Promise<HttpResponse\<IWallet>>](#convertwalletmoneyparams-iconvertwalletmoneyparams-config-axiosrequestconfig--promisehttpresponseiwallet)
        -   [closeWallet(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse\<boolean>>](#closewalletid-idtype-config-axiosrequestconfig--promisehttpresponseboolean)
        -   [getWallets(params?: IGetWalletsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IWallet>>](#getwalletsparams-igetwalletsparams-config-axiosrequestconfig--promisehttpresponselistiwallet)
        -   [getWalletHistory(params?: IGetWalletHistoryParams, config?: AxiosRequestConfig) => Promise<HttpResponseList\<IWalletHistory>>](#getwallethistoryparams-igetwallethistoryparams-config-axiosrequestconfig--promisehttpresponselistiwallethistory)

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

Install the `jfw-js` package using your preferred package manager:

```bash
npm install jfw-js
```

Or with Yarn:

```bash
yarn add jfw-js
```

This package depends on Axios for HTTP requests, so ensure Axios is installed in your project:

```bash
npm install axios
```

#### Configuration

To initialize the backend API client, create an instance using your Axios instance configured with your JFW API base URL and authentication headers (e.g., using your secret key from the brand setup).

Example in Node.js:

```javascript
import axios from 'axios';
import { createBackendApiClient } from 'jfw-js';

const jfwAxios = axios.create({
    baseURL: 'https://api.jframework.io', // Replace with your JFW API base URL
    headers: {
        Authorization: `Bearer ${process.env.JFW_SECRET_KEY}`, // Use your secret key
    },
});

const jfwClient = createBackendApiClient(jfwAxios);

// Now you can use the client, e.g., to get ads
const ads = await jfwClient.ad.getAds();
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

Lists all app integrations by type.

-   **Parameters**:
    -   `params`: Parameters for getting app integrations (type: IGetAppIntegrationsParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get App Integrations](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/get-app-integrations)

#### AppIntegrationAnalyticsAPI

Handles analytics-related operations for app integrations.

#### `createAppIntegrationAnalytics(params: ICreateAppIntegrationAnalyticsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAnalytics>>`

Creates a new app integration analytics record.

-   **Parameters**:
    -   `params`: Parameters for creating analytics (type: ICreateAppIntegrationAnalyticsParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Creates an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/creates-an-app-integration-analytics)

#### `deleteAppIntegrationAnalytics(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an app integration analytics record by ID.

-   **Parameters**:
    -   `id`: The ID of the analytics record (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Deletes an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/deletes-an-app-integration-analytics)

#### `getAppIntegrationAnalytics(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAnalytics>>`

Gets an app integration analytics record by ID.

-   **Parameters**:
    -   `id`: The ID of the analytics record (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/gets-an-app-integration-analytics)

#### `getAppIntegrationAnalyticsWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAnalytics[]>>`

Lists all app integration analytics associated with a brand.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Apps Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/get-apps-integration-analytics)

#### `updateAppIntegrationAnalytics(params: IUpdateAppIntegrationAnalyticsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAnalytics>>`

Updates an app integration analytics record by ID.

-   **Parameters**:
    -   `params`: Parameters for updating analytics (type: IUpdateAppIntegrationAnalyticsParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Updates an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/updates-an-app-integration-analytics)

#### AppIntegrationAuthenticationAPI

Manages authentication settings for app integrations.

#### `createAppIntegrationAuthentication(params: ICreateAppIntegrationAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication>>`

Creates a new app integration authentication.

-   **Parameters**:
    -   `params`: Parameters for creating authentication (type: ICreateAppIntegrationAuthenticationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Creates an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/creates-an-app-integration-authentication)

#### `createAppIntegrationAuthenticationWithImportFileSettings(params: ICreateAppIntegrationAuthenticationWithImportFileSettingsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication>>`

Creates a new app integration authentication with import file settings.

-   **Parameters**:
    -   `params`: Parameters for creating authentication with import file (type: ICreateAppIntegrationAuthenticationWithImportFileSettingsParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create an App Integration Authentication by Import File](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/create-an-app-integration-authentication-by-import-file)

#### `deleteAppIntegrationAuthentication(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an app integration authentication by ID.

-   **Parameters**:
    -   `id`: The ID of the authentication (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Deletes an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/deletes-an-app-integration-authentication)

#### `getAppIntegrationAuthentication(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication>>`

Gets an app integration authentication by ID.

-   **Parameters**:
    -   `id`: The ID of the authentication (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/gets-an-app-integration-authentication)

#### `getAppsIntegrationAuthenticationWithBrand(params?: IGetAppIntegrationAuthenticationsWithBrandParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication[]>>`

Gets app integration authentications for a brand.

-   **Parameters**:
    -   `params`: Parameters for getting authentications (type: IGetAppIntegrationAuthenticationsWithBrandParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [List the Apps Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/list-the-apps-integration-authentication)

#### `testBuildingAuthenticationURL(appIntegrationId: IdType, params: ITestBuildingAuthenticationURLParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Simulates building an authentication URL for an app integration to validate settings.

-   **Parameters**:
    -   `appIntegrationId`: The ID of the app integration (type: IdType).
    -   `params`: Parameters for testing authentication URL (type: ITestBuildingAuthenticationURLParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Test Building an Authentication URL](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/test-building-an-authentication-url)

#### `updateAppIntegrationAuthentication(id: IdType, params: IUpdateAppIntegrationAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthentication>>`

Updates an app integration authentication by ID.

-   **Parameters**:
    -   `id`: The ID of the authentication (type: IdType).
    -   `params`: Parameters for updating authentication (type: IUpdateAppIntegrationAuthenticationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Updates an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/updates-an-app-integration-authentication)

#### AppIntegrationPaymentGatewayAPI

Manages payment gateway integrations for apps.

#### `createAppIntegrationPaymentGateway(params: ICreateAppIntegrationPaymentGatewayParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPaymentGateway>>`

Creates a new app integration payment gateway.

-   **Parameters**:
    -   `params`: Parameters for creating payment gateway (type: ICreateAppIntegrationPaymentGatewayParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Creates an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/creates-an-app-integration-payment-gateway)

#### `deleteAppIntegrationPaymentGateway(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an app integration payment gateway by ID.

-   **Parameters**:
    -   `id`: The ID of the payment gateway (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Deletes an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/deletes-an-app-integration-payment-gateway)

#### `getAppIntegrationPaymentGateway(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPaymentGateway>>`

Gets an app integration payment gateway by ID.

-   **Parameters**:
    -   `id`: The ID of the payment gateway (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-an-app-integration-payment-gateway)

#### `getAppsIntegrationPaymentGatewayWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPaymentGateway[]>>`

Gets the list of app integration payment gateways for the current brand.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets App Integration Payment Gateways with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-app-integration-payment-gateways-with-brand)

#### `testCreatingCheckoutLink(appIntegrationId: IdType, params: ITestCreatingCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Tests generating a checkout link for an app integration.

-   **Parameters**:
    -   `appIntegrationId`: The ID of the app integration (type: IdType).
    -   `params`: Parameters for testing checkout link creation (type: ITestCreatingCheckoutLinkParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Test Create Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/test-create-checkout-link)

#### `updateAppIntegrationPaymentGateway(id: IdType, params: IUpdateAppIntegrationPaymentGatewayParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPaymentGateway>>`

Updates an app integration payment gateway by ID.

-   **Parameters**:
    -   `id`: The ID of the payment gateway (type: IdType).
    -   `params`: Parameters for updating payment gateway (type: IUpdateAppIntegrationPaymentGatewayParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Updates an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/updates-an-app-integration-payment-gateway)

#### AppIntegrationPushNotificationAPI

Manages push notification integrations for apps.

#### `createAppIntegrationPushNotification(params: ICreateAppIntegrationPushNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification>>`

Creates a new app integration push notification.

-   **Parameters**:
    -   `params`: Parameters for creating push notification (type: ICreateAppIntegrationPushNotificationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/create-an-app-integration-push-notification)

#### `createAppIntegrationPushNotificationWithImportFileSettings(params: ICreateAppIntegrationPushNotificationWithImportFileSettingsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification>>`

Creates a new app integration push notification with import file settings.

-   **Parameters**:
    -   `params`: Parameters for creating push notification with import file (type: ICreateAppIntegrationPushNotificationWithImportFileSettingsParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create an App Integration Push Notification by Import File](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/create-an-app-integration-push-notification-by-import-file)

#### `deleteAppIntegrationPushNotification(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an app integration push notification by ID.

-   **Parameters**:
    -   `id`: The ID of the push notification (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/delete-an-app-integration-push-notification)

#### `getAppIntegrationPushNotification(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification>>`

Gets an app integration push notification by ID.

-   **Parameters**:
    -   `id`: The ID of the push notification (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-an-app-integration-push-notification)

#### `getAppIntegrationPushNotificationsWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification[]>>`

Gets the current brand's app integration push notifications.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get App Integration Push Notification with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-app-integration-push-notification-with-brand)

#### `updateAppIntegrationPushNotification(id: IdType, params: IUpdateAppIntegrationPushNotificationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationPushNotification>>`

Updates an app integration push notification by ID.

-   **Parameters**:
    -   `id`: The ID of the push notification (type: IdType).
    -   `params`: Parameters for updating push notification (type: IUpdateAppIntegrationPushNotificationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/update-an-app-integration-push-notification)

#### AppIntegrationReCAPTCHAAPI

Manages reCAPTCHA integrations for apps.

#### `createAppIntegrationReCAPTCHA(params: ICreateAppIntegrationReCAPTCHAParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationReCAPTCHA>>`

Creates a new app integration reCAPTCHA.

-   **Parameters**:
    -   `params`: Parameters for creating reCAPTCHA (type: ICreateAppIntegrationReCAPTCHAParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Creates an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/creates-an-app-integration-recaptcha)

#### `deleteAppIntegrationReCAPTCHA(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an app integration reCAPTCHA by ID.

-   **Parameters**:
    -   `id`: The ID of the reCAPTCHA (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Deletes an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/deletes-an-app-integration-recaptcha)

#### `getAppIntegrationReCAPTCHA(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationReCAPTCHA>>`

Gets an app integration reCAPTCHA by ID.

-   **Parameters**:
    -   `id`: The ID of the reCAPTCHA (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/gets-an-app-integration-recaptcha)

#### `getAppsIntegrationReCAPTCHAWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationReCAPTCHA[]>>`

Lists all app integration reCAPTCHAs.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Apps Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/get-apps-integration-recaptcha)

#### `updateAppIntegrationReCAPTCHA(params: IUpdateAppIntegrationReCAPTCHAParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationReCAPTCHA>>`

Updates an app integration reCAPTCHA by ID.

-   **Parameters**:
    -   `params`: Parameters for updating reCAPTCHA (type: IUpdateAppIntegrationReCAPTCHAParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Updates an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/updates-an-app-integration-recaptcha)

#### AppIntegrationSMSAPI

Manages SMS integrations for apps.

#### `createAppIntegrationSMS(params: ICreateAppIntegrationSMSParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMS>>`

Creates a new app integration SMS.

-   **Parameters**:
    -   `params`: Parameters for creating SMS integration (type: ICreateAppIntegrationSMSParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Creates an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/creates-an-app-integration-sms)

#### `deleteAppIntegrationSMS(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an app integration SMS by ID.

-   **Parameters**:
    -   `id`: The ID of the SMS integration (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Deletes an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/deletes-an-app-integration-sms)

#### `getAppIntegrationSMS(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMS>>`

Gets an app integration SMS by ID.

-   **Parameters**:
    -   `id`: The ID of the SMS integration (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms)

#### `getAppsIntegrationSMSWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMS[]>>`

Lists all app integration SMS.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets an App Integration SMS with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms-with-brand)

#### `testSendingSMSMessage(appIntegrationId: IdType, params: ITestSendingSMSMessageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Sends a test SMS message using the configured SMS integration settings.

-   **Parameters**:
    -   `appIntegrationId`: The ID of the app integration (type: IdType).
    -   `params`: Parameters for testing SMS message (type: ITestSendingSMSMessageParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Send SMS Test Message](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/send-sms-test-message)

#### `updateAppIntegrationSMS(id: IdType, params: IUpdateAppIntegrationSMSParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMS>>`

Updates an app integration SMS by ID.

-   **Parameters**:
    -   `id`: The ID of the SMS integration (type: IdType).
    -   `params`: Parameters for updating SMS integration (type: IUpdateAppIntegrationSMSParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Updates an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/update-an-app-integration-sms)

#### AppIntegrationSMTPAPI

Manages SMTP integrations for apps.

#### `createAppIntegrationSMTP(params: ICreateAppIntegrationSMTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMTP>>`

Creates a new app integration SMTP.

-   **Parameters**:
    -   `params`: Parameters for creating SMTP integration (type: ICreateAppIntegrationSMTPParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Creates an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/creates-an-app-integration-smtp)

#### `deleteAppIntegrationSMTP(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an app integration SMTP by ID.

-   **Parameters**:
    -   `id`: The ID of the SMTP integration (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Deletes an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/deletes-an-app-integration-smtp)

#### `getAppIntegrationSMTP(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMTP>>`

Gets an app integration SMTP by ID.

-   **Parameters**:
    -   `id`: The ID of the SMTP integration (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp)

#### `getAppsIntegrationSMTPWithBrand(config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMTP[]>>`

Gets app integration SMTPs for a brand.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets an App Integration SMTP with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp-with-brand)

#### `testSendingEmailAddress(params: ITestSendingEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Sends a test email using the configured SMTP integration settings.

-   **Parameters**:
    -   `params`: Parameters for testing email sending (type: ITestSendingEmailAddressParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Send Test Email](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/send-test-email)

#### `updateAppIntegrationSMTP(id: IdType, params: IUpdateAppIntegrationSMTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationSMTP>>`

Updates an app integration SMTP by ID.

-   **Parameters**:
    -   `id`: The ID of the SMTP integration (type: IdType).
    -   `params`: Parameters for updating SMTP integration (type: IUpdateAppIntegrationSMTPParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Updates an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/update-an-app-integration-smtp)

### Brand API

The `brand` object manages brand-related operations, including profiles, settings, and email addresses.

#### BrandProfileAPI

Manages brand profile operations.

##### `updateBrandProfile(id: IdType, params: IUpdateBrandProfileParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Updates a brand's profile by ID.

-   **Parameters**:
    -   `id`: The ID of the brand (type: IdType).
    -   `params`: Parameters for updating the brand profile (type: IUpdateBrandProfileParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Brand Profile](https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand-profile)

#### BrandSettingAPI

Manages brand setting operations.

##### `updateBrandSetting(id: IdType, params: IUpdateBrandSettingParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Updates a brand's settings by ID.

-   **Parameters**:
    -   `id`: The ID of the brand (type: IdType).
    -   `params`: Parameters for updating brand settings (type: IUpdateBrandSettingParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Brand Setting](https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand-setting)

#### EmailAddressAPI

Manages email addresses associated with brands.

##### `createEmailAddress(params: ICreateEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailAddress>>`

Creates an email address for a brand.

-   **Parameters**:
    -   `params`: Parameters for creating an email address (type: ICreateEmailAddressParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/create-an-email-address)

##### `deleteEmailAddress(params: IDeleteEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an email address.

-   **Parameters**:
    -   `params`: Parameters for deleting an email address (type: IDeleteEmailAddressParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/delete-an-email-address)

##### `getEmailAddress(params: IGetEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailAddress>>`

Gets an email address.

-   **Parameters**:
    -   `params`: Parameters for getting an email address (type: IGetEmailAddressParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/get-an-email-address)

##### `getEmailAddresses(brandId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailAddress[]>>`

Gets email addresses for a brand.

-   **Parameters**:
    -   `brandId`: The ID of the brand (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Email Addresses](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/get-email-addresses)

##### `updateEmailAddress(emailAddressId: IdType, params: IUpdateEmailAddressParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailAddress>>`

Updates an email address.

-   **Parameters**:
    -   `emailAddressId`: The ID of the email address (type: IdType).
    -   `params`: Parameters for updating an email address (type: IUpdateEmailAddressParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/update-an-email-address)

#### BrandAPI

Manages brand-related operations.

##### `checkDomainIfExists(domain: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Checks if a brand exists by domain.

-   **Parameters**:
    -   `domain`: The domain to check (type: string).
    -   `config`: Optional Axios request configuration.
-   **See**: [Check Domain Exists](https://developers.jframework.io/references/api-reference/endpoints/brands/check-domain-exists)

##### `createBrand(params: ICreateBrandParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrand>>`

Creates a new brand.

-   **Parameters**:
    -   `params`: Parameters for creating a brand (type: ICreateBrandParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Brand](https://developers.jframework.io/references/api-reference/endpoints/brands/create-a-brand)

##### `generateNewDomain(config?: AxiosRequestConfig) => Promise<HttpResponse<IGeneratedDomain>>`

Generates a new, unused domain name.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Generate Domain](https://developers.jframework.io/references/api-reference/endpoints/brands/generate-domain)

##### `getBrand(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrand>>`

Gets a brand by ID.

-   **Parameters**:
    -   `id`: The ID of the brand (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Brand](https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand)

##### `getBrandByURL(config?: AxiosRequestConfig) => Promise<HttpResponse<IBrand>>`

Gets a brand based on the client or host domain.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Brand by Brand URL](https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand-by-brand-url)

##### `getBrands(params?: IGetBrandsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IBrand>>`

Gets brands by filter.

-   **Parameters**:
    -   `params`: Parameters for getting brands (type: IGetBrandsParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Brands](https://developers.jframework.io/references/api-reference/endpoints/brands/get-brands)

##### `updateBrand(id: IdType, params: IUpdateBrandParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Updates a brand by ID.

-   **Parameters**:
    -   `id`: The ID of the brand (type: IdType).
    -   `params`: Parameters for updating a brand (type: IUpdateBrandParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Brand](https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand)

### CDN API

The `cdn` object manages files on the Content Delivery Network (CDN).

#### `deleteFileCDN(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a file from the CDN.

-   **Parameters**:
    -   `id`: The ID of the file (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a File CDN](https://developers.jframework.io/references/api-reference/endpoints/cdn/delete-a-file-cdn)

#### `getFileCDN(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IFileCDN>>`

Gets a file from the CDN by ID.

-   **Parameters**:
    -   `id`: The ID of the file (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a File CDN](https://developers.jframework.io/references/api-reference/endpoints/cdn/get-a-file-cdn)

#### `getFilesCDN(params?: IGetFilesCDNParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IFileCDN>>`

Gets a list of CDN items.

-   **Parameters**:
    -   `params`: Parameters for getting CDN files (type: IGetFilesCDNParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Files CDN](https://developers.jframework.io/references/api-reference/endpoints/cdn/get-files-cdn)

#### `uploadFileCDN(params: IUploadFileParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUploadedFileCDN>>`

Uploads a file to the CDN. The `CdnPathType` specifies the root folder, defaulting to "User".

-   **Parameters**:
    -   `params`: Parameters for uploading a file (type: IUploadFileParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Upload File](https://developers.jframework.io/references/api-reference/endpoints/cdn/upload-file)

#### `uploadFile(params: IUploadFileParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUploadedFileCDN>>`

Deprecated. Use `uploadFileCDN` instead.

-   **Parameters**:
    -   `params`: Parameters for uploading a file (type: IUploadFileParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Upload File](https://developers.jframework.io/references/api-reference/endpoints/cdn/upload-file)

### City API

The `city` object manages city data.

#### `getCities(params?: IGetCitiesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ICity>>`

Gets a list of all cities.

-   **Parameters**:
    -   `params`: Parameters for getting cities (type: IGetCitiesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Cities](https://developers.jframework.io/references/api-reference/endpoints/cities)

### Commission Rate API

The `commissionRate` object manages commission rates.

#### `createCommissionRate(params?: ICreateCommissionRateParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICommissionRate>>`

Creates a new commission rate.

-   **Parameters**:
    -   `params`: Parameters for creating a commission rate (type: ICreateCommissionRateParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/create-a-commission-rate)

#### `deleteCommissionRate(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a commission rate by ID.

-   **Parameters**:
    -   `id`: The ID of the commission rate (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/delete-a-commission-rate)

#### `getCommissionRate(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ICommissionRate>>`

Gets a commission rate by ID.

-   **Parameters**:
    -   `id`: The ID of the commission rate (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-a-commission-rate)

#### `getDiscountValue(quantity: number, config?: AxiosRequestConfig) => Promise<HttpResponse<number>>`

Gets the discount value based on quantity, using the user's commission rate.

-   **Parameters**:
    -   `quantity`: The quantity to check for discount (type: number).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Discount Value](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-discount-value)

#### `getCommissionRates(params?: IGetCommissionRatesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICommissionRate[]>>`

Gets a list of commission rates.

-   **Parameters**:
    -   `params`: Parameters for getting commission rates (type: IGetCommissionRatesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Commission Rates](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-commission-rates)

#### `updateCommissionRate(id: IdType, params?: IUpdateCommissionRateParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Updates a commission rate by ID.

-   **Parameters**:
    -   `id`: The ID of the commission rate (type: IdType).
    -   `params`: Parameters for updating a commission rate (type: IUpdateCommissionRateParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/update-a-commission-rate)

### Configuration API

The `configuration` object manages configurations.

#### `createConfiguration(params: ICreateConfigurationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration>>`

Creates a new configuration.

-   **Parameters**:
    -   `params`: Parameters for creating a configuration (type: ICreateConfigurationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/create-a-configuration)

#### `deleteConfiguration(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a configuration by ID.

-   **Parameters**:
    -   `id`: The ID of the configuration (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/delete-a-configuration)

#### `getConfigurations(params?: IGetConfigurationsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration[]>>`

Gets a list of configurations.

-   **Parameters**:
    -   `params`: Parameters for getting configurations (type: IGetConfigurationsParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Configurations](https://developers.jframework.io/references/api-reference/endpoints/configurations/get-configurations)

#### `getConfiguration(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration>>`

Gets a configuration by ID.

-   **Parameters**:
    -   `id`: The ID of the configuration (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/get-a-configuration)

#### `updateConfiguration(id: IdType, params: IUpdateConfigurationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<unknown>>`

Updates a configuration by ID.

-   **Parameters**:
    -   `id`: The ID of the configuration (type: IdType).
    -   `params`: Parameters for updating a configuration (type: IUpdateConfigurationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/update-a-configuration)

### Constant API

The `constant` object retrieves various constant types and statuses.

#### `getBrandLinkTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all brand link types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Brand Link](https://developers.jframework.io/references/api-reference/endpoints/constants/brand-link)

#### `getBlackListTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all black list types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Black List](https://developers.jframework.io/references/api-reference/endpoints/constants/black-list)

#### `getCouponStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all coupon statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Coupon](https://developers.jframework.io/references/api-reference/endpoints/constants/coupon)

#### `getCommissionRateTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all commission rate types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/constants/commission-rate)

#### `getDeviceStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all device statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Device Status](https://developers.jframework.io/references/api-reference/endpoints/constants/device)

#### `getDeviceTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all device types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Device Types](https://developers.jframework.io/references/api-reference/endpoints/constants/device)

#### `getInvoiceStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all invoice statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Invoice Status](https://developers.jframework.io/references/api-reference/endpoints/constants/invoice)

#### `getInvoiceTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all invoice types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Invoice Types](https://developers.jframework.io/references/api-reference/endpoints/constants/invoice)

#### `getIssuePriorities(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all issue priorities.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Issue](https://developers.jframework.io/references/api-reference/endpoints/constants/issue)

#### `getLicenseSources(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all license sources.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [License Sources](https://developers.jframework.io/references/api-reference/endpoints/constants/license)

#### `getLicenseTypes(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all license types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [License Types](https://developers.jframework.io/references/api-reference/endpoints/constants/license)

#### `getLicenseStatuses(config?: AxiosRequestConfig) => Promise<HttpResponse<string[]>>`

Gets all license statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [License Status](https://developers.jframework.io/references/api-reference/endpoints/constants/license)

### Country API

The `country` object manages country data.

#### `getCountries(config?: AxiosRequestConfig) => Promise<HttpResponse<ICountry[]>>`

Gets a list of all countries.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Countries](https://developers.jframework.io/references/api-reference/endpoints/countries)

### Coupon API

The `coupon` object manages coupons.

#### `createCoupon(params: ICreateCouponParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICoupon>>`

Creates a new coupon.

-   **Parameters**:
    -   `params`: Parameters for creating a coupon (type: ICreateCouponParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/create-a-coupon)

#### `deleteCoupon(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a coupon by ID.

-   **Parameters**:
    -   `id`: The ID of the coupon (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/delete-a-coupon)

#### `getCoupon(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ICoupon>>`

Gets a coupon by ID.

-   **Parameters**:
    -   `id`: The ID of the coupon (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/get-a-coupon)

#### `getCoupons(params?: IGetCouponsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ICoupon>>`

Gets a list of coupons.

-   **Parameters**:
    -   `params`: Parameters for getting coupons (type: IGetCouponsParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Coupons](https://developers.jframework.io/references/api-reference/endpoints/coupons/get-coupons)

#### `updateCoupon(id: IdType, params: IUpdateCouponParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICoupon>>`

Updates a coupon by ID.

-   **Parameters**:
    -   `id`: The ID of the coupon (type: IdType).
    -   `params`: Parameters for updating a coupon (type: IUpdateCouponParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/update-a-coupon)

### Cryptography API

The `cryptography` object manages cryptographic operations.

#### `generateRSAKeyPair(config?: AxiosRequestConfig) => Promise<HttpResponse<IRSAKeyPair>>`

Generates an RSA key pair.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Generate RSA Key Pair](https://developers.jframework.io/references/api-reference/endpoints/cryptography/generate-rsa-key-pair)

### Currency API

The `currency` object manages currency data.

#### `getCurrencies(config?: AxiosRequestConfig) => Promise<HttpResponse<ICurrency[]>>`

Gets a list of all currencies.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Currencies](https://developers.jframework.io/references/api-reference/endpoints/currencies)

### Device API

The `device` object manages device data.

#### `createDevice(params: ICreateDeviceParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IDevice>>`

Creates a new device.

-   **Parameters**:
    -   `params`: Parameters for creating a device (type: ICreateDeviceParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/create-a-device)

#### `deleteDevice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a device by ID.

-   **Parameters**:
    -   `id`: The ID of the device (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/delete-a-device)

#### `getDevice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IDevice>>`

Gets a device by ID.

-   **Parameters**:
    -   `id`: The ID of the device (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/get-a-device)

#### `getDevices(params?: IGetDevicesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IDevice>>`

Gets a list of devices.

-   **Parameters**:
    -   `params`: Parameters for getting devices (type: IGetDevicesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Devices](https://developers.jframework.io/references/api-reference/endpoints/devices/get-devices)

#### updateDevice

`updateDevice(id: IdType, params: IUpdateDeviceParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IDevice>>`

Updates a device by ID.

-   **Parameters**:
    -   `id`: The ID of the device (type: IdType).
    -   `params`: Parameters for updating a device (type: IUpdateDeviceParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/update-a-device)

### Domain API

The `domain` object manages domain-related operations.

#### BrandLinksAPI

Manages brand link operations.

##### `createBrandLink(params: ICreateBrandLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrandLink>>`

Creates a new brand link.

-   **Parameters**:
    -   `params`: Parameters for creating a brand link (type: ICreateBrandLinkParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/create-a-brand-link)

##### `deleteBrandLink(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a brand link by ID.

-   **Parameters**:
    -   `id`: The ID of the brand link (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/delete-a-brand-link)

##### `getBrandLink(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrandLink>>`

Gets a brand link by ID.

-   **Parameters**:
    -   `id`: The ID of the brand link (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/get-a-brand-link)

##### `getBrandLinks(params?: IGetBrandLinksParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IBrandLink>>`

Gets a list of brand links.

-   **Parameters**:
    -   `params`: Parameters for getting brand links (type: IGetBrandLinksParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Brand Links](https://developers.jframework.io/references/api-reference/endpoints/domains/get-brand-links)

##### `updateBrandLink(id: IdType, params: IUpdateBrandLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrandLink>>`

Updates a brand link by ID.

-   **Parameters**:
    -   `id`: The ID of the brand link (type: IdType).
    -   `params`: Parameters for updating a brand link (type: IUpdateBrandLinkParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/update-a-brand-link)

### Event API

The `event` object manages events and their associated templates.

#### `getEvent(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IEvent>>`

Gets an event by ID.

-   **Parameters**:
    -   `id`: The ID of the event (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get an Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-an-event)

#### `getEmailTemplateDefaultByEvent(eventId: IdType, params: IGetEmailTemplateDefaultByEventParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IDefaultEmailTemplate>>`

Gets the default email template for an event by ID and specified language code.

-   **Parameters**:
    -   `eventId`: The ID of the event (type: IdType).
    -   `params`: Parameters for getting the default email template (type: IGetEmailTemplateDefaultByEventParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Email Template Default by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-email-template-default-by-event)

#### `getEmailTemplateByEvent(eventId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IEmailTemplate>>`

Gets an email template by event ID.

-   **Parameters**:
    -   `eventId`: The ID of the event (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get an Email Template by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-an-email-template-by-event)

#### `getEvents(params?: IGetEventsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IEvent>>`

Gets a list of events.

-   **Parameters**:
    -   `params`: Parameters for getting events (type: IGetEventsParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Events](https://developers.jframework.io/references/api-reference/endpoints/events/get-events)

#### `getEventsEarningWallet(params?: IGetEventsEarningWalletParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IWalletEarningEvent>>`

Gets events related to wallet earnings (default type: Earning).

-   **Parameters**:
    -   `params`: Parameters for getting wallet earning events (type: IGetEventsEarningWalletParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Events Earning Wallet](https://developers.jframework.io/references/api-reference/endpoints/events/get-events-earning-wallet)

#### `getEventsAssociatedWithEmailTemplates(config?: AxiosRequestConfig) => Promise<HttpResponse<IEvent[]>>`

Gets events associated with email templates.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Events Email Templates](https://developers.jframework.io/references/api-reference/endpoints/events/get-events-email-templates)

#### `getEventsAssociatedWithPhoneTemplates(config?: AxiosRequestConfig) => Promise<HttpResponse<IEvent[]>>`

Gets events associated with phone templates.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Events Phone Templates](https://developers.jframework.io/references/api-reference/endpoints/events/get-events-phone-templates)

#### `getPhoneTemplateByEvent(eventId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPhoneTemplate>>`

Gets a phone template by event ID.

-   **Parameters**:
    -   `eventId`: The ID of the event (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Phone Template by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-phone-template-by-event)

#### `getPhoneTemplateDefaultByEvent(eventId: IdType, params: IGetPhoneTemplateDefaultByEventParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IDefaultPhoneTemplate>>`

Gets the default phone template for an event by ID and specified language code.

-   **Parameters**:
    -   `eventId`: The ID of the event (type: IdType).
    -   `params`: Parameters for getting the default phone template (type: IGetPhoneTemplateDefaultByEventParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Phone Template Default by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-phone-template-default-by-event)

### Exchange Rate API

The `exchangeRate` object manages exchange rates and currency conversions.

#### `getExchangeRates(config?: AxiosRequestConfig) => Promise<HttpResponse<IExchangeRate[]>>`

Gets all exchange rates in the system, relative to the base USD currency.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Exchange Rates](https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/get-exchange-rates)

#### `convertCurrency(params: IConvertCurrencyParams, config?: AxiosRequestConfig) => Promise<HttpResponse<number>>`

Converts an amount from one currency to another.

-   **Parameters**:
    -   `params`: Parameters for converting currency (type: IConvertCurrencyParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Convert Currency](https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/convert-currency)

### Feature API

The `feature` object manages features and their associated packages.

#### `addPackagesToFeature(featureId: IdType, params: IAddPackageToFeatureParams[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Adds packages to a feature.

-   **Parameters**:
    -   `featureId`: The ID of the feature (type: IdType).
    -   `params`: Parameters for adding packages to a feature (type: IAddPackageToFeatureParams[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Add Packages to a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/add-packages-to-a-feature)

#### `createFeature(params: ICreateFeatureParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IFeature>>`

Creates a new feature.

-   **Parameters**:
    -   `params`: Parameters for creating a feature (type: ICreateFeatureParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/create-a-feature)

#### `deleteFeature(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a feature by ID.

-   **Parameters**:
    -   `id`: The ID of the feature (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/delete-a-feature)

#### `getFeature(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IFeature>>`

Gets a feature by ID.

-   **Parameters**:
    -   `id`: The ID of the feature (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/get-a-feature)

#### `getFeatures(params?: IGetFeaturesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IFeature>>`

Gets a list of features.

-   **Parameters**:
    -   `params`: Parameters for getting features (type: IGetFeaturesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Features](https://developers.jframework.io/references/api-reference/endpoints/features/get-features)

#### `getPackagesFromFeature(featureId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage[]>>`

Gets packages associated with a feature.

-   **Parameters**:
    -   `featureId`: The ID of the feature (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Packages from Feature](https://developers.jframework.io/references/api-reference/endpoints/features/get-packages-from-feature)

#### `removePackagesFromFeature(featureId: IdType, packageIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Removes packages from a feature.

-   **Parameters**:
    -   `featureId`: The ID of the feature (type: IdType).
    -   `packageIds`: The IDs of the packages to remove (type: IdType[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Remove Packages from a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/remove-packages-from-a-feature)

#### `updateFeature(id: IdType, params: IUpdateFeatureParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IFeature>>`

Updates a feature by ID.

-   **Parameters**:
    -   `id`: The ID of the feature (type: IdType).
    -   `params`: Parameters for updating a feature (type: IUpdateFeatureParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/update-a-feature)

### Invoice API

The `invoice` object manages invoices.

#### `deleteInvoice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an invoice by ID.

-   **Parameters**:
    -   `id`: The ID of the invoice (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete an Invoice](https://developers.jframework.io/references/api-reference/endpoints/invoices/delete-an-invoice)

#### `getInvoices(params?: IGetInvoicesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IInvoice>>`

Gets a list of invoices.

-   **Parameters**:
    -   `params`: Parameters for getting invoices (type: IGetInvoicesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Invoices](https://developers.jframework.io/references/api-reference/endpoints/invoices/get-invoices)

#### `getInvoice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IInvoice>>`

Gets an invoice by ID.

-   **Parameters**:
    -   `id`: The ID of the invoice (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get an Invoice](https://developers.jframework.io/references/api-reference/endpoints/invoices/get-a-invoice)

#### `downloadInvoice(id: IdType, config?: AxiosRequestConfig) => Promise<Blob>`

Downloads an invoice by ID.

-   **Parameters**:
    -   `id`: The ID of the invoice (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: (Documentation to be updated in the future)

### Issue API

The `issue` object manages issues and their reactions.

#### `createIssue(params: ICreateIssueParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue>>`

Creates a new issue.

-   **Parameters**:
    -   `params`: Parameters for creating an issue (type: ICreateIssueParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/create-an-issue)

#### `deleteIssue(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an issue by ID.

-   **Parameters**:
    -   `id`: The ID of the issue (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue)

#### `getIssues(params?: IGetIssuesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IIssue>>`

Gets a list of issues.

-   **Parameters**:
    -   `params`: Parameters for getting issues (type: IGetIssuesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Issues](https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues)

#### `getIssue(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue>>`

Gets an issue by ID.

-   **Parameters**:
    -   `id`: The ID of the issue (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/get-an-issue)

#### `getIssuesByListId(ids: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue[]>>`

Gets a list of issues by their IDs (maximum 100 issues).

-   **Parameters**:
    -   `ids`: The list of issue IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Issues by List ID](https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues-by-list-id)

#### `getChildrenIssues(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue[]>>`

Gets the children of an issue by ID.

-   **Parameters**:
    -   `id`: The ID of the issue (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Children Issues](https://developers.jframework.io/references/api-reference/endpoints/issues/get-children-issues)

#### `updateIssue(params: IUpdateIssueParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssue>>`

Updates an issue by ID.

-   **Parameters**:
    -   `params`: Parameters for updating an issue, including `id` (type: IUpdateIssueParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/update-an-issue)

#### `createIssueReaction(params: ICreateIssueReactionParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Creates an issue reaction.

-   **Parameters**:
    -   `params`: Parameters for creating an issue reaction (type: ICreateIssueReactionParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create an Issue Reaction](https://developers.jframework.io/references/api-reference/endpoints/issues/issue-reactions/create-an-issue-reaction)

#### `deleteIssueReaction(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an issue reaction by ID.

-   **Parameters**:
    -   `id`: The ID of the issue reaction (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete an Issue Reaction](https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue-reaction)

### Issue Category API

The `issueCategory` object manages issue categories.

#### `createIssueCategory(params: ICreateIssueCategoryParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssueCategory>>`

Creates a new issue category.

-   **Parameters**:
    -   `params`: Parameters for creating an issue category (type: ICreateIssueCategoryParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/create-an-issue-category)

#### `deleteIssueCategory(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an issue category by ID.

-   **Parameters**:
    -   `id`: The ID of the issue category (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/delete-an-issue-category)

#### `getIssueCategories(params?: IGetIssueCategoriesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssueCategory[]>>`

Gets a list of issue categories.

-   **Parameters**:
    -   `params`: Parameters for getting issue categories (type: IGetIssueCategoriesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Issue Categories](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-issue-categories)

#### `getIssueCategory(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssueCategory>>`

Gets an issue category by ID.

-   **Parameters**:
    -   `id`: The ID of the issue category (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-an-issue-category)

#### `updateIssueCategory(id: IdType, params: IUpdateIssueCategoryParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IIssueCategory>>`

Updates an issue category by ID.

-   **Parameters**:
    -   `id`: The ID of the issue category (type: IdType).
    -   `params`: Parameters for updating an issue category (type: IUpdateIssueCategoryParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/update-an-issue-category)

### Language API

The `language` object manages languages.

#### `getLanguages(config?: AxiosRequestConfig) => Promise<HttpResponse<ILanguage[]>>`

Gets a list of all languages.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Languages](https://developers.jframework.io/references/api-reference/endpoints/languages)

### License API

The `license` object manages licenses.

#### `activateLicense(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicense>>`

Activates a license based on its current state. If the license is NotStarted, sets the StartDate to a valid date in the past. If Expired, sets the EndDate to a valid date in the future. If Inactive, sets both StartDate and EndDate if necessary. Does nothing if the license is already Used.

-   **Parameters**:
    -   `id`: The ID of the license (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Activate a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/activate-a-license)

#### `applyLicenseToLoggedUser(licenseCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Applies a license to the logged-in user, enabling the user to use the license's features and sending a notification email.

-   **Parameters**:
    -   `licenseCode`: The license code to apply (type: string).
    -   `config`: Optional Axios request configuration.
-   **See**: [Applies a License to the Logged User](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-logged-user)

#### `applyLicenseToGivenLoginName(params: IApplyLicenseToGivenLoginNameParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Applies a license code to a user by their login name, enabling the user to use the license's features and sending a notification email.

-   **Parameters**:
    -   `params`: Parameters for applying a license to a given login name (type: IApplyLicenseToGivenLoginNameParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Applies a License to the Given Login Name](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-login-name)

#### `applyLicenseToGivenUser(params: IApplyLicenseToGivenUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Applies a license code to a user by their user ID, enabling the user to use the license's features and sending a notification email.

-   **Parameters**:
    -   `params`: Parameters for applying a license to a given user (type: IApplyLicenseToGivenUserParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Applies a License to the Given User](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-a-user)

#### `checkLicenseCode(licenseCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Checks the status of a given license code.

-   **Parameters**:
    -   `licenseCode`: The license code to check (type: string).
    -   `config`: Optional Axios request configuration.
-   **See**: [Checks a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/checks-a-license)

#### `createLicenses(params: ICreateLicensesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICountSuccessResponse>>`

Creates new licenses.

-   **Parameters**:
    -   `params`: Parameters for creating licenses (type: ICreateLicensesParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create the Licenses](https://developers.jframework.io/references/api-reference/endpoints/licenses/create-the-licenses)

#### `countLicensesCreated(config?: AxiosRequestConfig) => Promise<HttpResponse<ICountSuccessResponse>>`

Counts the number of licenses created by each user.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Count Licenses Created](https://developers.jframework.io/references/api-reference/endpoints/licenses/count-licenses-created)

#### `deactivateLicense(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicense>>`

Deactivates a license.

-   **Parameters**:
    -   `id`: The ID of the license (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Deactivate a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/deactivate-a-license)

#### `deleteLicense(id: IdType) => Promise<HttpResponse<boolean>>`

Deletes a license by ID.

-   **Parameters**:
    -   `id`: The ID of the license (type: IdType).
-   **See**: [Delete a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/delete-a-license)

#### `getLicenses(params?: IGetLicensesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ILicense>>`

Gets a list of licenses.

-   **Parameters**:
    -   `params`: Parameters for getting licenses (type: IGetLicensesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Licenses](https://developers.jframework.io/references/api-reference/endpoints/licenses/get-licenses)

#### `getLicense(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicense>>`

Gets a license by ID.

-   **Parameters**:
    -   `id`: The ID of the license (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/get-a-license)

#### `generateLicenseCode(params: IGenerateLicenseCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Generates a license code, which is not stored in the system.

-   **Parameters**:
    -   `params`: Parameters for generating a license code (type: IGenerateLicenseCodeParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Generate License Code](https://developers.jframework.io/references/api-reference/endpoints/licenses/generate-code)

#### `purchaseToAddLicensesByCheckoutLink(params: IPurchaseToAddLicensesByCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Generates a checkout link to purchase licenses.

-   **Parameters**:
    -   `params`: Parameters for purchasing licenses via checkout link (type: IPurchaseToAddLicensesByCheckoutLinkParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Purchase to Add Licenses by Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-checkout-link)

#### `purchaseToAddLicensesByWallet(params: IPurchaseToAddLicensesByWalletParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Purchases licenses using the user's wallet.

-   **Parameters**:
    -   `params`: Parameters for purchasing licenses via wallet (type: IPurchaseToAddLicensesByWalletParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Purchase to Add Licenses by User Wallet](https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-user-wallet)

#### `statisticsLicensesMonthly(params?: IStatisticLicensesMonthlyParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicenseStatisticsReportSummary>>`

Retrieves monthly license usage statistics for reporting and analysis, including totals for licenses created, active, expired, used, unused, and financial details like total amount, refund, and postpaid billing.

-   **Parameters**:
    -   `params`: Parameters for getting monthly license statistics (type: IStatisticLicensesMonthlyParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Statistics Licenses Monthly](https://developers.jframework.io/references/api-reference/endpoints/licenses/statistics-licenses-monthly)

#### `updateLicense(params: IUpdateLicenseParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ILicense>>`

Updates a license by ID.

-   **Parameters**:
    -   `params`: Parameters for updating a license, including `id` (type: IUpdateLicenseParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/update-a-license)

### MFA API

The `mfa` object manages multiple factor authentication methods.

#### `getListOfMFA(config?: AxiosRequestConfig) => Promise<HttpResponse<IMFA[]>>`

Gets a list of multiple factor authentication methods available for the user.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a List of MFA](https://developers.jframework.io/references/api-reference/endpoints/multiple-factor-authentications/get-a-list-of-mfa)

### Notification API

The `notification` object manages notifications and broadcasts.

#### `createBroadcast(params: ICreateBroadcastParams, config?: AxiosRequestConfig) => Promise<HttpResponse<INotification>>`

Creates a new broadcast, generating individual notifications for relevant users.

-   **Parameters**:
    -   `params`: Parameters for creating a broadcast (type: ICreateBroadcastParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Broadcast](https://developers.jframework.io/references/api-reference/endpoints/notifications/create-broadcast)

#### `getNotification(notificationId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<INotification>>`

Gets a notification by ID.

-   **Parameters**:
    -   `notificationId`: The ID of the notification (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Notification](https://developers.jframework.io/references/api-reference/endpoints/notifications/get-a-notification)

#### `getNotifications(params?: IGetNotificationsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<INotification>>`

Gets a list of notifications.

-   **Parameters**:
    -   `params`: Parameters for getting notifications (type: IGetNotificationsParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Notifications](https://developers.jframework.io/references/api-reference/endpoints/notifications/get-notifications)

#### `pushNotificationMessageForTokens(params: IPushNotificationMessageForTokensParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPushNotificationResponse>>`

Pushes a notification with the given title and body to the specified device tokens.

-   **Parameters**:
    -   `params`: Parameters for pushing a notification message (type: IPushNotificationMessageForTokensParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Push Notification Message for Device Token](https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-message-for-device-token)

#### `pushNotificationDataMessageByTokens(deviceTokens: string[], data: Object, config?: AxiosRequestConfig) => Promise<HttpResponse<IPushNotificationResponse>>`

Pushes a notification with data messages to the specified device tokens.

-   **Parameters**:
    -   `deviceTokens`: The list of device tokens (type: string[]).
    -   `data`: The data for the notification (type: Object).
    -   `config`: Optional Axios request configuration.
-   **See**: [Push Notification Data Message by Tokens](https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-data-message-by-tokens)

#### `testPushNotificationDataMessage(params: ITestPushNotificationDataMessageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICountSuccessResponse>>`

Tests pushing a notification message to the given device tokens.

-   **Parameters**:
    -   `params`: Parameters for testing a push notification (type: ITestPushNotificationDataMessageParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Test Push Notification Data Message](https://developers.jframework.io/references/api-reference/endpoints/notifications/test-push-notification-data-message)

### Organization API

The `organization` object manages organizations and their users.

#### `addNewUserToOrganization(id: IdType, userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Adds a new user to an organization.

-   **Parameters**:
    -   `id`: The ID of the organization (type: IdType).
    -   `userId`: The ID of the user to add (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Add a User in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/add-a-user-in-an-organization)

#### `addUserForDefaultLanguageCodeOrganizationSystem(userId: IdType, languageCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Adds a new user to the organization system with the specified default language.

-   **Parameters**:
    -   `userId`: The ID of the user to add (type: IdType).
    -   `languageCode`: The language code to use (type: string).
    -   `config`: Optional Axios request configuration.
-   **See**: [Adds a User for Default Language Code Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/adds-a-user-for-default-language-code-organization)

#### `assignRoleForUserInOrganization(organizationId: IdType, params: IAssignRoleForUserInOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Assigns a role to a user in an organization.

-   **Parameters**:
    -   `organizationId`: The ID of the organization (type: IdType).
    -   `params`: Parameters for assigning a role (type: IAssignRoleForUserInOrganizationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Assign Role for a User in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/assign-role-for-a-user-in-an-organization)

#### `createOrganization(params: ICreateOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IOrganization>>`

Creates a new organization.

-   **Parameters**:
    -   `params`: Parameters for creating an organization (type: ICreateOrganizationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/create-an-organization)

#### `deleteOrganization(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes an organization by ID.

-   **Parameters**:
    -   `id`: The ID of the organization (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/delete-an-organization)

#### `getOrganization(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IOrganization>>`

Gets an organization by ID.

-   **Parameters**:
    -   `id`: The ID of the organization (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-an-organization)

#### `getOrganizations(params?: IGetOrganizationsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IOrganization>>`

Gets a list of organizations.

-   **Parameters**:
    -   `params`: Parameters for getting organizations (type: IGetOrganizationsParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Organizations](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-organizations)

#### `getUsersOfOrganization(organizationId: IdType, params?: IGetUsersOfOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IOrganizationUser>>`

Gets the users of an organization.

-   **Parameters**:
    -   `organizationId`: The ID of the organization (type: IdType).
    -   `params`: Parameters for getting users (type: IGetUsersOfOrganizationParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Users of an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-users-of-an-organization)

#### `removeUserInOrganization(organizationId: IdType, userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Removes a user from an organization.

-   **Parameters**:
    -   `organizationId`: The ID of the organization (type: IdType).
    -   `userId`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Remove a User in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/remove-a-user-in-an-organization)

#### `updateOrganization(id: IdType, params: IUpdateOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Updates an organization by ID.

-   **Parameters**:
    -   `id`: The ID of the organization (type: IdType).
    -   `params`: Parameters for updating an organization (type: IUpdateOrganizationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Updates an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-an-organization)

#### `updateUserStatusInOrganization(organizationId: IdType, params: IUpdateUserStatusInOrganizationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Updates a user's status in an organization.

-   **Parameters**:
    -   `organizationId`: The ID of the organization (type: IdType).
    -   `params`: Parameters for updating a user's status (type: IUpdateUserStatusInOrganizationParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Updates Users Status in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-users-status-in-an-organization)

### Package API

The `package` object manages packages and their features.

#### `addFeaturesToPackage(packageId: IdType, params: IAddFeatureToPackageParams[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Adds features to a package.

-   **Parameters**:
    -   `packageId`: The ID of the package (type: IdType).
    -   `params`: Parameters for adding features (type: IAddFeatureToPackageParams[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Add Features to a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/add-features-to-a-package)

#### `calculateTotalPriceCheckout(params: ICalculateTotalPriceCheckoutParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ICalculateTotalPriceCheckoutResponse>>`

Calculates the total price of a package at checkout, considering wallet, refund, prorate, subtotal, tax, and total price.

-   **Parameters**:
    -   `params`: Parameters for calculating total price (type: ICalculateTotalPriceCheckoutParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Calculate Total Price Checkout](https://developers.jframework.io/references/api-reference/endpoints/packages/calculate-total-price-checkout)

#### `createPackage(params: ICreatePackageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage>>`

Creates a new package.

-   **Parameters**:
    -   `params`: Parameters for creating a package (type: ICreatePackageParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/create-a-package)

#### `deletePackage(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a package by ID.

-   **Parameters**:
    -   `id`: The ID of the package (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/delete-a-package)

#### `getPackage(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage>>`

Gets a package by ID.

-   **Parameters**:
    -   `id`: The ID of the package (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/get-a-package)

#### `getFeaturesFromPackage(packageId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IFeatureOfPackage[]>>`

Gets features associated with a package.

-   **Parameters**:
    -   `packageId`: The ID of the package (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Features from Package](https://developers.jframework.io/references/api-reference/endpoints/packages/get-features-from-package)

#### `getPackages(params?: IGetPackagesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage[]>>`

Gets a list of packages.

-   **Parameters**:
    -   `params`: Parameters for getting packages (type: IGetPackagesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Packages](https://developers.jframework.io/references/api-reference/endpoints/packages/get-packages)

#### `getPricesFromPackage(packageId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice[]>>`

Gets prices associated with a package by its ID.

-   **Parameters**:
    -   `packageId`: The ID of the package (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Prices from a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/get-prices-from-a-package)

#### `removeFeaturesFromPackage(packageId: IdType, featureIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Removes features from a package.

-   **Parameters**:
    -   `packageId`: The ID of the package (type: IdType).
    -   `featureIds`: The list of feature IDs to remove (type: IdType[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Remove Features from a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/remove-features-from-a-package)

#### `renewalOrUpgradeUserPackage(params: IRenewalOrUpgradeUserPackageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IRenewalOrUpgradeUserPackageResponse>>`

Renews or upgrades a user's package.

-   **Parameters**:
    -   `params`: Parameters for renewing or upgrading a package (type: IRenewalOrUpgradeUserPackageParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Renewal or Upgrade User Package](https://developers.jframework.io/references/api-reference/endpoints/packages/renewal-or-upgrade-user-package)

#### `updatePackage(id: IdType, params: IUpdatePackageParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPackage>>`

Updates a package by ID.

-   **Parameters**:
    -   `id`: The ID of the package (type: IdType).
    -   `params`: Parameters for updating a package (type: IUpdatePackageParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/update-a-package)

#### `updatePackageFeatureData(pathParams: IUpdatePackageFeatureDataPathParams, params: IUpdatePackageFeatureDataParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Updates package feature data.

-   **Parameters**:
    -   `pathParams`: Path parameters for updating package feature data (type: IUpdatePackageFeatureDataPathParams).
    -   `params`: Parameters for updating package feature data (type: IUpdatePackageFeatureDataParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update Package Feature Data](https://developers.jframework.io/references/api-reference/endpoints/packages/update-package-feature-data)

### Payment API

The `payment` object manages payments.

#### `generatePaymentCheckoutLink(params: IGeneratePaymentCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPaymentGenerateCheckoutLinkResponse>>`

Generates a checkout link to make a payment.

-   **Parameters**:
    -   `params`: Parameters for generating a payment checkout link (type: IGeneratePaymentCheckoutLinkParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Generate Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/prices/generate-checkout-link)

#### `getPayment(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPayment>>`

Gets a payment by ID.

-   **Parameters**:
    -   `id`: The ID of the payment (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Payment](https://developers.jframework.io/references/api-reference/endpoints/payments/get-a-payment)

#### `getPayments(params?: IGetPaymentsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IPayment>>`

Gets a list of payments based on the given filter.

-   **Parameters**:
    -   `params`: Parameters for getting payments (type: IGetPaymentsParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Payments](https://developers.jframework.io/references/api-reference/endpoints/payments/get-payments)

#### `getOverviewSellDashboard(testMode?: boolean, config?: AxiosRequestConfig) => Promise<HttpResponse<IPaymentDashboard>>`

Calculates the metric overview dashboard for payments.

-   **Parameters**:
    -   `testMode`: Query parameter to enable test mode (type: boolean, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Gets the Overview Sell Dashboard](https://developers.jframework.io/references/api-reference/endpoints/payments/gets-the-overview-sell-dashboard)

### Permission API

The `permission` object manages permissions and their associated roles.

#### `addRolesToPermission(permissionId: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Adds roles to a permission.

-   **Parameters**:
    -   `permissionId`: The ID of the permission (type: IdType).
    -   `roleIds`: The list of role IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Add Roles to a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/add-roles-to-a-permission)

#### `createPermission(params: ICreatePermissionParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPermission>>`

Creates a new permission.

-   **Parameters**:
    -   `params`: Parameters for creating a permission (type: ICreatePermissionParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/add-roles-to-a-permission)

#### `deletePermission(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a permission by ID.

-   **Parameters**:
    -   `id`: The ID of the permission (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/delete-a-permission)

#### `getPermission(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPermission>>`

Gets a permission by ID.

-   **Parameters**:
    -   `id`: The ID of the permission (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/get-a-permission)

#### `getPermissions(params?: IGetPermissionsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IPermission>>`

Gets a list of all permissions.

-   **Parameters**:
    -   `params`: Parameters for getting permissions (type: IGetPermissionsParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Permissions](https://developers.jframework.io/references/api-reference/endpoints/permissions/get-permissions)

#### `getRolesFromPermission(permissionId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole[]>>`

Gets roles associated with a permission by its ID.

-   **Parameters**:
    -   `permissionId`: The ID of the permission (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Roles from a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/get-roles-from-a-permission)

#### `removeRolesFromPermission(permissionId: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Removes roles from a permission.

-   **Parameters**:
    -   `permissionId`: The ID of the permission (type: IdType).
    -   `roleIds`: The list of role IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Remove Roles from a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/remove-roles-from-a-permission)

#### `updatePermission(id: IdType, params: IUpdatePermissionParams, config?: AxiosRequestConfig) => Promise<HttpResponse<unknown>>`

Updates a permission by ID.

-   **Parameters**:
    -   `id`: The ID of the permission (type: IdType).
    -   `params`: Parameters for updating a permission (type: IUpdatePermissionParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/update-a-permission)

### Price API

The `price` object manages prices.

#### `createPrice(params: ICreatePriceParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice>>`

Creates a new price.

-   **Parameters**:
    -   `params`: Parameters for creating a price (type: ICreatePriceParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/create-a-price)

#### `deletePrice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a price by ID.

-   **Parameters**:
    -   `id`: The ID of the price (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/delete-a-price)

#### `generateCheckoutLink(params: IGenerateCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Generates a direct checkout link for a price, allowing the user to place an order. After successful checkout, redirects to the configured return URL and sends a license to the purchaser's email.

-   **Parameters**:
    -   `params`: Parameters for generating a checkout link (type: IGenerateCheckoutLinkParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Generate Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/prices/generate-checkout-link)

#### `getPrice(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice>>`

Gets a price by ID.

-   **Parameters**:
    -   `id`: The ID of the price (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/get-a-price)

#### `getPrices(params?: IGetPricesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice[]>>`

Gets a list of prices.

-   **Parameters**:
    -   `params`: Parameters for getting prices (type: IGetPricesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Prices](https://developers.jframework.io/references/api-reference/endpoints/prices/get-prices)

#### `updatePrice(id: IdType, params: IUpdatePriceParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice>>`

Updates a price by ID.

-   **Parameters**:
    -   `id`: The ID of the price (type: IdType).
    -   `params`: Parameters for updating a price (type: IUpdatePriceParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/update-a-price)

### Resource Type API

The `resourceType` object manages resource types.

#### `createResourceType(params: ICreateResourceTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IResourceType>>`

Creates a new resource type.

-   **Parameters**:
    -   `params`: Parameters for creating a resource type (type: ICreateResourceTypeParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/create-a-resource-type)

#### `deleteResourceType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a resource type by ID.

-   **Parameters**:
    -   `id`: The ID of the resource type (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/delete-a-resource-type)

#### `getResourceType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IResourceType>>`

Gets a resource type by ID.

-   **Parameters**:
    -   `id`: The ID of the resource type (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-a-resource-type)

#### `getResourceTypes(params?: IGetResourceTypesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IResourceType[]>>`

Gets a list of resource types.

-   **Parameters**:
    -   `params`: Parameters for getting resource types (type: IGetResourceTypesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Resource Types](https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-resource-types)

#### `updateResourceType(id: IdType, params: IUpdateResourceTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IResourceType>>`

Updates a resource type by ID.

-   **Parameters**:
    -   `id`: The ID of the resource type (type: IdType).
    -   `params`: Parameters for updating a resource type (type: IUpdateResourceTypeParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/update-a-resource-type)

### Role API

The `role` object manages roles and their permissions.

#### `assignUsersToRole(id: IdType, userIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Assigns users to a role.

-   **Parameters**:
    -   `id`: The ID of the role (type: IdType).
    -   `userIds`: The list of user IDs to assign (type: IdType[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Assign Users to a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/assign-users-to-a-role)

#### `deleteRole(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a role by ID, removing it from any assigned users and permissions.

-   **Parameters**:
    -   `id`: The ID of the role (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/delete-a-role)

#### `createRole(params: ICreateRoleParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole>>`

Creates a new role. New roles are not associated with permissions by default.

-   **Parameters**:
    -   `params`: Parameters for creating a role (type: ICreateRoleParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/create-a-role)

#### `getRole(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole>>`

Gets a role by ID.

-   **Parameters**:
    -   `id`: The ID of the role (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/get-a-role)

#### `getRoles(params?: IGetRolesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IRole>>`

Gets a list of roles in the brand.

-   **Parameters**:
    -   `params`: Parameters for getting roles (type: IGetRolesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Roles](https://developers.jframework.io/references/api-reference/endpoints/roles/get-roles)

#### `grantPermissionsToRole(roleId: IdType, permissionIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Grants one or more permissions to a specific role.

-   **Parameters**:
    -   `roleId`: The ID of the role (type: IdType).
    -   `permissionIds`: The list of permission IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Grant Permissions to a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/grant-permissions-to-a-role)

#### `getPermissionsGrantedByRole(roleId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPermission[]>>`

Retrieves a detailed list of permissions granted by a specified role, including name, description, and resource server.

-   **Parameters**:
    -   `roleId`: The ID of the role (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Permissions Granted by Role](https://developers.jframework.io/references/api-reference/endpoints/roles/get-permissions-granted-by-role)

#### `removePermissionsFromRole(roleId: IdType, permissionIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Removes one or more permissions from a specific role.

-   **Parameters**:
    -   `roleId`: The ID of the role (type: IdType).
    -   `permissionIds`: The list of permission IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration.
-   **See**: [Remove Permissions from a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/remove-permissions-from-a-role)

#### `updateRole(id: IdType, params: IUpdateRoleParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole>>`

Updates a role by ID.

-   **Parameters**:
    -   `id`: The ID of the role (type: IdType).
    -   `params`: Parameters for updating a role (type: IUpdateRoleParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/update-a-role)

### State API

The `state` object manages state data.

#### `getStates(config?: AxiosRequestConfig) => Promise<HttpResponse<IState[]>>`

Gets a list of states.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Get States](https://developers.jframework.io/references/api-reference/endpoints/states)

### Subscription Type API

The `subscriptionType` object manages subscription types.

#### `createSubscriptionType(params: ICreateSubscriptionTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ISubscriptionType>>`

Creates a new subscription type.

-   **Parameters**:
    -   `params`: Parameters for creating a new subscription type (type: ICreateSubscriptionTypeParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Create a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/create-a-subscription-type)

#### `deleteSubscriptionType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a subscription type by ID.

-   **Parameters**:
    -   `id`: The ID of the subscription type (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Delete a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/delete-a-subscription-type)

#### `getSubscriptionType(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ISubscriptionType>>`

Gets a subscription type by ID.

-   **Parameters**:
    -   `id`: The ID of the subscription type (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-a-subscription-type)

#### `getPricesFromSubscriptionType(subscriptionTypeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IPrice[]>>`

Gets prices from a subscription type.

-   **Parameters**:
    -   `subscriptionTypeId`: The ID of the subscription type (type: IdType).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Prices from a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-prices-from-a-subscription-type)

#### `getSubscriptionTypes(params?: IGetSubscriptionTypesParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ISubscriptionType[]>>`

Gets a list of subscription types.

-   **Parameters**:
    -   `params`: Parameters for getting subscription types (type: IGetSubscriptionTypesParams, optional).
    -   `config`: Optional Axios request configuration.
-   **See**: [Get Subscription Types](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-subscription-types)

#### `updateSubscriptionType(id: IdType, params: IUpdateSubscriptionTypeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<ISubscriptionType>>`

Updates a subscription type by ID.

-   **Parameters**:
    -   `id`: The ID of the subscription type (type: IdType).
    -   `params`: Parameters for updating a subscription type (type: IUpdateSubscriptionTypeParams).
    -   `config`: Optional Axios request configuration.
-   **See**: [Update a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/update-a-subscription-type)

### Timezone API

The `timezone` object manages timezones.

#### `getTimezones(config?: AxiosRequestConfig) => Promise<HttpResponse<ITimezone[]>>`

Lists all time zones.

-   **Parameters**:
    -   `config`: Optional Axios request configuration.
-   **See**: [Time Zones](https://developers.jframework.io/references/api-reference/endpoints/time-zones)

### Tracking Activity API

The `trackingActivity` object provides methods for managing tracking activities.

#### `getTrackingActivities(params?: IGetTrackingActivitiesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ITrackingActivity>>`

Gets a list of tracking activities.

-   **Parameters**:
    -   `params`: The parameters for getting tracking activities (type: IGetTrackingActivitiesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get Activities](https://developers.jframework.io/references/api-reference/endpoints/tracking-activities/get-activities)

#### `getTrackingActivity(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ITrackingActivity>>`

Gets a tracking activity by the given ID.

-   **Parameters**:
    -   `id`: The ID of the activity (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get a Activity](https://developers.jframework.io/references/api-reference/endpoints/tracking-activities/get-a-activity)

### Tracking Email API

The `trackingEmail` object provides methods for managing tracking emails.

#### `getTrackingEmail(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<ITrackingEmail>>`

Gets a tracking email by the given ID.

-   **Parameters**:
    -   `id`: The ID of the tracking email (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get a Tracking Email](https://developers.jframework.io/references/api-reference/endpoints/tracking-emails/get-a-tracking-email)

#### `getTrackingEmails(params?: IGetTrackingEmailsParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<ITrackingEmail>>`

Gets a list of tracking emails.

-   **Parameters**:
    -   `params`: The parameters for getting tracking emails (type: IGetTrackingEmailsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get Tracking Emails](https://developers.jframework.io/references/api-reference/endpoints/tracking-emails/get-tracking-emails)

### User API

The `user` object provides methods for managing users, including authentication, roles, devices, notifications, and passwordless login.

#### `activateUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Sends an activation email to the user, setting their status to Active upon completion.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Activate a User](https://developers.jframework.io/references/api-reference/endpoints/users/activate-a-user)

#### `addDeviceToUser(params: IAddDeviceToUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Adds a device to a user.

-   **Parameters**:
    -   `params`: The parameters for adding a device to a user (type: IAddDeviceToUserParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Add a Device to a User](https://developers.jframework.io/references/api-reference/endpoints/users/add-a-device-to-a-user)

#### `applyReferralCodeToUser(id: IdType, params: IApplyReferralCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Applies a referral code to a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `params`: The parameters for applying a referral code (type: IApplyReferralCodeParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Applies the Referral Code to a User](https://developers.jframework.io/references/api-reference/endpoints/users/applies-the-referral-code-to-a-user)

#### `assignRolesToUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Assigns roles to a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `roleIds`: The role IDs to assign (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Assigns Roles to a User](https://developers.jframework.io/references/api-reference/endpoints/users/assigns-roles-to-a-user)

#### `authenticationByApple(callbackURL: string, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Gets the Apple login URL.

-   **Parameters**:
    -   `callbackURL`: The callback URL for redirection after login (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Authentication by Apple](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-apple)

#### `authenticationByGoogle(params: IAuthenticationByGoogleParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Gets the Google login URL.

-   **Parameters**:
    -   `params`: The parameters for authentication with Google (type: IAuthenticationByGoogleParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Authentication by Google](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-google)

#### `authenticationByPhoneNumber(params: IAuthenticationByPhoneNumberParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

Authenticates a user with phone number and password.

-   **Parameters**:
    -   `params`: The parameters for authentication by phone number (type: IAuthenticationByPhoneNumberParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Authentication by Phone](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-phone)

#### `authentication(params: IAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

Authenticates a user with email and password.

-   **Parameters**:
    -   `params`: The parameters for authentication (type: IAuthenticationParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Authentication](https://developers.jframework.io/references/api-reference/endpoints/users/authentication)

#### `changePassword(params: IChangePasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Changes the user's password.

-   **Parameters**:
    -   `params`: The parameters for changing password (type: IChangePasswordParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Change Password](https://developers.jframework.io/references/api-reference/endpoints/users/change-password)

#### `changePasswordForAnotherUser(params: IChangePasswordForAnotherUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Changes the password for another user.

-   **Parameters**:
    -   `params`: The parameters for changing password for another user (type: IChangePasswordForAnotherUserParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Change Password by User ID](https://developers.jframework.io/references/api-reference/endpoints/users/change-password-by-user-id)

#### `checkReferralUserCode(code: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Checks if the referral code exists in the system.

-   **Parameters**:
    -   `code`: The referral code to check (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Check Referral User Code](https://developers.jframework.io/references/api-reference/endpoints/users/check-referral-user-code)

#### `checkAuthKeyAvailable(params: ICheckAuthKeyAvailableParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Checks if the auth key is available.

-   **Parameters**:
    -   `params`: The parameters for checking auth key availability (type: ICheckAuthKeyAvailableParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Check Auth Key Available](https://developers.jframework.io/references/api-reference/endpoints/users/check-auth-key-available)

#### `deactivateUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deactivates a user, setting their status to Inactive after sending a deactivation email.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Deactivate a User](https://developers.jframework.io/references/api-reference/endpoints/users/deactivate-a-user)

#### `deleteUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a user by the given ID.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Delete a User](https://developers.jframework.io/references/api-reference/endpoints/users/delete-a-user)

#### `sendEmailToVerifyEmailAddressOfUser(id: IdType, returnURL: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Sends an email to verify the user's email address with a verification link.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `returnURL`: The return URL after verification (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Verify User Email - Send](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#post-api-v1-users-id-email-address-verify-send)

#### `activeUserEmailAddress(token: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Activates the user's email address using the provided token.

-   **Parameters**:
    -   `token`: The token to activate the email address (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Verify User Email - Active](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#put-api-v1-users-email-address-active)

#### `forgotPassword(params: IForgotPasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Sends an email with a link to reset the user's password.

-   **Parameters**:
    -   `params`: The parameters for forgot password (type: IForgotPasswordParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Forgot Password](https://developers.jframework.io/references/api-reference/endpoints/users/forgot-password)

#### `getUserByUsername(username: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

Gets a user by username.

-   **Parameters**:
    -   `username`: The username of the user (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get a User by Username](https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user-by-username)

#### `getUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

Gets a user by the given ID.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get a User](https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user)

#### `getAppIntegrationAuthenticateURLs(params: IGetAppIntegrationAuthenticateURLsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAppIntegrationAuthenticateURL[]>>`

Gets app integration authenticate URLs for the given parameters.

-   **Parameters**:
    -   `params`: The parameters for getting authenticate URLs (type: IGetAppIntegrationAuthenticateURLsParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get App Integration Authenticate URLs](https://developers.jframework.io/references/api-reference/endpoints/users/get-app-integration-authenticate-urls)

#### `getDevicesFromUser(userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IDeviceOfUser[]>>`

Gets devices associated with a user.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get Devices from a User](https://developers.jframework.io/references/api-reference/endpoints/users/get-devices-from-a-user)

#### `getUsersByListIDs(ids: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<IUser[]>>`

Gets users by a list of IDs (maximum 100).

-   **Parameters**:
    -   `ids`: The list of user IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get Users by List ID](https://developers.jframework.io/references/api-reference/endpoints/users/get-users#get-api-v1-users-by-list-id)

#### `getUsers(params: IGetUsersParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IUser>>`

Gets a list of users in the system, filtered by the provided parameters.

-   **Parameters**:
    -   `params`: The parameters for getting users (type: IGetUsersParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get Users](https://developers.jframework.io/references/api-reference/endpoints/users/get-users)

#### `getRolesAssignedToUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IRole[]>>`

Gets the roles assigned to a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Gets Roles Assigned to the User](https://developers.jframework.io/references/api-reference/endpoints/users/gets-roles-assigned-to-the-user)

#### `getCurrentUserLoggedIn(config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

Gets the current logged-in user.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **See**: [Gets the Current User Logged In](https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-current-user-logged-in)

#### `getRefereeOfUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IBaseUser[]>>`

Gets the referees of a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Gets the Referees of a User](https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-referees-of-a-user)

#### `listAllBrandPartnersAuthenticate(userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IBrandPartnerAuthenticate>>`

Gets the connection authenticate brand status for a user.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [List All Brand Partner Auth](https://developers.jframework.io/references/api-reference/endpoints/users/list-all-brand-partner-auth)

#### `lockUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Locks a user, setting their status to Locked after sending a notification email.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Lock a User](https://developers.jframework.io/references/api-reference/endpoints/users/lock-a-user)

#### `registerNewUser(params: IRegisterNewUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

Registers a new user.

-   **Parameters**:
    -   `params`: The parameters for registering a new user (type: IRegisterNewUserParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Register a New User](https://developers.jframework.io/references/api-reference/endpoints/users/register-a-new-user)

#### `removeDeviceFromUser(params: IRemoveDeviceFromUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Removes a device from a user.

-   **Parameters**:
    -   `params`: The parameters for removing a device from a user (type: IRemoveDeviceFromUserParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Remove a Device from a User](https://developers.jframework.io/references/api-reference/endpoints/users/remove-a-device-from-a-user)

#### `resetPassword(params: IResetPasswordParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Resets the user's password using the reset password token.

-   **Parameters**:
    -   `params`: The parameters for resetting the password (type: IResetPasswordParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Reset Password](https://developers.jframework.io/references/api-reference/endpoints/users/reset-password)

#### `revokeRolesFromUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Revokes roles from a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `roleIds`: The role IDs to revoke (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Revokes Roles from a User](https://developers.jframework.io/references/api-reference/endpoints/users/revokes-roles-from-a-user)

#### `statisticUsers(params: IStatisticsUsersParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IStatisticsUsers[]>>`

Provides statistics for users based on the given filter.

-   **Parameters**:
    -   `params`: The parameters for user statistics (type: IStatisticsUsersParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Statistics Users](https://developers.jframework.io/references/api-reference/endpoints/users/statistics-users)

#### `suspendUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Suspends a user, setting their status to Suspended after sending a notification email.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Suspend a User](https://developers.jframework.io/references/api-reference/endpoints/users/suspend-a-user)

#### `unlockUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Unlocks a user with Locked or Active status blocked from unknown devices, setting them to Active.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Unlock a User](https://developers.jframework.io/references/api-reference/endpoints/users/unlock-a-user)

#### `unsuspendUser(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Unsuspends a user, returning them to Active status.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Unsuspend a User](https://developers.jframework.io/references/api-reference/endpoints/users/unsuspend-a-user)

#### `updateUser(id: IdType, params: IUpdateUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUser>>`

Updates a user by the given ID.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `params`: The parameters for updating a user (type: IUpdateUserParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Update a User](https://developers.jframework.io/references/api-reference/endpoints/users/update-a-user)

#### `updateUserType(id: IdType, type: UserType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Updates the user type for a specific user (only Super Admins can perform this).

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `type`: The user type (type: UserType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Update Type User](https://developers.jframework.io/references/api-reference/endpoints/users/update-type-user)

#### Configurations

##### `createNewConfigurationForUser(userId: IdType, params: ICreateConfigurationOfUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration>>`

Creates a new configuration for the user.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `params`: The parameters for creating a configuration (type: ICreateConfigurationOfUserParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [POST /users/:id/configurations](https://developers.jframework.io/references/api-reference/endpoints/users/configurations#post-api-users-id-configurations)

##### `getConfigurationsOfUser(userId: IdType, params?: IGetConfigurationsOfUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IConfiguration[]>>`

Gets the user's configurations.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `params`: The parameters for getting configurations (type: IGetConfigurationsOfUserParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get Configurations](https://developers.jframework.io/references/api-reference/endpoints/users/configurations#get-api-v1-users-id-configurations)

##### `deleteConfigurationOfUserByID(userId: IdType, configurationId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Deletes a user's configuration by ID.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `configurationId`: The ID of the configuration (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Delete Configuration](https://developers.jframework.io/references/api-reference/endpoints/users/configurations#delete-api-v1-users-id-configurations-configurationid)

#### Email Address Verification

##### `sendEmailToVerifyEmailAddressOfUser(id: IdType, returnURL: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Sends an email to verify the user's email address.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `returnURL`: The return URL after verification (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Verify User Email](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#post-api-v1-users-id-email-address-verify-send)

##### `activeUserEmailAddress(token: string, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Activates the user's email address using the token.

-   **Parameters**:
    -   `token`: The token to activate the email address (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Active User Email Address](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#put-api-v1-users-email-address-active)

#### Notification

##### `getNotificationRelatedToUser(params: IGetNotificationRelatedToUserParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IUserNotification>>`

Gets a notification detail related to a user by user ID and notification ID.

-   **Parameters**:
    -   `params`: The parameters for getting a notification (type: IGetNotificationRelatedToUserParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get a Notification](https://developers.jframework.io/references/api-reference/endpoints/users/notification/get-a-notification)

##### `getNotificationsByUser(params: IGetNotificationsByUserParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IUserNotification, { unreadCount: number }>>`

Gets notifications by the user's ID.

-   **Parameters**:
    -   `params`: The parameters for getting notifications (type: IGetNotificationsByUserParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get Notifications from a User](https://developers.jframework.io/references/api-reference/endpoints/users/notification/get-notifications-from-a-user)

##### `markNotificationAsRead(params: IMarkNotificationAsReadParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Marks a notification as read for the user.

-   **Parameters**:
    -   `params`: The parameters for marking a notification as read (type: IMarkNotificationAsReadParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Mark as Read](https://developers.jframework.io/references/api-reference/endpoints/users/notification/mark-as-read)

##### `markAllNotificationsAsRead(userId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Marks all notifications as read for the user.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Mark All Notifications Read](https://developers.jframework.io/references/api-reference/endpoints/users/notification/mark-all-notifications-read)

#### Passwordless

##### Email

###### `authenticationByMagicLink(params: IAuthenticationByMagicLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Authenticates the user by sending a magic link to their email.

-   **Parameters**:
    -   `params`: The parameters for authentication by magic link (type: IAuthenticationByMagicLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Authentication by Email](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-email)

###### `generateEmailOTPForAuthentication(params: IGenerateEmailAddressOTPForAuthenticationParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Generates an email OTP for authentication.

-   **Parameters**:
    -   `params`: The parameters for generating an email OTP (type: IGenerateEmailAddressOTPForAuthenticationParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Authentication by Email](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-email)

###### `verifyEmailAddressOTPToAuthentication(params: IVerifyOTPCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

Verifies the OTP code sent to the user's email for authentication.

-   **Parameters**:
    -   `params`: The parameters for verifying the OTP code (type: IVerifyOTPCodeParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Verify Email OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/email/verify-email-otp-code)

##### Phone

###### `generateSMSOTP(params: IGenerateSMSOTPParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Generates an SMS OTP for authentication to the user's phone number.

-   **Parameters**:
    -   `params`: The parameters for generating SMS OTP (type: IGenerateSMSOTPParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Authentication SMS OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/phone/authentication-sms-otp-code)

###### `verifyPhoneOTPForAuthentication(params: IVerifyOTPCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

Verifies the OTP code sent to the user's phone number.

-   **Parameters**:
    -   `params`: The parameters for verifying SMS OTP code (type: IVerifyOTPCodeParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Verify SMS OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/phone/verify-sms-otp-code)

##### QR Code

###### `generateNewQRCode(params?: IGenerateNewQRCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IGenerateNewQRCodeForParingAuthenticationResponse>>`

Generates a new QR Code for pairing authentication between two devices.

-   **Parameters**:
    -   `params`: The parameters for generating a new QR code (type: IGenerateNewQRCodeParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Generate QR Code Auth](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/generate-qr-code-auth)

###### `getCurrentStatusOfQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IGetCodeStatusResponse>>`

Gets the current status of a QR Code pairing request (pending, approved, expired, rejected).

-   **Parameters**:
    -   `qrCodeId`: The unique identifier of the QR Code session (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code)

###### `approveQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IGetCodeStatusResponse>>`

Approves a QR Code pairing request.

-   **Parameters**:
    -   `qrCodeId`: The unique identifier of the QR Code session (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code)

###### `loginUsingApprovedQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

Logs in using an approved QR Code pairing request (deprecated, use `authWithApprovedQRCode` instead).

-   **Parameters**:
    -   `qrCodeId`: The unique identifier of the approved QR Code session (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code)

###### `authWithApprovedQRCode(qrCodeId: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

Authenticates using an approved QR Code pairing request.

-   **Parameters**:
    -   `qrCodeId`: The unique identifier of the approved QR Code session (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Auth with QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/auth-with-qr-code)

##### OTP Code

###### `generateNewOTPCode(params?: IGenerateNewQRCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IGenerateNewOTPForParingAuthenticationResponse>>`

Generates a new OTP Code for pairing authentication between two devices.

-   **Parameters**:
    -   `params`: The parameters for generating a new OTP code (type: IGenerateNewQRCodeParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Generate OTP Code Auth](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/generate-otp-code-auth)

###### `getCurrentStatusOfOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IGetCodeStatusResponse>>`

Gets the current status of an OTP Code pairing request (pending, approved, expired, rejected).

-   **Parameters**:
    -   `otpCode`: The OTP code value (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/get-otp-code)

###### `approveOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IGetCodeStatusResponse>>`

Approves an OTP Code pairing request.

-   **Parameters**:
    -   `otpCode`: The OTP code value (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Approve OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/approve-otp-code)

###### `loginUsingApprovedOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

Logs in using an approved OTP Code pairing request (deprecated, use `authWithApprovedOTPCode` instead).

-   **Parameters**:
    -   `otpCode`: The OTP code value (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Login OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/login-otp-code)

###### `authWithApprovedOTPCode(otpCode: string, config?: AxiosRequestConfig) => Promise<HttpResponse<IAuthenticateResponse>>`

Authenticates using an approved OTP Code pairing request.

-   **Parameters**:
    -   `otpCode`: The OTP code value (type: string).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Auth with OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/auth-with-otp-code)

### Wallet API

The `wallet` object provides methods for managing wallets, including adding money, applying redeem codes, and conversions.

#### `addMoneyToWalletWithCheckoutLink(params: IAddMoneyToWalletWithCheckoutLinkParams, config?: AxiosRequestConfig) => Promise<HttpResponse<string>>`

Generates a checkout link to add money to a wallet.

-   **Parameters**:
    -   `params`: The parameters for generating a checkout link (type: IAddMoneyToWalletWithCheckoutLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Add Money to a Wallet with Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/wallets/add-money-to-a-wallet-with-checkout-link)

#### `applyRedeemCode(params: IApplyRedeemCodeParams, config?: AxiosRequestConfig) => Promise<HttpResponse<unknown>>`

Applies a redeem code to a wallet (valid redeem code and open wallet required).

-   **Parameters**:
    -   `params`: The parameters for applying a redeem code (type: IApplyRedeemCodeParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Apply Redeem](https://developers.jframework.io/references/api-reference/endpoints/wallets/apply-redeem)

#### `createWalletDefault(currencyCode: string, testMode: boolean = false, config?: AxiosRequestConfig) => Promise<HttpResponse<IWallet>>`

Creates a new wallet with the given currency code (default testMode: false).

-   **Parameters**:
    -   `currencyCode`: The currency code (ISO 4217) (type: string).
    -   `testMode`: The test mode flag (type: boolean, default: false).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Create a Wallet Default](https://developers.jframework.io/references/api-reference/endpoints/wallets/create-a-wallet-default)

#### `convertWalletMoney(params: IConvertWalletMoneyParams, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Converts money in a wallet to another currency.

-   **Parameters**:
    -   `params`: The parameters for converting wallet money (type: IConvertWalletMoneyParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Convert Wallet Money](https://developers.jframework.io/references/api-reference/endpoints/wallets/convert-wallet-money)

#### `closeWallet(id: IdType, config?: AxiosRequestConfig) => Promise<HttpResponse<boolean>>`

Closes a wallet by the given ID.

-   **Parameters**:
    -   `id`: The ID of the wallet (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Close Wallet](https://developers.jframework.io/references/api-reference/endpoints/wallets/close-wallet)

#### `getWallets(params?: IGetWalletsParams, config?: AxiosRequestConfig) => Promise<HttpResponse<IWallet[]>>`

Gets a list of wallets.

-   **Parameters**:
    -   `params`: The parameters for getting wallets (type: IGetWalletsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get Wallets](https://developers.jframework.io/references/api-reference/endpoints/wallets/get-wallets)

#### `getWalletHistory(id: IdType, params: IGetWalletHistoriesParams, config?: AxiosRequestConfig) => Promise<HttpResponseList<IWalletHistory>>`

Gets the wallet history for a given wallet ID.

-   **Parameters**:
    -   `id`: The ID of the wallet (type: IdType).
    -   `params`: The parameters for getting wallet histories (type: IGetWalletHistoriesParams).
    -   `config`: Optional Axios request configuration object.
-   **See**: [Get the Wallet Histories](https://developers.jframework.io/references/api-reference/endpoints/wallets/get-the-wallet-histories)
