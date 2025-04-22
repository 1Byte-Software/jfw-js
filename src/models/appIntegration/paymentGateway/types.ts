import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationPaymentGatewayStatus } from './constants';

export interface IAppIntegrationPaymentGateway {
    id: IdType;
    appIntegration: IAppIntegration;
    name: string;
    ipnListenerLink: string;
    cancelLinkWithoutLogin?: string | null;
    cancelLink: string;
    returnLink: string;
    publicKey: string;
    privateKey: string;
    description?: string | null;
    notes?: string | null;
    isDefault: boolean;
    testMode?: boolean | null;
    status: AppIntegrationPaymentGatewayStatus;
    createdDate: DateType;
}

export interface IAppIntegrationPaymentGatewayProduct {
    /**
     * The name of the item.
     */
    name?: string | null;

    /**
     * The description of the item.
     */
    description?: string | null;

    /**
     * The currency code. PayPal supports the following currencies for use:
     * AUD, BRL, CAD, CNY, CZK, DKK, EUR, HKD, HUF, ILS, JPY, MYR, MXN,
     * TWD, NZD, NOK, PHP, PLN, GBP, SGD, SEK, CHF, THB, USD.
     */
    currencyCode?: string | null;

    /**
     * The code of the item.
     */
    code?: string | null;

    /**
     * The quantity of the item. By default is 1.
     */
    quantity: number;

    /**
     * The amount of the item.
     */
    amount: number;

    /**
     * The return url.
     */
    returnUrl?: string | null;

    /**
     * The cancel url.
     */
    cancelUrl?: string | null;
}

//#region API types
export interface IGetAppIntegrationPaymentGatewaysWithBrandParams {}

export interface ICreateAppIntegrationPaymentGatewayData {
    /**
     * The app integration id of the payment gateway.
     */
    appIntegrationId: string;

    /**
     * The name of the payment gateway integration.
     */
    name?: string | null;

    /**
     * The IPN (Instant Payment Notification) listener link of the payment gateway.
     * This endpoint will receive payment notifications from the gateway.
     * For PayPal: This is your IPN listener URL for payment status updates.
     * For Stripe: This would be your webhook URL for payment events.
     */
    ipnListenerLink: string;

    /**
     * The payment link of the payment gateway. This is used when unauthenticated users cancel payment and need to be redirected.
     * For PayPal/Stripe: Fallback URL when session is lost or user isn't logged in.
     */
    cancelLinkWithoutLogin?: string | null;

    /**
     * The cancel link of the payment gateway. Users will be redirected here when they cancel a payment.
     * For PayPal: Set as the cancel_url in PayPal checkout.
     * For Stripe: Used as cancel_url in Stripe Checkout sessions.
     */
    cancelLink: string;

    /**
     * The return link of the payment gateway. Users will be redirected here after successful payment.
     * For PayPal: Set as the return_url in PayPal checkout.
     * For Stripe: Used as success_url in Stripe Checkout sessions.
     */
    returnLink: string;

    /**
     * The public key of the payment gateway.
     * For PayPal: Client ID from your PayPal app credentials.
     * For Stripe: Publishable key from your Stripe dashboard.
     */
    publicKey: string;

    /**
     * The private key of the payment gateway.
     * For PayPal: Secret from your PayPal app credentials.
     * For Stripe: Secret key from your Stripe dashboard.
     */
    privateKey: string;

    /**
     * Description of the payment gateway.
     * For PayPal/Stripe: Optional description that appears in your dashboard.
     */
    description?: string | null;

    /**
     * The notes of the payment gateway.
     * For PayPal/Stripe: Internal notes about this integration.
     */
    notes?: string | null;

    /**
     * Flag to indicate if the Payment gateway integration is the default. By default, it is set to false.
     */
    isDefault?: boolean | null;

    /**
     * Available options: 0 - Inactive, 1 - Active
     */
    status?: AppIntegrationPaymentGatewayStatus;

    /**
     * Flag to indicate if the payment gateway is in test mode.
     * When true, transactions will use the provider's sandbox environment.
     * For PayPal: Uses https://api.sandbox.paypal.com instead of production.
     * For Stripe: Uses test mode keys and endpoints.
     * Default is false (production mode).
     */
    testMode?: boolean | null;
}

export type IUpdateAppIntegrationPaymentGatewayData =
    ICreateAppIntegrationPaymentGatewayData;

export interface ITestingCreateCheckoutLinkData {
    /**
     * This class represents the Checkout Payment Request PayPal Data Transfer Object.
     */
    product: IAppIntegrationPaymentGatewayProduct;

    /**
     * The public key of the payment gateway used for authentication.
     * For PayPal: Client ID from your PayPal app credentials (used with OAuth 2.0).
     * For Stripe: Publishable key from your Stripe dashboard (used client-side).
     */
    publicKey: string;

    /**
     * The private key of the payment gateway used for secure server-side operations.
     * For PayPal: Secret from your PayPal app credentials.
     * For Stripe: Secret key from your Stripe dashboard (used for server-side API calls).
     * Note: This should never be exposed to client-side code.
     */
    privateKey: string;

    /**
     * The display name shown to customers during checkout.
     * For PayPal: Appears as the merchant name during PayPal checkout flow.
     * For Stripe: Displayed as the company name on Stripe Checkout pages.
     * Maximum length is typically 127 characters for most payment providers.
     */
    displayName: string;
}

//#endregion
