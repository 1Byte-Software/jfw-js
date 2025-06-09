const REST = 'issue-categories';

export const ISSUE_CATEGORY_PATH = {
    CREATE_ISSUE_CATEGORY: `v1/${REST}`,
    DELETE_ISSUE_CATEGORY: `v1/${REST}/{id}`,
    GET_ISSUE_CATEGORIES: `v1/${REST}`,
    GET_ISSUE_CATEGORY: `v1/${REST}/{id}`,
    UPDATE_ISSUE_CATEGORY: `v1/${REST}/{id}`,
};
