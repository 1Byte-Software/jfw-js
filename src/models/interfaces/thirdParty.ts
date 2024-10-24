import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface IExternal {
  id: IdType;
  iconUrl: string;
  authEndpoint: string;
  tokenEndpoint?: string;
  scope: string;
  redirectUri: string;
  clientId: string;
  code: string;
  name: string;
  description?: string;
  clientSecret: string;
  createdDate: DateType;
}
export interface IGetListExternalParams extends ICommonFilterParams {
  brandId: IdType;
}
export interface IAddExternalPayload {
  brandId: IdType;
  iconUrl?: string;
  authEndpoint?: string;
  tokenEndpoint?: string;
  scope: string;
  redirectUri: string;
  clientId: string;
  code: string;
  name: string;
  description?: string;
  clientSecret: string;
  status: number;
}
