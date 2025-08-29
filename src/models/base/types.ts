import { SegmentConditionOperator } from './constants';

/**
 * The id of the object.
 * @example Kd12AnplKdMd5s
 */
export type IdType = string;

export type DateType = Date | string;

export interface IBaseObject {
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
}

/**
 * Represents the count of successful operations.
 */
export interface ICountSuccessResponse {
    /**
     * The number of successful operations.
     *
     * @remarks int32
     */
    countSuccess: number;
}

export interface ISegmentCondition {
    /**
     * @remarks min: 1
     */
    field: string;

    operator: SegmentConditionOperator;

    /**
     * @remarks min: 1
     */
    value: string;
}
