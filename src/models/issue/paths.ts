const REST = 'issues';
const REST_ISSUE_REACTION = 'issue-reactions';

export const ISSUE_PATH = {
    QUERY: `${REST}`,
    GET_BY_ID: `${REST}/:id`,
    GET_BY_LIST: `${REST}/by-list`,
    UPDATE_BY_ID: `${REST}/:id`,
    CREATE: `${REST}`,
    DELETE_BY_ID: `${REST}/:id`,

    // #JFW-44: Sửa api/issues/childrens -> api/issues/children. Vì children là số nhiều rồi
    GET_CHILDREN: `${REST}/:id/childrens`,
};

export const ISSUE_REACTION_PATH = {
    CREATE: `${REST_ISSUE_REACTION}`,
    DELETE_BY_ID: `${REST_ISSUE_REACTION}/:id`,
};
