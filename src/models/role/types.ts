import { IdType } from '../base';
import { IPermission } from '../permission';

export interface IRole {
    id: IdType;
    parentBrandId: IdType;

    guide: string;
    code: string;
    name: string;
    description: string;
    tags: string | null;
    permissions: string[];
    isSystem: boolean;
    fullPermissions?: IPermission[];
}

//#region API types
export interface IQueryRoleParams {
    name?: string;
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
