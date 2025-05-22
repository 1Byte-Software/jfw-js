import { DateType, IdType } from '../base';
import { SubscriptionTypeStatus } from './constants';

export interface ISubscriptionType {
    id: IdType;

    /**
     * The name of the subscription type
     */
    name: string;

    /**
     * The unit of the subscription type
     */
    unit: string;

    /**
     * The quantity of the subscription type
     */
    quantity: number | null;

    /**
     * The tags of the subscription type
     */
    tags: string | null;

    /**
     * The description of the subscription type
     */
    description: string | null;

    /**
     * Flag to indicate if the subscription type is default
     */
    isDefault: boolean;

    /**
     * The z-order of the subscription type
     */
    zOrder: number;

    /**
     * The status of the subscription type
     */
    status: SubscriptionTypeStatus;
}

//#region API types

/**
 * Data transfer object for creating or updating a subscription type
 */
export interface ICreateSubscriptionTypeData {
    /**
     * The name of the subscription type
     * @remarks string - min: 1
     */
    name: string;

    /**
     * The unit of the subscription type
     * @remarks string - min: 1
     */
    unit: string;

    /**
     * The quantity of the subscription type
     * @remarks integer - int32
     */
    quantity?: number;

    /**
     * The tags of the subscription type
     */
    tags?: string | null;

    /**
     * The z-order of the subscription type
     * @remarks integer - int64
     * @defaultValue 1
     */
    zOrder?: number;

    /**
     * The status of the subscription type
     */
    status?: SubscriptionTypeStatus;

    /**
     * Flag to indicate if the subscription type is default
     * @defaultValue false
     */
    isDefault?: boolean;

    /**
     * The description of the subscription type
     */
    description?: string | null;
}

/**
 * This class is used to define the data transfer object for the SubscriptionType which is used to create or update a subscription type.
 */
export type IUpdateSubscriptionTypeData = ICreateSubscriptionTypeData;
//#endregion
