import { IdType } from '../asdas';
import { IBaseFilter, IBaseObject } from '../base';
import { ICountry, ITrackingAction } from '../interfaces';

export interface IEmailAddressPattern extends IBaseObject {
    countryId: IdType;
    country?: ICountry;
    trackingEventId: IdType;
    trackingEvent?: ITrackingAction;

    subject: string;
    emailContent: string;
}

//#region API types
export interface IQueryEmailAddressPatternParams extends IBaseFilter {
    trackingEventId?: IdType;
    countryCode?: IdType;

    subject?: string;
}

export interface ICreateEmailAddressPatternParams {
    eventId?: IdType;

    countryCode?: string;
    languageCode?: string;

    subject: string;
    body: string;
    tags?: string;
}

export type IUpdateEmailAddressPatternParams = ICreateEmailAddressPatternParams;

export interface IEmailAddressPatternPlaceholderKey {
    [key: string]: string[];
}
//#endregion
