import { DateType, IdType } from '../base';
import { IFeature } from '../feature';
import { IPrice } from '../price';

export interface IPackage {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType;

    /**
     * The code of the package.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the package.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The image URL of the package.
     *
     * @remarks uri
     */
    imageURL?: string | null;

    /**
     * The pattern avatar URL of the package. This value is used to display the pattern avatar for the user having the package.
     *
     * @remarks uri
     */
    patternAvatarURL?: string | null;

    /**
     * The styles of the package. This value is a JSON string.
     */
    styles?: string | null;

    /**
     * The description of the package.
     */
    description?: string | null;

    /**
     * The tags of the package.
     */
    tags?: string | null;

    /**
     * Flag to indicate if the package is free.
     */
    isFree: boolean;

    /**
     * The order of the package.
     *
     * @remarks int64
     */
    zOrder?: number | null;

    /**
     * The features of the package.
     */
    features: IFeatureOfPackage[];

    /**
     * The prices of the package.
     */
    prices: IPrice[];

    /**
     * Flag to indicate if the package is default.
     */
    isDefault: boolean;
}

/**
 * This class provides the Feature of Package Dto.
 */
export interface IFeatureOfPackage extends IFeature {
    /**
     * The title of the package feature. This title is used to display the feature in the UI.
     *
     * @remarks min: 1
     */
    title?: string | null;

    /**
     * The unit of the package feature.
     *
     * @remarks min: 1
     */
    unit: string;

    /**
     * The quantity of the package feature. If the feature is unlimited, the quantity is not used.
     *
     * @remarks int32
     */
    quantity?: number | null;

    /**
     * Flag to indicate if the feature is unlimited. If true, the feature is unlimited. If false, the feature is limited to the quantity.
     */
    isUnlimited: boolean;
}

//#region API types
/**
 * This class is used to present the package command request data transfer object.
 */
export interface ICreatePackageParams {
    /**
     * The code of the package.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the package.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The image URL of the package.
     *
     * @remarks uri
     */
    imageURL?: string | null;

    /**
     * The pattern avatar URL of the package.
     *
     * @remarks uri
     */
    patternAvatarURL?: string | null;

    /**
     * The styles of the package. This value is a JSON string.
     */
    styles?: string | null;

    /**
     * The description of the package.
     */
    description?: string | null;

    /**
     * The tags of the package.
     */
    tags?: string | null;

    /**
     * The order of the package. By default, the value is 1.
     *
     * @remarks int64
     * @defaultValue `1`
     */
    zOrder?: number;
}
/**
 * This class is used to present the package command request data transfer object.
 */
export type IUpdatePackageParams = ICreatePackageParams;

/**
 * The package feature request to add feature into package.
 */
export interface IAddFeaturesToPackageParams {
    /**
     * The feature id.
     *
     * @remarks min: 1
     */
    featureId: string;

    /**
     * The title of the feature. This title is used to display the feature in the UI.
     */
    title?: string | null;

    /**
     * The unit of the feature.
     *
     * @remarks min: 1
     */
    unit: string;

    /**
     * The quantity of the feature follow by package.
     *
     * @remarks int32
     */
    quantity?: number | null;

    /**
     * Flag to indicate if the feature is unlimited. Default is false.
     */
    isUnlimited?: boolean | null;
}

//#endregion
