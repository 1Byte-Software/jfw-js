import { IPageable, ISortable } from '../../../core';
import { DateType, IBaseObject } from '../../base';
import { BrandDomainType } from './constants';

export interface IBrandDomain extends IBaseObject {
    domain: string;
    isDefault: boolean;
    isPrimary: boolean;
    protocol: string;
    type: BrandDomainType;
    verified: boolean;
    verifiedDate: Date | null;
    createdDate: DateType;
}

//#region API types
export interface IGetBrandDomainsParams extends IPageable, ISortable {
    type?: BrandDomainType;
    verified?: boolean;
    isDefault?: boolean;
    isPrimary?: boolean;
    keywords?: string;
}

//#endregion
