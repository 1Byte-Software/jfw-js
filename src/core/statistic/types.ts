import { DateType } from '../../models';
import { StatisticTypeResponse } from './constants';

export interface IStatisticCommon {
    date: string;
    quantity: number;
}

export interface IStatisticCommonParams {
    /**
     * The end date to filter the statistics. The format is "yyyy-MM-dd HH:mm:ss".
     * @example 2024-02-23 00:00:00
     */
    startDate?: DateType;

    /**
     * The end date to filter the statistics. The format is "yyyy-MM-dd HH:mm:ss".
     * @example 2024-02-23 23:59:59
     */
    endDate?: DateType;

    /**
     * The type of response. This value can be "MONTH" or "DATE".
     */
    typeResponse?: StatisticTypeResponse;
}
