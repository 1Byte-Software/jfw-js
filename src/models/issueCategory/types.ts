import { IdType } from '../asdas';
import { IBaseObject, IPageable } from '../base';

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
export interface IQueryIssueCategoryParams extends IPageable {
    code?: string;
    brandCode?: string;
}

export interface ICreateIssueCategoryParams {
    brandId: IdType;

    code: string;
    groupCode: string;

    name?: string;
    description?: string;
    links?: string;
    tags?: string;
}

export type IUpdateIssueCategoryParams = ICreateIssueCategoryParams;
//#endregion
