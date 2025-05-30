import { IPageable, ISortable } from '../../core';
import { IUser } from '../user';
import { CommissionRateType } from './constants';

export interface ICommissionRate {
    id: string;
    percentage: number;
    quantityFrom: number;
    quantityTo: number;
    type: CommissionRateType;
    user: IUser | null;
    description: string | null;
    unit: string;
    isDefault: boolean;
}

//#region API types
export interface IGetCommissionRatesParams extends IPageable, ISortable {
    /**
     * Filter by type. The type can be one of the following: Discount, Commission.
     */
    type?: CommissionRateType;

    /**
     * The unit of the commission rate.
     */
    unit?: string;

    /**
     * The default commission rate.
     */
    isDefault?: boolean;
}

/**
 * #JFW-291
 */
export interface IGetDiscountCommissionDiscountParams {
    quantity?: number;
}

/**
 * Represents the commission rate create request DTO.
 */
export interface ICreateCommissionRateData {
    /**
     * The type of commission rate.
     */
    type?: CommissionRateType;

    /**
     * The unit of the commission rate.
     */
    unit?: string | null;

    /**
     * The quantity from.
     */
    quantityFrom?: number | null;

    /**
     * The quantity to.
     */
    quantityTo?: number | null;

    /**
     * The percentage.
     */
    percentage?: number | null;

    /**
     * The description.
     */
    description?: string | null;

    /**
     * The default commission rate.
     */
    isDefault?: boolean | null;
}

/**
 * This class represents the commission rate create request DTO.
 */
export type IUpdateCommissionRateData = ICreateCommissionRateData;
//#endregion
