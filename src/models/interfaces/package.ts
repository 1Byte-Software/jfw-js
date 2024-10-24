import { DateType, IdType } from '../types';
import { IFeature } from './feature';
import { ICommonFilterParams } from './filter';
import { IPrice } from './price';

export interface IPackage {
  code: string;
  createdDate: DateType;
  description: string;
  features: IFeature[];
  id: IdType;
  isDefault: boolean;
  modifiedBy: IdType | null;
  modifiedDate: DateType;
  name: string;
  prices: IPrice[];
  tags: string | null;
  status: string;
  zOrder: number;
  image?: string;
  styles?: string;
  patternAvatarUrl?: string;
  isFree: boolean;
}
export interface IGetListPackagesParams extends ICommonFilterParams {
  name?: string;
}
export interface IGetPackageByIdRequestPath {
  packageId: string;
}
export interface IAddPackagePayload {
  code: string;
  name: string;
  tags?: string;
  description?: string;
  zOrder?: number;
  isDefault?: boolean;
  status?: number;
  image?: string | null;
  styles?: string;
}
export interface IAddFeaturesToPackagePayload {
  featureId: IdType;
  value: number;
}
