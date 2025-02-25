import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';

export interface IPermission {
    id: IdType;
    parentBrandId: IdType;

    code: string;

    guid: string;
    name: string;
    description: string;
    tags: string | null;
    isSystem: boolean;
    createdDate: DateType;
}

//#region API types
export interface IQueryPermissionParams extends IPageable, ISortable {
    code?: string;
    name?: string;
    tags?: string;
    description?: string;
}

export interface ICreatePermissionParams {
    parentBrandId?: IdType | null;
    code: string;
    name: string;
    description?: string | null;
    tags?: string | null;
    isSystem?: boolean | null;
}

export type IUpdatePermissionParams = ICreatePermissionParams;
//#endregion
