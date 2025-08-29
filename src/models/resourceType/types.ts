import { IBaseObject, IdType } from '../base';
import { ResourceTypeType, ResourceTypeTypeFilter } from './constants';

/**
 * This class represents the ResourceType data transfer object.
 */
export interface IResourceType extends IBaseObject {
    /**
     * The parent brand id.
     */
    parentBrandId?: IdType | null;

    /**
     * The GUID.
     *
     * @remarks uuid
     */
    guid: string;

    /**
     * The ResourceType code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the ResourceType.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the ResourceType.
     *
     * @remarks min: 1
     */
    description: string;

    /**
     * The tags of the ResourceType.
     */
    tags?: string | null;

    /**
     * The type of the ResourceType.
     *
     * @remarks enum
     */
    type: ResourceTypeType;
}

//#region API types
export interface IGetResourceTypesParams {
    /**
     * Filter by code.
     */
    code?: string;

    /**
     * Filter by name.
     */
    name?: string;

    /**
     * Filter by tags.
     */
    tags?: string;

    /**
     * Filter by description.
     */
    description?: string;

    /**
     * The param type to apply filter.
     *
     * @remarks enum
     */
    type?: ResourceTypeTypeFilter;

    /**
     * Filter by keywords.
     */
    keywords?: string;
}

/**
 * This class represents the ResourceType data transfer object for command requests.
 */
export interface ICreateResourceTypeParams {
    /**
     * The ResourceType code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the ResourceType.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the ResourceType.
     *
     * @remarks min: 1
     */
    description: string;
}

/**
 * This class represents the ResourceType data transfer object for command requests.
 */
export type IUpdateResourceTypeParams = ICreateResourceTypeParams;
//#endregion
