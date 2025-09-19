import { DateType, IBaseObject } from '../base';
import { PackageFeature } from '../package';
import { QuotaStatus } from './constants';

/**
 *  Data Transfer Object (DTO) representing the usage of a quota feature within a specific period of time.
 * This model is typically returned by API endpoints to inform clients about quota consumption, remaining capacity, and usage status.
 */
export interface QuotaUsage extends IBaseObject {
    feature?: PackageFeature;

    /**
     * Gets or sets the amount of quota that has been consumed.
     *
     * @remarks int64
     */
    usedAmount?: number;

    /**
     * Gets or sets the total quota limit for the current period.
     * A null value indicates that the limit has not been defined.
     *
     * @remarks int64
     */
    limitAmount?: number | null;

    /**
     * Gets or sets the remaining quota available for use in the current period.
     * A null value indicates that it has not been calculated or is not applicable.
     *
     * @remarks int64
     */
    remainingAmount?: number | null;

    /**
     * Gets or sets a value indicating whether the quota is unlimited.
     * If true, quota usage will always be treated as Jfw.Core.EntityClasses.QuotaStatus.Normal.
     */
    isUnlimited: boolean;

    /**
     * Gets or sets the unique key that represents the quota usage period.
     * This can be used to group or partition quota usage data (e.g., "202509").
     */
    periodKey: string | null;

    /**
     * Gets or sets the start date of the quota usage period.
     */
    periodStartDate?: DateType;

    /**
     * Gets or sets the end date of the quota usage period. A null value indicates the period is still ongoing or indefinite.
     */
    periodEndDate?: DateType | null;

    status?: QuotaStatus;

    /**
     * Gets or sets the date when this quota usage record was last modified. A null value indicates that the record has not been updated since creation.
     */
    modifiedDate?: DateType;
}

//#region API types
//#endregion
