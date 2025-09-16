import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';
import { IBaseUser } from '../user';
import { OrganizationStatus, OrganizationUserStatus } from './constants';

/**
 * The Organization Data Transfer Object.
 */
export interface IOrganization extends IBaseObject {
    /**
     * The code of the organization
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the organization
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The Organization Language Code.
     */
    languageCode?: string | null;

    /**
     * The Organization Country Code.
     */
    countryCode?: string | null;

    /**
     * The Organization Avatar.
     *
     * @remarks uri
     */
    avatar?: string | null;

    /**
     * The Organization Is Default.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean | null;

    /**
     * The Organization Is Private.
     */
    isPrivate: boolean;

    /**
     * The Organization Is System.
     */
    isSystem: boolean;

    /**
     * The Organization Description.
     */
    description?: string | null;

    /**
     * The status of the organization.
     *
     * @remarks enum
     */
    status: OrganizationStatus;

    /**
     * The user status in the organization.
     *
     * @remarks enum
     */
    statusUser?: OrganizationUserStatus;

    /**
     * The Total Members in the Organization.
     *
     * @remarks int32
     */
    totalMembers: number;

    /**
     * The Organization Created By.
     */
    createdBy?: string | null;
}

/**
 * This class represents the Organization User Data Transfer Object.
 */
export interface IOrganizationUser {
    /**
     * This class is used to return user information to client.
     */
    user: IBaseUser;

    /**
     * The role code.
     */
    roleCode?: string | null;

    /**
     * The user status in the organization.
     *
     * @remarks enum
     */
    statusUser: OrganizationUserStatus;

    /**
     * The date the user joined the organization.
     *
     * @remarks date-time
     */
    joinedDate: DateType;
}

//#region API types
export interface IGetOrganizationsParams
    extends IPageable,
        ISortable<'code' | 'name' | 'description' | 'avatar' | 'status'> {
    /**
     * The param UserId to apply filter.
     */
    userId?: IdType;

    /**
     * The param CountryCode to apply filter.
     */
    countryCode?: string;

    /**
     * The param LanguageCode to apply filter.
     */
    languageCode?: string;

    /**
     * The param Code to apply filter.
     */
    code?: string;

    /**
     * The param Name to apply filter.
     */
    name?: string;

    /**
     * The param Description to apply filter.
     */
    description?: string;

    /**
     * The param Avatar to apply filter.
     */
    avatar?: string;

    /**
     * The param IsPrivate to apply filter.
     */
    isPrivate?: boolean;

    /**
     * The param Status to apply filter.
     *
     * @remarks enum
     */
    status?: OrganizationStatus;

    /**
     * The param Status to apply filter. This status is the status of the user in the organization.
     *
     * @remarks enum
     */
    userStatus?: OrganizationUserStatus;

    /**
     * The param Keywords to apply filter.
     */
    keywords?: string;
}

/**
 * This class represents the Organization User Join Request Data Transfer Object.
 */
export interface IUpdateUserStatusInOrganizationParams {
    /**
     * @remarks enum
     */
    status: OrganizationUserStatus;

    /**
     * The list of user ids.
     */
    userIds: IdType[];
}

/**
 * This class provides the assign user role organization dto.
 */
export interface IAssignRoleForUserInOrganizationParams {
    /**
     * The id of the role to assign.
     *
     * @remarks min: 1
     */
    roleId: IdType;

    /**
     * The id of the user to assign the role to.
     *
     * @remarks min: 1
     */
    userId: IdType;
}

/**
 * Params for getting users of an Organization.
 */
export interface IGetUsersOfOrganizationParams extends IPageable, ISortable {
    /**
     * The user id filter.
     */
    userId?: IdType;

    /**
     * The role id filter.
     */
    roleId?: IdType;

    /**
     * Filter by status of the user in the organization.
     *
     * @remarks enum
     */
    status?: OrganizationUserStatus | null;
}

/**
 * This class represents the request model for command requests related to organizations.
 */
export interface ICreateOrganizationParams {
    /**
     * The country code of the organization.
     */
    countryCode?: string | null;

    /**
     * The language code of the organization.
     */
    languageCode?: string | null;

    /**
     * The name of the organization.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the organization.
     *
     * @remarks min: 1
     */
    description: string;

    /**
     * The avatar of the organization.
     *
     * @remarks uri
     */
    avatar?: string | null;

    /**
     * The is private of the organization. By default, it is set to false.
     *
     * @defaultValue `false`
     */
    isPrivate?: boolean | null;

    /**
     * The is default of the organization. By default, it is set to false.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean | null;

    /**
     * The status of the organization.
     *
     * @remarks enum
     */
    status?: OrganizationStatus | null;
}

export type IUpdateOrganizationParams = ICreateOrganizationParams;
//#endregion
