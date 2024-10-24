import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';
import { IPermission } from './permission';

export interface IRole {
  id: IdType;
  name: string;
  description: string;
  permissions: string[];
  isSystem: boolean;
  createdDate: DateType;
  code: string;
  fullPermissions?: IPermission[];
}
export interface IGetListRolesParams extends ICommonFilterParams {
  name?: string;
}
