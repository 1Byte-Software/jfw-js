export interface IPaginationParams {
  pageNumber?: number;
  pageSize?: number;
  isPagination?: boolean;
}
export interface IPagination {
  totalItems: number;
  totalPractices?: number;
  totalPages?: number;
  pageNumber?: number;
  pageSize?: number;
}
export interface ISortParams {
  sortOrder?: string;
  sortBy?: string;
  sortDataField?: string;
}
export interface IFilterDate {
  createdDateFrom?: string;
  createdDateTo?: string;
}
export interface ICommonFilterParams
  extends ISortParams,
    IPaginationParams,
    IFilterDate {
  isSystem?: boolean;
  name?: string;
}
