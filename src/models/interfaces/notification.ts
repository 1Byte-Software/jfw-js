import { IdType } from "../types";
import { IPaginationParams } from "./common";

export interface IGetNotificationRequestParams extends IPaginationParams {
    status?: string;
}
export interface IUpdateNotificationRequestParams {
    status: string;
}
export interface IUpdateAllNotificationsParams {
    status: string;
}
export interface INotification {
    createdDate: string;
    emailBody: string;
    emailSubject: string;
    id: IdType;
    patternCode: string;
    supportCode: string;
    status: string;
}
