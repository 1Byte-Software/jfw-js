import { Axios } from 'axios';
import { ConstantAPI, IssueCategoryAPI } from '../../features';
import { AdAPI } from '../../features/ad/api';
import { AnalyticAPI } from '../../features/analytic/api';
import { AppIntegrationAPI } from '../../features/appIntegration/api';
import { BrandAPI } from '../../features/brand/api';
import { CDNAPI } from '../../features/cdn/api';
import { CityAPI } from '../../features/city/api';
import { CommissionRateAPI } from '../../features/commissionRate/api';
import { ConfigurationAPI } from '../../features/configuration/api';
import { CountryAPI } from '../../features/country/api';
import { CouponAPI } from '../../features/coupon/api';
import { CryptographyAPI } from '../../features/cryptography/api';
import { CurrencyAPI } from '../../features/currency/api';
import { DeviceAPI } from '../../features/device/api';
import { DomainAPI } from '../../features/domain/api';
import { EmailTemplateAPI } from '../../features/emailTemplate/api';
import { EventAPI } from '../../features/event/api';
import { ExchangeRateAPI } from '../../features/exchangeRate/api';
import { FeatureAPI } from '../../features/feature/api';
import { InvoiceAPI } from '../../features/invoice/api';
import { IssueAPI } from '../../features/issue/api';
import { LanguageAPI } from '../../features/language/api';
import { LicenseAPI } from '../../features/license/api';
import { MFAAPI } from '../../features/mfa/api';
import { NotificationAPI } from '../../features/notification/api';
import { OrganizationAPI } from '../../features/organization/api';
import { PackageAPI } from '../../features/package/api';
import { PaymentAPI } from '../../features/payment/api';
import { PermissionAPI } from '../../features/permission/api';
import { PriceAPI } from '../../features/price/api';
import { QuotaUsageAPI } from '../../features/quotaUsage/api';
import { ResourceTypeAPI } from '../../features/resourceType/api';
import { RoleAPI } from '../../features/role/api';
import { StateAPI } from '../../features/state/api';
import { SubscriptionTypeAPI } from '../../features/subscriptionType/api';
import { TimezoneAPI } from '../../features/timezone/api';
import { TrackingActivityAPI } from '../../features/trackingActivity/api';
import { TrackingEmailAPI } from '../../features/trackingEmail/api';
import { UserClient } from '../../features/user/client';
import { WalletAPI } from '../../features/wallet/api';
export * from './constants';
export type ApiClient = ReturnType<typeof createBackendApiClient>;

/**
 * Creates a strongly-typed API client that aggregates
 * all domain-specific API modules into a single object.
 *
 * Each module is initialized with the provided Axios instance (`jfwAxios`),
 * which allows them to share the same configuration, interceptors, and headers.
 *
 * @param jfwAxios - The Axios instance used for making HTTP requests.
 * @returns An object containing grouped API clients for different domains.
 *
 * @example
 * ```ts
 * const client = createBackendApiClient(jfwAxios);
 * const users = await client.user.getUsers();
 * ```
 */
export function createBackendApiClient(jfwAxios: Axios) {
    return {
        ad: new AdAPI(jfwAxios),
        analytic: new AnalyticAPI(jfwAxios),
        appIntegration: new AppIntegrationAPI(jfwAxios),
        brand: new BrandAPI(jfwAxios),
        cdn: new CDNAPI(jfwAxios),
        city: new CityAPI(jfwAxios),
        commissionRate: new CommissionRateAPI(jfwAxios),
        configuration: new ConfigurationAPI(jfwAxios),
        constant: new ConstantAPI(jfwAxios),
        country: new CountryAPI(jfwAxios),
        coupon: new CouponAPI(jfwAxios),
        cryptography: new CryptographyAPI(jfwAxios),
        currency: new CurrencyAPI(jfwAxios),
        device: new DeviceAPI(jfwAxios),
        domain: new DomainAPI(jfwAxios),
        emailTemplate: new EmailTemplateAPI(jfwAxios),
        event: new EventAPI(jfwAxios),
        exchangeRate: new ExchangeRateAPI(jfwAxios),
        feature: new FeatureAPI(jfwAxios),
        invoice: new InvoiceAPI(jfwAxios),
        issue: new IssueAPI(jfwAxios),
        issueCategory: new IssueCategoryAPI(jfwAxios),
        language: new LanguageAPI(jfwAxios),
        license: new LicenseAPI(jfwAxios),
        mfa: new MFAAPI(jfwAxios),
        notification: new NotificationAPI(jfwAxios),
        organization: new OrganizationAPI(jfwAxios),
        package: new PackageAPI(jfwAxios),
        payment: new PaymentAPI(jfwAxios),
        permission: new PermissionAPI(jfwAxios),
        price: new PriceAPI(jfwAxios),
        quotaUsage: new QuotaUsageAPI(jfwAxios),
        resourceType: new ResourceTypeAPI(jfwAxios),
        role: new RoleAPI(jfwAxios),
        state: new StateAPI(jfwAxios),
        subscriptionType: new SubscriptionTypeAPI(jfwAxios),
        timezone: new TimezoneAPI(jfwAxios),
        trackingActivity: new TrackingActivityAPI(jfwAxios),
        trackingEmail: new TrackingEmailAPI(jfwAxios),
        user: new UserClient(jfwAxios),
        wallet: new WalletAPI(jfwAxios),
    };
}
