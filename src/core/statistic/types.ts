import { StatisticResponseType } from './constants';

export interface IStatisticCommon {
    date: string;
    quantity: number;
}

/**
 * The parameters used to filter statistics by date range and response type.
 */
export interface IStatisticCommonParams {
    /**
     * The start date to filter the statistics.
     * Format: "yyyy-MM-dd HH:mm:ss"
     *
     * @remarks date-time
     * @example "2024-02-23 00:00:00"
     */
    startDate: string;

    /**
     * The end date to filter the statistics.
     * Format: "yyyy-MM-dd HH:mm:ss"
     *
     * @remarks date-time
     * @example "2024-02-23 23:59:59"
     */
    endDate: string;

    /**
     * The type of response.
     * This value can be "MONTH" or "DATE".
     */
    typeResponse: StatisticResponseType;
}
