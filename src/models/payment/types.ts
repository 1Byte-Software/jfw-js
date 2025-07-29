import { ICreatedDateFilter, IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { IPackage } from '../packages';
import { IPrice } from '../price';
import { IBaseUser } from '../user';
import { PaymentStatus } from './constants';

/**
 * This class represents the payment base data transfer object.
 */
export interface IPaymentBase {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType;

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
}

/**
 * This class represents the payment data transfer object.
 */
export interface IPayment extends IPaymentBase {
    /**
     * This class is used to return user information to client.
     */
    user?: IBaseUser;

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

    /**
     * The payment date.
     *
     * @remarks date-time
     */
    paymentDate?: DateType;
}

export interface IPaymentDashboard {
    totalSells: number;
    totalRevenue: number;
    dailySells: number;
    dailyRevenue: number;
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

//#endregion
