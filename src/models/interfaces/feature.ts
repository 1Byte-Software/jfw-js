import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface IFeature {
  code: string;
  createdBy: IdType | null;
  createdDate: DateType;
  description: string;
  displayDataEvenExpired: boolean;
  featureValue: number;
  id: IdType;
  isBeta: boolean;
  modifiedBy: IdType | null;
  modifiedDate: DateType;
  name: string;
  osAvailable: string | null;
  privateNotes: string | null;
  rootAccessRequired: boolean;
  status: number;
  tags: string | null;
  zOrder: number;
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
