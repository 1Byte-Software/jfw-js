const REST = 'issues';
const REST_ISSUE_REACTION = 'issue-reactions';

export const ISSUE_PATH = {
    CREATE_ISSUE: `v1/${REST}`,
    CREATE_ISSUE_REACTION: `v1/${REST_ISSUE_REACTION}`,
    DELETE_ISSUE: `v1/${REST}/:id`,
    DELETE_ISSUE_REACTION: `v1/${REST_ISSUE_REACTION}/:id`,
    GET_ISSUES: `v1/${REST}`,
    GET_ISSUE: `v1/${REST}/:id`,
    GET_ISSUES_BY_LIST_ID: `v1/${REST}/by-list`,
    GET_CHILDREN_ISSUES: `v1/${REST}/:id/children`,
    UPDATE_ISSUE: `v1/${REST}/:id`,
};
