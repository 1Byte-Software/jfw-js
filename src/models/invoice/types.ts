import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';
import { IPayment } from '../payment';
import { IUser } from '../user';

export interface IInvoice extends IBaseObject {
    user: IUser;
    payment: IPayment;
    packageCode: string;
    userAddressId: string;
    subscriptionTypeId: string;
    type: string;
    code: string;
    name: string;
    description: string;
    notes: string;
    tags: string;
    reminderedCount: number;
    deliveryInstructions: string;
    confirmedDeliveryDate: DateType;
    invoiceDate: DateType;
    overdueDate: DateType;
    status: string;
    testMode: boolean;
}
/**
 * Will delete
 */
export interface IInvoicePayment {
    currencyCode: string;
    amountGross: number;
}

//#region API types
export interface IGetInvoicesParams extends IPageable, ISortable {
    keywords?: string;
    userId?: IdType;
    packageId?: IdType;
    subscriptionTypeId?: IdType;

    code?: string;

    type?: string;
    name?: string;
    description?: string;
    notes?: string;
    tags?: string;
    reminderedCount?: number;
    deliveryInstructions?: string;
    confirmedDeliveryDate?: DateType;
    invoiceDate?: DateType;
    overdueDate?: DateType;
    status?: string;
    testMode?: boolean;
}

//#endregion
