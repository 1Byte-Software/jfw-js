import { DateType, IdType } from '../../models';

export interface IStatisticCommon {
    date: string;
    quantity: number;
}

export interface IStatisticCommonParams {
    startDate: DateType;
    endDate: DateType;
    typeResponse: string;
}
