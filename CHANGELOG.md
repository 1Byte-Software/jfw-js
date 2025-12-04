# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.8.0]

### Added

- Add `allowTracking` for jfwConfig for assign `X-Current-URL` to header.

### Fixed

- Fix endpoint of `getCurrentBrandLinkByType` api.

## [6.7.0]

### Fixed

- Fixed axios interface of JFWClient.
- Improve getIssuesByListId response type interface.
- Change params name of addNewUserToOrganization api.

### Removed

- Remove `IUploadedFileCDN` interface.

## [6.6.0]

### Added

- Add `BrandEmailAddressCode` enum.

### Fixed

- Fixed axios interface of JFWClient.
- Improve getIssuesByListId response type interface.
- Change params name of addNewUserToOrganization api.

### Removed

- Remove `IUploadedFileCDN` interface.

### Fixed

- Fix doc link of getBrandByURL api.

## [6.5.1]

### Added

- Export JFW constants.

### Fixed

- Fix doc link of getBrandByURL api.

## [6.5.0]

### Added

- Added filter for `getDevicesFromUser` api.

## [6.4.0]

### Added

- Added `getUtilityLinksForBrand` in `BrandAPI`.
- Added `countryCode` for `Device` interface.
- Added `UtilityLinks` for `BrandLinkType` enum.
- Added `code` field for `IBrandLink` interface.
- Added `UserPermission` and `DevicePermission` enums for support RBAC system.
- Added `lastAccessAt` for DeviceOfUser interface.

### Changed

- Changed `queryParams` of `applyLicenseToGivenUser` api to `bodyParams`.

## [6.3.0]

### Added

- Added `status` field for Package interfaces.
- Added `QuotaAPI`.

### Changed

- Changed `FeatureOfPackage` interfaces.

### Deprecated

- Deprecated `FeatureStatus` enum.

## [6.2.0]

### Changed

- Changed `FeatureOfPackage` interfaces.

### Removed

- Remove `type` field in Feature interfaces.

## [6.1.0]

### Added

- Add `getDevicesByListOfDeviceCodes` API into `DeviceAPI`.
- Add `getDeviceByCode` API into `DeviceAPI`.

## [6.0.0]

### Added

- Classification for APIs.

### Changed

- Update README.md.

## [5.7.1]

### Added

- Classification for APIs.

### Changed

- Update README.md.

## [5.7.0]

### Added

- Added `createAppIntegrationAuthenticationWithImportFileSettings` API.
- Added `createAppIntegrationReCAPTCHA` API.
- Added `deleteAppIntegrationReCAPTCHA` API.
- Added `getAppIntegrationReCAPTCHA` API.
- Added `getAppsIntegrationReCAPTCHAWithBrand` API.
- Added `updateAppIntegrationReCAPTCHA` API.
- Added `createAppIntegrationAnalytics` API.
- Added `deleteAppIntegrationAnalytics` API.
- Added `getAppIntegrationAnalytics` API.
- Added `getAppIntegrationAnalyticsWithBrand` API.
- Added `updateAppIntegrationAnalytics` API.
- Added `createAppIntegrationPushNotificationWithImportFileSettings` API.
- Added `getUsersFromDeviceCode` API.
- Added tsdoc for `getNotifications` API.
- Added tsdoc for `getNotification` API.
- Added tsdoc for `createNotification` API.
- Added `testPushNotificationDataMessage` API.
- Added tsdoc for `authenticationByPhoneNumber` API.
- Added tsdoc for `checkAuthKeyAvailable` API.
- Added callback params for `generateNewOTPForPairingAuthentication` API.
- Added `authWithApprovedOTPCode` API.
- Added `authWithApprovedQRCode` API.
- Added tsdoc for `createAd`, `deleteAd`, `getAdsClientView`, `getAds`, `getAd` and `updateAd` API.
- Added tsdoc for `activateAd` and `deactivateAd` API.

### Changed

- Changed `AppIntegrationType` enum.
- Changed to extend the IBaseObject interface for all objects that have ID and CreatedDate fields.
- Renamed the `ICDNFile` interface to `IUploadedFileCDN`.
- Renamed the `ICDN` interface to `IFileCDN`.
- Add params type for interface `IGetDevicesParams`.
- Changed `IInvoice` interface.
- Renamed params of `updateIssueCategory` API.
- Changed tsdoc for `getLanguages` API.
- Changed tsdoc for `activateLicense` API.
- Renamed `statisticsMonthlyLicenses` API to `statisticsLicensesMonthly`.
- Renamed `IStatisticMonthlyLicensesParams` interface to `IStatisticLicensesMonthlyParams`.
- Renamed `id` in params and path to `organizationId` in organization APIs.
- Renamed `createNotification` API to `createBroadcast`.
- Renamed `ICreateNotificationParams` interface to `ICreateBroadcastParams`.
- Renamed `id` in params and path to `packageId` in package APIs.
- Renamed `id` in params and path to `permissionId` in permission APIs.
- Renamed `id` in params and path to `roleId` in role APIs.
- Renamed `id` in params and path to `userId` in user APIs.
- Changed path of `authenticationByMagicLink` API.
- Renamed `getUsersByIdList` API to `getUsersByListIDs`.
- Renamed `getNotificationByGivenUserAndNotification` API to `getNotificationRelatedToUser`.
- Renamed `IGetNotificationsByGivenUserIdAndNotificationParams` interface to `IGetNotificationRelatedToUserParams`.
- Renamed `markNotificationAsReadByUserAndNotification` API to `markNotificationAsRead`.
- Renamed `IMarkNotificationAsReadByUserAndNotificationParams` interface to `IMarkNotificationAsReadParams`.
- Renamed `markAllNotificationsAsReadByUser` API to `markAllNotificationsAsRead`.
- Renamed `verifyEmailOTPForAuthentication` API to `verifyEmailAddressOTPToAuthentication`.
- Renamed `IUserAuthVerifyOTPParams` interface to `IVerifyOTPCodeParams`.
- Renamed `generatePhoneOTPForAuthentication` API to `generateSMSOTP`.
- Renamed `IGeneratePhoneOTPForAuthenticationParams` API to `IGenerateSMSOTPParams`.
- Renamed `verifyPhoneOTPForAuthentication` API to `verifySMSOTPCode`.
- Renamed `generateNewQRCodeForPairingAuthentication` API to `generateNewQRCode`.
- Renamed `getCurrentStatusOfQRCodeParingRequest` API to `getCurrentStatusOfQRCode`.
- Renamed `approveQRCodePairingRequest` API to `approveQRCode`.
- Renamed `loginUsingApprovedQRCodeParingRequest` API to `loginUsingApprovedQRCode`.
- Renamed `generateNewOTPForPairingAuthentication` API to `generateNewOTPCode`.
- Renamed `getCurrentStatusOfOTPParingRequest` API to `getCurrentStatusOfOTPCode`.
- Renamed `approveOTPPairingRequest` API to `approveOTPCode`.
- Renamed `loginUsingApprovedOTPParingRequest` API to `loginUsingApprovedOTPCode`.
- Renamed `getAdsWithClientView` API to `getAdsClientView`.

### Fixed

- Fixed description of `createAppIntegrationSMS` API.
- Fixed refer link for `updateAppIntegrationPaymentGateway` API.
- Fixed refer link for `testSendingEmailAddress` API.
- Fixed description of `deleteDomain` API.
- Fixed tsdoc of `generatePaymentCheckoutLink` API.
- Fixed tsdoc for `getSubscriptionTypes` API.
- Fixed tsdoc of `ICreateLicensesParams` interface.

### Deprecated

- Deprecated `getUsersFromDevice` API use `getUsersFromDeviceID` instead.
- Deprecated `loginUsingApprovedQRCodeParingRequest` API.
- Deprecated `loginUsingApprovedOTPParingRequest` API.

### Removed

- Removed `IUserExchange` interface.
- Removed tsdoc of all enums.
- Removed `statisticsPercentageLicensesUsed` API and `IStatisticsPercentageLicensesUsedParams` interface.
- Removed `authenticationByEmailOTP` API.
- Removed `changeDeviceCode` in jfwjs config.
- Removed `createDomain` & `updateDomain` APIs.
- Removed `activateAd` & `deactivateAd` APIs.

## [5.6.0]

### Added

- Add `changePasswordForAnotherUser` api.
- Add `approveQRCodePairingRequest` api.
- Add `generateNewOTPForPairingAuthentication` api.
- Add `getCurrentStatusOfOTPParingRequest` api.
- Add `loginUsingApprovedOTPParingRequest` api.
- Add `approveOTPPairingRequest` api.

## [5.5.0]

### Added

- Add ISegmentCondition interface.
- Add filter by ids for user and role object.
- Add generateNewQRCodeForPairingAuthentication, getCurrentStatusOfQRCodeParingRequest, loginUsingApprovedQRCodeParingRequest, generatePhoneOTPForAuthentication, verifyPhoneOTPForAuthentication, generateEmailOTPForAuthentication, getNotificationsByUser, getNotificationByGivenUserAndNotification, markNotificationAsReadByUserAndNotification, markAllNotificationsAsReadByUser apis.

### Changed

- Change interfaces, apis, constants of notification object.

### Deprecated

- Deprecate phoneNumber1 in User.

### Removed

- Remove emailSubject, emailBody in INotification interface.
-

## [5.4.0]

### Added

- Add new DomainType.
- Add authenticationByPhoneNumber api.

### Changed

- Change Feature and FeatureOfPackage interface.
- Change IssueStatus enum.
- Change updateIssue params api.

### Deprecated

- Deprecate phoneNumber1 in User.

## [5.3.0]

### Added

- Add IPaymentBase interface.
- Add uploadFile api.
- Add download invoice api.
- Add metadata field to create/update an ad.

### Changed

- Change IPayment extends IPaymentBase interface.
- Change IInvoice interface.
- Change package of IUser interface is nullable.
- Change targetURL type of IAd interface.

## [5.2.0]

### Added

- Add protocolURL to jfwjs config.

## [5.1.4]

### Added

- Add getPricesFromSubscriptionType api.
- Add SubscriptionTypeUnit enum.
- Add getUsersFromDevice api.
- Add filter params for getPackages api.

### Changed

- Change params of addDeviceToUser api.
- Change params of getDevices api.
- Change params of createLicenses api, support custom price with amount and currency when creating license.
- Change sortDataField in ISortable.
- Change name field to required in IPrice interface.

### Removed

- Remove `Deleted` enum in DeviceStatus.

### Deprecated

- Deprecate uploadFileCDN api. Use "uploadFile" instead.

## [Release]

## [5.1.3] - 2025-07-02

### Added

- Improved **Licenses API** following the documentation at [developers.jframework.io](https://developers.jframework.io).
- Improved **Device API** following the documentation at [developers.jframework.io](https://developers.jframework.io).
- Improved **Packages API** following the documentation at [developers.jframework.io](https://developers.jframework.io).
- Updated email address handling in **Brand APIs**.
