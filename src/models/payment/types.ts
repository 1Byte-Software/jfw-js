import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { IPackage } from '../packages';
import { IPrice } from '../price';
import { IUser } from '../user';
import { PaymentStatus } from './constants';

/**
 * #JFW-313
 */
export interface IPayment {
    id: IdType;
    price: IPrice | null;
    package: IPackage | null;
    sharedAmount: number | null;
    amount: number;
    paymentDate: DateType | null;
    user: IUser;
    code: string;
    name: string;

    amountGross: number;
    amountFee: number;
    amountNet: number;
    commission: number;
    currencyCode: string;
    description: string;
    invoiceNo: string;
    paymentType: string;
    notes: string;
    status: PaymentStatus;
    createdDate: DateType;
}

export interface IPaymentDashboard {
    totalSells: number;
    totalRevenue: number;
    dailySells: number;
    dailyRevenue: number;
}

export interface IMerchant {
    id: IdType;
    type: number;
    code: string;
    name: string;
    website: string;
}

//#region API types
/**
 * Parameters for getting payments
 */
export interface IGetPaymentsParams extends IPageable, ISortable {
    /**
     * Filter by the app integration payment gateway id
     */
    appIntegrationPaymentGatewayId?: IdType;

    /**
     * The price id
     */
    priceId?: IdType;

    /**
     * The payment request code
     */
    code?: string;

    /**
     * The user code
     */
    userCode?: string;

    /**
     * The reference user code
     */
    referralUserCode?: string;

    /**
     * The status of the payment request
     */
    status?: string;

    /**
     * The payment request type
     */
    paymentType?: string;

    /**
     * The currency code
     */
    currencyCode?: string;

    /**
     * The payment request amount
     */
    testMode?: boolean;

    /**
     * The created date from
     */
    createdDateFrom?: DateType;

    /**
     * The created date to
     */
    createdDateTo?: DateType;
}

export interface IGetPaymentDashboardParams {
    /**
     * Query parameter to enable the test mode.
     * @defaultValue false
     */
    testMode?: boolean;
}

//#endregion
