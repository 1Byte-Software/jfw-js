import { DateType } from '../../base';

export interface SummaryUserResponse {
    totalUsers: number;
    newUsersToday: number;
    newUsersThisWeek: number;
    newUsersThisMonth: number;
}

export interface DailyUserAnalyticItem {
    date: DateType;
    newUsers: number;
    totalUsers: number;
}

export interface UserGeographyAnalyticItem {
    countryCode: string;
    totalUsers: number;
}

//#region API types

//#endregion
