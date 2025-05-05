import { IPageable, ISortable } from '../../core';
import { IdType } from '../base';
import { PermissionType } from './constants';

export interface IPermission {
    id: IdType;
    resourceTypeId: IdType;
    parentBrandId: IdType;

    code: string;

    guid: string;
    name: string;
    description: string;
    tags: string | null;
    type?: PermissionType;
    isSystem: boolean;
}

//#region API types
export interface IGetPermissionsParams extends IPageable, ISortable {
    keywords?: string;
    resourceTypeId?: IdType;
    parentBrandId?: IdType | null;
    code?: string;
    name?: string;
    description?: string | null;
    tags?: string | null;
    type?: PermissionType;
}

export interface ICreatePermissionData {
    resourceTypeId: IdType;
    parentBrandId?: IdType | null;
    code: string;
    name: string;
    description?: string | null;
    tags?: string | null;
}

export type IUpdatePermissionData = ICreatePermissionData;
//#endregion
