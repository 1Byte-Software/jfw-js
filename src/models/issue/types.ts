import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { IMedia } from '../cdn';
import { IIssueCategory } from '../issueCategory';
import {
    IssuePriority,
    IssueReactionStatus,
    IssueReactionType,
    IssueStatus,
} from './constants';

export interface IIssue extends IBaseObject {
    assigneeUserId?: IdType;
    parentId?: IdType;
    name: string;
    description?: string;
    refType: number;
    refObject: string;
    refId: number;
    content: string;
    issueCc?: string;
    issueTypeCode?: string | null;
    issueCategoryCode?: string;
    issueTypeName?: string | null;
    issueCategoryName?: string;
    priority?: string;
    tags?: string;
    status?: string;
    medias: IMedia[];
    children: IIssue[];
    childrenCount: number;
    reactions: IIssueReaction[];
    user: IUserIssue;
}

export interface IIssueReaction {
    id: IdType;
    userId: IdType;
}

export interface IUserIssue {
    id: IdType;
    packageId: IdType;

    code: string;
    packageCode: string;

    avatar?: string;
    nickName: string;
    emailAddress: string;
    roles: string[];
}

//#region API types

/**
 * #JFW-299
 */
export interface IGetIssuesParams extends IPageable, ISortable {
    /**
     * Filter with keywords.
     */
    keywords?: string;

    /**
     * This property represents the only parent filter.
     */
    onlyParent?: boolean;

    /**
     * Filter with user id.
     */
    userId?: IdType;

    /**
     * Filter with device id.
     */
    deviceId?: IdType;

    /**
     * Filter with assignee id.
     */
    assigneeId?: IdType;

    /**
     * Filter with issue type id.
     */
    issueTypeId?: IdType;

    /**
     * Filter with parent id.
     */
    parentId?: IdType;

    /**
     * Filter with name.
     */
    name?: string;

    /**
     * Filter with description.
     */
    description?: string;

    /**
     * Filter with reference type.
     * @remarks integer · int32
     */
    refType?: number;

    /**
     * Filter with reference object.
     */
    refObject?: string;

    /**
     * Filter with reference id.
     */
    refId?: IdType;

    /**
     * Filter with content.
     */
    content?: string;

    /**
     * Filter with issue cc.
     */
    issueCc?: string;

    /**
     * Filter with tags.
     */
    tags?: string;

    /**
     * Filter with status.
     */
    status?: string;

    /**
     * The organizations.
     */
    organizationCodes?: string[];
}

/**
 * The issue of the dto transfer, It's presentation with the create issue request from client.
 */
export interface ICreateIssueData {
    /**
     * The id of the issue category.
     */
    issueCategoryId?: IdType | null;

    /**
     * The parent id of the issue. If the issue is sub-issue, it's parent id is the parent issue id.
     */
    parentId?: IdType | null;

    /**
     * The content of the issue.
     * @remarks string · min: 1
     */
    content: string;

    /**
     * The referrer id of the issue.
     * @remarks integer · int64
     */
    refId?: number;

    /**
     * The referrer object of the issue.
     */
    refObject?: string | null;

    /**
     * The referrer type of the issue.
     * @remarks integer · int32
     */
    refType?: number | null;

    /**
     * Assignee user id of the issue.
     */
    assigneeId?: IdType | null;

    /**
     * Priority of the issue.
     * @remarks enum
     * Possible values:
     * - 1 - Low
     * - 2 - Medium
     * - 3 - High
     * - 4 - Urgent
     */
    priority?: IssuePriority | null;

    /**
     * The name of the issue.
     */
    name?: string | null;

    /**
     * The description of the issue.
     */
    description?: string | null;

    /**
     * The cc of the issue. This value is the email address of the user.
     */
    issueCc?: string | null;

    /**
     * The tags of the issue. This value is the tags of the issue.
     */
    tags?: string | null;
}

/**
 * The issue of the dto transfer, It's presentation with the create issue request from client.
 */
export interface IUpdateIssueData {
    /**
     * Assignee user id of the issue.
     */
    assigneeId?: IdType | null;

    /**
     * The name of the issue.
     */
    name?: string | null;

    /**
     * The description of the issue.
     */
    description?: string | null;

    /**
     * The content of the issue.
     * @remarks string · min: 1
     */
    content: string;

    /**
     * Priority of the issue.
     * @remarks enum
     * Possible values:
     * - 1 - Low
     * - 2 - Medium
     * - 3 - High
     * - 4 - Urgent
     */
    priority?: IssuePriority | null;

    /**
     * The cc of the issue. This value is the email address of the user.
     */
    issueCc?: string | null;

    /**
     * The tags of the issue. This value is the tags of the issue.
     */
    tags?: string | null;

    /**
     * Status of the issue.
     * @remarks enum
     * Possible values:
     * - 0 - Inactive
     * - 1 - Active
     */
    status?: IssueStatus | null;
}

/**
 * This class presents the Reaction Issue Create Request Dto in the system.
 */
export interface ICreateIssueReactionData {
    /**
     * The id of the issue.
     * @remarks string · min: 1
     */
    issueId: IdType;

    /**
     * The type of reaction for the issue.
     * @remarks string · enum
     * Possible values:
     * - 0 - Dislike
     * - 1 - Like
     * - 2 - Love
     * - 3 - Care
     * - 4 - Haha
     * - 5 - Wow
     * - 6 - Angry
     */
    issueReactionType: IssueReactionType;

    /**
     * The status of the issue reaction.
     * @remarks string · enum
     * Possible values:
     * - 0 - Inactive
     * - 1 - Active
     */
    status: IssueReactionStatus;
}

//#endregion
