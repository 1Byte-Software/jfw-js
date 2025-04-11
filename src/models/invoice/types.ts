import { IBaseObject, DateType, IdType } from '../base';
import { IPackage } from '../packages';
import { IPageable, ISortable } from '../../core';

export interface IInvoice extends IBaseObject {
    code: string;
    name: string;
    invoiceDate: DateType;
    overdueDate: DateType;
    packageCode: string;
    package?: IPackage;
    payment: IInvoicePayment;
    displayAmount?: string;
}

export interface IInvoicePayment {
    currencyCode: string;
    amountGross: number;
}

//#region API types
export interface IGetInvoicesParams extends IPageable, ISortable {
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
