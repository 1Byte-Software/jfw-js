import { IPageable, ISortable } from '../../core';
import { IBaseObject } from '../base';

export interface IFeature extends IBaseObject {
    code: string;
    quantity: number;
    description: string;
    displayDataEvenExpired: boolean;
    featureValue: number;
    isBeta: boolean;
    name: string;
    osAvailable: string | null;
    privateNotes: string | null;
    rootAccessRequired: boolean;
    status: string;
    tags: string | null;
    zOrder: number;
}
//#region API types

export interface IQueryFeatureParams extends IPageable, ISortable {
    name?: string;
}

export interface ICreateFeatureParams {
    code: string;
    name: string;
    description?: string;
    privateNotes?: string;
    tags?: string;
    status: number;
}

export type IUpdateFeatureParams = ICreateFeatureParams;

//#endregion
