import { DateType, IdType } from '../types';
import { IMedia } from './cdn';
import { IPaginationParams } from './filter';
import { ILanguage } from './language';
import { IUser } from './user';

export interface IOrganization {
  avatar?: string;
  name: string;
  totalMembers: number;
  countryCode: string;
  createdBy: string;
  createdDate: DateType;
  description?: string;
  id: IdType;
  languageCode: string;
  medias?: IMedia[];
  modifiedDate: DateType;
  isPrivate: boolean;
  status: string;
  statusUser?: string;
  code: string;
  isSystem: boolean;
  isDefault: boolean;
  language?: ILanguage;
}
export interface IGetOrganizationDetailPath {
  identify: string;
}
export interface IGetListOrganizationsParams {
  userId?: string;
  languageCode?: string;
  name?: string;
  pageSize?: number;
  pageNumber?: number;
  brandCode?: string;
  code?: string;
  status?: string;
  isPrivate?: boolean;
}
export interface IOrganizationUser {
  joinedDate: DateType;
  statusUser: string;
  user: IUser;
}
export interface IGetListOrganizationsByViewerParams extends IPaginationParams {
  userId: string;
  viewerCode: string;
}
export interface IUpdateOrganizationUserPath {
  organizationId: string;
  userId: string;
}
export interface IUpdateOrganizationUserParams {
  status: string;
}
export interface IGetListUsersOfOrganizationParams extends IPaginationParams {
  status: string;
}
export interface IAddOrganizationPayload {
  countryCode?: string;
  languageCode?: string;
  name: string;
  description?: string;
  avatar?: string;
  isPrivate?: boolean;
  isDefault?: boolean;
  status?: string;
}
