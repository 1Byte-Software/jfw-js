import { DateType, IdType } from '../base';
import { SubscriptionTypeStatus } from './constants';

/**
 * This class is used to define the data transfer object for the SubscriptionType entity class.
 */
export interface ISubscriptionType {
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

    /**
     * The name of the subscription type.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The unit of the subscription type.
     *
     * @remarks min: 1
     */
    unit: string;

    /**
     * The quantity of the subscription type.
     *
     * @remarks int32
     */
    quantity?: number | null;

    /**
     * The tags of the subscription type.
     */
    tags?: string | null;

    /**
     * The z-order of the subscription type.
     *
     * @remarks int64
     */
    zOrder: number;

    /**
     * The status of the subscription type.
     *
     * @remarks enum
     */
    status: SubscriptionTypeStatus;

    /**
     * Flag to indicate if the subscription type is default.
     */
    isDefault: boolean;

    /**
     * The description of the subscription type.
     */
    description?: string | null;
}

//#region API types

/**
 * Data transfer object for creating or updating a subscription type
 */
export interface ICreateSubscriptionTypeParams {
    /**
     * The name of the subscription type.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The unit of the subscription type.
     *
     * @remarks min: 1
     */
    unit: string;

    /**
     * The quantity of the subscription type.
     *
     * @remarks int32
     */
    quantity?: number;

    /**
     * The tags of the subscription type.
     */
    tags?: string | null;

    /**
     * The z-order of the subscription type. Default is 1
     *
     * @remarks int64
     * @defaultValue `1`
     */
    zOrder?: number;

    /**
     * The status of the subscription type.
     *
     * @remarks enum
     */
    status?: SubscriptionTypeStatus;

    /**
     * Flag to indicate if the subscription type is default. By default, it is false.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean;

    /**
     * The description of the subscription type.
     */
    description?: string | null;
}

/**
 * This class is used to define the data transfer object for the SubscriptionType which is used to create or update a subscription type.
 */
export type IUpdateSubscriptionTypeParams = ICreateSubscriptionTypeParams;
//#endregion
