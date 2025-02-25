export type IdType = string;
export type DateType = Date | string;

export interface IBaseObject {
    id: IdType;

    createdBy?: IdType;
    createdDate: DateType;
    modifiedBy?: IdType;
    modifiedDate: DateType;
}

export interface IListResponse<T> {
    items: T[];
    pagination: IPagination | null;
}

export interface IPagination {
    totalItems: number;
    totalPractices?: number;
    totalPages?: number;
    pageNumber?: number;
    pageSize?: number;
}
