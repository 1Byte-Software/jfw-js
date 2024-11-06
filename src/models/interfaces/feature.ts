import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface IFeature {
  id: IdType;
  code: string;
  quantity: number;
  description: string;
  displayDataEvenExpired: boolean;
  featureValue: number;
  isBeta: boolean;
  name: string;
  osAvailable: string | null;
  privateNotes: string | null;
  rootAccessRequired: boolean;
  status: string;
  tags: string | null;
  zOrder: number;
  createdBy: IdType | null;
  createdDate: DateType;
  modifiedBy: IdType | null;
  modifiedDate: DateType;
}
export interface IGetListFeatureParams extends ICommonFilterParams {
  name?: string;
}
export interface IEditFeaturePayload {
  code: string;
  name: string;
  description?: string;
  privateNotes?: string;
  tags?: string;
  status: number;
}
