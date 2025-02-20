import { IPageable } from '../../core';
import { IUser } from '../user';

export interface ICommissionRate {
    percentage: number;
    quantityFrom: number;
    quantityTo: number;
    type: string;
    user: IUser | null;
    id: string;
    description?: string;
    unit: string;
    isDefault: boolean;
}
//#region API types
export interface IGetDiscountCommissionDiscountParams {
    quantity: number;
}

export interface IQueryCommissionRatesParams extends IPageable {
    type?: string;
    unit?: string;
}

export interface ICreateCommissionRateParams {
    userCode?: string;
    type: string;
    unit: string;
    quantityFrom?: number;
    quantityTo?: number;
    percentage: number;
    description?: string;
    isDefault?: boolean;
}

export type IUpdateCommissionRateParams = ICreateCommissionRateParams;
//#endregion
