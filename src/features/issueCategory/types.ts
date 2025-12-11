import { IBaseObject, IdType } from '../base';
import { IssueCategoryStatus } from './constants';

export interface IIssueCategory extends IBaseObject {
    /**
     * The group code of the issue category.
     */
    groupCode?: string | null;

    /**
     * The parent id of the issue category.
     */
    parentId?: IdType | null;

    /**
     * The code of the issue category.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the issue category.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the issue category.
     */
    description?: string | null;

    /**
     * Is system issue category.
     */
    isSystem?: boolean | null;

    /**
     * The tags of the issue category.
     */
    tags?: string | null;

    /**
     * The links of the issue category.
     *
     * @remarks uri
     */
    suggestionURL?: string | null;
}

//#region API types
export interface IGetIssueCategoriesParams {
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
     * Filter by suggestion URL.
     */
    suggestionURL?: string;

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
export interface ICreateIssueCategoryParams {
    /**
     * The group code of the issue category. If null, it is a root issue category.
     */
    groupCode?: string | null;

    /**
     * The code of the issue category.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the issue category.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the issue category.
     */
    description?: string | null;

    /**
     * The tags of the issue category.
     */
    tags?: string | null;

    /**
     * The links of the issue category.
     *
     * @remarks uri
     */
    suggestionURL?: string | null;
}

/**
 * The issue category of the dto transfer when creating or updating.
 */
export type IUpdateIssueCategoryParams = ICreateIssueCategoryParams;
//#endregion
