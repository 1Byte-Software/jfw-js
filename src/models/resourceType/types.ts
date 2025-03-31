import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';

export interface IResourceType {
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
export interface IQueryResourceTypeParams extends IPageable, ISortable {
    resourceTypeId?: IdType;
    parentBrandId?: IdType | null;
    code?: string;
    name?: string;
    description?: string | null;
    tags?: string | null;
}

export interface ICreateResourceTypeParams {
    resourceTypeId: IdType;
    parentBrandId?: IdType | null;
    code: string;
    name: string;
    description?: string | null;
    tags?: string | null;
}

export type IUpdateResourceTypeParams = ICreateResourceTypeParams;
//#endregion
