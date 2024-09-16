import { DateType } from "../types";
import { IPackage } from "./payment";

export interface IPayment {
    currencyCode: string;
    amountGross: number;
}
export interface IInvoice {
    code: string;
    name: string;
    createdDate: DateType;
    invoiceDate: DateType;
    overdueDate: DateType;
    packageCode: string;
    package?: IPackage;
    payment: IPayment;
    displayAmount?: string;
    id: string;
}
export interface IGetListInvoicesParams {
    status?: string;
}
