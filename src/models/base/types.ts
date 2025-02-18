import { DateType, IdType } from '../asdas';

export interface IPageable {
    pageSize?: number;
    pageNumber?: number;
}

export interface ISortable {
    sortDataField?: string;
    sortOrder?: string;
}

export interface IBaseObject {
    id: IdType;

    createdBy?: IdType;
    createdDate: DateType;
    modifiedBy?: IdType;
    modifiedDate: DateType;
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

export interface IBaseQuery extends IPageable, ISortable, IBaseFilter {}
