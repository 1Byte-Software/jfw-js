import { DateType, IdType } from '../asdas';
import { IBaseObject, IPageable, ISortable } from '../base';
import { IMedia } from '../cdn';
import { IPackage, IUser } from '../interfaces';
import { ILanguage } from '../language';

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
}

//#region API types
export interface IQueryOrganizationParams extends IPageable {
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
    userId: IdType;

    status: string;
}

export interface IRemoveUserInOrganizationParams {
    organizationId: IdType;
    userId: IdType;
}
export interface IAddUserToOrganizationParams {
    organizationId: IdType;
    userId: IdType;
}

export interface IQueryUsersOfOrganizationParams extends IPageable, ISortable {
    organizationId: IdType;

    status?: string;
}
export interface ICreateOrganizationParams {
    countryCode?: string;
    languageCode?: string;
    name: string;
    description?: string;
    avatar?: string;
    isPrivate?: boolean;
    isDefault?: boolean;
    status?: string;
}

export type IUpdateOrganizationParams = ICreateOrganizationParams;
//#endregion
