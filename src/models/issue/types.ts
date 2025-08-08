import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { IBaseUser } from '../user';
import {
    IssuePriority,
    IssueReactionStatus,
    IssueReactionType,
    IssueStatus,
} from './constants';

export interface IIssue {
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
     * The assignee user id of the issue.
     */
    assigneeUserId?: IdType | null;

    /**
     * The parent id of the issue.
     */
    parentId?: IdType | null;

    /**
     * The name of the issue.
     */
    name?: string | null;

    /**
     * The description of the issue.
     */
    description?: string | null;

    /**
     * The reference type of the issue.
     *
     * @remarks int32
     */
    refType?: number | null;

    /**
     * The reference object of the issue.
     */
    refObject?: string | null;

    /**
     * The reference id of the issue.
     *
     * @remarks int64
     */
    refId?: number | null;

    /**
     * The content of the issue.
     *
     * @remarks min: 1
     */
    content: string;

    /**
     * The issue cc of the issue.
     */
    issueCc?: string | null;

    /**
     * The issue type code of the issue.
     */
    issueCategoryCode?: string | null;

    /**
     * The issue type code of the issue.
     */
    issueCategoryName?: string | null;

    /**
     * The priority of the issue.
     *
     * @remarks enum
     */
    priority?: IssuePriority | null;

    /**
     * The tags of the issue.
     */
    tags?: string | null;

    /**
     * The status of the issue.
     *
     * @remarks enum
     */
    status?: IssueStatus | null;

    /**
     * This is the list of media urls.
     */
    medias?: string[] | null;

    /**
     * The children of the issue.
     */
    children?: IIssue[] | null;

    /**
     * This is the count of the children.
     *
     * @remarks int32
     */
    childrenCount?: number;

    /**
     * The reactions of the issue.
     */
    reactions?: IIssueReaction[] | null;

    /**
     * This class is used to return user information to client.
     */
    user?: IBaseUser;
}

/**
 * The reactions of the issue.
 */
export interface IIssueReaction {
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
     * The type of the reaction.
     *
     * @remarks enum
     */
    type: IssueReactionType;

    /**
     * The user code of the issue.
     *
     * @remarks min: 1
     */
    userId: IdType;
}

//#region API types

export interface IGetIssuesParams extends IPageable, ISortable {
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
     *
     * @remarks int32
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
     *
     * @remarks enum
     */
    status?: IssueStatus;

    /**
     * Filter with keywords.
     */
    keywords?: string;
}

/**
 * The issue of the dto transfer, It's presentation with the create issue request from client.
 */
export interface ICreateIssueParams {
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
     *
     * @remarks min: 1
     */
    content: string;

    /**
     * The referrer id of the issue.
     *
     * @remarks int64
     */
    refId?: number;

    /**
     * The referrer object of the issue.
     */
    refObject?: string | null;

    /**
     * The referrer type of the issue.
     *
     * @remarks int32
     */
    refType?: number | null;

    /**
     * Assignee user id of the issue.
     */
    assigneeId?: IdType | null;

    /**
     * @remarks enum
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
 * The issue of the dto transfer, It's presentation with the update issue request from client.
 */
export interface IUpdateIssueParams {
    /**
     * The id of issue.
     */
    id: IdType;

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
     *
     * @remarks min: 1
     */
    content: string;

    /**
     * @remarks enum
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
     * @remarks enum
     */
    status?: IssueStatus;
}

/**
 * This class presents the Reaction Issue Create Request Dto in the system.
 */
export interface ICreateIssueReactionParams {
    /**
     * The id of the issue.
     * @remarks min: 1
     */
    issueId: IdType;

    /**
     * The type of reaction for the issue.
     * @remarks enum
     */
    issueReactionType: IssueReactionType;

    /**
     * The status of the issue reaction.
     * @remarks enum
     */
    status: IssueReactionStatus;
}

//#endregion
