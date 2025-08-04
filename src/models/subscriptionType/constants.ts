/**
 * Possible values:
 * - `0` - `Inactive`
 * - `1` - `Active`
 */
export enum SubscriptionTypeStatus {
    Inactive = 'Inactive',
    Active = 'Active',
}

/**
 * Represents the unit of time used for a subscription period.
 */
export enum SubscriptionTypeUnit {
    Hour = 'Hour',
    Day = 'Day',
    Week = 'Week',
    Month = 'Month',
    Year = 'Year',
}
