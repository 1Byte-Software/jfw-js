import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { IFeatureOfPackageBase } from '../packages';
import { FeatureStatus, FeatureType } from './constants';

/**
 * This class represents the feature data transfer object.
 */
export interface IFeature {
    /**
     * The id of the object.
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * The id of the brand that owns the feature.
     */
    parentBrandId?: IdType | null;

    /**
     * The id of the event.
     * @deprecated Will delete in future.
     */
    eventId?: IdType | null;

    /**
     * The type of the feature.
     *
     * @remarks enum
     */
    type: FeatureType;

    /**
     * The code of the feature. This code is used to identify the feature.
     */
    code: string;

    /**
     * The name of the feature.
     */
    name: string;

    /**
     * The unit of the feature.
     *
     * @remarks min: 1
     */
    unit: string;

    /**
     * The default value of the feature.
     *
     * @remarks int32
     */
    defaultValue: number;

    /**
     * The help URL of the feature.
     *
     * @remarks min: 1
     */
    helpURL: string;

    /**
     * The image of the feature.
     *
     * @remarks uri
     */
    image?: string | null;

    /**
     * The style of the feature. It is a JSON string.
     */
    styles?: string | null;

    /**
     * The description of the feature.
     */
    description?: string | null;

    /**
     * The tags of the feature.
     */
    tags?: string | null;

    /**
     * The zOrder number in the list. The default value is 1.
     *
     * @remarks int64
     */
    zOrder: number;

    /**
     * The status of the feature.
     *
     * @remarks enum
     */
    status: FeatureStatus;
}

//#region API types
export interface IGetFeaturesParams extends IPageable, ISortable<'zOrder'> {
    /**
     * Filter by the package id.
     */
    packageId?: IdType;

    /**
     * Filter by the event id.
     * @deprecated Will delete in future.
     */
    eventId?: IdType;

    /**
     * Filter by the feature type.
     *
     * @remarks enum
     */
    type?: FeatureType;

    /**
     * Filter by the code.
     */
    code?: string;

    /**
     * Filter by the name.
     */
    name?: string;

    /**
     * Filter by the description.
     */
    description?: string;

    /**
     * Filter by the tags.
     */
    tags?: string;

    /**
     * Filter by the notes.
     */
    notes?: string;

    /**
     * Filter by the status.
     *
     * @remarks enum
     */
    status?: FeatureStatus;

    /**
     * Filter by the keywords.
     */
    keywords?: string;
}

/**
 * This class represents the feature data transfer object for the command request.
 */
export interface ICreateFeatureParams {
    /**
     * The event id. This value represents the event that the feature belongs to.
     *
     * @remarks min: 1
     * @deprecated Will delete eventId in future
     */
    eventId?: IdType | null;

    /**
     * The type of the feature.
     *
     * @remarks enum
     */
    type?: FeatureType;

    /**
     * The code of the feature.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the feature.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The unit of the feature.
     *
     * @remarks min: 1
     */
    unit?: string | null;

    /**
     * The default value of the feature.
     *
     * @remarks int32
     */
    defaultValue?: number | null;

    /**
     * The help URL of the feature. This value must be a valid URL.
     *
     * @remarks uri
     */
    helpURL?: string | null;

    /**
     * The image of the feature. This value must be a valid URL.
     *
     * @remarks uri
     */
    image?: string | null;

    /**
     * The style of the feature. It is a JSON string. You can use this property to store the CSS styles of the feature.
     */
    styles?: string | null;

    /**
     * The description of the feature. The description can be a long text.
     */
    description?: string | null;

    /**
     * The tags of the feature. You can use this property to store the tags of the feature.
     */
    tags?: string | null;

    /**
     * The zOrder number in the list. This property is used to sort the features in the list when displaying them. By default, the value is 1.
     *
     * @remarks int64
     * @defaultValue `1`
     */
    zOrder?: number | null;

    /**
     * The status of the feature.
     *
     * @remarks enum
     */
    status?: FeatureStatus;
}

/**
 * This class represents the feature data transfer object for the command request.
 */
export type IUpdateFeatureParams = ICreateFeatureParams;

/**
 * The payload for add package to a feature
 */
export interface IAddPackageToFeatureParams extends IFeatureOfPackageBase {
    /**
     * The id of the package
     *
     * @remarks min: 1
     */
    packageId: IdType;
}

//#endregion
