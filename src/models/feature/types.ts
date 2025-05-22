import { IPageable, ISortable } from '../../core';
import { IdType } from '../base';
import { FeatureStatus, FeatureType } from './constants';

export interface IFeature {
    id: IdType;
    parentBrandId: IdType;
    trackingEventId: IdType | null;
    type: FeatureType;
    code: string;
    name: string;
    // Title will required in feature
    title: string | null;
    image: string | null;
    styles: string | null;
    description: string | null;
    tags: string | null;
    zOrder: number | null;
    status: FeatureStatus;
    isUnlimited: boolean;
    quantity: number;
    unit: string;
}
//#region API types

/**
 * Parameters for getting features
 */
export interface IGetFeaturesParams extends IPageable, ISortable {
    /**
     * Filter by the package id
     */
    packageId?: IdType;

    /**
     * Filter by the event id
     */
    eventId?: IdType;

    /**
     * Filter by the feature type
     */
    type?: FeatureType;

    /**
     * Filter by the code
     */
    code?: string;

    /**
     * Filter by the name
     */
    name?: string;

    /**
     * Filter by the description
     */
    description?: string;

    /**
     * Filter by the tags
     */
    tags?: string;

    /**
     * Filter by the notes
     */
    notes?: string;

    /**
     * Filter by the status
     */
    status?: FeatureStatus;
}

/**
 * This class represents the feature data transfer object for the command request.
 * #JFW-296
 */
export interface ICreateFeatureData {
    /**
     * The tracking event id. This value represents the event that the feature belongs to.
     * @remarks string - min: 1
     */
    eventId: IdType;

    /**
     * The type of feature
     */
    type: FeatureType;

    /**
     * The code of the feature
     * @remarks string - min: 1
     */
    code: string;

    /**
     * The name of the feature
     * @remarks string - min: 1
     */
    name: string;

    /**
     * The title of the feature
     */
    title: string;

    /**
     * The image of the feature. This value must be a valid URL.
     * @remarks string - uri
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
     * The order number in the list. This property is used to sort the features in the list when displaying them.
     * @remarks integer - int64
     */
    zOrder?: number;

    /**
     * The status of the feature
     */
    status?: FeatureStatus;
}

/**
 * This class represents the feature data transfer object for the command request.
 */
export type IUpdateFeatureData = ICreateFeatureData;

//#endregion
