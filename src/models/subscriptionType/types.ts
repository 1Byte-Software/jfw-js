import { DateType, IdType } from '../base';
import { IPageable, ISortable } from '../../core';

export interface ISubscriptionType {
    id: IdType;
    name: string;
    unit: string;
    quantity: number;
    description?: string;
    numberOfDays: number;
    isDefault: boolean;
    zOrder: number;
    createdDate: DateType;
    status: number;
}

//#region API types
export interface IQuerySubscriptionTypeParams extends IPageable, ISortable {
    parentBrandId?: IdType;
    name?: string;
    unit?: string;
    quantity?: number;
    description?: string;
    numberOfDays?: number;
    tags?: string;
    zOrder?: number;
    status?: number;
    isDefault?: boolean;
}

export interface ICreateSubscriptionTypeParams {
    name?: string | null;
    unit?: string | null;
    quantity?: number | null;
    tags?: string | null;
    zOrder?: number | null;
    status?: number | null;
    isDefault?: boolean | null;
    description?: string | null;
}

export type IUpdateSubscriptionTypeParams = ICreateSubscriptionTypeParams;
//#endregion
