export interface IPaginationParams {
  pageNumber?: number;
  pageSize?: number;
  isPagination?: boolean;
}
export interface ISortParams {
  sortOrder?: string;
  sortBy?: string;
  sortDataField?: string;
}
export interface IPagination {
  totalItems: number;
  totalPractices?: number;
  totalPages?: number;
  pageNumber?: number;
  pageSize?: number;
}
