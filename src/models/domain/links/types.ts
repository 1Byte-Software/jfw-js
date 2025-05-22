import { IdType } from '../../base';
import { BrandLinkStatus, BrandLinkType } from './constants';

export interface IBrandLink {
    brandId: IdType;
    parentBrandLinkId: IdType | null;
    name: string | null;
    type: BrandLinkType | null;
    styles: string | null;
    iconUrl: string | null;
    link: string | null;
    zOrder: number | null;
    status: BrandLinkStatus;
    description: string | null;
    items: IBrandLink[];
    parent: IBrandLink | null;
    id: IdType;
}

//#region API types

export interface IGetBrandLinkParams {
    /**
     * The id of the domain.
     */
    id: IdType;

    /**
     * The id of the brand link.
     */
    brandLinkId: IdType;
}

export interface IGetBrandLinksByTypeParams {
    /**
     * The id of the brand.
     */
    id: IdType;

    /**
     * The type of the link.
     */
    type: BrandLinkType;

    /**
     * #NOTE: Will update document in feature
     */
    isReplaceTemplate?:boolean; 
}

/**
 * This class is used to create, update for the brand link.
 */
export interface ICreateBrandLinkData {
    /**
     * The parent brand link id. If this is null, it means the link is a node link.
     */
    parentBrandLinkId?: string | null;

    /**
     * The name.
     */
    name?: string | null;

    /**
     * @remarks string - enum
     */
    type?: BrandLinkType;

    /**
     * The styles of the link.
     */
    styles?: string | null;

    /**
     * The icon url.
     *
     * @remarks string - uri
     */
    iconUrl?: string | null;

    /**
     * The reference link. Clicking the link redirects to the specified URL. To use a local path, provide a relative path in the format: /path/to/your/page.
     *
     * @remarks string - uri
     */
    link?: string | null;

    /**
     * The order numer of the link.
     */
    zOrder?: number | null;

    /**
     * @remarks string - enum
     */
    status?: BrandLinkStatus;

    /**
     * The description.
     */
    description?: string | null;
}

export interface IDeleteBrandLinkParams {
    /**
     * The id of the domain.
     */
    id: IdType;

    /**
     * The id of the brand link.
     */
    brandLinkId: IdType;
}

export interface IUpdateLinkParams {
    /**
     * The id of the domain.
     */
    id: IdType;

    /**
     * The id of the brand link.
     */
    brandLinkId: IdType;
}
/**
 * This class is used to create, update for the brand link.
 */
export type IUpdateBrandLinkData = ICreateBrandLinkData;
//#endregion
