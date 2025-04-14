import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { IMedia } from '../cdn';
import { IIssueCategory } from '../issueCategory';
import { IssueReactionStatus, IssueReactionType } from './constants';

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
export interface IGetIssuesParams extends IPageable, ISortable {
    keywords?: string;

    onlyParent?: boolean;
    userId?: IdType;
    deviceId?: IdType;
    assigneeId?: IdType;
    issueTypeId?: IdType;
    parentId?: IdType;
    name?: string;
    description?: string;
    refType?: number;
    refObject?: string;
    refId?: IdType;
    content?: string;
    issueCc?: string;
    tags?: string;
    status?: string;
    organizationCodes?: string[];
}

export interface ICreateIssueData {
    issueCategoryId?: IdType | null;
    parentId?: IdType | null;

    content: string;
    refId?: number;
    refObject?: string | null;
    refType?: string | null;
    assigneeId?: IdType | null;
    priority?: string | null;
    name?: string | null;
    description?: string | null;
    issueCc?: string | null;
    tags?: string | null;
}

export type IUpdateIssueData = ICreateIssueData;

export interface ICreateIssueReactionData {
    issueId: IdType;
    issueReactionType: IssueReactionType;
    status: IssueReactionStatus;
}

//#endregion
