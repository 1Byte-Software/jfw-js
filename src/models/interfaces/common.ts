import ".";
import { IdType, Mode } from "../types";

export interface IPaginationParams {
    pageNumber?: number;
    pageSize?: number;
    isPagination?: boolean;
}
export interface ISortParams {
    sortOrder?: string;
    sortBy?: string;
}
export interface IPagination {
    totalItems: number;
    totalPractices?: number;
    totalPages?: number;
    pageNumber?: number;
    pageSize?: number;
}
export interface IListResponse<T> {
    items: T[];
    pagination: IPagination | null;
}
export interface IResponse<T> {
    statusCode?: number;
    data: T | null;
}
export interface IErrorNotPermission {
    httpCode: number;
}
export interface IResponseNotPermission {
    error: IErrorNotPermission;
}
export interface IObjectHasKeyAsString<T> {
    [key: string]: T;
}
export interface ISortParamsDefault {
    sortOrder: string;
    sortDataField: string;
}
export interface IById {
    id: IdType;
}
export interface JfwConfig {
    mode?: Mode;
    brandUrl?: string;
}
