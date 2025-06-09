/**
 * Possible values:
 * - `0` - `Inactive`
 * - `1` - `Active`
 */
export enum IssueStatus {
    Inactive = 'Inactive',
    Active = 'Active',
}

/**
 * Possible values:
 * - `1` - `Low`
 * - `2` - `Medium`
 * - `3` - `High`
 * - `4` - `Urgent`
 */
export enum IssuePriority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
    Urgent = 'Urgent',
}

/**
 * Possible values:
 * - `0` - `Dislike`
 * - `1` - `Like`
 * - `2` - `Love`
 * - `3` - `Care`
 * - `4` - `Haha`
 * - `5` - `Wow`
 * - `6` - `Angry`
 */
export enum IssueReactionType {
    Dislike = 'Dislike',
    Like = 'Like',
    Love = 'Love',
    Care = 'Care',
    Haha = 'Haha',
    Wow = 'Wow',
    Angry = 'Angry',
}

/**
 * Possible values:
 * - `0` - `Inactive`
 * - `1` - `Active`
 */
export enum IssueReactionStatus {
    Inactive = 'Inactive',
    Active = 'Active',
}
