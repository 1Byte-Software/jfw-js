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
