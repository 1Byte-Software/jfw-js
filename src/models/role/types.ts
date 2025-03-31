import { IPageable, ISortable } from '../../core';
import { IdType } from '../base';
import { IPermission } from '../permission';

export interface IRole {
    id: IdType;
    guid: string;
    parentBrandId: IdType;

    code: string;

    name: string;
    description: string;
    tags: string | null;
    permissions: string[];
    isSystem: boolean;
    type?: 'None' | 'All' | 'BuiltIn' | 'Custom';
    // fullPermissions?: IPermission[];
}

//#region API types
export interface IQueryRoleParams extends IPageable, ISortable<IRole> {
    keywords?: string;
    code?: string;
    name?: string;
    description?: string;
    type?: string;
}

export interface ICreateRoleParams {
    parentBrandId?: IdType | null;
    code: string;
    name: string;
    description?: string | null;
    tags?: string | null;
}

export type IUpdateRoleParams = ICreateRoleParams;
//#endregion
