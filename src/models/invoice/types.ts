import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { IPayment } from '../payment';
import { IBaseUser } from '../user';
import { InvoiceStatus, InvoiceType } from './constants';

export interface IInvoice {
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
    createdDate?: DateType | null;

    /**
     * This class is used to return user information to client.
     */
    user: IBaseUser;

    /**
     * This class represents the payment base data transfer object.
     */
    payment: IPayment;

    /**
     * The package code of the invoice.
     *
     * @remarks min: 1
     */
    packageCode: string;

    /**
     * The user address id.
     */
    userAddressId?: IdType | null;

    /**
     * The subscription type id.
     *
     * @remarks min: 1
     */
    subscriptionTypeId: IdType;

    /**
     * The type of the invoice.
     *
     * @remarks enum
     */
    type: InvoiceType;

    /**
     * The code of the invoice.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the invoice.
     */
    name?: string | null;

    /**
     * The description of the invoice.
     */
    description?: string | null;

    /**
     * The notes of the invoice.
     */
    notes?: string | null;

    /**
     * The tags of the invoice.
     */
    tags?: string | null;

    /**
     * The reminder count of the invoice.
     *
     * @remarks int32
     */
    reminderedCount?: number | null;

    /**
     * The delivery instructions of the invoice.
     */
    deliveryInstructions?: string | null;

    /**
     * The confirmation instructions date of the invoice.
     *
     * @remarks date-time
     */
    confirmedDeliveryDate?: DateType | null;

    /**
     * The invoice date.
     *
     * @remarks date-time
     */
    invoiceDate?: DateType | null;

    /**
     * The due date of the invoice.
     *
     * @remarks date-time
     */
    overdueDate?: DateType | null;

    /**
     * The status of the invoice.
     *
     * @remarks enum
     */
    status: InvoiceStatus;

    /**
     * The test mode of the invoice.
     */
    testMode: boolean;
}

/**
 * Provides the file response.
 */
export interface IExportInvoice {
    /**
     * The path of the file.
     *
     * @remarks min: 1
     */
    filePath: string;

    /**
     * The name of the file.
     *
     * @remarks min: 1
     */
    fileName: string;

    /**
     * The content type of the file.
     *
     * @remarks min: 1
     */
    contentType: string;

    /**
     * The file data. Base64 encoded file data
     */
    fileData?: string | null;
}

//#region API types
export interface IGetInvoicesParams extends IPageable, ISortable {
    /**
     * The id of the user. If the user is not provided, it will be the current user.
     */
    userId?: IdType;

    /**
     * The package id.
     */
    packageId?: IdType;

    /**
     * Filter by the subscription type id.
     */
    subscriptionTypeId?: IdType;

    /**
     * Filter by the invoice type.
     *
     * @remarks enum
     */
    type?: InvoiceType;

    /**
     * Filter by the invoice code.
     */
    code?: string;

    /**
     * Filter by the invoice name.
     */
    name?: string;

    /**
     * Filter by the invoice description.
     */
    description?: string;

    /**
     * Filter by the invoice notes.
     */
    notes?: string;

    /**
     * Filter by the invoice tags.
     */
    tags?: string;

    /**
     * Filter by the invoice status.
     *
     * @remarks int32
     */
    reminderedCount?: number;

    /**
     * Filter by the Delivery Instructions.
     */
    deliveryInstructions?: string;

    /**
     * Filter by the Confirmed Delivery Date.
     *
     * @remarks date-time
     */
    confirmedDeliveryDate?: DateType;

    /**
     * Filter by the Invoice Date.
     *
     * @remarks date-time
     */
    invoiceDate?: DateType;

    /**
     * Filter by the Due Date.
     *
     * @remarks date-time
     */
    overdueDate?: DateType;

    /**
     * Filter by the Status.
     *
     * @remarks enum
     */
    status?: InvoiceStatus;

    /**
     * Filter by the Keywords.
     */
    keywords?: string;

    /**
     * Filter by the test mode. By default, it is false.
     */
    testMode?: boolean;
}
//#endregion
