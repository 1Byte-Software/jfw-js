import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { CouponStatus } from './constants';

export interface ICoupon {
    id: IdType;
    name: string;
    code: string;
    description: string;
    percentage: number;
    quantity?: number;
    status: CouponStatus;
    createdDate: DateType;
    startDate: DateType;
    endDate: DateType;
    autoApplyToPrice: boolean;
}

//#region API types
export interface IGetCouponsParams extends IPageable, ISortable {
    /**
     * Filter by the name of the coupon
     */
    name?: string;

    /**
     * Filter by the code of the coupon
     */
    code?: string;

    /**
     * Filter by the description of the coupon
     */
    description?: string;

    /**
     * Filter by the percentage of the coupon
     *
     * @remarks
     * This value is a floating-point number (double) representing the discount percentage.
     * For example: `15.5` means 15.5%.
     */
    percentage?: number;

    /**
     * Filter by the quantity of the coupon
     *
     * @remarks
     * Type: int (integer number). Represents the number of coupons available.
     * For example: `100` means there are 100 coupons in total.
     */
    quantity?: number;

    /**
     * Filter by the auto apply to price of the coupon
     */
    autoApplyToPrice?: boolean;

    /**
     * Filter by the tags of the coupon
     */
    tags?: string;

    /**
     * Filter by the status of the coupon
     * Possible values: 1 - Active, 2 - Inactive, 3 - Expired, -3 - Deleted
     */
    status?: CouponStatus;

    /**
     * Filter by the keywords of the coupon
     */
    keywords?: string;

    /**
     * Filter by the test mode of the coupon. Default is false.
     */
    testMode?: boolean;
}

/**
 * This class is used to provide a data transfer object for the coupon which is used for command requests.
 * #JFW-296
 */
export interface ICreateCouponData {
    /**
     * The name of the coupon.
     */
    name: string;

    /**
     * The code of the coupon.
     */
    code: string;

    /**
     * The percentage of the coupon.
     *
     * @remarks
     * This value is a floating-point number (double) representing the discount percentage.
     * For example: `15.5` means 15.5%.
     */
    percentage?: number | null;

    /**
     * The quantity of the coupon.
     *
     * @remarks
     * Type: int (integer number). Represents the number of coupons available.
     * For example: `100` means there are 100 coupons in total.
     */
    quantity?: number | null;

    /**
     * The start date and end date of the coupon.
     */
    startDate: DateType;

    /**
     * The end date of the coupon.
     */
    endDate: DateType;

    /**
     * Is the coupon auto apply to price. If true, the coupon will be applied to the price automatically.
     */
    autoApplyToPrice?: boolean | null;

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
     * @remarks
     * This is a string-based enum with the following possible values:
     * - `'1'` - Active
     * - `'2'` - Inactive
     * - `'3'` - Expired
     * - `'-3'` - Deleted
     */
    status?: CouponStatus;

    /**
     * The test mode of the coupon.
     */
    testMode?: boolean;
}

/**
 * This class is used to provide a data transfer object for the coupon which is used for command requests.
 */
export type IUpdateCouponData = ICreateCouponData;
//#endregion
