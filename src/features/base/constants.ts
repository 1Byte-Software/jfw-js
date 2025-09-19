export enum SegmentConditionOperator {
    Equal = 'Equal',
    NotEqual = 'NotEqual',
    In = 'In',
    NotIn = 'NotIn',
    GreaterThan = 'GreaterThan',
    GreaterThanOrEqual = 'GreaterThanOrEqual',
    LessThan = 'LessThan',
    LessThanOrEqual = 'LessThanOrEqual',
}

/**
 * This enum is used to define the common status of an object in JFW.
 */
export enum JFWStatus {
    /**
     * In case of JFW object's status being inactive.
     */
    Inactive = 'Inactive',

    /**
     * In case of JFW object's status being active
     */
    Active = 'Active',
}
