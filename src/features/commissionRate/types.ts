import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { IUserBase } from '../user';
import { CommissionRateType } from './constants';

/**
 * This class represents the commission rate DTO.
 */
export interface ICommissionRate extends IBaseObject {
    /**
     * The id of the brand.
     */
    brandId?: IdType | null;

    /**
     * This class is used to return user information to client.
     */
    user?: IUserBase | null;

    /**
     * @remarks enum
     */
    type: CommissionRateType;

    /**
     * The description.
     */
    description?: string | null;

    /**
     * The quantity from.
     *
     * @remarks int32
     */
    quantityFrom?: number | null;

    /**
     * The quantity to.
     *
     * @remarks int32
     */
    quantityTo?: number | null;

    /**
     * The unit of the commission rate.
     */
    unit?: string | null;

    /**
     * The percentage.
     *
     * @remarks double
     */
    percentage?: number | null;

    /**
     * The default commission rate.
     */
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
 * This class represents the commission rate create request DTO.
 */
export interface ICreateCommissionRateParams {
    /**
     * @remarks enum
     */
    type?: CommissionRateType;

    /**
     * The unit of the commission rate.
     *
     * @remarks min: 1
     */
    unit: string;

    /**
     * The quantity from.
     *
     * @remarks int32
     */
    quantityFrom?: number | null;

    /**
     * The quantity to.
     *
     * @remarks int32
     */
    quantityTo?: number | null;

    /**
     * The percentage.
     *
     * @remarks double
     */
    percentage: number;

    /**
     * The description.
     */
    description?: string | null;

    /**
     * The default commission rate.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean;
}

/**
 * This class represents the commission rate update request DTO.
 */
export interface IUpdateCommissionRateParams {
    /**
     * @remarks enum
     */
    type?: CommissionRateType;

    /**
     * The unit of the commission rate.
     *
     * @remarks min: 1
     */
    unit: string;

    /**
     * The quantity from.
     *
     * @remarks int32
     */
    quantityFrom?: number | null;

    /**
     * The quantity to.
     *
     * @remarks int32
     */
    quantityTo?: number | null;

    /**
     * The percentage.
     *
     * @remarks double
     */
    percentage: number;

    /**
     * The description.
     */
    description?: string | null;

    /**
     * The default commission rate.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean;
}
//#endregion
