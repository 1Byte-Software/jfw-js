import { IdType } from '../base';
import { ResourceTypeType } from './constants';

export interface IResourceType {
    id: IdType;
    parentBrandId: IdType | null;
    guid: string;
    code: string;
    name: string;
    description: string;
    tags: string | null;
    type: ResourceTypeType;
}

//#region API types
export interface IGetResourceTypesParams {
    /** Filter by code */
    code?: string;

    /** Filter by name */
    name?: string;

    /** Filter by tags */
    tags?: string;

    /** Filter by description */
    description?: string;

    /**
     * The param type to apply filter.
     */
    type?: ResourceTypeType;

    /** Filter by keywords */
    keywords?: string;
}

/**
 * This class represents the ResourceType data transfer object for command requests.
 */
export interface ICreateResourceTypeData {
    /**
     * The ResourceType code.
     */
    code: string;

    /**
     * The name of the ResourceType.
     */
    name: string;

    /**
     * The description of the ResourceType.
     */
    description?: string | null;

    /**
     * The tags of the ResourceType.
     */
    tags?: string | null;

    /**
     * #NOTE: Not in the document yet
     */
    parentBrandId?: IdType | null;
}

/**
 * This class represents the ResourceType data transfer object for command requests.
 */
export type IUpdateResourceTypeData = ICreateResourceTypeData;
//#endregion
