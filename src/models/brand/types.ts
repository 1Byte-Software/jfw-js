import { IPageable, ISortable } from '../../core';
import { IBaseObject } from '../base';
import { IdType } from '../base';
import { IDomain } from '../domain';
import { BrandStatus } from './constants';
import { IBrandProfile } from './profile';
import { IBrandSetting } from './setting';

export interface IBrand extends IBaseObject {
    parentId?: IdType;

    /**
     * @deprecated use getBrandDomainsAPI instead
     */
    domains: IDomain[];
    profile: IBrandProfile;
    setting: IBrandSetting;

    code: string;
    abbr: string;
    isSystem: boolean;

    name: string;
    description: string;
    alias: string;
    tags: string | null;
}

//#region API types
export interface IGetBrandDetailPath {
    brandCode: string;
}

export interface IGetBrandsParams extends IPageable, ISortable {
    /**
     * The code of the brand.
     */
    code?: string;

    /**
     * The name of the brand.
     */
    name?: string;

    /**
     * The abbreviation of the brand
     */
    abbr?: string;

    /**
     * The abbreviation of the brand
     */
    description?: string;

    /**
     * The tags of the brand.
     */
    tags?: string;

    /**
     * The status of the brand.
     */
    status?: BrandStatus;

    /**
     *  The keywords of the brand.
     */
    keywords?: string;
}

export interface IGeneratedDomain {
    rootDomain: string;
    subDomain: string;
    fullDomain: string;
}

export interface ICreateBrandData {
    name: string;
    abbr: string;
    description?: string | null;

    profile: {
        faviconUrl?: string | null;
        logoUrl?: string | null;
        slogan?: string | null;
    };

    setting: {
        domain: string;
    };

    // setting: Pick<IBrandSetting, 'domain'>;
}
export interface IUpdateBrandData {
    /**
     * The name of the Brand.
     * @remarks string - min: 1
     */
    name: string;

    /**
     * This is the abbreviation of the Brand.
     * @remarks string - min: 1
     */
    abbr: string;

    /**
     * The description of the Brand.
     */
    description?: string | null;

    /**
     * The tags of the Brand.
     */
    tags?: string | null;
}

//#endregion
