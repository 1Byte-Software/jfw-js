import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';
import { RoleType, RoleTypeFilter } from './constants';

/**
 * This class is used to define the structure of the RoleDto.
 */
export interface IRole extends IBaseObject {
    /**
     * The parent brand id of the Role.
     */
    parentBrandId?: IdType | null;

    /**
     * The guid of the Role.
     *
     * @remarks uuid
     */
    guid: string;

    /**
     * The code of the Role.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the Role.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the Role.
     */
    description?: string | null;

    /**
     * The tags of the Role.
     */
    tags?: string | null;

    /**
     * The type of the Role.
     *
     * @remarks enum
     */
    type: RoleType;

    /**
     * The codes of the permissions for the Role.
     */
    permissions: string[];
}

//#region API types
export interface IGetRolesParams extends IPageable, ISortable {
    /**
     * The list id of the role to filter.
     */
    ids?: string;

    /**
     * The param code to apply filter.
     */
    code?: string;

    /**
     * The param name to apply filter.
     */
    name?: string;

    /**
     * The param description to apply filter.
     */
    description?: string;

    /**
     * The param type to apply filter.
     *
     * @remarks enum
     */
    type?: RoleTypeFilter;

    /**
     * Filter by keywords.
     */
    keywords?: string;
}

/**
 * This class is used when creating or updating a Role.
 */
export interface ICreateRoleParams {
    /**
     * The code of the Role.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the Role.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the Role.
     */
    description?: string | null;

    /**
     * The tags of the Role.
     */
    tags?: string | null;
}

/**
 * This class is used when creating or updating a Role.
 */
export type IUpdateRoleParams = ICreateRoleParams;
//#endregion
