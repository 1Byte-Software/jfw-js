import { DateType, IdType } from '../../models';
import { JFWError } from '../error';
import { JFWHttpCode } from '../http';

//#region Query params types
export interface IPageable {
    /**
     * The page size of the pagination.
     */
    pageSize?: number;

    /**
     * The page number of the pagination.
     */
    pageNumber?: number;
}

export interface ISortable<T = any> {
    /**
     * The sort data field of the pagination.
     */
    sortDataField?: keyof T;
    
    /**
     * The sort order of the pagination.
     */
    sortOrder?: 'ASC' | 'DESC';
}

export interface IBaseFilter {
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
    statusCode?: JFWHttpCode;
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

export type HttpResponseList<T = any> = HttpResponse<ListData<T>>;
//#endregion
