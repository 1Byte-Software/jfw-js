import { IPageable } from '../../core';
import { DateType, IdType } from '../base';

export interface IConfiguration {
    id: IdType;
    brandId: IdType;
    name: string;
    groupCode: string;
    code: string;
    value: string;
    description: string;
    userId: IdType;
    createdDate: DateType;
}

//#region API types
export interface IQueryConfigurationPrams extends IPageable {
    name?: string;
    groupCode?: string;
    id?: IdType;
}

export interface ICreateConfigurationParams {
    brandId: IdType;
    name: string;
    code: string;
    value: string;
    description?: string;
    userId?: IdType;
    groupCode: string;
}

export interface IUpdateConfigurationParams {
    value: string;
    code: string;
    name: string;
    groupCode: string;
    description: string;
}

//#endregion
