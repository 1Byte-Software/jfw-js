import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { ICountry } from '../country';
import { IEvent } from '../event';

export interface IEmailAddressPattern extends IBaseObject {
    countryId: IdType;
    country?: ICountry;
    eventId: IdType;
    event?: IEvent;

    subject: string;
    emailContent: string;
}

//#region API types
export interface IQueryEmailAddressPatternParams extends IPageable, ISortable {
    eventId?: IdType;
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
