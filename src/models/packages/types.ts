import { DateType, IdType } from '../base';
import { IFeature } from '../feature';
import { IPrice } from '../price';

export interface IPackage {
    /**
     * Unique identifier of the package.
     */
    id: IdType;

    /**
     * The code of the package.
     */
    code: string;

    /**
     * The name of the package.
     */
    name: string;

    /**
     * The description of the package.
     */
    description: string;

    /**
     * The tags associated with the package.
     */
    tags: string | null;

    /**
     * The image URL of the package.
     */
    image: string | null;

    /**
     * The pattern avatar URL of the package.
     */
    patternAvatarUrl: string | null;

    /**
     * The styles of the package, in JSON string format.
     */
    styles: string | null;

    /**
     * The display order (z-index) of the package.
     */
    zOrder: number;

    /**
     * Whether this package is the default one.
     */
    isDefault: boolean;

    /**
     * Whether this package is free.
     */
    isFree: boolean;

    /**
     * The list of features included in the package.
     */
    features: IFeature[];

    /**
     * The list of prices associated with the package.
     */
    prices: IPrice[];

    /**
     * The created date of package.
     */
    createdDate: DateType;
}

//#region API types
/**
 * This class is used to present the package command request data transfer object.
 */
export interface ICreatePackageData {
    /**
     * The code of the package.
     * @remarks string - min: 1
     */
    code: string;

    /**
     * The name of the package.
     * @remarks string - min: 1
     */
    name: string;

    /**
     * The image URL of the package.
     * @remarks string - uri
     */
    image?: string | null;

    /**
     * The pattern avatar URL of the package.
     */
    patternAvatarUrl?: string | null;

    /**
     * The styles of the package.
     * @remarks string - json
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
     * The order of the package.
     */
    zOrder?: number | null;
}

/**
 * This class is used to present the package command request data transfer object.
 */
export type IUpdatePackageData = ICreatePackageData;

export interface IAddFeaturesToPackageData {
    featureId: IdType;
    value: number;
}

//#endregion
