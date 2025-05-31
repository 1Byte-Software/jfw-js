import { DateType, IdType, SortOrder } from '../../models';
import { HeaderKey } from '../client/constants';
import { JFWError } from '../error';
import { JFWHttpCode } from '../http';

//#region Query params types
export interface IPageable {
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

export type HttpResponseList<T = any, U = {}> = HttpResponse<ListData<T> & U>;

export interface IHeaderParameters {
    /**
     * The brand URL of the request. This is used to identify the brand.
     * @example
     * YOUR_BRAND_URL
     */
    [HeaderKey.BrandUrl]: string;
}

export interface IHeaderParametersPrivate extends IHeaderParameters {
    [HeaderKey.AuthKey]: string;
}

export interface IBaseParameters {
    headerParameters: IHeaderParameters;
}
//#endregion
