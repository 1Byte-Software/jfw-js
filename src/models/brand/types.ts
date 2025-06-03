import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { IDomain } from '../domain';
import { BrandStatus } from './constants';
import { IBrandProfile } from './profile';
import { IBrandSetting } from './setting';

export interface IBrand {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: string;

    /**
     * The created date of the object.
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * The parent Id of the Brand.
     */
    parentId?: IdType | null;

    /**
     * The code of the Brand.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the Brand.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * This is the abbreviation of the Brand.
     *
     * @remarks min: 1
     */
    abbr: string;

    /**
     * The description of the Brand.
     */
    description?: string | null;

    /**
     * The tags of the brand.
     */
    tags?: string | null;

    /**
     * @remarks enum
     */
    status: BrandStatus;

    /**
     * The flag if the brand is below default.
     */
    isDefault: boolean;

    /**
     * The flag if the brand is below system.
     */
    isSystem: boolean;

    /**
     * This class provides the Brand Profile Dto.
     */
    profile?: IBrandProfile;

    /**
     * This class provides the Brand Setting Dto.
     */
    setting?: IBrandSetting;

    /**
     * @deprecated use getBrandDomainsAPI instead
     *
     * The list of the domain object.
     */
    domains: IDomain[];
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
     *
     * @remarks enum
     */
    status?: BrandStatus;

    /**
     *  The keywords of the brand.
     */
    keywords?: string;
}

/**
 * This class represents the response data transfer object for generating a domain.
 */
export interface IGeneratedDomain {
    /**
     * The root part of the domain, typically the main domain name.
     *
     * @remarks min: 1
     * @example jframework.io
     */
    rootDomain: string;

    /**
     * The subdomain part of the domain, which is often used to identify a specific brand or service.
     *
     * @remarks min: 1
     * @example dev-subdomain
     */
    subDomain: string;

    /**
     * The full domain name, which combines the root domain and subdomain.
     *
     * @remarks min: 1
     * @example dev-subdomain.jframework.io
     */
    fullDomain: string;
}

export interface ICreateBrandParams {
    /**
     * The name of the brand.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The abbreviation of the brand. The value is the abbreviation of the brand.
     *
     * @remarks min: 1
     */
    abbr: string;

    /**
     * The description of the brand.
     */
    description?: string | null;

    /**
     * The setting of the brand.
     */
    setting: {
        /**
         * The domain of the brand. The value is the subdomain of the brand.
         *
         * @remarks min: 1
         * @example jframework.dev
         */
        domain: string;
    };

    /**
     * The profile of the brand.
     */
    profile: {
        /**
         * The logo url of the brand.
         *
         * @remarks uri
         */
        logoUrl?: string | null;

        /**
         * The favicon url of the brand.
         *
         * @remarks uri
         */
        faviconUrl?: string | null;

        /**
         * The slogan of the brand. This value is used to combine with the name of the brand to display in the title of the page.
         */
        slogan?: string | null;
    };
}

export interface IUpdateBrandParams {
    /**
     * The name of the Brand.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * This is the abbreviation of the Brand.
     *
     * @remarks min: 1
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
