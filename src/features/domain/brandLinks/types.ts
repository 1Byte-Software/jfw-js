import { IBaseObject, IdType } from '../../base';
import { BrandLinkStatus, BrandLinkType } from './constants';

export interface IBrandLink extends IBaseObject {
    /**
     * The brand id.
     *
     * @example "5f7b3b3b-0b3b-4b3b-8b3b-3b0b3b4b3b0b"
     *
     * @remarks min: 1
     */
    brandId: IdType;

    /**
     * The parent brand link id.
     *
     * @example "5f7b3b3b-0b3b-4b3b-8b3b-3b0b3b4b3b0b"
     *
     * @remarks min: 1
     */
    parentBrandLinkId?: string | null;

    /**
     * The name.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * #WAIT_TSDOC
     */
    code: string;

    /**
     * The type of the link.
     *
     * @remarks enum
     */
    type: BrandLinkType;

    /**
     * The group name.
     */
    styles?: string | null;

    /**
     * The icon url.
     *
     * @remarks uri
     */
    iconURL?: string | null;

    /**
     * The reference link. When the link is clicked, it will redirect to the reference link.
     */
    link?: string | null;

    /**
     * The description.
     */
    description?: string | null;

    /**
     * The status of the link.
     *
     * @remarks enum
     */
    status: BrandLinkStatus;

    /**
     * The list of items. That is the child links of this link.
     */
    items?: IBrandLink[] | null;

    /**
     * The order number of the link.
     *
     * @remarks int32
     */
    zOrder: number;
}

//#region API types

export interface IGetBrandLinkParams {
    /**
     * The id of the domain.
     */
    domainId: IdType;

    /**
     * The id of the brand link.
     */
    brandLinkId: IdType;
}

export interface IGetBrandLinksByTypeParams {
    /**
     * The id of the domain.
     */
    domainId: IdType;

    /**
     * The type of the brand link.
     *
     * @remarks enum
     */
    type: BrandLinkType;

    /**
     * The name query parameter to filter.
     */
    name?: string;

    /**
     * The flag to replace the template. If true, the template will be replaced with the brand link and return the result.
     * @defaultValue `true`
     */
    isReplaceTemplate?: boolean;
}

export interface IGetCurrentBrandLinkByTypesParams {
    /**
     * The type of the brand link.
     *
     * @remarks enum
     */
    type: BrandLinkType;

    /**
     * The name query parameter to filter.
     */
    name?: string;

    /**
     * The flag to replace the template. If true, the template will be replaced with the brand link and return the result.
     * @defaultValue `true`
     */
    isReplaceTemplate?: boolean;
}

export interface IGetBrandLinksParams {
    /**
     * The flag to replace the template. If true, the template will be replaced with the brand link and return the result.
     * @defaultValue `true`
     */
    isReplaceTemplate?: boolean;
}

/**
 * This class is used to create, update for the brand link.
 */
export interface ICreateBrandLinkParams {
    /**
     * The parent brand link id.
     * If this is null, it means the link is a node link.
     */
    parentBrandLinkId?: IdType | null;

    /**
     * The name.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The type of the link.
     *
     * @remarks enum
     */
    type?: BrandLinkType;

    /**
     * The styles of the link.
     */
    styles?: string | null;

    /**
     * The icon url.
     *
     * @remarks uri
     */
    iconURL?: string | null;

    /**
     * The reference link.
     * Clicking the link redirects to the specified URL.
     * To use a local path, provide a relative path in the format: /path/to/your/page.
     *
     * @remarks uri
     */
    link?: string | null;

    /**
     * The z-order numer of the link.
     * If this is not provided, we will be checking the max z-order of the parent link and increment by 1.
     *
     * @remarks int32
     */
    zOrder?: number | null;

    /**
     * The status of the link.
     *
     * @remarks enum
     */
    status?: BrandLinkStatus;

    /**
     * The description.
     */
    description?: string | null;
}

/**
 * This class is used to create, update for the brand link.
 */
export type IUpdateBrandLinkParams = ICreateBrandLinkParams;
//#endregion
