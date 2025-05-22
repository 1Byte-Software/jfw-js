import { IPageable } from '../../core';
import { IBaseObject } from '../base';
import { IssueCategoryStatus } from './constants';

export interface IIssueCategory extends IBaseObject {
    code: string;
    groupCode: string | null;
    name: string;
    description: string | null;
    isSystem: boolean;
    links?: string;
    tags: string | null;
}

//#region API types
/**
 * Parameters for getting issue categories
 */
export interface IGetIssueCategoriesParams extends IPageable {
    /**
     * Filter by group code.
     */
    groupCode?: string;

    /**
     * Filter by code.
     */
    code?: string;

    /**
     * Filter by name.
     */
    name?: string;

    /**
     * Filter by description.
     */
    description?: string;

    /**
     * Filter by suggestion url.
     */
    suggestionUrl?: string;

    /**
     * Filter by tags.
     */
    tags?: string;

    /**
     * Filter by z order.
     * @remarks integer - int64
     */
    zOrder?: number;

    /**
     * Filter by status.
     * @remarks string - enum
     * @example
     * 0 - Inactive
     * 1 - Active
     */
    status?: IssueCategoryStatus;

    /**
     * Filter by is system.
     */
    isSystem?: boolean;
}

/**
 * The issue category of the dto transfer when creating or updating.
 */
export interface ICreateIssueCategoryData {
    /**
     * The group code of the issue category. If null, it is a root issue category.
     */
    groupCode?: string | null;

    /**
     * The code of the issue category.
     * @remarks string - min: 1
     */
    code: string;

    /**
     * The name of the issue category.
     * @remarks string - min: 1
     */
    name: string;

    /**
     * The description of the issue category.
     */
    description?: string | null;

    /**
     * Is system issue category.
     * @defaultValue false
     */
    isSystem?: boolean;

    /**
     * The tags of the issue category.
     */
    tags?: string | null;

    /**
     * The links of the issue category.
     * @remarks string - uri
     * @example https://www.example.com/suggestion
     */
    suggestionUrl?: string | null;
}

/**
 * The issue category of the dto transfer when creating or updating.
 */
export type IUpdateIssueCategoryData = ICreateIssueCategoryData;
//#endregion
