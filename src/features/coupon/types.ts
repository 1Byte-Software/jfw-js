import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject } from '../base';
import { CouponStatus } from './constants';

/**
 * This class represents the coupon dto.
 */
export interface ICoupon extends IBaseObject {
    /**
     * The code of the coupon.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the coupon.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the coupon.
     */
    description?: string | null;

    /**
     * The tags of the coupon.
     */
    tags?: string | null;

    /**
     * The percentage of the coupon.
     *
     * @remarks double
     */
    percentage?: number | null;

    /**
     * The quantity of the coupon.
     *
     * @remarks int32
     */
    quantity?: number | null;

    /**
     * The start date and end date of the coupon.
     *
     * @remarks date-time
     */
    startDate?: DateType | null;

    /**
     * The end date of the coupon.
     *
     * @remarks date-time
     */
    endDate?: DateType | null;

    /**
     * Is the coupon auto apply to price.
     */
    autoApplyToPrice?: boolean | null;

    /**
     * The status of the coupon.
     *
     * @remarks enum
     */
    status: CouponStatus;

    /**
     * The test mode of the coupon.
     */
    testMode: boolean;

    /**
     * The modified date of the coupon.
     *
     * @remarks date-time
     */
    modifiedDate?: DateType | null;
}

//#region API types
/**
 * Interface representing parameters to filter and get coupons.
 */
export interface IGetCouponsParams extends IPageable, ISortable {
    /**
     * Filter by the name of the coupon.
     */
    name?: string;

    /**
     * Filter by the code of the coupon.
     */
    code?: string;

    /**
     * Filter by the description of the coupon.
     */
    description?: string;

    /**
     * Filter by the percentage of the coupon.
     *
     * @remarks double
     */
    percentage?: number;

    /**
     * Filter by the quantity of the coupon.
     *
     * @remarks int32
     */
    quantity?: number;

    /**
     * Filter by the auto apply to price of the coupon.
     */
    autoApplyToPrice?: boolean;

    /**
     * Filter by the tags of the coupon.
     */
    tags?: string;

    /**
     * Filter by the status of the coupon.
     *
     * @remarks enum
     */
    status?: CouponStatus;

    /**
     * Filter by the keywords of the coupon.
     */
    keywords?: string;

    /**
     * Filter by the test mode of the coupon.
     *
     * @defaultValue false
     */
    testMode?: boolean;
}

/**
 * This class is used to provide a data transfer object for the coupon which is used for command requests.
 */
export interface ICreateCouponParams {
    /**
     * The name of the coupon.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The code of the coupon.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The percentage of the coupon.
     *
     * @remarks double
     */
    percentage?: number | null;

    /**
     * The quantity of the coupon.
     *
     * @remarks int32
     */
    quantity?: number | null;

    /**
     * The start date and end date of the coupon.
     *
     * @remarks date-time
     */
    startDate: DateType;

    /**
     * The end date of the coupon.
     *
     * @remarks date-time
     */
    endDate: DateType;

    /**
     * Is the coupon auto apply to price. If true, the coupon will be applied to the price automatically. By default, the value is false.
     */
    autoApplyToPrice?: boolean;

    /**
     * The description of the coupon.
     */
    description?: string | null;

    /**
     * The tags of the coupon.
     */
    tags?: string | null;

    /**
     * The status of the coupon.
     *
     * @remarks enum
     */
    status?: CouponStatus;

    /**
     * The test mode of the coupon. By default, the value is false.
     */
    testMode?: boolean;
}

/**
 * This class is used to provide a data transfer object for the coupon which is used for command requests.
 */
export type IUpdateCouponParams = ICreateCouponParams;
//#endregion
