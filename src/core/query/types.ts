import { HttpStatusCode } from 'axios';
import { DateType, IdType } from '../../models';
import { JFWError } from '../error';
import { JFWHttpStatusCode } from '../http';
import { SortOrder } from './constants';

//#region Query params types
export interface IPageable {
    /**
     * The page size of the pagination.
     * @remarks int32
     * @defaultValue 200
     */
    pageSize?: number;

    /**
     * The page number of the pagination.
     * @remarks int32
     * @defaultValue 0
     */
    pageNumber?: number;
}

export interface ISortable<T extends Record<string, any> = any> {
    /**
     * The sort data field of the pagination.
     */
    sortDataField?: keyof T;

    /**
     * The sort order of the pagination.
     */
    sortOrder?: SortOrder;
}

export interface ICreatedDateFilter {
    /**
     * The created date from.
     *
     * @remarks date-time
     */
    createdDateFrom?: DateType;

    /**
     * The created date to.
     *
     * @remarks date-time
     */
    createdDateTo?: DateType;
}

export interface JFWBaseFilter {
    modifiedUserBy?: IdType;
    modifiedDateFrom?: DateType;
    modifiedDateTo?: DateType;
    createdUserBy?: IdType;
    createdDateFrom?: DateType;
    createdDateTo?: DateType;

    limit?: number;
}
//#endregion

//#region Query response types
export interface HttpResponse<T = unknown> {
    /**
     * @readonly
     */
    success: boolean;

    /**
     * @remarks int32
     * @readonly
     */
    statusCode: HttpStatusCode | JFWHttpStatusCode;

    /**
     * @readonly
     */
    message: string | null;

    /**
     * @readonly
     */
    errors: JFWError[] | null;

    /**
     * @readonly
     */
    data: T | null;
}

export interface ListData<T = unknown> {
    items: T[];

    /**
     * @remarks int32
     */
    totalItems: number;

    /**
     * @remarks int32
     */
    pageNumber: number;

    /**
     * @remarks int32
     */
    pageSize: number;
}

export type HttpResponseList<T = unknown, U = {}> = HttpResponse<
    ListData<T> & U
>;
//#endregion
