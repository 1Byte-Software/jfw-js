export interface IPaginationParams {
  pageNumber?: number;
  pageSize?: number;
  isPagination?: boolean;
}

export interface ISortParams {
  sortOrder?: string;
  sortBy?: string;
  sortDataField: string;
}
