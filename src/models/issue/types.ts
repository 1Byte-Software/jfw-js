import { IPageable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { IMedia } from '../cdn';
import { IIssueCategory } from '../issueCategory';
import { IIssueReaction } from '../issueReaction';

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
export interface IQueryIssueParams extends IPageable {
    refId?: number;
    refObject?: string;
    id?: string;
    brandCode?: string;
    name?: string;
    issueTypeId?: string;
}

export interface ICreateIssueParams {
    parentId?: IdType;
    refId?: number;

    issueTypeCode?: string;

    content: string;
    refObject?: string;
    priority?: string;
}

export type IUpdateIssueParams = ICreateIssueParams;

//#endregion
