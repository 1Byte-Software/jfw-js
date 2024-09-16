// Define an object to represent different permissions.
export const PERMISSION = {
    class: {
        view: "CLASS.VIEW",
    },
    community: {
        upload: "COMMUNITY.UPLOAD",
        download: "COMMUNITY.DOWNLOAD",
        add: "COMMUNITY.ADD",
        delete: "COMMUNITY.DELETE",
        update: "COMMUNITY.UPDATE",
        edit: "COMMUNITY.EDIT",
        deleteComment: "COMMUNITY.DELETE-COMMENT",
    },
    course: {
        upload: "COURSE.UPLOAD",
        download: "COURSE.DOWNLOAD",
        add: "COURSE.ADD",
        delete: "COURSE.DELETE",
        update: "COURSE.UPDATE",
        edit: "COURSE.EDIT",
    },
    debugMode: "SYSTEM.DEBUGMODE",
    issue: {
        delete: "ISSUE.DELETE",
    },
    lesson: {
        download: "LESSON.DOWNLOAD",
        add: "LESSON.CREATE",
        edit: "LESSON.EDIT",
        upload: "LESSON.UPLOAD",
    },
    raiseHand: {
        viewAll: "RAISE-HAND.VIEW-ALL",
        edit: "RAISE-HAND.EDIT",
        delete: "RAISE-HAND.DELETE",
    },
    score: {
        view: "SCORE.VIEW",
        edit: "SCORE.EDIT",
        delete: "SCORE.DELETE",
        create: "SCORE.CREATE",
    },
    user: {
        view: "USER.VIEW",
    },
};
