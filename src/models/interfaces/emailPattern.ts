import { DateType, IdType } from '../types';
import { ICountry } from './country';
import { ICommonFilterParams } from './filter';
import { ITrackingAction } from './trackingAction';

export interface IEmailPattern {
  id: IdType;
  countryId: IdType;
  country?: ICountry;
  subject: string;
  emailContent: string;
  trackingEventId: IdType;
  trackingEvent?: ITrackingAction;
  createdDate: DateType;
}
export interface IGetListEmailPatternsParams extends ICommonFilterParams {
  subject?: string;
  trackingEventId?: IdType;
  countryCode?: IdType;
}
export interface IAddEmailPatternPayload {
  countryCode?: string;
  languageCode?: string;
  eventId?: IdType;
  subject: string;
  body: string;
  tags?: string;
}
export interface IPlaceholderKey {
  [key: string]: string[];
}
