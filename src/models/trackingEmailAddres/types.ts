import { DateType, IdType } from '../base';

export interface ITrackingEmailAddress {
    id: IdType;
    userId: IdType | null;
    supportCode: string;
    patternCode: string;
    emailFrom: string;
    emailTo: string;
    emailSubject: string;
    emailBody: string;
    sentTime: DateType;
    trackingEmailType: number;
    status: number;
    createdDate: DateType;
}
//#region API types
export interface IQueryTrackingEmailAddressParams {
    id?: IdType;
    status?: number;
    brandId?: IdType;
}

//#endregion
