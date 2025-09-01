import { Axios } from 'axios';
import { ConstantAPI, IssueCategoryAPI } from '../../models';
import { AdAPI } from '../../models/ad/api';
import { AppIntegrationAPI } from '../../models/appIntegration/api';
import { BrandAPI } from '../../models/brand/api';
import { CDNAPI } from '../../models/cdn/api';
import { CityAPI } from '../../models/city/api';
import { CommissionRateAPI } from '../../models/commissionRate/api';
import { ConfigurationAPI } from '../../models/configuration/api';
import { CountryAPI } from '../../models/country/api';
import { CouponAPI } from '../../models/coupon/api';
import { CryptographyAPI } from '../../models/cryptography/api';
import { CurrencyAPI } from '../../models/currency/api';
import { DeviceAPI } from '../../models/device/api';
import { DomainAPI } from '../../models/domain/api';
import { EmailTemplateAPI } from '../../models/emailTemplate/api';
import { EventAPI } from '../../models/event/api';
import { ExchangeRateAPI } from '../../models/exchangeRate/api';
import { FeatureAPI } from '../../models/feature/api';
import { InvoiceAPI } from '../../models/invoice/api';
import { IssueAPI } from '../../models/issue/api';
import { LanguageAPI } from '../../models/language/api';
import { LicenseAPI } from '../../models/license/api';
import { MFAAPI } from '../../models/mfa/api';
import { NotificationAPI } from '../../models/notification/api';
import { OrganizationAPI } from '../../models/organization/api';
import { PackageAPI } from '../../models/package/api';
import { PaymentAPI } from '../../models/payment/api';
import { PermissionAPI } from '../../models/permission/api';
import { PriceAPI } from '../../models/price/api';
import { ResourceTypeAPI } from '../../models/resourceType/api';
import { RoleAPI } from '../../models/role/api';
import { StateAPI } from '../../models/state/api';
import { SubscriptionTypeAPI } from '../../models/subscriptionType/api';
import { TimezoneAPI } from '../../models/timezone/api';
import { TrackingActivityAPI } from '../../models/trackingActivity/api';
import { TrackingEmailAPI } from '../../models/trackingEmail/api';
import { UserAPI } from '../../models/user/api';
import { WalletAPI } from '../../models/wallet/api';

export type ApiClient = ReturnType<typeof createBackendApiClient>;

export function createBackendApiClient(jfwAxios: Axios) {
    return {
        ad: new AdAPI(jfwAxios),
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
        resourceType: new ResourceTypeAPI(jfwAxios),
        role: new RoleAPI(jfwAxios),
        state: new StateAPI(jfwAxios),
        subscriptionType: new SubscriptionTypeAPI(jfwAxios),
        timezone: new TimezoneAPI(jfwAxios),
        trackingActivity: new TrackingActivityAPI(jfwAxios),
        trackingEmail: new TrackingEmailAPI(jfwAxios),
        user: new UserAPI(jfwAxios),
        wallet: new WalletAPI(jfwAxios),
    };
}
