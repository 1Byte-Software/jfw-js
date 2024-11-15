import { IdType } from '../types';
import { IPaginationParams } from './filter';

export interface IIssueCategory {
  name: string | null;
  code: string;
  description: string;
  groupCode: string;
  id: string;
  isSystem: boolean;
  links?: string;
  tags?: string;
}
export interface IGetListIssueCategoriesParams extends IPaginationParams {
  brandCode?: string;
  code?: string;
}
export interface IAddIssueCategoryPayload {
  brandId: IdType;
  groupCode: string;
  code: string;
  name?: string;
  description?: string;
  links?: string;
  tags?: string;
}
