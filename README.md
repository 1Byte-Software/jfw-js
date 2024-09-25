## Getting started

### Installation

Before you start, make sure you have a fresh version of [Node.js](https://nodejs.org/en/) installed. The current Long Term Support (LTS) release is an ideal starting point.

```bash
# Run this command in your project root folder.
# yarn
yarn add jfw-js

# npm
npm install --save jfw-js
```

Then you can simply import or require the module.

```javascript
// ES module
import { AuthClient } from 'jfw-js';
const authClient = new AuthClient(/* configOptions */);
```

```javascript
// CommonJS
var AuthClient = require('jfw-js').AuthClient;
var authClient = new AuthClient(/* configOptions */);
```

## Usage guide

### Example Client

```javascript
const config = {
  mode: 'development',
  brandUrl: 'jframework.io',
};

const authClient = new AuthClient(config);
```

### Usage with Typescript

Type definitions are provided implicitly through the `types` entry in `package.json`. Types can also be referenced explicitly by importing them.

```typescript
import { AuthClient, JfwConfig } from 'jfw-js';

const config: JfwConfig = {
  mode: 'development',
  brandUrl: 'jframework.io',
};

const authClient: AuthClient = new AuthClient(config);
```

### Using API

You can easily utilize the API by importing it and then invoking its methods.

Example:

```typescript
import { ISignInPayload, signInAPI } from 'jfw-js';

const payload: ISignInPayload = {
  username: formValues.username,
  password: formValues.password,
};

const response = await signInAPI(payload);
```

## Configuration reference

### Configuration options

These options can be included when instantiating JFW Auth JS (`new AuthClient(config)`).

#### `brandUrl`

> :warning: This option is required

The url for your JFW brand.

#### `mode`

The default environment for your application is set to 'production'. To switch to a development environment, set the environment to 'development'.

### Methods

#### `setAuthKey()`

Upon logging in, you will receive an `authKey` from the server. Use the following method to set the `authKey` in the request header.

Example:

```javascript
authClient.setAuthKey(authKey);
```

#### `setHeaders()`

If you want to set headers for all APIs, use this method.

Example:

```javascript
const userHeaders = {
  UrlRequest: window.location.href,
};

authClient.setHeaders(userHeaders);
```

## API Reference

- [auth](https://developers.jframework.io/references/api-reference/authentication)
  - [signInUsingUsernameAPI](https://developers.jframework.io/references/api-reference/endpoints/users/authentication)
  - [signInUsingEmailAPI](https://developers.jframework.io/references/api-reference/endpoints/users/authentication-by-email)
  - [getGoogleLinkAPI](https://developers.jframework.io/guide/login-with-google#get-a-google-login-url-from-jfw)
- [brand](https://developers.jframework.io/references/api-reference/endpoints/brands)
  - [getListBrandEmailsAPI](https://developers.jframework.io/references/api-reference/endpoints/brands/get-emails)
  - [getBrandByUrlAPI](https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand#api-v1-brands-by-url-brandurl)
  - [getListBrandLinksAPI](https://developers.jframework.io/references/api-reference/endpoints/brands/get-links)
- [cdn](https://developers.jframework.io/references/api-reference/endpoints/cdn)
  - [cdnUploadFileAPI](https://developers.jframework.io/references/api-reference/endpoints/cdn)
- currency
  - [getListCurrenciesAPI]
  - [getListExchangeRatesAPI]
- [device](https://developers.jframework.io/references/api-reference/endpoints/devices)
  - [checkUserAccessAPI](https://developers.jframework.io/references/api-reference/endpoints/devices#api-v1-devices-user-access)
- [integration](https://developers.jframework.io/references/api-reference/endpoints/app-integrations)
  - [getPushNotificationsAPI](https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification#api-integrations-push-notification-1)
- [invoice](https://developers.jframework.io/references/api-reference/endpoints/invoices)
  - [getListInvoicesAPI](https://developers.jframework.io/references/api-reference/endpoints/invoices/get-invoices)
  - [exportInvoiceAPI](https://developers.jframework.io/references/api-reference/endpoints/invoices/export-a-invoice)
- [issue](https://developers.jframework.io/references/api-reference/endpoints/issues)
  - [createIssueAPI](https://developers.jframework.io/references/api-reference/endpoints/issues/create-an-issue)
  - [getListIssuesAPI](https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues)
  - [deleteIssueAPI](https://developers.jframework.io/references/api-reference/endpoints/issues/remove-an-issue)
  - [createIssueReactionAPI](https://developers.jframework.io/references/api-reference/endpoints/issues/create-an-issue-reaction)
  - [deleteIssueReactionAPI](https://developers.jframework.io/references/api-reference/endpoints/issues/remove-a-issue-reaction)
  - [getListIssuesByIdsAPI](https://developers.jframework.io/references/api-reference/endpoints/issues/get-issues-by-list-id)
  - [getListIssueChildrenAPI](https://developers.jframework.io/references/api-reference/endpoints/issues/get-children-issues)
  - [getListIssueCategoriesAPI](https://developers.jframework.io/references/api-reference/endpoints/issue-categories/get-issue-categories)
- [language](https://developers.jframework.io/references/api-reference/endpoints/languages)
  - [getListLanguagesAPI](https://developers.jframework.io/references/api-reference/endpoints/languages)
- [license](https://developers.jframework.io/references/api-reference/endpoints/licenses)
  - [checkValidLicenseAPI](https://developers.jframework.io/references/api-reference/endpoints/licenses/checks-a-license)
  - [applyLicenseAPI](https://developers.jframework.io/references/api-reference/endpoints/licenses/applies-a-license-to-the-logged-user)
- [notification](https://developers.jframework.io/references/api-reference/endpoints/notifications)
  - [getNotificationsAPI](https://developers.jframework.io/references/api-reference/endpoints/notifications/get-notifications-by-the-user-authorized)
  - [updateNotificationStatusAPI](https://developers.jframework.io/references/api-reference/endpoints/notifications/updates-status-of-the-notification)
  - [deleteNotificationsAPI](https://developers.jframework.io/references/api-reference/endpoints/notifications/delete-a-notification)
  - [updateAllNotificationsAPI](https://developers.jframework.io/references/api-reference/endpoints/notifications/updates-all-notification)
- [organization](https://developers.jframework.io/references/api-reference/endpoints/organizations)
  - [getListOrganizationsAPI]
  - [getOrganizationDetailAPI](https://developers.jframework.io/references/api-reference/endpoints/organizations/get-an-organization)
  - [getListOrganizationsByViewerAPI]
  - [createOrganizationUserAPI]
  - [updateOrganizationUserAPI](https://developers.jframework.io/references/api-reference/endpoints/organizations/update-a-user-status-in-an-organization)
  - [deleteOrganizationUserAPI](https://developers.jframework.io/references/api-reference/endpoints/organizations/remove-a-user-in-an-organization)
  - [getListUsersOfOrganizationAPI](https://developers.jframework.io/references/api-reference/endpoints/organizations/list-users-of-an-organization)
- [package](https://developers.jframework.io/references/api-reference/endpoints/packages)
  - [getListPackagesAPI](https://developers.jframework.io/references/api-reference/endpoints/packages)
- payment-provider
  - [getListPaymentProvidersAPI]
- [price](https://developers.jframework.io/references/api-reference/endpoints/prices)
  - [generateCheckoutLink](https://developers.jframework.io/references/api-reference/endpoints/prices#api-prices-id-direct-checkout-link)
- [role](https://developers.jframework.io/references/api-reference/endpoints/roles)
  - [getListRolesAPI](https://developers.jframework.io/references/api-reference/endpoints/roles#api-roles)
- [timezone](https://developers.jframework.io/references/api-reference/endpoints/time-zones)
  - [getListTimezonesAPI](https://developers.jframework.io/references/api-reference/endpoints/time-zones)
- [user](https://developers.jframework.io/references/api-reference/endpoints/users)
  - [getUserInfoAPI](https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-current-user-logged-in)
  - [getListUsersByIdsAPI]
  - [getUserInfoByIdAPI](https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user)
  - [updateUserAPI](https://developers.jframework.io/references/api-reference/endpoints/users/update-a-user)
  - [signUpAPI](https://developers.jframework.io/references/api-reference/endpoints/users/register-a-new-user)
  - [forgotPasswordAPI](https://developers.jframework.io/references/api-reference/endpoints/users/forgot-password)
  - [resetPasswordAPI]
  - [changePasswordAPI](https://developers.jframework.io/references/api-reference/endpoints/users/change-password)
  - [getRefereesAPI](https://developers.jframework.io/references/api-reference/endpoints/users/gets-the-referees-of-a-user)
  - [checkCodeValidAPI]
  - [applyCodeAPI](https://developers.jframework.io/references/api-reference/endpoints/users/applies-the-referral-code-to-a-user)
  - [getListUserConfigurationsAPI]
  - [createUserConfigurationsAPI]
  - [updateUserConfigurationsAPI]
- [wallet](https://developers.jframework.io/references/api-reference/endpoints/wallets)
  - [getWalletAPI](https://developers.jframework.io/references/api-reference/endpoints/wallets/get-wallets)
  - [getWalletHistoriesAPI](https://developers.jframework.io/references/api-reference/endpoints/wallets/get-the-wallet-histories)
  - [createWalletAPI](https://developers.jframework.io/references/api-reference/endpoints/wallets/create-a-wallet-default)
  - [exchangeWalletAPI](https://developers.jframework.io/references/api-reference/endpoints/wallets/convert-wallet-money)
  - [addMoneyAPI](https://developers.jframework.io/references/api-reference/endpoints/wallets/add-money-to-a-wallet-with-checkout-link)
  - [closeWalletAPI](https://developers.jframework.io/references/api-reference/endpoints/wallets/close-wallet)
  - [getListEarnEventsAPI]
  - [applyRedeemAPI](https://developers.jframework.io/references/api-reference/endpoints/wallets/apply-redeem)
