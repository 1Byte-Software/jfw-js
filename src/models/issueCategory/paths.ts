const REST = 'issue-categories';

export const ISSUE_CATEGORY_PATH = {
    CREATE_ISSUE_CATEGORY: `${REST}`,
    DELETE_ISSUE_CATEGORY: `${REST}/:id`,
    GET_ISSUE_CATEGORIES: `${REST}`,
    GET_ISSUE_CATEGORY: `${REST}/:id`,
    UPDATE_ISSUE_CATEGORY: `${REST}/:id`,
};
