import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { PermissionType, PermissionTypeFilter } from './constants';

export interface IPermission {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * The parent brand id.
     */
    parentBrandId?: IdType | null;

    /**
     * The id of the resource type.
     *
     * @remarks min: 1
     */
    resourceTypeId: IdType;

    /**
     * The GUID.
     *
     * @remarks uuid
     */
    guid: string;

    /**
     * The permission code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the permission.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the permission.
     */
    description?: string | null;

    /**
     * The tags of the permission.
     */
    tags?: string | null;

    /**
     * The type of the permission.
     *
     * @remarks enum
     */
    type: PermissionType;
}

//#region API types
export interface IGetPermissionsParams
    extends IPageable,
        ISortable<'code' | 'tags' | 'type'> {
    /**
     * Filter by resource type id.
     */
    resourceTypeId?: string;

    /**
     * Filter by code.
     */
    code?: string;

    /**
     * Filter by name.
     */
    name?: string;

    /**
     * Filter by tags.
     */
    tags?: string;

    /**
     * Filter by description.
     */
    description?: string;

    /**
     * Filter by type.
     *
     * @remarks enum
     */
    type?: PermissionTypeFilter;

    /**
     * Filter by keywords.
     */
    keywords?: string;
}

export interface ICreatePermissionParams {
    /**
     * The resource type id.
     *
     * @remarks min: 1
     */
    resourceTypeId: IdType;

    /**
     * The permission code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the permission.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the permission.
     */
    description?: string | null;

    /**
     * The tags of the permission.
     */
    tags?: string | null;
}

export type IUpdatePermissionParams = ICreatePermissionParams;
//#endregion
