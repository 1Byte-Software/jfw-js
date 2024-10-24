import { DateType, IdType } from '../types';
import { IFilterDate, IPaginationParams } from './filter';

export interface IConfiguration {
  id: IdType;
  brandId: IdType;
  name: string;
  groupCode: string;
  code: string;
  value: string;
  description: string;
  userId: IdType;
  createdDate: DateType;
}

export interface IGetListConfigurationsPrams
  extends IPaginationParams,
    IFilterDate {
  name?: string;
  groupCode?: string;
  id?: IdType;
}

export interface ICreateConfigurationPayload {
  brandId: IdType;
  name: string;
  code: string;
  value: string;
  description?: string;
  userId?: IdType;
  groupCode: string;
}
export interface IGetUserConfigurationPath {
  userId: IdType;
}
export interface IGetUserConfigurationParams {
  code: string;
}
export interface IUpdateConfigurationPath {
  configurationId: IdType;
}
export interface IUpdateConfigurationPayload {
  value: string;
  code: string;
  name: string;
  groupCode: string;
  description: string;
}
