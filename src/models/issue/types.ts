import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { IMedia } from '../cdn';
import { IIssueCategory } from '../issueCategory';
import { IIssueReaction } from '../issueReaction';
import { IssueReactionStatus, IssueReactionType } from './constants';

export interface IIssue extends IBaseObject {
    parentId?: IdType;
    refId: number;

    medias: IMedia[];
    children: IIssue[];
    reactions: IIssueReaction[];
    user: IUserIssue;
    listChildren?: IIssue[];
    parent?: IIssue;
    issueType?: IIssueCategory;

    content: string;
    refObject: string;
    refType: number;
    childrenCount: number;
    issueTypeCode?: string;
    description?: string;
}

export interface IUserIssue {
    id: IdType;
    packageId: IdType;

    code: string;
    packageCode: string;

    avatar?: string;
    nickName: string;
    firstName?: string;
    lastName?: string;
    roles: string[];
}

//#region API types
export interface IGetIssuesParams extends IPageable, ISortable {
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
