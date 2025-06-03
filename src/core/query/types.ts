import { HttpStatusCode } from 'axios';
import { DateType, IdType, SortOrder } from '../../models';
import { JFWError } from '../error';
import { JFWHttpStatusCode } from '../http';

//#region Query params types
export interface Pageable {
    /**
     * The page size of the pagination.
     * @remarks integer - int32
     * @defaultValue 200
     */
    pageSize?: number;

    /**
     * The page number of the pagination.
     * @remarks integer - int32
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
export interface HttpResponse<T = any> {
    success: boolean;
    statusCode?: HttpStatusCode | JFWHttpStatusCode;
    message: string;
    data: T | null;
    errors: JFWError[];
}

export interface ListData<T = any> {
    items: T[];

    totalItems: number;
    pageNumber: number;
    pageSize: number;
}

export type HttpResponseList<T = any, U = {}> = HttpResponse<ListData<T> & U>;
//#endregion
