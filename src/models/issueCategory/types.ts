import { IBaseObject, IdType } from '../base';
import { IPageable } from '../../core';

export interface IIssueCategory extends IBaseObject {
    code: string;
    groupCode: string;

    name: string | null;
    description: string;
    isSystem: boolean;
    links?: string;
    tags?: string;
}

//#region API types
export interface IGetIssueCategoriesParams extends IPageable {
    groupCode?: string;
    code?: string;
    name?: string;
    description?: string;
    suggestionUrl?: string;
    tags?: string;
    zOrder?: number;
    status?: string;
    isSystem?: boolean;
}

export interface ICreateIssueCategoryData {
    brandId: IdType;

    code: string;
    groupCode: string;

    name?: string;
    description?: string;
    links?: string;
    tags?: string;
}

export type IUpdateIssueCategoryData = ICreateIssueCategoryData;
//#endregion
