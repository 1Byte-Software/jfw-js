import { IBaseObject, IdType } from '../../base';

export interface IBrandLink extends IBaseObject {
    items: IBrandLink[];
    parent?: IBrandLink;

    description?: string | null;
    link?: string | null;
    name?: string | null;
    type?: string | null;
    parentBrandLinkId?: string | null;
}

//#region API types
export interface IGetBrandLinkByTypeParams {
    brandId: IdType;

    type: string;
}

export interface ICreateBrandLinkParams {
    name?: string | null;
    link?: string | null;
    parentBrandLinkId?: string | null;
    description?: string | null;
    type?: string | null;
}

export type IUpdateBrandLinkParams = ICreateBrandLinkParams;
//#endregion
