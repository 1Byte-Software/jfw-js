import { IPageable } from '../../core';
import { DateType, IdType } from '../base';

export interface ICoupon {
    id: IdType;
    name: string;
    code: string;
    description: string;
    percentage: number;
    quantity?: number;
    status: string;
    createdDate: DateType;
    startDate: DateType;
    endDate: DateType;
    autoApplyToPrice: boolean;
}
//#region API types
export interface IQueryCouponsParams extends IPageable {
    startDate?: string;
    endDate?: string;
    code?: string;
    status?: string;
}
export interface ICreateCouponParams {
    name: string;
    code: string;
    description?: string;
    percentage: number;
    quantity?: number;
    startDate: DateType;
    endDate: DateType;
    autoApplyToPrice: boolean;
    status: string;
}

export type IUpdateCouponParams = ICreateCouponParams;

//#endregion
