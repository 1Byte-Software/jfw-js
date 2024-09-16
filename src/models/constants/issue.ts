// Define an object to represent different codes of issue's types.
export const ISSUE_TYPE_CODE = {
    lesson: "LESSON-PROBLEM",
    mockTest: "MOCKTESTS-PROBLEM",
    class: "CLASS-PROBLEM",
};

// Define an object to represent different priorities of issue.
export const ISSUE_PRIORITY = {
    low: "Low",
    medium: "Medium",
    high: "High",
    urgent: "Urgent",
};

// Define an array of issue's priorities options for selection in a dropdown or similar UI component
export const ISSUE_PRIORITY_OPTIONS = [
    {
        value: ISSUE_PRIORITY.low,
        label: `Low`,
    },
    {
        value: ISSUE_PRIORITY.medium,
        label: `Medium`,
    },
    {
        value: ISSUE_PRIORITY.high,
        label: `High`,
    },
    {
        value: ISSUE_PRIORITY.urgent,
        label: `Urgent`,
    },
];
