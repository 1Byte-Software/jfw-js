const REST = 'issues';
const REST_ISSUE_REACTION = 'issue-reactions';

export const ISSUE_PATH = {
    CREATE_ISSUE: `${REST}`,
    CREATE_ISSUE_REACTION: `${REST_ISSUE_REACTION}`,
    DELETE_ISSUE: `${REST}/:id`,
    DELETE_ISSUE_REACTION: `${REST_ISSUE_REACTION}/:id`,
    GET_ISSUES: `${REST}`,
    GET_ISSUE: `${REST}/:id`,
    GET_ISSUES_BY_LIST_ID: `${REST}/by-list`,
    GET_CHILDREN_ISSUES: `${REST}/:id/children`,
    UPDATE_ISSUE: `${REST}/:id`,
};
