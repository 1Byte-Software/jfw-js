/**
 * The id of the object.
 * @example Kd12AnplKdMd5s
 */
export type IdType = string;

export type DateType = Date | string;

export interface IBaseObject {
    id: IdType;

    createdBy?: IdType;
    createdDate: DateType;
    modifiedBy?: IdType;
    modifiedDate: DateType;
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
