import { IPageable, ISortable } from '../../core';
import { BrandDomainType, IBrandDomain } from '../brand';

export type IDomain = IBrandDomain;
//#region API types
export interface IGetDomainsParams extends IPageable, ISortable {
    type?: BrandDomainType;
    verified?: boolean;
    isDefault?: boolean;
    isPrimary?: boolean;
    keywords?: string;
}

//#endregion
