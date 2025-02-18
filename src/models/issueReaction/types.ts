import { IdType } from '../asdas';

export interface IIssueReaction {
    id: IdType;
    userId: IdType;
}

//#region API types
export interface ICreateIssueReactionParams {
    issueId: IdType;

    issueReactionType: number;
    status: number;
}
//#endregion
