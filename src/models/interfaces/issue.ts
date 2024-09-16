import { DateType, IdType } from "../types";
import { IMedia } from "./cdn";
import { IPaginationParams } from "./common";

export interface ICreateIssuePayload {
    content: string;
    refId?: number;
    refObject?: string;
    parentId?: string;
    issueTypeCode?: string;
    priority?: string;
}
export interface IGetListIssuesParams extends IPaginationParams {
    refId: number;
    refObject: string;
    id?: string;
    brandCode: string;
}
export interface IIssueReaction {
    userId: string;
    id: string;
}
export interface IUserIssue {
    avatar?: string;
    code: string;
    nickName: string;
    packageCode: string;
    packageId: IdType;
    roles: string[];
    firstName?: string;
    lastName?: string;
    id: string;
}

export interface IIssue {
    createdDate: DateType;
    content: string;
    id: string;
    medias: IMedia[];
    children: IIssue[];
    refId: number;
    refObject: string;
    refType: number;
    reactions: IIssueReaction[];
    user: IUserIssue;
    listChildren?: IIssue[];
    parent?: IIssue;
    childrenCount: number;
}
export interface IAddReactionPayload {
    issueId: string;
    issueReactionType: number;
    status: number;
}
export interface IDeleteReactionPath {
    id: string;
}
export interface IGetListIssueTypesParams {
    brandCode: string;
}
export interface IIssueType {
    code: string;
    name: string;
}
