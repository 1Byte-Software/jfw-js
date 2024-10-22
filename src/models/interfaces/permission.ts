import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface IPermission {
  id: IdType;
  name: string;
  code: string;
  description: string;
  isSystem: boolean;
  createdDate: DateType;
  _id: string;
}
export interface IAddPermissionPayload {
  code: string;
  name: string;
  description?: string;
}
export interface IGetListPermissionsParams extends ICommonFilterParams {
  name?: string;
}
