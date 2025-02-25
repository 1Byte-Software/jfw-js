import { DateType, IdType } from '../../models';
import { JFWError } from '../error';
import { JFW_STATUS_CODE } from '../http';

//#region Query params types
export interface IPageable {
    pageSize?: number;
    pageNumber?: number;
}

export interface ISortable<T = any> {
    sortDataField?: keyof T;
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
export interface IResponse<T = any> {
    success: boolean;
    statusCode?: JFW_STATUS_CODE;
    message: string;
    data: T | null;
    errors: JFWError[];
}

interface IListItemsWithPagination<T = any> {
    items: T[];

    totalItems: number;
    pageNumber: number;
    pageSize: number;
}

export type IResponseList<T = any> = IResponse<IListItemsWithPagination<T>>;
//#endregion
