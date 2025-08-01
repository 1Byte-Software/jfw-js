export type JFWError = {
    code?: string | null;

    message?: string | null;

    /**
     * @readonly
     */
    correlationId?: string | null;
};
