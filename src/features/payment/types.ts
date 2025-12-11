import { ICreatedDateFilter, IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';
import { IPackage } from '../package';
import { IPrice } from '../price';
import { IUserBase } from '../user';
import { PaymentStatus } from './constants';

/**
 * This class represents the payment base data transfer object.
 */
export interface IPaymentBase extends IBaseObject {
    /**
     * The payment code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The payment name.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The payment amount gross.
     *
     * @remarks double
     */
    amountGross: number;

    /**
     * The payment amount fee.
     *
     * @remarks double
     */
    amountFee: number;

    /**
     * The payment amount net.
     *
     * @remarks double
     */
    amountNet: number;

    /**
     * The commission amount.
     *
     * @remarks double
     */
    commission?: number | null;

    /**
     * The currency code.
     *
     * @remarks min: 1
     */
    currencyCode: string;

    /**
     * The description.
     */
    description?: string | null;

    /**
     * The invoice number.
     */
    invoiceNo?: string | null;

    /**
     * The payment type.
     */
    paymentType?: string | null;

    /**
     * The notes.
     */
    notes?: string | null;

    /**
     * The status of the payment.
     *
     * @remarks enum
     */
    status: PaymentStatus;

    /**
     * The payment date.
     *
     * @remarks date-time
     */
    paymentDate?: DateType | null;
}

/**
 * This class represents the payment data transfer object.
 */
export interface IPayment extends IPaymentBase {
    /**
     * This class is used to return user information to client.
     */
    user?: IUserBase;

    /**
     * This class presents the Price Data Transfer Object.
     */
    price?: IPrice;

    /**
     * The Package Data Transfer Object.
     */
    package?: IPackage;

    /**
     * The shared amount. This value is used for shared payments.
     *
     * @remarks double
     */
    sharedAmount?: number | null;

    /**
     * The amount.
     *
     * @remarks double
     */
    amount: number;
}

export interface IPaymentDashboard {
    totalSells: number;
    totalRevenue: number;
    dailySells: number;
    dailyRevenue: number;
}

export interface IPaymentGenerateCheckoutLinkResponse {
    /**
     * The checkout link to pay the payment.
     *
     * @remarks min: 1
     */
    checkoutLink: string;
}

//#region API types
/**
 * Parameters for getting payments
 */
export interface IGetPaymentsParams
    extends IPageable,
        ISortable,
        ICreatedDateFilter {
    /**
     * Filter by the app integration payment gateway id.
     */
    appIntegrationPaymentGatewayId?: string;

    /**
     * The price id.
     */
    priceId?: string;

    /**
     * The payment request code.
     */
    code?: string;

    /**
     * The id of the user.
     */
    userId?: IdType;

    /**
     * The reference user code.
     */
    referralUserCode?: string;

    /**
     * The status of the payment request.
     *
     * @remarks enum
     */
    status?: PaymentStatus | null;

    /**
     * The payment request type.
     */
    paymentType?: string;

    /**
     * The currency code.
     */
    currencyCode?: string;

    /**
     * The keywords to filter.
     */
    keywords?: string;

    /**
     * The payment request amount.
     */
    testMode?: boolean;
}

export interface IGeneratePaymentCheckoutLinkParams {
    /**
     * The id of the payment.
     */
    id: IdType;

    /**
     * (Optional) The identifier of the specific app integration payment gateway to use for generating the checkout link. If provided, this app integration will be used to handle the payment.
     * If null, the system will use the default payment configuration associated with the payment.
     */
    appIntegrationId?: IdType;
}

//#endregion
