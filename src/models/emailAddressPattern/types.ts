import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { ICountry } from '../country';
import { ITrackingEvent } from '../trackingEvent';

export interface IEmailAddressPattern extends IBaseObject {
    countryId: IdType;
    country?: ICountry;
    trackingEventId: IdType;
    trackingEvent?: ITrackingEvent;

    subject: string;
    emailContent: string;
}

//#region API types
export interface IQueryEmailAddressPatternParams extends IPageable, ISortable {
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
