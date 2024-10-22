import { DateType } from '../types';
import { IPackage } from './package';

export interface IInvoicePayment {
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
  payment: IInvoicePayment;
  displayAmount?: string;
  id: string;
}
export interface IGetListInvoicesParams {
  status?: string;
}
