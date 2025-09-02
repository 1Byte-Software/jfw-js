# JFramework (JFW) - jfw-js

## About

JFramework (JFW) is a comprehensive backend API client library for JavaScript, part of the JFW ecosystem. It provides a set of APIs to interact with various resources such as ads, brands, users, and more, enabling developers to build robust applications with features like authentication, payments, and content management. The `jfw-js` package is designed for server-side JavaScript environments and integrates seamlessly with Axios for HTTP requests.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Setup Your Brand](#setup-your-brand)
    -   [Quick Start](#quick-start)
-   [API Reference](#api-reference)
    -   [Ad API](#ad-api)
    -   [App Integration API](#app-integration-api)
        -   [AppIntegrationAnalyticsAPI](#appintegrationanalyticsapi)
        -   [AppIntegrationAuthenticationAPI](#appintegrationauthenticationapi)
        -   [AppIntegrationPaymentGatewayAPI](#appintegrationpaymentgatewayapi)
        -   [AppIntegrationPushNotificationAPI](#appintegrationpushnotificationapi)
        -   [AppIntegrationReCAPTCHAAPI](#appintegrationrecaptchaapi)
        -   [AppIntegrationSMSAPI](#appintegrationsmsapi)
        -   [AppIntegrationSMTPAPI](#appintegrationsmtpapi)
    -   [Brand API](#brand-api)
        -   [BrandProfileAPI](#brandprofileapi)
        -   [BrandSettingAPI](#brandsettingapi)
        -   [EmailAddressAPI](#emailaddressapi)
        -   [BrandAPI](#brandapi)
    -   [CDN API](#cdn-api)
    -   [City API](#city-api)
    -   [Commission Rate API](#commission-rate-api)
    -   [Configuration API](#configuration-api)
    -   [Constant API](#constant-api)
    -   [Country API](#country-api)
    -   [Coupon API](#coupon-api)
    -   [Cryptography API](#cryptography-api)
    -   [Currency API](#currency-api)
    -   [Device API](#device-api)
    -   [Domain API](#domain-api)
        -   [BrandLinksAPI](#brandlinksapi)
    -   [Email Template API](#email-template-api)
    -   [Event API](#event-api)
    -   [Exchange Rate API](#exchange-rate-api)
    -   [Feature API](#feature-api)
    -   [Invoice API](#invoice-api)
    -   [Issue API](#issue-api)
    -   [Issue Category API](#issue-category-api)
    -   [Language API](#language-api)
    -   [License API](#license-api)
    -   [MFA API](#mfa-api)
    -   [Notification API](#notification-api)
    -   [Organization API](#organization-api)
    -   [Package API](#package-api)
    -   [Payment API](#payment-api)
    -   [Permission API](#permission-api)
    -   [Price API](#price-api)
    -   [Resource Type API](#resource-type-api)
    -   [Role API](#role-api)
    -   [State API](#state-api)
    -   [Subscription Type API](#subscription-type-api)
    -   [Timezone API](#timezone-api)
    -   [Tracking Activity API](#tracking-activity-api)
    -   [Tracking Email API](#tracking-email-api)
    -   [User API](#user-api)
        -   [Configurations](#configurations)
        -   [Email Address Verification](#email-address-verification)
        -   [Notification](#notification)
        -   [Passwordless](#passwordless)
            -   [Email](#email)
            -   [Phone](#phone)
            -   [QR Code](#qr-code)
            -   [OTP Code](#otp-code)
    -   [Wallet API](#wallet-api)

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

The `ad` object provides methods for managing advertisements.

#### activateAd(id: IdType, config?: AxiosRequestConfig)

Activate an ad.

-   **Parameters**:
    -   `id`: The ID of the ad to activate (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Activate an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/activate-an-ad)

#### deactivateAd(id: IdType, config?: AxiosRequestConfig)

Deactivate an ad.

-   **Parameters**:
    -   `id`: The ID of the ad to deactivate (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Deactivate an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/deactivate-an-ad)

#### createAd(params: ICreateAdParams, config?: AxiosRequestConfig)

Create an ad.

-   **Parameters**:
    -   `params`: The parameters for creating an ad (type: ICreateAdParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Create an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/create-an-ad)

#### deleteAd(id: IdType, config?: AxiosRequestConfig)

Deletes an ad.

-   **Parameters**:
    -   `id`: The ID of the ad (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/delete-an-ad)

#### getAdsClientView(position: AdPosition, config?: AxiosRequestConfig)

Get ads with the client view.

-   **Parameters**:
    -   `position`: The position for getting ads with the client view (type: AdPosition).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAd[]>>
-   **See**: [Get Ads Client View](https://developers.jframework.io/references/api-reference/endpoints/ads/get-ads-client-view)

#### getAds(params?: IGetAdsParams, config?: AxiosRequestConfig)

Get ads.

-   **Parameters**:
    -   `params`: The parameters for getting ads (type: IGetAdsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IAd>>
-   **See**: [Get Ads](https://developers.jframework.io/references/api-reference/endpoints/ads/get-ads)

#### getAd(id: IdType, config?: AxiosRequestConfig)

Get an ad.

-   **Parameters**:
    -   `id`: The ID of the ad (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAd>>
-   **See**: [Get an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/get-an-ad)

#### updateAd(params: IUpdateAdParams, config?: AxiosRequestConfig)

Update an ad.

-   **Parameters**:
    -   `params`: The parameters for updating an ad (type: IUpdateAdParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Update an Ad](https://developers.jframework.io/references/api-reference/endpoints/ads/update-an-ad)

### App Integration API

The `appIntegration` object provides methods for managing various app integrations.

#### getAppIntegrations(params?: IGetAppIntegrationsParams, config?: AxiosRequestConfig)

List all app integrations by the given type.

-   **Parameters**:
    -   `params`: The parameters for getting app integrations (type: IGetAppIntegrationsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegration[]>>
-   **See**: [Get App Integrations](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/get-app-integrations)

#### AppIntegrationAnalyticsAPI

Handles analytics-related operations for app integrations.

##### createAppIntegrationAnalytics(params: ICreateAppIntegrationAnalyticsParams, config?: AxiosRequestConfig)

Creates a new app integration analytics record.

-   **Parameters**:
    -   `params`: The parameters for creating a new app integration analytics (type: ICreateAppIntegrationAnalyticsParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAnalytics>>
-   **See**: [Creates an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/creates-an-app-integration-analytics)

##### deleteAppIntegrationAnalytics(id: IdType, config?: AxiosRequestConfig)

Deletes an app integration analytics by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration analytics (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Deletes an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/deletes-an-app-integration-analytics)

##### getAppIntegrationAnalytics(id: IdType, config?: AxiosRequestConfig)

Gets an app integration analytics by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration analytics (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAnalytics>>
-   **See**: [Gets an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/gets-an-app-integration-analytics)

##### getAppIntegrationAnalyticsWithBrand(config?: AxiosRequestConfig)

Lists all app integration analytics associated with a brand.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAnalytics[]>>
-   **See**: [Get Apps Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/get-apps-integration-analytics)

##### updateAppIntegrationAnalytics(params: IUpdateAppIntegrationAnalyticsParams, config?: AxiosRequestConfig)

Updates an app integration analytics by the given ID.

-   **Parameters**:
    -   `params`: The parameters for updating an app integration analytics (type: IUpdateAppIntegrationAnalyticsParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAnalytics>>
-   **See**: [Updates an App Integration Analytics](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/updates-an-app-integration-analytics)

#### AppIntegrationAuthenticationAPI

Manages authentication settings for app integrations.

##### createAppIntegrationAuthentication(params: ICreateAppIntegrationAuthenticationParams, config?: AxiosRequestConfig)

Creates a new app integration authentication.

-   **Parameters**:
    -   `params`: The parameters for creating a new app integration authentication (type: ICreateAppIntegrationAuthenticationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAuthentication>>
-   **See**: [Creates an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/creates-an-app-integration-authentication)

##### createAppIntegrationAuthenticationWithImportFileSettings(params: ICreateAppIntegrationAuthenticationWithImportFileSettingsParams, config?: AxiosRequestConfig)

Creates a new app integration authentication with import file settings.

-   **Parameters**:
    -   `params`: The parameters for creating a new app integration authentication with import file settings (type: ICreateAppIntegrationAuthenticationWithImportFileSettingsParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAuthentication>>
-   **See**: [Create an App Integration Authentication by Import File](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/create-an-app-integration-authentication-by-import-file)

##### deleteAppIntegrationAuthentication(id: IdType, config?: AxiosRequestConfig)

Deletes an app integration authentication by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration authentication (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Deletes an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/deletes-an-app-integration-authentication)

##### getAppIntegrationAuthentication(id: IdType, config?: AxiosRequestConfig)

Gets an app integration authentication by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration authentication (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAuthentication>>
-   **See**: [Gets an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/gets-an-app-integration-authentication)

##### getAppsIntegrationAuthenticationWithBrand(params?: IGetAppIntegrationAuthenticationsWithBrandParams, config?: AxiosRequestConfig)

Gets apps integration authentication with brand.

-   **Parameters**:
    -   `params`: The parameters for getting apps integration authentication with brand (type: IGetAppIntegrationAuthenticationsWithBrandParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAuthentication[]>>
-   **See**: [List the Apps Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/list-the-apps-integration-authentication)

##### testBuildingAuthenticationURL(appIntegrationId: IdType, params: ITestBuildingAuthenticationURLParams, config?: AxiosRequestConfig)

Simulates building an authentication URL for a specific app integration to validate settings.

-   **Parameters**:
    -   `appIntegrationId`: The ID of the app integration (type: IdType).
    -   `params`: The parameters for testing authentication URL (type: ITestBuildingAuthenticationURLParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Test Building an Authentication URL](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/test-building-an-authentication-url)

##### updateAppIntegrationAuthentication(id: IdType, params: IUpdateAppIntegrationAuthenticationParams, config?: AxiosRequestConfig)

Updates an app integration authentication by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration authentication (type: IdType).
    -   `params`: The parameters for updating an app integration authentication (type: IUpdateAppIntegrationAuthenticationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAuthentication>>
-   **See**: [Updates an App Integration Authentication](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/updates-an-app-integration-authentication)

#### AppIntegrationPaymentGatewayAPI

Manages payment gateway integrations for apps.

##### createAppIntegrationPaymentGateway(params: ICreateAppIntegrationPaymentGatewayParams, config?: AxiosRequestConfig)

Creates a new app integration payment gateway.

-   **Parameters**:
    -   `params`: The parameters for creating a new app integration payment gateway (type: ICreateAppIntegrationPaymentGatewayParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationPaymentGateway>>
-   **See**: [Creates an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/creates-an-app-integration-payment-gateway)

##### deleteAppIntegrationPaymentGateway(id: IdType, config?: AxiosRequestConfig)

Deletes an app integration payment gateway by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration payment gateway (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Deletes an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/deletes-an-app-integration-payment-gateway)

##### getAppIntegrationPaymentGateway(id: IdType, config?: AxiosRequestConfig)

Gets an app integration payment gateway by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration payment gateway (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationPaymentGateway>>
-   **See**: [Gets an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-an-app-integration-payment-gateway)

##### getAppsIntegrationPaymentGatewayWithBrand(config?: AxiosRequestConfig)

Gets the list of app integration payment gateways by the current brand.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationPaymentGateway[]>>
-   **See**: [Gets App Integration Payment Gateways with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-app-integration-payment-gateways-with-brand)

##### testCreatingCheckoutLink(appIntegrationId: IdType, params: ITestCreatingCheckoutLinkParams, config?: AxiosRequestConfig)

Tests generating a checkout link for a given app integration.

-   **Parameters**:
    -   `appIntegrationId`: The ID of the app integration (type: IdType).
    -   `params`: The parameters for testing checkout link creation (type: ITestCreatingCheckoutLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Test Create Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/test-create-checkout-link)

##### updateAppIntegrationPaymentGateway(id: IdType, params: IUpdateAppIntegrationPaymentGatewayParams, config?: AxiosRequestConfig)

Updates an app integration payment gateway by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration payment gateway (type: IdType).
    -   `params`: The parameters for updating an app integration payment gateway (type: IUpdateAppIntegrationPaymentGatewayParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationPaymentGateway>>
-   **See**: [Updates an App Integration Payment Gateway](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/updates-an-app-integration-payment-gateway)

#### AppIntegrationPushNotificationAPI

Manages push notification integrations for apps.

##### createAppIntegrationPushNotification(params: ICreateAppIntegrationPushNotificationParams, config?: AxiosRequestConfig)

Creates a new app integration push notification.

-   **Parameters**:
    -   `params`: The parameters for creating a new app integration push notification (type: ICreateAppIntegrationPushNotificationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationPushNotification>>
-   **See**: [Create an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/create-an-app-integration-push-notification)

##### createAppIntegrationPushNotificationWithImportFileSettings(params: ICreateAppIntegrationPushNotificationWithImportFileSettingsParams, config?: AxiosRequestConfig)

Creates a new app integration push notification with import file settings.

-   **Parameters**:
    -   `params`: The parameters for creating a new app integration push notification from file settings (type: ICreateAppIntegrationPushNotificationWithImportFileSettingsParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationPushNotification>>
-   **See**: [Create an App Integration Push Notification by Import File](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/create-an-app-integration-push-notification-by-import-file)

##### deleteAppIntegrationPushNotification(id: IdType, config?: AxiosRequestConfig)

Deletes an app integration push notification by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration push notification (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/delete-an-app-integration-push-notification)

##### getAppIntegrationPushNotification(id: IdType, config?: AxiosRequestConfig)

Gets an app integration push notification by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration push notification (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationPushNotification>>
-   **See**: [Get an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-an-app-integration-push-notification)

##### getAppIntegrationPushNotificationsWithBrand(config?: AxiosRequestConfig)

Gets the current brand's app integration push notifications.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationPushNotification[]>>
-   **See**: [Get App Integration Push Notification with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-app-integration-push-notification-with-brand)

##### updateAppIntegrationPushNotification(id: IdType, params: IUpdateAppIntegrationPushNotificationParams, config?: AxiosRequestConfig)

Updates an app integration push notification by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration push notification (type: IdType).
    -   `params`: The parameters for updating an app integration push notification (type: IUpdateAppIntegrationPushNotificationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationPushNotification>>
-   **See**: [Update an App Integration Push Notification](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/update-an-app-integration-push-notification)

#### AppIntegrationReCAPTCHAAPI

Manages reCAPTCHA integrations for apps.

##### createAppIntegrationReCAPTCHA(params: ICreateAppIntegrationReCAPTCHAParams, config?: AxiosRequestConfig)

Creates a new app integration reCAPTCHA.

-   **Parameters**:
    -   `params`: The parameters for creating a new app integration reCAPTCHA (type: ICreateAppIntegrationReCAPTCHAParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationReCAPTCHA>>
-   **See**: [Creates an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/creates-an-app-integration-recaptcha)

##### deleteAppIntegrationReCAPTCHA(id: IdType, config?: AxiosRequestConfig)

Deletes an app integration reCAPTCHA by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration reCAPTCHA (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Deletes an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/deletes-an-app-integration-recaptcha)

##### getAppIntegrationReCAPTCHA(id: IdType, config?: AxiosRequestConfig)

Gets an app integration reCAPTCHA by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration reCAPTCHA (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationReCAPTCHA>>
-   **See**: [Gets an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/gets-an-app-integration-recaptcha)

##### getAppsIntegrationReCAPTCHAWithBrand(config?: AxiosRequestConfig)

Lists all app integration reCAPTCHAs.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationReCAPTCHA[]>>
-   **See**: [Get Apps Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/get-apps-integration-recaptcha)

##### updateAppIntegrationReCAPTCHA(params: IUpdateAppIntegrationReCAPTCHAParams, config?: AxiosRequestConfig)

Updates an app integration reCAPTCHA by the given ID.

-   **Parameters**:
    -   `params`: The parameters for updating an app integration reCAPTCHA (type: IUpdateAppIntegrationReCAPTCHAParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationReCAPTCHA>>
-   **See**: [Updates an App Integration reCAPTCHA](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/updates-an-app-integration-recaptcha)

#### AppIntegrationSMSAPI

Manages SMS integrations for apps.

##### createAppIntegrationSMS(params: ICreateAppIntegrationSMSParams, config?: AxiosRequestConfig)

Creates a new app integration SMS.

-   **Parameters**:
    -   `params`: The parameters for creating a new app integration SMS (type: ICreateAppIntegrationSMSParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationSMS>>
-   **See**: [Creates an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/creates-an-app-integration-sms)

##### deleteAppIntegrationSMS(id: IdType, config?: AxiosRequestConfig)

Deletes an app integration SMS by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration SMS (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Deletes an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/deletes-an-app-integration-sms)

##### getAppIntegrationSMS(id: IdType, config?: AxiosRequestConfig)

Gets an app integration SMS by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration SMS (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationSMS>>
-   **See**: [Gets an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms)

##### getAppsIntegrationSMSWithBrand(config?: AxiosRequestConfig)

Lists all app integration SMS.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationSMS[]>>
-   **See**: [Gets an App Integration SMS with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms-with-brand)

##### testSendingSMSMessage(appIntegrationId: IdType, params: ITestSendingSMSMessageParams, config?: AxiosRequestConfig)

Sends a test SMS message using the configured SMS integration settings.

-   **Parameters**:
    -   `appIntegrationId`: The ID of the app integration (type: IdType).
    -   `params`: The parameters for testing sending an SMS message (type: ITestSendingSMSMessageParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Send SMS Test Message](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/send-sms-test-message)

##### updateAppIntegrationSMS(id: IdType, params: IUpdateAppIntegrationSMSParams, config?: AxiosRequestConfig)

Updates an app integration SMS by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration SMS (type: IdType).
    -   `params`: The parameters for updating an app integration SMS (type: IUpdateAppIntegrationSMSParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationSMS>>
-   **See**: [Updates an App Integration SMS](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/update-an-app-integration-sms)

#### AppIntegrationSMTPAPI

Manages SMTP integrations for apps.

##### createAppIntegrationSMTP(params: ICreateAppIntegrationSMTPParams, config?: AxiosRequestConfig)

Creates a new app integration SMTP.

-   **Parameters**:
    -   `params`: The parameters for creating a new app integration SMTP (type: ICreateAppIntegrationSMTPParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationSMTP>>
-   **See**: [Creates an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/creates-an-app-integration-smtp)

##### deleteAppIntegrationSMTP(id: IdType, config?: AxiosRequestConfig)

Deletes an app integration SMTP by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration SMTP (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Deletes an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/deletes-an-app-integration-smtp)

##### getAppIntegrationSMTP(id: IdType, config?: AxiosRequestConfig)

Gets an app integration SMTP by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration SMTP (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationSMTP>>
-   **See**: [Gets an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp)

##### getAppsIntegrationSMTPWithBrand(config?: AxiosRequestConfig)

Gets apps integration SMTP.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationSMTP[]>>
-   **See**: [Gets an App Integration SMTP with Brand](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp-with-brand)

##### testSendingEmailAddress(params: ITestSendingEmailAddressParams, config?: AxiosRequestConfig)

Sends a test email using the configured SMTP integration settings.

-   **Parameters**:
    -   `params`: The parameters for testing sending an email address (type: ITestSendingEmailAddressParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Send Test Email](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/send-test-email)

##### updateAppIntegrationSMTP(id: IdType, params: IUpdateAppIntegrationSMTPParams, config?: AxiosRequestConfig)

Updates an app integration SMTP by the given ID.

-   **Parameters**:
    -   `id`: The ID of the app integration SMTP (type: IdType).
    -   `params`: The parameters for updating an app integration SMTP (type: IUpdateAppIntegrationSMTPParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationSMTP>>
-   **See**: [Updates an App Integration SMTP](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/update-an-app-integration-smtp)

### Brand API

The `brand` object provides methods for managing brands, including profile, settings, and email addresses.

#### BrandProfileAPI

Manages brand profile operations.

##### updateBrandProfile(id: IdType, params: IUpdateBrandProfileParams, config?: AxiosRequestConfig)

Updates a brand's profile by the given brand ID.

-   **Parameters**:
    -   `id`: The ID of the brand (type: IdType).
    -   `params`: The parameters for updating the brand's profile (type: IUpdateBrandProfileParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Update a Brand Profile](https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand-profile)

#### BrandSettingAPI

Manages brand setting operations.

##### updateBrandSetting(id: IdType, params: IUpdateBrandSettingParams, config?: AxiosRequestConfig)

Updates a brand's settings by the given brand ID.

-   **Parameters**:
    -   `id`: The ID of the brand (type: IdType).
    -   `params`: The parameters for updating the brand's settings (type: IUpdateBrandSettingParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Update a Brand Setting](https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand-setting)

#### EmailAddressAPI

Manages email addresses associated with brands.

##### createEmailAddress(params: ICreateEmailAddressParams, config?: AxiosRequestConfig)

Creates an email address by brand.

-   **Parameters**:
    -   `params`: The parameters for creating an email address (type: ICreateEmailAddressParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEmailAddress>>
-   **See**: [Create an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/create-an-email-address)

##### deleteEmailAddress(params: IDeleteEmailAddressParams, config?: AxiosRequestConfig)

Deletes an email address.

-   **Parameters**:
    -   `params`: The parameters for deleting an email address (type: IDeleteEmailAddressParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/delete-an-email-address)

##### getEmailAddress(params: IGetEmailAddressParams, config?: AxiosRequestConfig)

Gets an email address.

-   **Parameters**:
    -   `params`: The parameters for getting an email address (type: IGetEmailAddressParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEmailAddress>>
-   **See**: [Get an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/get-an-email-address)

##### getEmailAddresses(brandId: IdType, config?: AxiosRequestConfig)

Gets email addresses by brand.

-   **Parameters**:
    -   `brandId`: The ID of the brand (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEmailAddress[]>>
-   **See**: [Get Email Addresses](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/get-email-addresses)

##### updateEmailAddress(emailAddressId: IdType, params: IUpdateEmailAddressParams, config?: AxiosRequestConfig)

Updates an email address.

-   **Parameters**:
    -   `emailAddressId`: The ID of the email address (type: IdType).
    -   `params`: The parameters for updating an email address (type: IUpdateEmailAddressParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEmailAddress>>
-   **See**: [Update an Email Address](https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/update-an-email-address)

#### BrandAPI

Manages brand-related operations.

##### checkDomainIfExists(domain: string, config?: AxiosRequestConfig)

Checks if a brand exists in the system by domain.

-   **Parameters**:
    -   `domain`: The domain to check (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Check Domain Exists](https://developers.jframework.io/references/api-reference/endpoints/brands/check-domain-exists)

##### createBrand(params: ICreateBrandParams, config?: AxiosRequestConfig)

Creates a new brand.

-   **Parameters**:
    -   `params`: The parameters for creating a new brand (type: ICreateBrandParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBrand>>
-   **See**: [Create a Brand](https://developers.jframework.io/references/api-reference/endpoints/brands/create-a-brand)

##### generateNewDomain(config?: AxiosRequestConfig)

Generates a new domain name that is not in use by any brand.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IGeneratedDomain>>
-   **See**: [Generate Domain](https://developers.jframework.io/references/api-reference/endpoints/brands/generate-domain)

##### getBrand(id: IdType, config?: AxiosRequestConfig)

Gets a brand by the given brand ID.

-   **Parameters**:
    -   `id`: The ID of the brand (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBrand>>
-   **See**: [Get a Brand](https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand)

##### getBrandByURL(config?: AxiosRequestConfig)

Gets a brand based on the client domain or host domain.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBrand>>
-   **See**: [Get a Brand by Brand URL](https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand-by-brand-url)

##### getBrands(params?: IGetBrandsParams, config?: AxiosRequestConfig)

Gets brands by the given filter.

-   **Parameters**:
    -   `params`: The parameters for getting brands (type: IGetBrandsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IBrand>>
-   **See**: [Get Brands](https://developers.jframework.io/references/api-reference/endpoints/brands/get-brands)

##### updateBrand(id: IdType, params: IUpdateBrandParams, config?: AxiosRequestConfig)

Updates a brand by the given ID.

-   **Parameters**:
    -   `id`: The ID of the brand (type: IdType).
    -   `params`: The parameters for updating a brand (type: IUpdateBrandParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Update a Brand](https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand)

### CDN API

The `cdn` object provides methods for managing files on the Content Delivery Network (CDN).

#### deleteFileCDN(id: IdType, config?: AxiosRequestConfig)

Deletes a file from the CDN.

-   **Parameters**:
    -   `id`: The ID of the file CDN (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a File CDN](https://developers.jframework.io/references/api-reference/endpoints/cdn/delete-a-file-cdn)

#### getFileCDN(id: IdType, config?: AxiosRequestConfig)

Gets a file from the CDN by ID.

-   **Parameters**:
    -   `id`: The ID of the file CDN (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IFileCDN>>
-   **See**: [Get a File CDN](https://developers.jframework.io/references/api-reference/endpoints/cdn/get-a-file-cdn)

#### getFilesCDN(params?: IGetFilesCDNParams, config?: AxiosRequestConfig)

Gets a list of CDN items.

-   **Parameters**:
    -   `params`: The parameters for getting files CDN (type: IGetFilesCDNParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IFileCDN>>
-   **See**: [Get Files CDN](https://developers.jframework.io/references/api-reference/endpoints/cdn/get-files-cdn)

#### uploadFileCDN(params: IUploadFileParams, config?: AxiosRequestConfig)

Uploads a file to the CDN. The `CdnPathType` variable specifies the root folder, defaulting to "User". For more details, see [CDN Storage](https://whitepaper.jframework.io/other-concepts/cdn/cdn-storage).

-   **Parameters**:
    -   `params`: The parameters for uploading a file CDN (type: IUploadFileParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUploadedFileCDN>>
-   **See**: [Upload File](https://developers.jframework.io/references/api-reference/endpoints/cdn/upload-file)

#### uploadFile(params: IUploadFileParams, config?: AxiosRequestConfig)

Deprecated. Use `uploadFileCDN` instead.

-   **Parameters**:
    -   `params`: The parameters for uploading a file (type: IUploadFileParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUploadedFileCDN>>

### City API

The `city` object provides methods for managing city data.

#### getCities(params?: IGetCitiesParams, config?: AxiosRequestConfig)

Gets a list of all cities.

-   **Parameters**:
    -   `params`: The parameters for getting cities (type: IGetCitiesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<ICity>>
-   **See**: [Get Cities](https://developers.jframework.io/references/api-reference/endpoints/cities)

### Commission Rate API

The `commissionRate` object provides methods for managing commission rates.

#### createCommissionRate(params?: ICreateCommissionRateParams, config?: AxiosRequestConfig)

Creates a new commission rate.

-   **Parameters**:
    -   `params`: The parameters for creating a commission rate (type: ICreateCommissionRateParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICommissionRate>>
-   **See**: [Create a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/create-a-commission-rate)

#### deleteCommissionRate(id: IdType, config?: AxiosRequestConfig)

Deletes a commission rate by ID.

-   **Parameters**:
    -   `id`: The ID of the commission rate (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/delete-a-commission-rate)

#### getCommissionRate(id: IdType, config?: AxiosRequestConfig)

Gets a commission rate by ID.

-   **Parameters**:
    -   `id`: The ID of the commission rate (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICommissionRate>>
-   **See**: [Get a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-a-commission-rate)

#### getDiscountValue(quantity: number, config?: AxiosRequestConfig)

Gets the discount value based on the quantity, calculated using the commission rate set for the user.

-   **Parameters**:
    -   `quantity`: The quantity value to check the discount value result (type: number).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<number>>
-   **See**: [Get Discount Value](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-discount-value)

#### getCommissionRates(params?: IGetCommissionRatesParams, config?: AxiosRequestConfig)

Gets a list of commission rates.

-   **Parameters**:
    -   `params`: The parameters for getting all commission rates (type: IGetCommissionRatesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICommissionRate[]>>
-   **See**: [Get Commission Rates](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-commission-rates)

#### updateCommissionRate(id: IdType, params?: IUpdateCommissionRateParams, config?: AxiosRequestConfig)

Updates a commission rate by ID.

-   **Parameters**:
    -   `id`: The ID of the commission rate (type: IdType).
    -   `params`: The parameters for updating a commission rate (type: IUpdateCommissionRateParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Update a Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/commission-rates/update-a-commission-rate)

### Configuration API

The `configuration` object provides methods for managing configurations.

#### createConfiguration(params: ICreateConfigurationParams, config?: AxiosRequestConfig)

Creates a new configuration.

-   **Parameters**:
    -   `params`: The parameters for creating a new configuration (type: ICreateConfigurationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IConfiguration>>
-   **See**: [Create a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/create-a-configuration)

#### deleteConfiguration(id: IdType, config?: AxiosRequestConfig)

Deletes a configuration by ID.

-   **Parameters**:
    -   `id`: The ID of the configuration (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/delete-a-configuration)

#### getConfigurations(params?: IGetConfigurationsParams, config?: AxiosRequestConfig)

Gets a list of configurations.

-   **Parameters**:
    -   `params`: The parameters for getting configurations (type: IGetConfigurationsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<HttpResponse<IConfiguration[]>>>
-   **See**: [Get Configurations](https://developers.jframework.io/references/api-reference/endpoints/configurations/get-configurations)

#### getConfiguration(id: IdType, config?: AxiosRequestConfig)

Gets a configuration by ID.

-   **Parameters**:
    -   `id`: The ID of the configuration (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IConfiguration>>
-   **See**: [Get a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/get-a-configuration)

#### updateConfiguration(id: IdType, params: IUpdateConfigurationParams, config?: AxiosRequestConfig)

Updates a configuration by ID.

-   **Parameters**:
    -   `id`: The ID of the configuration (type: IdType).
    -   `params`: The parameters for updating a configuration (type: IUpdateConfigurationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<unknown>>
-   **See**: [Update a Configuration](https://developers.jframework.io/references/api-reference/endpoints/configurations/update-a-configuration)

### Constant API

The `constant` object provides methods for retrieving various constant types and statuses.

#### getBrandLinkTypes(config?: AxiosRequestConfig)

Gets all brand link types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Brand Link](https://developers.jframework.io/references/api-reference/endpoints/constants/brand-link)

#### getBlackListTypes(config?: AxiosRequestConfig)

Gets all black list types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Black List](https://developers.jframework.io/references/api-reference/endpoints/constants/black-list)

#### getCouponStatuses(config?: AxiosRequestConfig)

Gets all coupon statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Coupon](https://developers.jframework.io/references/api-reference/endpoints/constants/coupon)

#### getCommissionRateTypes(config?: AxiosRequestConfig)

Gets all commission rate types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Commission Rate](https://developers.jframework.io/references/api-reference/endpoints/constants/commission-rate#get-api-v1-constants-commission-rate-types)

#### getDeviceStatuses(config?: AxiosRequestConfig)

Gets all device statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Device Status](https://developers.jframework.io/references/api-reference/endpoints/constants/device#get-api-v1-constants-device-status)

#### getDeviceTypes(config?: AxiosRequestConfig)

Gets all device types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Device Types](https://developers.jframework.io/references/api-reference/endpoints/constants/device#get-api-v1-constants-device-types)

#### getInvoiceStatuses(config?: AxiosRequestConfig)

Gets all invoice statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Invoice Status](https://developers.jframework.io/references/api-reference/endpoints/constants/invoice#get-api-v1-constants-invoice-status)

#### getInvoiceTypes(config?: AxiosRequestConfig)

Gets all invoice types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Invoice Types](https://developers.jframework.io/references/api-reference/endpoints/constants/invoice#get-api-v1-constants-invoice-types)

#### getIssuePriorities(config?: AxiosRequestConfig)

Gets all issue priorities.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Issue](https://developers.jframework.io/references/api-reference/endpoints/constants/issue)

#### getLicenseSources(config?: AxiosRequestConfig)

Gets all license sources.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [License Sources](https://developers.jframework.io/references/api-reference/endpoints/constants/license#get-api-v1-constants-license-sources)

#### getLicenseTypes(config?: AxiosRequestConfig)

Gets all license types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [License Types](https://developers.jframework.io/references/api-reference/endpoints/constants/license#get-api-v1-constants-license-types)

#### getLicenseStatuses(config?: AxiosRequestConfig)

Gets all license statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [License Status](https://developers.jframework.io/references/api-reference/endpoints/constants/license#get-api-v1-constants-license-status)

#### getOrganizationUserStatuses(config?: AxiosRequestConfig)

Gets all organization user statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Organization](https://developers.jframework.io/references/api-reference/endpoints/constants/organization)

#### getPaymentStatuses(config?: AxiosRequestConfig)

Gets all payment statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Payment](https://developers.jframework.io/references/api-reference/endpoints/constants/payment)

#### getTransactionStatuses(config?: AxiosRequestConfig)

Gets all transaction statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Transaction Status](https://developers.jframework.io/references/api-reference/endpoints/constants/transaction#get-api-v1-constants-transaction-status)

#### getTransactionTypes(config?: AxiosRequestConfig)

Gets all transaction types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Transaction Types](https://developers.jframework.io/references/api-reference/endpoints/constants/transaction#get-api-v1-constants-transaction-types)

#### getTrackingEventTypes(config?: AxiosRequestConfig)

Gets all tracking event types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Tracking Event](https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-event)

#### getTrackingNotificationTypes(config?: AxiosRequestConfig)

Gets all notification types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Tracking Notification Types](https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-notification#get-api-v1-constants-tracking-notification-types)

#### getTrackingNotificationChannelTypes(config?: AxiosRequestConfig)

Gets all notification channel types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Tracking Notification Channel Types](https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-notification#get-api-v1-constants-tracking-notification-channel-types)

#### getTrackingNotificationReactionStatuses(config?: AxiosRequestConfig)

Gets all tracking notification reaction statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Tracking Notification Reaction Status](https://developers.jframework.io/references/api-reference/endpoints/constants/tracking-notification#get-api-v1-constants-tracking-notification-reaction-status)

#### getFeatureTypes(config?: AxiosRequestConfig)

Gets all feature types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Feature](https://developers.jframework.io/references/api-reference/endpoints/constants/feature)

#### getUserStatuses(config?: AxiosRequestConfig)

Gets all user statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [User Status](https://developers.jframework.io/references/api-reference/endpoints/constants/user#get-api-v1-constants-user-status)

#### getUserTypes(config?: AxiosRequestConfig)

Gets all user types.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [User Types](https://developers.jframework.io/references/api-reference/endpoints/constants/user#get-api-v1-constants-user-types)

#### getWalletStatuses(config?: AxiosRequestConfig)

Gets all wallet statuses.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string[]>>
-   **See**: [Wallet](https://developers.jframework.io/references/api-reference/endpoints/constants/wallet)

#### getErrorCodes(config?: AxiosRequestConfig)

Gets all error codes in the system.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<Record<string, Record<string, number>>>>
-   **See**: [Error](https://developers.jframework.io/references/api-reference/endpoints/constants/error)

### Country API

The `country` object provides methods for managing country data.

#### getCountries(params?: IGetCountriesParams, config?: AxiosRequestConfig)

Gets a list of countries.

-   **Parameters**:
    -   `params`: The parameters for getting countries (type: IGetCountriesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<ICountry>>
-   **See**: [Get Countries](https://developers.jframework.io/references/api-reference/endpoints/get-countries)

### Coupon API

The `coupon` object provides methods for managing coupons.

#### createCoupon(params: ICreateCouponParams, config?: AxiosRequestConfig)

Creates a new coupon.

-   **Parameters**:
    -   `params`: The parameters for creating a coupon (type: ICreateCouponParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICoupon>>
-   **See**: [Create a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/create-a-coupon)

#### deleteCoupon(id: IdType, config?: AxiosRequestConfig)

Deletes a coupon by ID.

-   **Parameters**:
    -   `id`: The ID of the coupon (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/delete-a-coupon)

#### getCoupon(id: IdType, config?: AxiosRequestConfig)

Gets a coupon by ID.

-   **Parameters**:
    -   `id`: The ID of the coupon (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICoupon>>
-   **See**: [Get a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/get-a-coupon)

#### getCoupons(params: IGetCouponsParams, config?: AxiosRequestConfig)

Gets a list of coupons.

-   **Parameters**:
    -   `params`: The parameters for getting coupons (type: IGetCouponsParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<ICoupon>>
-   **See**: [Get Coupons](https://developers.jframework.io/references/api-reference/endpoints/coupons/get-coupons)

#### updateCoupon(id: IdType, params: IUpdateCouponParams, config?: AxiosRequestConfig)

Updates a coupon by ID.

-   **Parameters**:
    -   `id`: The ID of the coupon (type: IdType).
    -   `params`: The parameters for updating a coupon (type: IUpdateCouponParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICoupon>>
-   **See**: [Update a Coupon](https://developers.jframework.io/references/api-reference/endpoints/coupons/update-a-coupon)

### Cryptography API

The `cryptography` object provides methods for basic encryption and decryption. Note: These methods are not secure for sensitive data.

#### decrypt(cipherText: string, config?: AxiosRequestConfig)

Decrypts a string. Not suitable for sensitive data.

-   **Parameters**:
    -   `cipherText`: The cipher text to decrypt (type: string, min length: 1).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Decrypt](https://developers.jframework.io/references/api-reference/endpoints/reame/decrypt)

#### encrypt(plainText: string, config?: AxiosRequestConfig)

Encrypts a string. Not suitable for sensitive data.

-   **Parameters**:
    -   `plainText`: The plain text to encrypt (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Encrypt](https://developers.jframework.io/references/api-reference/endpoints/reame/encrypt)

### Currency API

The `currency` object provides methods for managing currencies.

#### getCurrencies(params?: IGetCurrenciesParams, config?: AxiosRequestConfig)

Gets a list of currencies.

-   **Parameters**:
    -   `params`: The parameters for getting currencies (type: IGetCurrenciesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<ICurrency>>
-   **See**: [Get Currencies](https://developers.jframework.io/references/api-reference/endpoints/get-currencies)

### Device API

The `device` object provides methods for managing devices.

#### checkUserAccessDevice(params: ICheckUserAccessDeviceParams, config?: AxiosRequestConfig)

Checks if the user can access the specified device code.

-   **Parameters**:
    -   `params`: The parameters for checking whether the user can access the specified device code (type: ICheckUserAccessDeviceParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Check User Access Device](https://developers.jframework.io/references/api-reference/endpoints/devices/check-user-access-device)

#### createDevice(params: ICreateDeviceParams, config?: AxiosRequestConfig)

Creates a new device.

-   **Parameters**:
    -   `params`: The parameters for creating a device (type: ICreateDeviceParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IDevice>>
-   **See**: [Create a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/create-a-device)

#### deleteDevice(id: IdType, config?: AxiosRequestConfig)

Deletes a device by the given ID.

-   **Parameters**:
    -   `id`: The ID of the device (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/delete-a-device)

#### getDevice(id: IdType, config?: AxiosRequestConfig)

Gets a device by the given ID.

-   **Parameters**:
    -   `id`: The ID of the device (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IDevice>>
-   **See**: [Get a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/get-a-device)

#### getCurrentDeviceOfUserAuthorized(config?: AxiosRequestConfig)

Gets the current device of the authenticated user.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IDevice>>
-   **See**: [Get Current Device Access](https://developers.jframework.io/references/api-reference/endpoints/devices/get-current-device-access)

#### getDevices(params?: IGetDevicesParams, config?: AxiosRequestConfig)

Gets a list of devices.

-   **Parameters**:
    -   `params`: The parameters for getting devices (type: IGetDevicesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IDevice>>
-   **See**: [Get Devices](https://developers.jframework.io/references/api-reference/endpoints/devices/get-devices)

#### getUsersFromDeviceID(deviceId: IdType, config?: AxiosRequestConfig)

Gets users associated with a device by its ID.

-   **Parameters**:
    -   `deviceId`: The ID of the device (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUser[]>>
-   **See**: [Get Users from a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/get-users-from-a-device)

#### getUsersFromDeviceCode(deviceCode: string, config?: AxiosRequestConfig)

Gets users associated with a device by its code.

-   **Parameters**:
    -   `deviceCode`: The code of the device (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUser[]>>
-   **See**: [Get Users from a Device Code](https://developers.jframework.io/references/api-reference/endpoints/devices/get-users-from-a-device-code)

#### refreshDeviceToken(params?: IRefreshDeviceTokenParams, config?: AxiosRequestConfig)

Refreshes the token for a device.

-   **Parameters**:
    -   `params`: The parameters for refreshing a device token (type: IRefreshDeviceTokenParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Refresh Device Token](https://developers.jframework.io/references/api-reference/endpoints/devices/refresh-device-token)

#### deviceStatistic(params?: IStatisticCommonParams, config?: AxiosRequestConfig)

Retrieves statistics for devices.

-   **Parameters**:
    -   `params`: The parameters for getting device statistics (type: IStatisticCommonParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IStatisticCommon[]>>
-   **See**: [Statistics Device](https://developers.jframework.io/references/api-reference/endpoints/devices/statistics)

#### updateDevice(id: IdType, params: IUpdateDeviceParams, config?: AxiosRequestConfig)

Updates a device by the given ID.

-   **Parameters**:
    -   `id`: The ID of the device (type: IdType).
    -   `params`: The parameters for updating a device (type: IUpdateDeviceParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IDevice>>
-   **See**: [Update a Device](https://developers.jframework.io/references/api-reference/endpoints/devices/update-a-device)

### Domain API

The `domain` object provides methods for managing domains and includes a nested `BrandLinksAPI` for managing brand links.

#### deleteDomain(id: IdType, config?: AxiosRequestConfig)

Deletes a domain by the given ID.

-   **Parameters**:
    -   `id`: The ID of the domain (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Domain](https://developers.jframework.io/references/api-reference/endpoints/domains/delete-a-domain)

#### getDomains(params?: IGetDomainsParams, config?: AxiosRequestConfig)

Gets a list of domains.

-   **Parameters**:
    -   `params`: The parameters for getting domains (type: IGetDomainsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IDomain>>
-   **See**: [Get Domains](https://developers.jframework.io/references/api-reference/endpoints/domains/get-domains)

#### getDomain(id: IdType, config?: AxiosRequestConfig)

Gets a domain by the given ID.

-   **Parameters**:
    -   `id`: The ID of the domain (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IDomain>>
-   **See**: [Get a Domain](https://developers.jframework.io/references/api-reference/endpoints/domains/get-a-domain)

#### BrandLinksAPI

Manages brand links associated with domains.

##### createBrandLink(domainId: IdType, params: ICreateBrandLinkParams, config?: AxiosRequestConfig)

Creates a new brand link.

-   **Parameters**:
    -   `domainId`: The ID of the domain (type: IdType).
    -   `params`: The parameters for creating a new brand link (type: ICreateBrandLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBrandLink>>
-   **See**: [Create a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/create-a-brand-link)

##### deleteBrandLink(domainId: IdType, brandLinkId: IdType, config?: AxiosRequestConfig)

Deletes a brand link by the given ID.

-   **Parameters**:
    -   `domainId`: The ID of the domain (type: IdType).
    -   `brandLinkId`: The ID of the brand link (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/delete-a-brand-link)

##### getBrandLink(params: IGetBrandLinkParams, config?: AxiosRequestConfig)

Gets a brand link by the given ID.

-   **Parameters**:
    -   `params`: The parameters for getting a brand link, including `domainId` and `brandLinkId` (type: IGetBrandLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBrandLink>>
-   **See**: [Get a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/get-a-brand-link)

##### getBrandLinksByType(params: IGetBrandLinksByTypeParams, config?: AxiosRequestConfig)

Gets brand links by type.

-   **Parameters**:
    -   `params`: The parameters for filtering brand links, including `domainId`, `type`, and other query parameters (type: IGetBrandLinksByTypeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBrandLink[]>>
-   **See**: [Get Brand Links by Type](https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/get-brand-links-by-type)

##### getBrandLinks(domainId: IdType, params: IGetBrandLinksParams, config?: AxiosRequestConfig)

Gets brand links by the given domain ID.

-   **Parameters**:
    -   `domainId`: The ID of the domain to filter (type: IdType).
    -   `params`: The parameters for getting brand links (type: IGetBrandLinksParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBrandLink[]>>
-   **See**: [Get Brand Links](https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/get-brand-links)

##### updateBrandLink(id: IdType, brandLinkId: IdType, params: IUpdateBrandLinkParams, config?: AxiosRequestConfig)

Updates a brand link by the given ID.

-   **Parameters**:
    -   `id`: The ID of the domain (type: IdType).
    -   `brandLinkId`: The ID of the brand link (type: IdType).
    -   `params`: The parameters for updating a brand link (type: IUpdateBrandLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBrandLink>>
-   **See**: [Update a Brand Link](https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/update-a-brand-link)

### Email Template API

The `emailTemplate` object provides methods for managing email templates.

#### createEmailTemplate(params: ICreateEmailTemplateParams, config?: AxiosRequestConfig)

Creates a new email template.

-   **Parameters**:
    -   `params`: The parameters for creating an email template (type: ICreateEmailTemplateParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEmailTemplate>>
-   **See**: [Create an Email Template](https://developers.jframework.io/references/api-reference/endpoints/email-templates/create-an-email-template)

#### deleteEmailTemplate(id: IdType, config?: AxiosRequestConfig)

Deletes an email template by the given ID.

-   **Parameters**:
    -   `id`: The ID of the email template (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete an Email Template](https://developers.jframework.io/references/api-reference/endpoints/email-templates/delete-an-email-template)

#### getEmailTemplate(id: IdType, config?: AxiosRequestConfig)

Gets an email template by the given ID.

-   **Parameters**:
    -   `id`: The ID of the email template (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEmailTemplate>>
-   **See**: [Get an Email Template](https://developers.jframework.io/references/api-reference/endpoints/email-templates/get-an-email-template)

#### getEmailTemplates(params?: IGetEmailTemplatesParams, config?: AxiosRequestConfig)

Gets a list of email templates.

-   **Parameters**:
    -   `params`: The parameters for getting email templates (type: IGetEmailTemplatesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IEmailTemplate>>
-   **See**: [Get Email Templates](https://developers.jframework.io/references/api-reference/endpoints/email-templates/get-email-templates)

#### getAllPlaceHolderKeysAvailable(config?: AxiosRequestConfig)

Gets all placeholder keys available for email templates.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<Record<string, string[]>>>
-   **See**: [Gets All Placeholder Keys Available](https://developers.jframework.io/references/api-reference/endpoints/email-templates/gets-all-placeholder-keys-available)

#### updateEmailTemplate(id: IdType, params: IUpdateEmailTemplateParams, config?: AxiosRequestConfig)

Updates an email template by the given ID.

-   **Parameters**:
    -   `id`: The ID of the email template (type: IdType).
    -   `params`: The parameters for updating an email template (type: IUpdateEmailTemplateParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEmailTemplate>>
-   **See**: [Update an Email Template](https://developers.jframework.io/references/api-reference/endpoints/email-templates/update-an-email-template)

### Event API

The `event` object provides methods for managing events and their associated templates.

#### getEvent(id: IdType, config?: AxiosRequestConfig)

Gets an event by the given ID.

-   **Parameters**:
    -   `id`: The ID of the event (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEvent>>
-   **See**: [Get an Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-an-event)

#### getEmailTemplateDefaultByEvent(eventId: IdType, params: IGetEmailTemplateDefaultByEventParams, config?: AxiosRequestConfig)

Gets the default email template for an event by ID and specified language code.

-   **Parameters**:
    -   `eventId`: The ID of the event (type: IdType).
    -   `params`: The parameters for getting the default email template (type: IGetEmailTemplateDefaultByEventParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IDefaultEmailTemplate>>
-   **See**: [Get Email Template Default by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-email-template-default-by-event)

#### getEmailTemplateByEvent(eventId: IdType, config?: AxiosRequestConfig)

Gets an email template by event ID.

-   **Parameters**:
    -   `eventId`: The ID of the event (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEmailTemplate>>
-   **See**: [Get an Email Template by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-an-email-template-by-event)

#### getEvents(params?: IGetEventsParams, config?: AxiosRequestConfig)

Gets a list of events.

-   **Parameters**:
    -   `params`: The parameters for getting events (type: IGetEventsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IEvent>>
-   **See**: [Get Events](https://developers.jframework.io/references/api-reference/endpoints/events/get-events)

#### getEventsEarningWallet(params?: IGetEventsEarningWalletParams, config?: AxiosRequestConfig)

Gets events related to wallet earnings (default type: Earning).

-   **Parameters**:
    -   `params`: The parameters for getting wallet earning events (type: IGetEventsEarningWalletParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IWalletEarningEvent>>
-   **See**: [Get Events Earning Wallet](https://developers.jframework.io/references/api-reference/endpoints/events/get-events-earning-wallet)

#### getEventsAssociatedWithEmailTemplates(config?: AxiosRequestConfig)

Gets events associated with email templates.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEvent[]>>
-   **See**: [Get Events Email Templates](https://developers.jframework.io/references/api-reference/endpoints/events/get-events-email-templates)

#### getEventsAssociatedWithPhoneTemplates(config?: AxiosRequestConfig)

Gets events associated with phone templates.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IEvent[]>>
-   **See**: [Get Events Phone Templates](https://developers.jframework.io/references/api-reference/endpoints/events/get-events-phone-templates)

#### getPhoneTemplateByEvent(eventId: IdType, config?: AxiosRequestConfig)

Gets a phone template by event ID.

-   **Parameters**:
    -   `eventId`: The ID of the event (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPhoneTemplate>>
-   **See**: [Get Phone Template by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-phone-template-by-event)

#### getPhoneTemplateDefaultByEvent(eventId: IdType, params: IGetPhoneTemplateDefaultByEventParams, config?: AxiosRequestConfig)

Gets the default phone template for an event by ID and specified language code.

-   **Parameters**:
    -   `eventId`: The ID of the event (type: IdType).
    -   `params`: The parameters for getting the default phone template (type: IGetPhoneTemplateDefaultByEventParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IDefaultPhoneTemplate>>
-   **See**: [Get Phone Template Default by Event](https://developers.jframework.io/references/api-reference/endpoints/events/get-phone-template-default-by-event)

### Exchange Rate API

The `exchangeRate` object provides methods for managing exchange rates and currency conversions.

#### getExchangeRates(config?: AxiosRequestConfig)

Gets all exchange rates in the system, relative to the base USD currency.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IExchangeRate[]>>
-   **See**: [Get Exchange Rates](https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/get-exchange-rates)

#### convertCurrency(params: IConvertCurrencyParams, config?: AxiosRequestConfig)

Converts an amount from one currency to another.

-   **Parameters**:
    -   `params`: The parameters for converting currency (type: IConvertCurrencyParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<number>>
-   **See**: [Convert Currency](https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/convert-currency)

### Feature API

The `feature` object provides methods for managing features and their associated packages.

#### addPackagesToFeature(featureId: IdType, params: IAddPackageToFeatureParams[], config?: AxiosRequestConfig)

Adds packages to a feature.

-   **Parameters**:
    -   `featureId`: The ID of the feature (type: IdType).
    -   `params`: The parameters for adding packages to a feature (type: IAddPackageToFeatureParams[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Add Packages to a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/add-packages-to-a-feature)

#### createFeature(params: ICreateFeatureParams, config?: AxiosRequestConfig)

Creates a new feature.

-   **Parameters**:
    -   `params`: The parameters for creating a feature (type: ICreateFeatureParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IFeature>>
-   **See**: [Create a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/create-a-feature)

#### deleteFeature(id: IdType, config?: AxiosRequestConfig)

Deletes a feature by the given ID.

-   **Parameters**:
    -   `id`: The ID of the feature (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/delete-a-feature)

#### getFeature(id: IdType, config?: AxiosRequestConfig)

Gets a feature by the given ID.

-   **Parameters**:
    -   `id`: The ID of the feature (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IFeature>>
-   **See**: [Get a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/get-a-feature)

#### getFeatures(params?: IGetFeaturesParams, config?: AxiosRequestConfig)

Gets a list of features.

-   **Parameters**:
    -   `params`: The parameters for getting features (type: IGetFeaturesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IFeature>>
-   **See**: [Get Features](https://developers.jframework.io/references/api-reference/endpoints/features/get-features)

#### getPackagesFromFeature(featureId: IdType, config?: AxiosRequestConfig)

Gets packages associated with a feature.

-   **Parameters**:
    -   `featureId`: The ID of the feature (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPackage[]>>
-   **See**: [Get Packages from Feature](https://developers.jframework.io/references/api-reference/endpoints/features/get-packages-from-feature)

#### removePackagesFromFeature(featureId: IdType, packageIds: IdType[], config?: AxiosRequestConfig)

Removes packages from a feature.

-   **Parameters**:
    -   `featureId`: The ID of the feature (type: IdType).
    -   `packageIds`: The IDs of the packages to remove (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Remove Packages from a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/remove-packages-from-a-feature)

#### updateFeature(id: IdType, params: IUpdateFeatureParams, config?: AxiosRequestConfig)

Updates a feature by the given ID.

-   **Parameters**:
    -   `id`: The ID of the feature (type: IdType).
    -   `params`: The parameters for updating a feature (type: IUpdateFeatureParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IFeature>>
-   **See**: [Update a Feature](https://developers.jframework.io/references/api-reference/endpoints/features/update-a-feature)

### Invoice API

The `invoice` object provides methods for managing invoices.

#### deleteInvoice(id: IdType, config?: AxiosRequestConfig)

Deletes an invoice by the given ID.

-   **Parameters**:
    -   `id`: The ID of the invoice (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete an Invoice](https://developers.jframework.io/references/api-reference/endpoints/invoices/delete-an-invoice)

#### getInvoices(params?: IGetInvoicesParams, config?: AxiosRequestConfig)

Gets a list of invoices.

-   **Parameters**:
    -   `params`: The parameters for getting invoices (type: IGetInvoicesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IInvoice>>
-   **See**: [Get Invoices](https://developers.jframework.io/references/api-reference/endpoints/invoices/get-invoices)

#### getInvoice(id: IdType, config?: AxiosRequestConfig)

Gets an invoice by the given ID.

-   **Parameters**:
    -   `id`: The ID of the invoice (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IInvoice>>
-   **See**: [Get an Invoice](https://developers.jframework.io/references/api-reference/endpoints/invoices/get-a-invoice)

#### downloadInvoice(id: IdType, config?: AxiosRequestConfig)

Downloads an invoice by the given ID.

-   **Parameters**:
    -   `id`: The ID of the invoice (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<Blob>
-   **See**: (Documentation to be updated in the future)

### Issue API

The `issue` object provides methods for managing issues and their reactions.

#### createIssue(params: ICreateIssueParams, config?: AxiosRequestConfig)

Creates a new issue.

-   **Parameters**:
    -   `params`: The parameters for creating an issue (type: ICreateIssueParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IIssue>>
-   **See**: [Create an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/create-an-issue)

#### deleteIssue(id: IdType, config?: AxiosRequestConfig)

Deletes an issue by the given ID.

-   **Parameters**:
    -   `id`: The ID of the issue (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue)

#### getIssues(params?: IGetIssuesParams, config?: AxiosRequestConfig)

Gets a list of issues.

-   **Parameters**:
    -   `params`: The parameters for getting issues (type: IGetIssuesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IIssue>>
-   **See**: [Get Issues](https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues)

#### getIssue(id: IdType, config?: AxiosRequestConfig)

Gets an issue by the given ID.

-   **Parameters**:
    -   `id`: The ID of the issue (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IIssue>>
-   **See**: [Get an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/get-an-issue)

#### getIssuesByListId(ids: IdType[], config?: AxiosRequestConfig)

Gets a list of issues by their IDs (maximum 100 issues).

-   **Parameters**:
    -   `ids`: The list of issue IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IIssue[]>>
-   **See**: [Get Issues by List ID](https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues-by-list-id)

#### getChildrenIssues(id: IdType, config?: AxiosRequestConfig)

Gets the children of an issue by ID.

-   **Parameters**:
    -   `id`: The ID of the issue (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IIssue[]>>
-   **See**: [Get Children Issues](https://developers.jframework.io/references/api-reference/endpoints/issues/get-children-issues)

#### updateIssue(params: IUpdateIssueParams, config?: AxiosRequestConfig)

Updates an issue by the given ID.

-   **Parameters**:
    -   `params`: The parameters for updating an issue, including `id` (type: IUpdateIssueParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IIssue>>
-   **See**: [Update an Issue](https://developers.jframework.io/references/api-reference/endpoints/issues/update-an-issue)

#### createIssueReaction(params: ICreateIssueReactionParams, config?: AxiosRequestConfig)

Creates an issue reaction.

-   **Parameters**:
    -   `params`: The parameters for creating an issue reaction (type: ICreateIssueReactionParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Create an Issue Reaction](https://developers.jframework.io/references/api-reference/endpoints/issues/issue-reactions/create-an-issue-reaction)

#### deleteIssueReaction(id: IdType, config?: AxiosRequestConfig)

Deletes an issue reaction by the given ID.

-   **Parameters**:
    -   `id`: The ID of the issue reaction (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete an Issue Reaction](https://developers.jframework.io/references/api-reference/endpoints/issues/delete-an-issue-reaction)

### Issue Category API

The `issueCategory` object provides methods for managing issue categories.

#### createIssueCategory(params: ICreateIssueCategoryParams, config?: AxiosRequestConfig)

Creates a new issue category.

-   **Parameters**:
    -   `params`: The parameters for creating a new issue category (type: ICreateIssueCategoryParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IIssueCategory>>
-   **See**: [Create an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/create-an-issue-category)

#### deleteIssueCategory(id: IdType, config?: AxiosRequestConfig)

Deletes an issue category by the given ID.

-   **Parameters**:
    -   `id`: The ID of the issue category (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/delete-an-issue-category)

#### getIssueCategories(params?: IGetIssueCategoriesParams, config?: AxiosRequestConfig)

Gets a list of issue categories.

-   **Parameters**:
    -   `params`: The parameters for getting issue categories (type: IGetIssueCategoriesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IIssueCategory[]>>
-   **See**: [Get Issue Categories](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-issue-categories)

#### getIssueCategory(id: IdType, config?: AxiosRequestConfig)

Gets an issue category by the given ID.

-   **Parameters**:
    -   `id`: The ID of the issue category (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IIssueCategory>>
-   **See**: [Get an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-an-issue-category)

#### updateIssueCategory(id: IdType, params: IUpdateIssueCategoryParams, config?: AxiosRequestConfig)

Updates an issue category by the given ID.

-   **Parameters**:
    -   `id`: The ID of the issue category (type: IdType).
    -   `params`: The parameters for updating an issue category (type: IUpdateIssueCategoryParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IIssueCategory>>
-   **See**: [Update an Issue Category](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/update-an-issue-category)

### Language API

The `language` object provides methods for managing languages.

#### getLanguages(config?: AxiosRequestConfig)

Gets a list of all languages.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ILanguage[]>>
-   **See**: [Get Languages](https://developers.jframework.io/references/api-reference/endpoints/languages)

### License API

The `license` object provides methods for managing licenses.

#### activateLicense(id: IdType, config?: AxiosRequestConfig)

Activates a license based on its current state. If the license is NotStarted, sets the StartDate to a valid date in the past. If Expired, sets the EndDate to a valid date in the future. If Inactive, sets both StartDate and EndDate if necessary. Does nothing if the license is already Used.

-   **Parameters**:
    -   `id`: The ID of the license (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ILicense>>
-   **See**: [Activate a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/activate-a-license)

#### applyLicenseToLoggedUser(licenseCode: string, config?: AxiosRequestConfig)

Applies a license to the logged-in user, enabling the user to use the license's features and sending a notification email.

-   **Parameters**:
    -   `licenseCode`: The license code to apply (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Applies a License to the Logged User](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-logged-user)

#### applyLicenseToGivenLoginName(params: IApplyLicenseToGivenLoginNameParams, config?: AxiosRequestConfig)

Applies a license code to a user by their login name, enabling the user to use the license's features and sending a notification email.

-   **Parameters**:
    -   `params`: The parameters for applying a license to a given login name (type: IApplyLicenseToGivenLoginNameParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Applies a License to the Given Login Name](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-login-name)

#### applyLicenseToGivenUser(params: IApplyLicenseToGivenUserParams, config?: AxiosRequestConfig)

Applies a license code to a user by their user ID, enabling the user to use the license's features and sending a notification email.

-   **Parameters**:
    -   `params`: The parameters for applying a license to a given user (type: IApplyLicenseToGivenUserParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Applies a License to the Given User](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-given-a-user)

#### checkLicenseCode(licenseCode: string, config?: AxiosRequestConfig)

Checks the status of a given license code.

-   **Parameters**:
    -   `licenseCode`: The license code to check (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Checks a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/checks-a-license)

#### createLicenses(params: ICreateLicensesParams, config?: AxiosRequestConfig)

Creates new licenses.

-   **Parameters**:
    -   `params`: The parameters for creating licenses (type: ICreateLicensesParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICountSuccessResponse>>
-   **See**: [Create the Licenses](https://developers.jframework.io/references/api-reference/endpoints/licenses/create-the-licenses)

#### countLicensesCreated(config?: AxiosRequestConfig)

Counts the number of licenses created by each user.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICountSuccessResponse>>
-   **See**: [Count Licenses Created](https://developers.jframework.io/references/api-reference/endpoints/licenses/count-licenses-created)

#### deactivateLicense(id: IdType, config?: AxiosRequestConfig)

Deactivates a license.

-   **Parameters**:
    -   `id`: The ID of the license (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ILicense>>
-   **See**: [Deactivate a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/deactivate-a-license)

#### deleteLicense(id: IdType)

Deletes a license by the given ID.

-   **Parameters**:
    -   `id`: The ID of the license (type: IdType).
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/delete-a-license)

#### getLicenses(params?: IGetLicensesParams, config?: AxiosRequestConfig)

Gets a list of licenses.

-   **Parameters**:
    -   `params`: The parameters for getting licenses (type: IGetLicensesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<ILicense>>
-   **See**: [Get Licenses](https://developers.jframework.io/references/api-reference/endpoints/licenses/get-licenses)

#### getLicense(id: IdType, config?: AxiosRequestConfig)

Gets a license by the given ID.

-   **Parameters**:
    -   `id`: The ID of the license (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ILicense>>
-   **See**: [Get a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/get-a-license)

#### generateLicenseCode(params: IGenerateLicenseCodeParams, config?: AxiosRequestConfig)

Generates a license code, which is not stored in the system.

-   **Parameters**:
    -   `params`: The parameters for generating a license code (type: IGenerateLicenseCodeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Generate License Code](https://developers.jframework.io/references/api-reference/endpoints/licenses/generate-code)

#### purchaseToAddLicensesByCheckoutLink(params: IPurchaseToAddLicensesByCheckoutLinkParams, config?: AxiosRequestConfig)

Generates a checkout link to purchase licenses.

-   **Parameters**:
    -   `params`: The parameters for purchasing licenses via checkout link (type: IPurchaseToAddLicensesByCheckoutLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Purchase to Add Licenses by Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-checkout-link)

#### purchaseToAddLicensesByWallet(params: IPurchaseToAddLicensesByWalletParams, config?: AxiosRequestConfig)

Purchases licenses using the user's wallet.

-   **Parameters**:
    -   `params`: The parameters for purchasing licenses via wallet (type: IPurchaseToAddLicensesByWalletParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Purchase to Add Licenses by User Wallet](https://developers.jframework.io/references/api-reference/endpoints/licenses/purchase-to-add-licenses-by-user-wallet)

#### statisticsLicensesMonthly(params?: IStatisticLicensesMonthlyParams, config?: AxiosRequestConfig)

Retrieves monthly license usage statistics for reporting and analysis, including totals for licenses created, active, expired, used, unused, and financial details like total amount, refund, and postpaid billing.

-   **Parameters**:
    -   `params`: The parameters for getting monthly license statistics (type: IStatisticLicensesMonthlyParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ILicenseStatisticsReportSummary>>
-   **See**: [Statistics Licenses Monthly](https://developers.jframework.io/references/api-reference/endpoints/licenses/statistics-licenses-monthly)

#### updateLicense(params: IUpdateLicenseParams, config?: AxiosRequestConfig)

Updates a license by the given ID.

-   **Parameters**:
    -   `params`: The parameters for updating a license, including `id` (type: IUpdateLicenseParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ILicense>>
-   **See**: [Update a License](https://developers.jframework.io/references/api-reference/endpoints/licenses/update-a-license)

### MFA API

The `mfa` object provides methods for managing multiple factor authentication methods.

#### getListOfMFA(config?: AxiosRequestConfig)

Gets a list of multiple factor authentication methods available for the user.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IMFA[]>>
-   **See**: [Get a List of MFA](https://developers.jframework.io/references/api-reference/endpoints/multiple-factor-authentications/get-a-list-of-mfa)

### Notification API

The `notification` object provides methods for managing notifications and broadcasts.

#### createBroadcast(params: ICreateBroadcastParams, config?: AxiosRequestConfig)

Creates a new broadcast, generating individual notifications for relevant users.

-   **Parameters**:
    -   `params`: The parameters for creating a broadcast (type: ICreateBroadcastParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<INotification>>
-   **See**: [Create a Broadcast](https://developers.jframework.io/references/api-reference/endpoints/notifications/create-broadcast)

#### getNotification(notificationId: IdType, config?: AxiosRequestConfig)

Gets a notification by the given ID.

-   **Parameters**:
    -   `notificationId`: The ID of the notification (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<INotification>>
-   **See**: [Get a Notification](https://developers.jframework.io/references/api-reference/endpoints/notifications/get-a-notification)

#### getNotifications(params?: IGetNotificationsParams, config?: AxiosRequestConfig)

Gets a list of notifications.

-   **Parameters**:
    -   `params`: The parameters for getting notifications (type: IGetNotificationsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<INotification>>
-   **See**: [Get Notifications](https://developers.jframework.io/references/api-reference/endpoints/notifications/get-notifications)

#### pushNotificationMessageForTokens(params: IPushNotificationMessageForTokensParams, config?: AxiosRequestConfig)

Pushes a notification with the given title and body to the specified device tokens.

-   **Parameters**:
    -   `params`: The parameters for pushing a notification message (type: IPushNotificationMessageForTokensParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPushNotificationResponse>>
-   **See**: [Push Notification Message for Device Token](https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-message-for-device-token)

#### pushNotificationDataMessageByTokens(deviceTokens: string[], data: Object, config?: AxiosRequestConfig)

Pushes a notification with data messages to the specified device tokens.

-   **Parameters**:
    -   `deviceTokens`: The list of device tokens (type: string[]).
    -   `data`: The data for the notification (type: Object).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPushNotificationResponse>>
-   **See**: [Push Notification Data Message by Tokens](https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-data-message-by-tokens)

#### testPushNotificationDataMessage(params: ITestPushNotificationDataMessageParams, config?: AxiosRequestConfig)

Tests pushing a notification message to the given device tokens.

-   **Parameters**:
    -   `params`: The parameters for testing a push notification (type: ITestPushNotificationDataMessageParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICountSuccessResponse>>
-   **See**: [Test Push Notification Data Message](https://developers.jframework.io/references/api-reference/endpoints/notifications/test-push-notification-data-message)

### Organization API

The `organization` object provides methods for managing organizations and their users.

#### addNewUserToOrganization(id: IdType, userId: IdType, config?: AxiosRequestConfig)

Adds a new user to an organization.

-   **Parameters**:
    -   `id`: The ID of the organization (type: IdType).
    -   `userId`: The ID of the user to add (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Add a User in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/add-a-user-in-an-organization)

#### addUserForDefaultLanguageCodeOrganizationSystem(userId: IdType, languageCode: string, config?: AxiosRequestConfig)

Adds a new user to the organization system with the specified default language.

-   **Parameters**:
    -   `userId`: The ID of the user to add (type: IdType).
    -   `languageCode`: The language code to use (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Adds a User for Default Language Code Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/adds-a-user-for-default-language-code-organization)

#### assignRoleForUserInOrganization(organizationId: IdType, params: IAssignRoleForUserInOrganizationParams, config?: AxiosRequestConfig)

Assigns a role to a user in an organization.

-   **Parameters**:
    -   `organizationId`: The ID of the organization (type: IdType).
    -   `params`: The parameters for assigning a role (type: IAssignRoleForUserInOrganizationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Assign Role for a User in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/assign-role-for-a-user-in-an-organization)

#### createOrganization(params: ICreateOrganizationParams, config?: AxiosRequestConfig)

Creates a new organization.

-   **Parameters**:
    -   `params`: The parameters for creating an organization (type: ICreateOrganizationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IOrganization>>
-   **See**: [Create an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/create-an-organization)

#### deleteOrganization(id: IdType, config?: AxiosRequestConfig)

Deletes an organization by the given ID.

-   **Parameters**:
    -   `id`: The ID of the organization (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/delete-an-organization)

#### getOrganization(id: IdType, config?: AxiosRequestConfig)

Gets an organization by the given ID.

-   **Parameters**:
    -   `id`: The ID of the organization (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IOrganization>>
-   **See**: [Get an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-an-organization)

#### getOrganizations(params?: IGetOrganizationsParams, config?: AxiosRequestConfig)

Gets a list of organizations.

-   **Parameters**:
    -   `params`: The parameters for getting organizations (type: IGetOrganizationsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IOrganization>>
-   **See**: [Get Organizations](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-organizations)

#### getUsersOfOrganization(organizationId: IdType, params?: IGetUsersOfOrganizationParams, config?: AxiosRequestConfig)

Gets the users of an organization.

-   **Parameters**:
    -   `organizationId`: The ID of the organization (type: IdType).
    -   `params`: The parameters for getting users (type: IGetUsersOfOrganizationParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IOrganizationUser>>
-   **See**: [Get Users of an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-users-of-an-organization)

#### removeUserInOrganization(organizationId: IdType, userId: IdType, config?: AxiosRequestConfig)

Removes a user from an organization.

-   **Parameters**:
    -   `organizationId`: The ID of the organization (type: IdType).
    -   `userId`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Remove a User in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/remove-a-user-in-an-organization)

#### updateOrganization(id: IdType, params: IUpdateOrganizationParams, config?: AxiosRequestConfig)

Updates an organization by the given ID.

-   **Parameters**:
    -   `id`: The ID of the organization (type: IdType).
    -   `params`: The parameters for updating an organization (type: IUpdateOrganizationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Updates an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-an-organization)

#### updateUserStatusInOrganization(organizationId: IdType, params: IUpdateUserStatusInOrganizationParams, config?: AxiosRequestConfig)

Updates a user's status in an organization.

-   **Parameters**:
    -   `organizationId`: The ID of the organization (type: IdType).
    -   `params`: The parameters for updating a user's status (type: IUpdateUserStatusInOrganizationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Updates Users Status in an Organization](https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-users-status-in-an-organization)

### Package API

The `package` object provides methods for managing packages and their features.

#### addFeaturesToPackage(packageId: IdType, params: IAddFeatureToPackageParams[], config?: AxiosRequestConfig)

Adds features to a package.

-   **Parameters**:
    -   `packageId`: The ID of the package (type: IdType).
    -   `params`: The parameters for adding features (type: IAddFeatureToPackageParams[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Add Features to a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/add-features-to-a-package)

#### calculateTotalPriceCheckout(params: ICalculateTotalPriceCheckoutParams, config?: AxiosRequestConfig)

Calculates the total price of a package at checkout, considering wallet, refund, prorate, subtotal, tax, and total price.

-   **Parameters**:
    -   `params`: The parameters for calculating total price (type: ICalculateTotalPriceCheckoutParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ICalculateTotalPriceCheckoutResponse>>
-   **See**: [Calculate Total Price Checkout](https://developers.jframework.io/references/api-reference/endpoints/packages/calculate-total-price-checkout)

#### createPackage(params: ICreatePackageParams, config?: AxiosRequestConfig)

Creates a new package.

-   **Parameters**:
    -   `params`: The parameters for creating a package (type: ICreatePackageParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPackage>>
-   **See**: [Create a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/create-a-package)

#### deletePackage(id: IdType, config?: AxiosRequestConfig)

Deletes a package by the given ID.

-   **Parameters**:
    -   `id`: The ID of the package (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/delete-a-package)

#### getPackage(id: IdType, config?: AxiosRequestConfig)

Gets a package by the given ID.

-   **Parameters**:
    -   `id`: The ID of the package (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPackage>>
-   **See**: [Get a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/get-a-package)

#### getFeaturesFromPackage(packageId: IdType, config?: AxiosRequestConfig)

Gets features associated with a package.

-   **Parameters**:
    -   `packageId`: The ID of the package (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IFeatureOfPackage[]>>
-   **See**: [Get Features from Package](https://developers.jframework.io/references/api-reference/endpoints/packages/get-features-from-package)

#### getPackages(params?: IGetPackagesParams, config?: AxiosRequestConfig)

Gets a list of packages.

-   **Parameters**:
    -   `params`: The parameters for getting packages (type: IGetPackagesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPackage[]>>
-   **See**: [Get Packages](https://developers.jframework.io/references/api-reference/endpoints/packages/get-packages)

#### getPricesFromPackage(packageId: IdType, config?: AxiosRequestConfig)

Gets prices associated with a package by its ID.

-   **Parameters**:
    -   `packageId`: The ID of the package (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPrice[]>>
-   **See**: [Get Prices from a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/get-prices-from-a-package)

#### removeFeaturesFromPackage(packageId: IdType, featureIds: IdType[], config?: AxiosRequestConfig)

Removes features from a package.

-   **Parameters**:
    -   `packageId`: The ID of the package (type: IdType).
    -   `featureIds`: The list of feature IDs to remove (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Remove Features from a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/remove-features-from-a-package)

#### renewalOrUpgradeUserPackage(params: IRenewalOrUpgradeUserPackageParams, config?: AxiosRequestConfig)

Renews or upgrades a user's package.

-   **Parameters**:
    -   `params`: The parameters for renewing or upgrading a package (type: IRenewalOrUpgradeUserPackageParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IRenewalOrUpgradeUserPackageResponse>>
-   **See**: [Renewal or Upgrade User Package](https://developers.jframework.io/references/api-reference/endpoints/packages/renewal-or-upgrade-user-package)

#### updatePackage(id: IdType, params: IUpdatePackageParams, config?: AxiosRequestConfig)

Updates a package by the given ID.

-   **Parameters**:
    -   `id`: The ID of the package (type: IdType).
    -   `params`: The parameters for updating a package (type: IUpdatePackageParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPackage>>
-   **See**: [Update a Package](https://developers.jframework.io/references/api-reference/endpoints/packages/update-a-package)

#### updatePackageFeatureData(pathParams: IUpdatePackageFeatureDataPathParams, params: IUpdatePackageFeatureDataParams, config?: AxiosRequestConfig)

Updates package feature data.

-   **Parameters**:
    -   `pathParams`: The path parameters for updating package feature data (type: IUpdatePackageFeatureDataPathParams).
    -   `params`: The parameters for updating package feature data (type: IUpdatePackageFeatureDataParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Update Package Feature Data](https://developers.jframework.io/references/api-reference/endpoints/packages/update-package-feature-data)

### Payment API

The `payment` object provides methods for managing payments.

#### generatePaymentCheckoutLink(params: IGeneratePaymentCheckoutLinkParams, config?: AxiosRequestConfig)

Generates a checkout link to make a payment.

-   **Parameters**:
    -   `params`: The parameters for generating a payment checkout link (type: IGeneratePaymentCheckoutLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPaymentGenerateCheckoutLinkResponse>>
-   **See**: [Generate Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/prices/generate-checkout-link)

#### getPayment(id: IdType, config?: AxiosRequestConfig)

Gets a payment by the given ID.

-   **Parameters**:
    -   `id`: The ID of the payment (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPayment>>
-   **See**: [Get a Payment](https://developers.jframework.io/references/api-reference/endpoints/payments/get-a-payment)

#### getPayments(params?: IGetPaymentsParams, config?: AxiosRequestConfig)

Gets a list of payments based on the given filter.

-   **Parameters**:
    -   `params`: The parameters for getting payments (type: IGetPaymentsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IPayment>>
-   **See**: [Get Payments](https://developers.jframework.io/references/api-reference/endpoints/payments/get-payments)

#### getOverviewSellDashboard(testMode?: boolean, config?: AxiosRequestConfig)

Calculates the metric overview dashboard for payments.

-   **Parameters**:
    -   `testMode`: Query parameter to enable test mode (type: boolean, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPaymentDashboard>>
-   **See**: [Gets the Overview Sell Dashboard](https://developers.jframework.io/references/api-reference/endpoints/payments/gets-the-overview-sell-dashboard)

### Permission API

The `permission` object provides methods for managing permissions and their associated roles.

#### addRolesToPermission(permissionId: IdType, roleIds: IdType[], config?: AxiosRequestConfig)

Adds roles to a permission.

-   **Parameters**:
    -   `permissionId`: The ID of the permission (type: IdType).
    -   `roleIds`: The list of role IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Add Roles to a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/add-roles-to-a-permission)

#### createPermission(params: ICreatePermissionParams, config?: AxiosRequestConfig)

Creates a new permission.

-   **Parameters**:
    -   `params`: The parameters for creating a permission (type: ICreatePermissionParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPermission>>
-   **See**: [Create a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/add-roles-to-a-permission)

#### deletePermission(id: IdType, config?: AxiosRequestConfig)

Deletes a permission by the given ID.

-   **Parameters**:
    -   `id`: The ID of the permission (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/delete-a-permission)

#### getPermission(id: IdType, config?: AxiosRequestConfig)

Gets a permission by the given ID.

-   **Parameters**:
    -   `id`: The ID of the permission (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPermission>>
-   **See**: [Get a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/get-a-permission)

#### getPermissions(params?: IGetPermissionsParams, config?: AxiosRequestConfig)

Gets a list of all permissions.

-   **Parameters**:
    -   `params`: The parameters for getting permissions (type: IGetPermissionsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IPermission>>
-   **See**: [Get Permissions](https://developers.jframework.io/references/api-reference/endpoints/permissions/get-permissions)

#### getRolesFromPermission(permissionId: IdType, config?: AxiosRequestConfig)

Gets roles associated with a permission by its ID.

-   **Parameters**:
    -   `permissionId`: The ID of the permission (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IRole[]>>
-   **See**: [Get Roles from a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/get-roles-from-a-permission)

#### removeRolesFromPermission(permissionId: IdType, roleIds: IdType[], config?: AxiosRequestConfig)

Removes roles from a permission.

-   **Parameters**:
    -   `permissionId`: The ID of the permission (type: IdType).
    -   `roleIds`: The list of role IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Remove Roles from a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/remove-roles-from-a-permission)

#### updatePermission(id: IdType, params: IUpdatePermissionParams, config?: AxiosRequestConfig)

Updates a permission by the given ID.

-   **Parameters**:
    -   `id`: The ID of the permission (type: IdType).
    -   `params`: The parameters for updating a permission (type: IUpdatePermissionParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<unknown>>
-   **See**: [Update a Permission](https://developers.jframework.io/references/api-reference/endpoints/permissions/update-a-permission)

### Price API

The `price` object provides methods for managing prices.

#### createPrice(params: ICreatePriceParams, config?: AxiosRequestConfig)

Creates a new price.

-   **Parameters**:
    -   `params`: The parameters for creating a price (type: ICreatePriceParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPrice>>
-   **See**: [Create a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/create-a-price)

#### deletePrice(id: IdType, config?: AxiosRequestConfig)

Deletes a price by the given ID.

-   **Parameters**:
    -   `id`: The ID of the price (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/delete-a-price)

#### generateCheckoutLink(params: IGenerateCheckoutLinkParams, config?: AxiosRequestConfig)

Generates a direct checkout link for a price, allowing the user to place an order. After successful checkout, redirects to the configured return URL and sends a license to the purchaser's email.

-   **Parameters**:
    -   `params`: The parameters for generating a checkout link (type: IGenerateCheckoutLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Generate Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/prices/generate-checkout-link)

#### getPrice(id: IdType, config?: AxiosRequestConfig)

Gets a price by the given ID.

-   **Parameters**:
    -   `id`: The ID of the price (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPrice>>
-   **See**: [Get a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/get-a-price)

#### getPrices(params?: IGetPricesParams, config?: AxiosRequestConfig)

Gets a list of prices.

-   **Parameters**:
    -   `params`: The parameters for getting prices (type: IGetPricesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPrice[]>>
-   **See**: [Get Prices](https://developers.jframework.io/references/api-reference/endpoints/prices/get-prices)

#### updatePrice(id: IdType, params: IUpdatePriceParams, config?: AxiosRequestConfig)

Updates a price by the given ID.

-   **Parameters**:
    -   `id`: The ID of the price (type: IdType).
    -   `params`: The parameters for updating a price (type: IUpdatePriceParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPrice>>
-   **See**: [Update a Price](https://developers.jframework.io/references/api-reference/endpoints/prices/update-a-price)

### Resource Type API

The `resourceType` object provides methods for managing resource types.

#### createResourceType(params: ICreateResourceTypeParams, config?: AxiosRequestConfig)

Creates a new resource type.

-   **Parameters**:
    -   `params`: The parameters for creating a resource type (type: ICreateResourceTypeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IResourceType>>
-   **See**: [Create a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/create-a-resource-type)

#### deleteResourceType(id: IdType, config?: AxiosRequestConfig)

Deletes a resource type by the given ID.

-   **Parameters**:
    -   `id`: The ID of the resource type (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/delete-a-resource-type)

#### getResourceType(id: IdType, config?: AxiosRequestConfig)

Gets a resource type by the given ID.

-   **Parameters**:
    -   `id`: The ID of the resource type (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IResourceType>>
-   **See**: [Get a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-a-resource-type)

#### getResourceTypes(params?: IGetResourceTypesParams, config?: AxiosRequestConfig)

Gets a list of resource types.

-   **Parameters**:
    -   `params`: The parameters for getting resource types (type: IGetResourceTypesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IResourceType[]>>
-   **See**: [Get Resource Types](https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-resource-types)

#### updateResourceType(id: IdType, params: IUpdateResourceTypeParams, config?: AxiosRequestConfig)

Updates a resource type by the given ID.

-   **Parameters**:
    -   `id`: The ID of the resource type (type: IdType).
    -   `params`: The parameters for updating a resource type (type: IUpdateResourceTypeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IResourceType>>
-   **See**: [Update a Resource Type](https://developers.jframework.io/references/api-reference/endpoints/resource-types/update-a-resource-type)

### Role API

The `role` object provides methods for managing roles and their permissions.

#### assignUsersToRole(id: IdType, userIds: IdType[], config?: AxiosRequestConfig)

Assigns users to a role.

-   **Parameters**:
    -   `id`: The ID of the role (type: IdType).
    -   `userIds`: The list of user IDs to assign (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Assign Users to a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/assign-users-to-a-role)

#### deleteRole(id: IdType, config?: AxiosRequestConfig)

Deletes a role by the given ID, removing it from any assigned users and permissions.

-   **Parameters**:
    -   `id`: The ID of the role (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/delete-a-role)

#### createRole(params: ICreateRoleParams, config?: AxiosRequestConfig)

Creates a new role. New roles are not associated with permissions by default.

-   **Parameters**:
    -   `params`: The parameters for creating a role (type: ICreateRoleParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IRole>>
-   **See**: [Create a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/create-a-role)

#### getRole(id: IdType, config?: AxiosRequestConfig)

Gets a role by the given ID.

-   **Parameters**:
    -   `id`: The ID of the role (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IRole>>
-   **See**: [Get a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/get-a-role)

#### getRoles(params?: IGetRolesParams, config?: AxiosRequestConfig)

Gets a list of roles in the brand.

-   **Parameters**:
    -   `params`: The parameters for getting roles (type: IGetRolesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IRole>>
-   **See**: [Get Roles](https://developers.jframework.io/references/api-reference/endpoints/roles/get-roles)

#### grantPermissionsToRole(roleId: IdType, permissionIds: IdType[], config?: AxiosRequestConfig)

Grants one or more permissions to a specific role.

-   **Parameters**:
    -   `roleId`: The ID of the role (type: IdType).
    -   `permissionIds`: The list of permission IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Grant Permissions to a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/grant-permissions-to-a-role)

#### getPermissionsGrantedByRole(roleId: IdType, config?: AxiosRequestConfig)

Retrieves a detailed list of permissions granted by a specified role, including name, description, and resource server.

-   **Parameters**:
    -   `roleId`: The ID of the role (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPermission[]>>
-   **See**: [Get Permissions Granted by Role](https://developers.jframework.io/references/api-reference/endpoints/roles/get-permissions-granted-by-role)

#### removePermissionsFromRole(roleId: IdType, permissionIds: IdType[], config?: AxiosRequestConfig)

Removes one or more permissions from a specific role.

-   **Parameters**:
    -   `roleId`: The ID of the role (type: IdType).
    -   `permissionIds`: The list of permission IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Remove Permissions from a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/remove-permissions-from-a-role)

#### updateRole(id: IdType, params: IUpdateRoleParams, config?: AxiosRequestConfig)

Updates a role by the given ID.

-   **Parameters**:
    -   `id`: The ID of the role (type: IdType).
    -   `params`: The parameters for updating a role (type: IUpdateRoleParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IRole>>
-   **See**: [Update a Role](https://developers.jframework.io/references/api-reference/endpoints/roles/update-a-role)

### State API

The `state` object provides methods for managing state data.

#### getStates(config?: AxiosRequestConfig)

Gets a list of states.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IState[]>>
-   **See**: [Get States](https://developers.jframework.io/references/api-reference/endpoints/states)

### Subscription Type API

The `subscriptionType` object provides methods for managing subscription types.

#### createSubscriptionType(params: ICreateSubscriptionTypeParams, config?: AxiosRequestConfig)

Creates a new subscription type.

-   **Parameters**:
    -   `params`: The parameters for creating a new subscription type (type: ICreateSubscriptionTypeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ISubscriptionType>>
-   **See**: [Create a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/create-a-subscription-type)

#### deleteSubscriptionType(id: IdType, config?: AxiosRequestConfig)

Deletes a subscription type by the given ID.

-   **Parameters**:
    -   `id`: The ID of the subscription type (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/delete-a-subscription-type)

#### getSubscriptionType(id: IdType, config?: AxiosRequestConfig)

Gets a subscription type by the given ID.

-   **Parameters**:
    -   `id`: The ID of the subscription type (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ISubscriptionType>>
-   **See**: [Get a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-a-subscription-type)

#### getPricesFromSubscriptionType(subscriptionTypeId: IdType, config?: AxiosRequestConfig)

Gets prices from a subscription type.

-   **Parameters**:
    -   `subscriptionTypeId`: The ID of the subscription type (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IPrice[]>>
-   **See**: [Get Prices from a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-prices-from-a-subscription-type)

#### getSubscriptionTypes(params?: IGetSubscriptionTypesParams, config?: AxiosRequestConfig)

Gets a list of subscription types.

-   **Parameters**:
    -   `params`: The parameters for getting subscription types (type: IGetSubscriptionTypesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ISubscriptionType[]>>
-   **See**: [Get Subscription Types](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/get-subscription-types)

#### updateSubscriptionType(id: IdType, params: IUpdateSubscriptionTypeParams, config?: AxiosRequestConfig)

Updates a subscription type by the given ID.

-   **Parameters**:
    -   `id`: The ID of the subscription type (type: IdType).
    -   `params`: The parameters for updating a subscription type (type: IUpdateSubscriptionTypeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ISubscriptionType>>
-   **See**: [Update a Subscription Type](https://developers.jframework.io/references/api-reference/endpoints/subscription-types/update-a-subscription-type)

### Timezone API

The `timezone` object provides methods for managing timezones.

#### getTimezones(config?: AxiosRequestConfig)

Lists all time zones.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ITimezone[]>>
-   **See**: [Time Zones](https://developers.jframework.io/references/api-reference/endpoints/time-zones)

### Tracking Activity API

The `trackingActivity` object provides methods for managing tracking activities.

#### getTrackingActivities(params?: IGetTrackingActivitiesParams, config?: AxiosRequestConfig)

Gets a list of tracking activities.

-   **Parameters**:
    -   `params`: The parameters for getting tracking activities (type: IGetTrackingActivitiesParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<ITrackingActivity>>
-   **See**: [Get Activities](https://developers.jframework.io/references/api-reference/endpoints/tracking-activities/get-activities)

#### getTrackingActivity(id: IdType, config?: AxiosRequestConfig)

Gets a tracking activity by the given ID.

-   **Parameters**:
    -   `id`: The ID of the activity (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ITrackingActivity>>
-   **See**: [Get a Activity](https://developers.jframework.io/references/api-reference/endpoints/tracking-activities/get-a-activity)

### Tracking Email API

The `trackingEmail` object provides methods for managing tracking emails.

#### getTrackingEmail(id: IdType, config?: AxiosRequestConfig)

Gets a tracking email by the given ID.

-   **Parameters**:
    -   `id`: The ID of the tracking email (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<ITrackingEmail>>
-   **See**: [Get a Tracking Email](https://developers.jframework.io/references/api-reference/endpoints/tracking-emails/get-a-tracking-email)

#### getTrackingEmails(params?: IGetTrackingEmailsParams, config?: AxiosRequestConfig)

Gets a list of tracking emails.

-   **Parameters**:
    -   `params`: The parameters for getting tracking emails (type: IGetTrackingEmailsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<ITrackingEmail>>
-   **See**: [Get Tracking Emails](https://developers.jframework.io/references/api-reference/endpoints/tracking-emails/get-tracking-emails)

### User API

The `user` object provides methods for managing users, including authentication, roles, devices, notifications, and passwordless login.

#### activateUser(id: IdType, config?: AxiosRequestConfig)

Sends an activation email to the user, setting their status to Active upon completion.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Activate a User](https://developers.jframework.io/references/api-reference/endpoints/users/activate-a-user)

#### addDeviceToUser(params: IAddDeviceToUserParams, config?: AxiosRequestConfig)

Adds a device to a user.

-   **Parameters**:
    -   `params`: The parameters for adding a device to a user (type: IAddDeviceToUserParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Add a Device to a User](https://developers.jframework.io/references/api-reference/endpoints/users/add-a-device-to-a-user)

#### applyReferralCodeToUser(id: IdType, params: IApplyReferralCodeParams, config?: AxiosRequestConfig)

Applies a referral code to a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `params`: The parameters for applying a referral code (type: IApplyReferralCodeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Applies the Referral Code to a User](https://developers.jframework.io/references/api-reference/endpoints/users/applies-the-referral-code-to-a-user)

#### assignRolesToUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig)

Assigns roles to a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `roleIds`: The role IDs to assign (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Assigns Roles to a User](https://developers.jframework.io/references/api-reference/endpoints/users/assigns-roles-to-a-user)

#### authenticationByApple(callbackURL: string, config?: AxiosRequestConfig)

Gets the Apple login URL.

-   **Parameters**:
    -   `callbackURL`: The callback URL for redirection after login (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Authentication by Apple](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-apple)

#### authenticationByGoogle(params: IAuthenticationByGoogleParams, config?: AxiosRequestConfig)

Gets the Google login URL.

-   **Parameters**:
    -   `params`: The parameters for authentication with Google (type: IAuthenticationByGoogleParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Authentication by Google](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-google)

#### authenticationByPhoneNumber(params: IAuthenticationByPhoneNumberParams, config?: AxiosRequestConfig)

Authenticates a user with phone number and password.

-   **Parameters**:
    -   `params`: The parameters for authentication by phone number (type: IAuthenticationByPhoneNumberParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAuthenticateResponse>>
-   **See**: [Authentication by Phone](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-phone)

#### authentication(params: IAuthenticationParams, config?: AxiosRequestConfig)

Authenticates a user with email and password.

-   **Parameters**:
    -   `params`: The parameters for authentication (type: IAuthenticationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAuthenticateResponse>>
-   **See**: [Authentication](https://developers.jframework.io/references/api-reference/endpoints/users/authentication)

#### changePassword(params: IChangePasswordParams, config?: AxiosRequestConfig)

Changes the user's password.

-   **Parameters**:
    -   `params`: The parameters for changing password (type: IChangePasswordParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Change Password](https://developers.jframework.io/references/api-reference/endpoints/users/change-password)

#### changePasswordForAnotherUser(params: IChangePasswordForAnotherUserParams, config?: AxiosRequestConfig)

Changes the password for another user.

-   **Parameters**:
    -   `params`: The parameters for changing password for another user (type: IChangePasswordForAnotherUserParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Change Password by User ID](https://developers.jframework.io/references/api-reference/endpoints/users/change-password-by-user-id)

#### checkReferralUserCode(code: string, config?: AxiosRequestConfig)

Checks if the referral code exists in the system.

-   **Parameters**:
    -   `code`: The referral code to check (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Check Referral User Code](https://developers.jframework.io/references/api-reference/endpoints/users/check-referral-user-code)

#### checkAuthKeyAvailable(params: ICheckAuthKeyAvailableParams, config?: AxiosRequestConfig)

Checks if the auth key is available.

-   **Parameters**:
    -   `params`: The parameters for checking auth key availability (type: ICheckAuthKeyAvailableParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Check Auth Key Available](https://developers.jframework.io/references/api-reference/endpoints/users/check-auth-key-available)

#### deactivateUser(id: IdType, config?: AxiosRequestConfig)

Deactivates a user, setting their status to Inactive after sending a deactivation email.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Deactivate a User](https://developers.jframework.io/references/api-reference/endpoints/users/deactivate-a-user)

#### deleteUser(id: IdType, config?: AxiosRequestConfig)

Deletes a user by the given ID.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete a User](https://developers.jframework.io/references/api-reference/endpoints/users/delete-a-user)

#### sendEmailToVerifyEmailAddressOfUser(id: IdType, returnURL: string, config?: AxiosRequestConfig)

Sends an email to verify the user's email address with a verification link.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `returnURL`: The return URL after verification (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Verify User Email - Send](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#post-api-v1-users-id-email-address-verify-send)

#### activeUserEmailAddress(token: string, config?: AxiosRequestConfig)

Activates the user's email address using the provided token.

-   **Parameters**:
    -   `token`: The token to activate the email address (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Verify User Email - Active](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#put-api-v1-users-email-address-active)

#### forgotPassword(params: IForgotPasswordParams, config?: AxiosRequestConfig)

Sends an email with a link to reset the user's password.

-   **Parameters**:
    -   `params`: The parameters for forgot password (type: IForgotPasswordParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Forgot Password](https://developers.jframework.io/references/api-reference/endpoints/users/forgot-password)

#### getUserByUsername(username: string, config?: AxiosRequestConfig)

Gets a user by username.

-   **Parameters**:
    -   `username`: The username of the user (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUser>>
-   **See**: [Get a User by Username](https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user-by-username)

#### getUser(id: IdType, config?: AxiosRequestConfig)

Gets a user by the given ID.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUser>>
-   **See**: [Get a User](https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user)

#### getAppIntegrationAuthenticateURLs(params: IGetAppIntegrationAuthenticateURLsParams, config?: AxiosRequestConfig)

Gets app integration authenticate URLs for the given parameters.

-   **Parameters**:
    -   `params`: The parameters for getting authenticate URLs (type: IGetAppIntegrationAuthenticateURLsParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAppIntegrationAuthenticateURL[]>>
-   **See**: [Get App Integration Authenticate URLs](https://developers.jframework.io/references/api-reference/endpoints/users/get-app-integration-authenticate-urls)

#### getDevicesFromUser(userId: IdType, config?: AxiosRequestConfig)

Gets devices associated with a user.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IDeviceOfUser[]>>
-   **See**: [Get Devices from a User](https://developers.jframework.io/references/api-reference/endpoints/users/get-devices-from-a-user)

#### getUsersByListIDs(ids: IdType[], config?: AxiosRequestConfig)

Gets users by a list of IDs (maximum 100).

-   **Parameters**:
    -   `ids`: The list of user IDs (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUser[]>>
-   **See**: [Get Users by List ID](https://developers.jframework.io/references/api-reference/endpoints/users/get-users#get-api-v1-users-by-list-id)

#### getUsers(params: IGetUsersParams, config?: AxiosRequestConfig)

Gets a list of users in the system, filtered by the provided parameters.

-   **Parameters**:
    -   `params`: The parameters for getting users (type: IGetUsersParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IUser>>
-   **See**: [Get Users](https://developers.jframework.io/references/api-reference/endpoints/users/get-users)

#### getRolesAssignedToUser(id: IdType, config?: AxiosRequestConfig)

Gets the roles assigned to a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IRole[]>>
-   **See**: [Gets Roles Assigned to the User](https://developers.jframework.io/references/api-reference/endpoints/users/gets-roles-assigned-to-the-user)

#### getCurrentUserLoggedIn(config?: AxiosRequestConfig)

Gets the current logged-in user.

-   **Parameters**:
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUser>>
-   **See**: [Gets the Current User Logged In](https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-current-user-logged-in)

#### getRefereeOfUser(id: IdType, config?: AxiosRequestConfig)

Gets the referees of a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBaseUser[]>>
-   **See**: [Gets the Referees of a User](https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-referees-of-a-user)

#### listAllBrandPartnersAuthenticate(userId: IdType, config?: AxiosRequestConfig)

Gets the connection authenticate brand status for a user.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IBrandPartnerAuthenticate>>
-   **See**: [List All Brand Partner Auth](https://developers.jframework.io/references/api-reference/endpoints/users/list-all-brand-partner-auth)

#### lockUser(id: IdType, config?: AxiosRequestConfig)

Locks a user, setting their status to Locked after sending a notification email.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Lock a User](https://developers.jframework.io/references/api-reference/endpoints/users/lock-a-user)

#### registerNewUser(params: IRegisterNewUserParams, config?: AxiosRequestConfig)

Registers a new user.

-   **Parameters**:
    -   `params`: The parameters for registering a new user (type: IRegisterNewUserParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUser>>
-   **See**: [Register a New User](https://developers.jframework.io/references/api-reference/endpoints/users/register-a-new-user)

#### removeDeviceFromUser(params: IRemoveDeviceFromUserParams, config?: AxiosRequestConfig)

Removes a device from a user.

-   **Parameters**:
    -   `params`: The parameters for removing a device from a user (type: IRemoveDeviceFromUserParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Remove a Device from a User](https://developers.jframework.io/references/api-reference/endpoints/users/remove-a-device-from-a-user)

#### resetPassword(params: IResetPasswordParams, config?: AxiosRequestConfig)

Resets the user's password using the reset password token.

-   **Parameters**:
    -   `params`: The parameters for resetting the password (type: IResetPasswordParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Reset Password](https://developers.jframework.io/references/api-reference/endpoints/users/reset-password)

#### revokeRolesFromUser(id: IdType, roleIds: IdType[], config?: AxiosRequestConfig)

Revokes roles from a user.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `roleIds`: The role IDs to revoke (type: IdType[]).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Revokes Roles from a User](https://developers.jframework.io/references/api-reference/endpoints/users/revokes-roles-from-a-user)

#### statisticUsers(params: IStatisticsUsersParams, config?: AxiosRequestConfig)

Provides statistics for users based on the given filter.

-   **Parameters**:
    -   `params`: The parameters for user statistics (type: IStatisticsUsersParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IStatisticsUsers[]>>
-   **See**: [Statistics Users](https://developers.jframework.io/references/api-reference/endpoints/users/statistics-users)

#### suspendUser(id: IdType, config?: AxiosRequestConfig)

Suspends a user, setting their status to Suspended after sending a notification email.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Suspend a User](https://developers.jframework.io/references/api-reference/endpoints/users/suspend-a-user)

#### unlockUser(id: IdType, config?: AxiosRequestConfig)

Unlocks a user with Locked or Active status blocked from unknown devices, setting them to Active.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Unlock a User](https://developers.jframework.io/references/api-reference/endpoints/users/unlock-a-user)

#### unsuspendUser(id: IdType, config?: AxiosRequestConfig)

Unsuspends a user, returning them to Active status.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Unsuspend a User](https://developers.jframework.io/references/api-reference/endpoints/users/unsuspend-a-user)

#### updateUser(id: IdType, params: IUpdateUserParams, config?: AxiosRequestConfig)

Updates a user by the given ID.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `params`: The parameters for updating a user (type: IUpdateUserParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUser>>
-   **See**: [Update a User](https://developers.jframework.io/references/api-reference/endpoints/users/update-a-user)

#### updateUserType(id: IdType, type: UserType, config?: AxiosRequestConfig)

Updates the user type for a specific user (only Super Admins can perform this).

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `type`: The user type (type: UserType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Update Type User](https://developers.jframework.io/references/api-reference/endpoints/users/update-type-user)

#### Configurations

##### createNewConfigurationForUser(userId: IdType, params: ICreateConfigurationOfUserParams, config?: AxiosRequestConfig)

Creates a new configuration for the user.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `params`: The parameters for creating a configuration (type: ICreateConfigurationOfUserParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IConfiguration>>
-   **See**: [POST /users/:id/configurations](https://developers.jframework.io/references/api-reference/endpoints/users/configurations#post-api-users-id-configurations)

##### getConfigurationsOfUser(userId: IdType, params?: IGetConfigurationsOfUserParams, config?: AxiosRequestConfig)

Gets the user's configurations.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `params`: The parameters for getting configurations (type: IGetConfigurationsOfUserParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IConfiguration[]>>
-   **See**: [Get Configurations](https://developers.jframework.io/references/api-reference/endpoints/users/configurations#get-api-v1-users-id-configurations)

##### deleteConfigurationOfUserByID(userId: IdType, configurationId: IdType, config?: AxiosRequestConfig)

Deletes a user's configuration by ID.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `configurationId`: The ID of the configuration (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Delete Configuration](https://developers.jframework.io/references/api-reference/endpoints/users/configurations#delete-api-v1-users-id-configurations-configurationid)

#### Email Address Verification

##### sendEmailToVerifyEmailAddressOfUser(id: IdType, returnURL: string, config?: AxiosRequestConfig)

Sends an email to verify the user's email address.

-   **Parameters**:
    -   `id`: The ID of the user (type: IdType).
    -   `returnURL`: The return URL after verification (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Verify User Email](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#post-api-v1-users-id-email-address-verify-send)

##### activeUserEmailAddress(token: string, config?: AxiosRequestConfig)

Activates the user's email address using the token.

-   **Parameters**:
    -   `token`: The token to activate the email address (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Active User Email Address](https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#put-api-v1-users-email-address-active)

#### Notification

##### getNotificationRelatedToUser(params: IGetNotificationRelatedToUserParams, config?: AxiosRequestConfig)

Gets a notification detail related to a user by user ID and notification ID.

-   **Parameters**:
    -   `params`: The parameters for getting a notification (type: IGetNotificationRelatedToUserParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IUserNotification>>
-   **See**: [Get a Notification](https://developers.jframework.io/references/api-reference/endpoints/users/notification/get-a-notification)

##### getNotificationsByUser(params: IGetNotificationsByUserParams, config?: AxiosRequestConfig)

Gets notifications by the user's ID.

-   **Parameters**:
    -   `params`: The parameters for getting notifications (type: IGetNotificationsByUserParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IUserNotification, { unreadCount: number }>>
-   **See**: [Get Notifications from a User](https://developers.jframework.io/references/api-reference/endpoints/users/notification/get-notifications-from-a-user)

##### markNotificationAsRead(params: IMarkNotificationAsReadParams, config?: AxiosRequestConfig)

Marks a notification as read for the user.

-   **Parameters**:
    -   `params`: The parameters for marking a notification as read (type: IMarkNotificationAsReadParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Mark as Read](https://developers.jframework.io/references/api-reference/endpoints/users/notification/mark-as-read)

##### markAllNotificationsAsRead(userId: IdType, config?: AxiosRequestConfig)

Marks all notifications as read for the user.

-   **Parameters**:
    -   `userId`: The ID of the user (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Mark All Notifications Read](https://developers.jframework.io/references/api-reference/endpoints/users/notification/mark-all-notifications-read)

#### Passwordless

##### Email

###### authenticationByMagicLink(params: IAuthenticationByMagicLinkParams, config?: AxiosRequestConfig)

Authenticates the user by sending a magic link to their email.

-   **Parameters**:
    -   `params`: The parameters for authentication by magic link (type: IAuthenticationByMagicLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Authentication by Email](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-email)

###### generateEmailOTPForAuthentication(params: IGenerateEmailAddressOTPForAuthenticationParams, config?: AxiosRequestConfig)

Generates an email OTP for authentication.

-   **Parameters**:
    -   `params`: The parameters for generating an email OTP (type: IGenerateEmailAddressOTPForAuthenticationParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Authentication by Email](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-email)

###### verifyEmailAddressOTPToAuthentication(params: IVerifyOTPCodeParams, config?: AxiosRequestConfig)

Verifies the OTP code sent to the user's email for authentication.

-   **Parameters**:
    -   `params`: The parameters for verifying the OTP code (type: IVerifyOTPCodeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAuthenticateResponse>>
-   **See**: [Verify Email OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/email/verify-email-otp-code)

##### Phone

###### generateSMSOTP(params: IGenerateSMSOTPParams, config?: AxiosRequestConfig)

Generates an SMS OTP for authentication to the user's phone number.

-   **Parameters**:
    -   `params`: The parameters for generating SMS OTP (type: IGenerateSMSOTPParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Authentication SMS OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/phone/authentication-sms-otp-code)

###### verifyPhoneOTPForAuthentication(params: IVerifyOTPCodeParams, config?: AxiosRequestConfig)

Verifies the OTP code sent to the user's phone number.

-   **Parameters**:
    -   `params`: The parameters for verifying SMS OTP code (type: IVerifyOTPCodeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAuthenticateResponse>>
-   **See**: [Verify SMS OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/phone/verify-sms-otp-code)

##### QR Code

###### generateNewQRCode(params?: IGenerateNewQRCodeParams, config?: AxiosRequestConfig)

Generates a new QR Code for pairing authentication between two devices.

-   **Parameters**:
    -   `params`: The parameters for generating a new QR code (type: IGenerateNewQRCodeParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IGenerateNewQRCodeForParingAuthenticationResponse>>
-   **See**: [Generate QR Code Auth](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/generate-qr-code-auth)

###### getCurrentStatusOfQRCode(qrCodeId: IdType, config?: AxiosRequestConfig)

Gets the current status of a QR Code pairing request (pending, approved, expired, rejected).

-   **Parameters**:
    -   `qrCodeId`: The unique identifier of the QR Code session (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IGetCodeStatusResponse>>
-   **See**: [Get QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code)

###### approveQRCode(qrCodeId: IdType, config?: AxiosRequestConfig)

Approves a QR Code pairing request.

-   **Parameters**:
    -   `qrCodeId`: The unique identifier of the QR Code session (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IGetCodeStatusResponse>>
-   **See**: [Get QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code)

###### loginUsingApprovedQRCode(qrCodeId: IdType, config?: AxiosRequestConfig)

Logs in using an approved QR Code pairing request (deprecated, use `authWithApprovedQRCode` instead).

-   **Parameters**:
    -   `qrCodeId`: The unique identifier of the approved QR Code session (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAuthenticateResponse>>
-   **See**: [Get QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/get-qr-code)

###### authWithApprovedQRCode(qrCodeId: IdType, config?: AxiosRequestConfig)

Authenticates using an approved QR Code pairing request.

-   **Parameters**:
    -   `qrCodeId`: The unique identifier of the approved QR Code session (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAuthenticateResponse>>
-   **See**: [Auth with QR Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/qrcode/auth-with-qr-code)

##### OTP Code

###### generateNewOTPCode(params?: IGenerateNewQRCodeParams, config?: AxiosRequestConfig)

Generates a new OTP Code for pairing authentication between two devices.

-   **Parameters**:
    -   `params`: The parameters for generating a new OTP code (type: IGenerateNewQRCodeParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IGenerateNewOTPForParingAuthenticationResponse>>
-   **See**: [Generate OTP Code Auth](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/generate-otp-code-auth)

###### getCurrentStatusOfOTPCode(otpCode: string, config?: AxiosRequestConfig)

Gets the current status of an OTP Code pairing request (pending, approved, expired, rejected).

-   **Parameters**:
    -   `otpCode`: The OTP code value (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IGetCodeStatusResponse>>
-   **See**: [Get OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/get-otp-code)

###### approveOTPCode(otpCode: string, config?: AxiosRequestConfig)

Approves an OTP Code pairing request.

-   **Parameters**:
    -   `otpCode`: The OTP code value (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IGetCodeStatusResponse>>
-   **See**: [Approve OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/approve-otp-code)

###### loginUsingApprovedOTPCode(otpCode: string, config?: AxiosRequestConfig)

Logs in using an approved OTP Code pairing request (deprecated, use `authWithApprovedOTPCode` instead).

-   **Parameters**:
    -   `otpCode`: The OTP code value (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAuthenticateResponse>>
-   **See**: [Login OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/login-otp-code)

###### authWithApprovedOTPCode(otpCode: string, config?: AxiosRequestConfig)

Authenticates using an approved OTP Code pairing request.

-   **Parameters**:
    -   `otpCode`: The OTP code value (type: string).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IAuthenticateResponse>>
-   **See**: [Auth with OTP Code](https://developers.jframework.io/references/api-reference/endpoints/users/passwordless/otp-code/auth-with-otp-code)

### Wallet API

The `wallet` object provides methods for managing wallets, including adding money, applying redeem codes, and conversions.

#### addMoneyToWalletWithCheckoutLink(params: IAddMoneyToWalletWithCheckoutLinkParams, config?: AxiosRequestConfig)

Generates a checkout link to add money to a wallet.

-   **Parameters**:
    -   `params`: The parameters for generating a checkout link (type: IAddMoneyToWalletWithCheckoutLinkParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<string>>
-   **See**: [Add Money to a Wallet with Checkout Link](https://developers.jframework.io/references/api-reference/endpoints/wallets/add-money-to-a-wallet-with-checkout-link)

#### applyRedeemCode(params: IApplyRedeemCodeParams, config?: AxiosRequestConfig)

Applies a redeem code to a wallet (valid redeem code and open wallet required).

-   **Parameters**:
    -   `params`: The parameters for applying a redeem code (type: IApplyRedeemCodeParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<unknown>>
-   **See**: [Apply Redeem](https://developers.jframework.io/references/api-reference/endpoints/wallets/apply-redeem)

#### createWalletDefault(currencyCode: string, testMode: boolean = false, config?: AxiosRequestConfig)

Creates a new wallet with the given currency code (default testMode: false).

-   **Parameters**:
    -   `currencyCode`: The currency code (ISO 4217) (type: string).
    -   `testMode`: The test mode flag (type: boolean, default: false).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IWallet>>
-   **See**: [Create a Wallet Default](https://developers.jframework.io/references/api-reference/endpoints/wallets/create-a-wallet-default)

#### convertWalletMoney(params: IConvertWalletMoneyParams, config?: AxiosRequestConfig)

Converts money in a wallet to another currency.

-   **Parameters**:
    -   `params`: The parameters for converting wallet money (type: IConvertWalletMoneyParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Convert Wallet Money](https://developers.jframework.io/references/api-reference/endpoints/wallets/convert-wallet-money)

#### closeWallet(id: IdType, config?: AxiosRequestConfig)

Closes a wallet by the given ID.

-   **Parameters**:
    -   `id`: The ID of the wallet (type: IdType).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<boolean>>
-   **See**: [Close Wallet](https://developers.jframework.io/references/api-reference/endpoints/wallets/close-wallet)

#### getWallets(params?: IGetWalletsParams, config?: AxiosRequestConfig)

Gets a list of wallets.

-   **Parameters**:
    -   `params`: The parameters for getting wallets (type: IGetWalletsParams, optional).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponse<IWallet[]>>
-   **See**: [Get Wallets](https://developers.jframework.io/references/api-reference/endpoints/wallets/get-wallets)

#### getWalletHistory(id: IdType, params: IGetWalletHistoriesParams, config?: AxiosRequestConfig)

Gets the wallet history for a given wallet ID.

-   **Parameters**:
    -   `id`: The ID of the wallet (type: IdType).
    -   `params`: The parameters for getting wallet histories (type: IGetWalletHistoriesParams).
    -   `config`: Optional Axios request configuration object.
-   **Returns**: Promise<HttpResponseList<IWalletHistory>>
-   **See**: [Get the Wallet Histories](https://developers.jframework.io/references/api-reference/endpoints/wallets/get-the-wallet-histories)
