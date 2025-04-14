import { DateType, IdType } from '../base';
import { IPageable, ISortable } from '../../core';
import { IMedia } from '../cdn';
import { ILanguage } from '../language';
import { IUser } from '../user';
import { OrganizationUserStatus } from './constants';

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

export interface IOrganizationUser {
    joinedDate: DateType;
    statusUser: string;
    user: IUser;
    roleCode: string;
}

//#region API types
export interface IGetOrganizationParams extends IPageable {
    keywords?: string;
    userId?: string;
    languageCode?: string;
    name?: string;
    pageSize?: number;
    pageNumber?: number;
    brandCode?: string;
    code?: string;
    status?: string;
    isPrivate?: boolean;
    viewerCode?: string;
}
export interface IGetOrganizationDetailPath {
    identify: string;
}

export interface IUpdateUserStatusInOrganizationParams {
    organizationId: IdType;
}

export interface IUpdateUserStatusInOrganizationData {
    userIds: IdType[];
    status: OrganizationUserStatus;
}

export interface IRemoveUserInOrganizationParams {
    organizationId: IdType;
    userId: IdType;
}
export interface IAddNewUserToOrganizationParams {
    organizationId: IdType;
    userId: IdType;
}

export interface IAddUserForDefaultLanguageCodeOrganizationSystemParams {
    userId: IdType;
    languageCode: string;
}

export interface IAssignRoleForUserInOrganizationParams {
    organizationId: IdType;
}

export interface IAssignRoleForUserInOrganizationData {
    roleId: IdType;
    userId: IdType;
}

export interface IGetUsersOfOrganizationParams extends IPageable, ISortable {
    organizationId: IdType;

    status?: string;
}
export interface ICreateOrganizationData {
    countryCode?: string;
    languageCode?: string;
    name: string;
    description?: string;
    avatar?: string;
    isPrivate?: boolean;
    isDefault?: boolean;
    status?: string;
}

export type IUpdateOrganizationData = ICreateOrganizationData;
//#endregion
