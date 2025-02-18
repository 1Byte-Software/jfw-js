import { DateType, IdType } from '../asdas';
import { IBaseObject, IPageable, ISortable } from '../base';
import { IPrice } from '../price';
import { IUser } from '../user';

export interface IPayment extends IBaseObject {
    merchantId: IdType;
    packageId: IdType;
    userId: IdType;

    user?: IUser;
    price: IPrice;

    code: string;
    currencyCode: string;

    name: string;
    amount: number;
    amountGross: number;
    amountFee: number;
    amountNet: number;
    description: string;
    invoiceNo: string;
    paymentType: string;
    paymentDate: DateType;
    notes: string | null;
    status: string;

    package?: string;
}

export interface IPaymentDashboard {
    dailyRevenue: number;
    dailySells: number;
    totalRevenue: number;
    totalSells: number;
}

export interface IMerchant {
    id: IdType;
    type: number;
    code: string;
    name: string;
    website: string;
}

//#region API types
export interface IQueryPaymentParams extends IPageable, ISortable {
    paymentMethodId?: IdType;
    priceId?: IdType;
    code?: string;
    userCode?: string;
    referralUserCode?: string;
    status?: string;
    paymentType?: string;
    currencyCode?: string;
    testMode?: boolean;
    createdDateFrom?: DateType;
    createdDateTo?: DateType;
}

export interface IGetPaymentDashboardParams {
    testMode?: boolean;
}

//#endregion
