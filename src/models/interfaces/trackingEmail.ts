import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface ITrackingEmail {
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
export interface IGetListTrackingEmailsParams extends ICommonFilterParams {
  id?: IdType;
  status?: number;
  brandId?: IdType;
}
