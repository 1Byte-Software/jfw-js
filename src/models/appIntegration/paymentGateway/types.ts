import { DateType, IBaseObject, IdType } from '../../base';
import { IAppIntegration } from '../types';
import {
    AppIntegrationPaymentGatewayStatus,
    PaymentGatewayProductCurrencyCode,
} from './constants';

export interface IAppIntegrationPaymentGateway extends IBaseObject {
    /**
     * The app integration dto.
     */
    appIntegration: IAppIntegration;

    /**
     * The name of the app integration
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The IPN (Instant Payment Notification) listener link of the payment gateway.
     * This endpoint will receive payment notifications from the gateway.
     * For PayPal: This is your IPN listener URL for payment status updates.
     * For Stripe: This would be your webhook URL for payment events.
     *
     * @remarks min: 1
     */
    ipnListenerLink: string;

    /**
     * The payment link of the payment gateway. This is used when unauthenticated users cancel payment and need to be redirected. For PayPal/Stripe: Fallback URL when session is lost or user isn't logged in.
     *
     * @remarks uri - min: 1
     */
    cancelLinkWithoutLogin: string;

    /**
     * The cancel link of the payment gateway. Users will be redirected here when they cancel a payment. For PayPal: Set as the cancel_url in PayPal checkout. For Stripe: Used as cancel_url in Stripe Checkout sessions.
     *
     * @remarks uri - min: 1
     */
    cancelLink: string;

    /**
     * The return link of the payment gateway. Users will be redirected here after successful payment. For PayPal: Set as the return_url in PayPal checkout. For Stripe: Used as success_url in Stripe Checkout sessions.
     *
     * @remarks uri - min: 1
     */
    returnLink: string;

    /**
     * The public key of the payment gateway. For PayPal: Client ID from your PayPal app credentials. For Stripe: Publishable key from your Stripe dashboard.
     *
     * @remarks min: 1
     */
    publicKey: string;

    /**
     * The private key of the payment gateway. For PayPal: Secret from your PayPal app credentials. For Stripe: Secret key from your Stripe dashboard.
     *
     * @remarks min: 1
     */
    privateKey: string;

    /**
     * Description of the payment gateway. For PayPal/Stripe: Optional description that appears in your dashboard.
     */
    description?: string | null;

    /**
     * The notes of the payment gateway. For PayPal/Stripe: Internal notes about this integration.
     */
    notes?: string | null;

    /**
     * Flag to indicate if the payment gateway is in test mode. When true, transactions will use the provider's sandbox environment. For PayPal: Uses https://api.sandbox.paypal.com instead of production. For Stripe: Uses test mode keys and endpoints.
     *
     * @defaultValue `false` (production mode)
     */
    testMode: boolean;

    /**
     * Flag to indicate if the payment gateway integration is the default.
     */
    isDefault: boolean;

    /**
     * The status of the payment gateway integration.
     *
     * @remarks enum
     */
    status: AppIntegrationPaymentGatewayStatus;
}

/**
 * This class represents the Checkout Payment Request PayPal Data Transfer Object.
 */
export interface IAppIntegrationPaymentGatewayProduct {
    /**
     * The name of the item.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the item.
     */
    description?: string | null;

    /**
     * The currency code. PayPal supports the following currencies for use: AUD, BRL, CAD, CNY, CZK, DKK, EUR, HKD, HUF, ILS, JPY, MYR, MXN, TWD, NZD, NOK, PHP, PLN, GBP, SGD, SEK, CHF, THB, USD.
     *
     * @remarks min: 1
     */
    currencyCode: PaymentGatewayProductCurrencyCode;

    /**
     * The code of the item.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The quantity of the item. By default is 1.
     *
     * @remarks int32
     */
    quantity: number;

    /**
     * The amount of the item.
     *
     * @remarks double
     */
    amount: number;

    /**
     * The tax amount.
     *
     * @remarks double
     */
    tax?: number;

    /**
     * The shipping amount.
     *
     * @remarks double
     */
    shipping?: number;

    /**
     * The return URL. This is the URL that the user will be redirected to after the payment is successful.
     *
     * @remarks uri - min: 1
     */
    returnURL: string;

    /**
     * The cancel URL. This is the URL that the user will be redirected to after the payment is cancelled.
     *
     * @remarks uri - min: 1
     */
    cancelURL: string;
}

//#region API types
/**
 * The request data transfer object for the payment gateway integration. This DTO is used when creating or updating an integration with payment providers like PayPal and Stripe.
 */
export interface ICreateAppIntegrationPaymentGatewayParams {
    /**
     * The app integration id of the payment gateway.
     *
     * @remarks min: 1
     */
    appIntegrationId: string;

    /**
     * The name of the payment gateway integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The IPN (Instant Payment Notification) listener link of the payment gateway. This endpoint will receive payment notifications from the gateway. For PayPal: This is your IPN listener URL for payment status updates. For Stripe: This would be your webhook URL for payment events.
     *
     * @remarks uri - min: 1
     */
    ipnListenerLink: string;

    /**
     * The payment link of the payment gateway. This is used when unauthenticated users cancel payment and need to be redirected. For PayPal/Stripe: Fallback URL when session is lost or user isn't logged in.
     *
     * @remarks uri
     */
    cancelLinkWithoutLogin?: string | null;

    /**
     * The cancel link of the payment gateway. Users will be redirected here when they cancel a payment. For PayPal: Set as the cancel_url in PayPal checkout. For Stripe: Used as cancel_url in Stripe Checkout sessions.
     *
     * @remarks uri - min: 1
     */
    cancelLink: string;

    /**
     * The return link of the payment gateway. Users will be redirected here after successful payment. For PayPal: Set as the return_url in PayPal checkout. For Stripe: Used as success_url in Stripe Checkout sessions.
     *
     * @remarks uri - min: 1
     */
    returnLink: string;

    /**
     * The public key of the payment gateway. For PayPal: Client ID from your PayPal app credentials. For Stripe: Publishable key from your Stripe dashboard.
     *
     * @remarks min: 1
     */
    publicKey: string;

    /**
     * The private key of the payment gateway. For PayPal: Secret from your PayPal app credentials. For Stripe: Secret key from your Stripe dashboard.
     *
     * @remarks min: 1
     */
    privateKey: string;

    /**
     * Description of the payment gateway. For PayPal/Stripe: Optional description that appears in your dashboard.
     */
    description?: string | null;

    /**
     * The notes of the payment gateway. For PayPal/Stripe: Internal notes about this integration.
     */
    notes?: string | null;

    /**
     * Flag to indicate if the payment gateway is in test mode. When true, transactions will use the provider's sandbox environment. For PayPal: Uses https://api.sandbox.paypal.com instead of production. For Stripe: Uses test mode keys and endpoints.
     *
     * @defaultValue `false`
     */
    testMode?: boolean | null;

    /**
     * Flag to indicate if the payment gateway integration is the default.
     */
    isDefault?: boolean;

    /**
     * The status of the payment gateway integration.
     *
     * @remarks enum
     */
    status?: AppIntegrationPaymentGatewayStatus;
}

/**
 * The request data transfer object for the payment gateway integration. This DTO is used when creating or updating an integration with payment providers like PayPal and Stripe.
 */
export interface IUpdateAppIntegrationPaymentGatewayParams
    extends ICreateAppIntegrationPaymentGatewayParams {
    /**
     * The app integration payment gateway id.
     */
    id: IdType;
}

export interface ITestCreatingCheckoutLinkParams {
    /**
     * This class represents the Checkout Payment Request PayPal Data Transfer Object.
     *
     * @remarks object
     */
    product: IAppIntegrationPaymentGatewayProduct;

    /**
     * The public key of the payment gateway used for authentication.
     * For PayPal: Client ID from your PayPal app credentials (used with OAuth 2.0).
     * For Stripe: Publishable key from your Stripe dashboard (used client-side).
     *
     * @remarks min: 1
     */
    publicKey: string;

    /**
     * The private key of the payment gateway used for secure server-side operations.
     * For PayPal: Secret from your PayPal app credentials.
     * For Stripe: Secret key from your Stripe dashboard (used for server-side API calls).
     * Note: This should never be exposed to client-side code.
     *
     * @remarks min: 1
     */
    privateKey: string;

    /**
     * The display name shown to customers during checkout.
     * For PayPal: Appears as the merchant name during PayPal checkout flow.
     * For Stripe: Displayed as the company name on Stripe Checkout pages.
     * Maximum length is typically 127 characters for most payment providers.
     *
     * @remarks min: 1 - max: 127
     */
    displayName: string;
}

//#endregion
