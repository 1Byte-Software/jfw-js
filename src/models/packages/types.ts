import { IBaseObject, IdType } from '../base';
import { IFeature } from '../feature';
import { IPrice } from '../price';

export interface IPackage extends IBaseObject {
    code: string;
    description: string;
    features: IFeature[];
    isDefault: boolean;
    name: string;
    prices: IPrice[];
    tags: string | null;
    status: string;
    zOrder: number;
    image?: string;
    styles?: string;
    patternAvatarUrl?: string;
    isFree: boolean;
}

//#region API types
export interface IQueryPackageParams {
    priceId?: IdType;

    code?: string;
    name?: string;
    description?: string;
    tags?: string;
}

export interface IGetPackageByIdRequestPath {
    packageId: string;
}
export interface ICreatePackageParams {
    code?: string;
    name?: string;
    image?: string;
    patternAvatarUrl?: string;
    styles?: string; // JSON string
    description?: string | null;
    tags?: string | null;
    zOrder?: number | null;
}

export type IUpdatePackageParams = ICreatePackageParams;

export interface IAddFeaturesToPackageParams {
    featureId: IdType;
    value: number;
}

//#endregion
