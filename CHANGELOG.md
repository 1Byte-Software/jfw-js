# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.2.0]

### Added

-   Add protocolURL to jfwjs config.

## [5.1.4]

### Added

-   Add getPricesFromSubscriptionType api.
-   Add SubscriptionTypeUnit enum.
-   Add getUsersFromDevice api.
-   Add filter params for getPackages api.

### Changed

-   Change params of addDeviceToUser api.
-   Change params of getDevices api.
-   Change params of createLicenses api, support custom price with amount and currency when creating license.
-   Change sortDataField in ISortable.
-   Change name field to required in IPrice interface.

### Removed

-   Remove `Deleted` enum in DeviceStatus. 

## [Release]

## [5.1.3] - 2025-07-02

### Added

-   Improved **Licenses API** following the documentation at [developers.jframework.io](https://developers.jframework.io).
-   Improved **Device API** following the documentation at [developers.jframework.io](https://developers.jframework.io).
-   Improved **Packages API** following the documentation at [developers.jframework.io](https://developers.jframework.io).
-   Updated email address handling in **Brand APIs**.
