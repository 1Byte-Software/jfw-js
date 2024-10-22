import { DateType, IdType } from '../types';

export interface IStatistic {
  date: string;
  quantity: number;
}
export interface IStatisticCommonParams {
  brandId: IdType;
  startDate: DateType;
  endDate: DateType;
  typeResponse: string;
}
