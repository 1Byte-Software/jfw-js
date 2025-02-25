import { IBaseObject, IdType } from '../../base';
import { BRAND_LINK_TYPE } from './constants';

export interface IBrandLink extends IBaseObject {
    items: IBrandLink[];
    parent?: IBrandLink;

    description?: string | null;
    link?: string | null;
    name?: string | null;
    type?: BRAND_LINK_TYPE | null;
    parentBrandLinkId?: string | null;
}

//#region API types
export interface IGetBrandLinkByTypeParams {
    brandId: IdType;

    type: BRAND_LINK_TYPE;
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
