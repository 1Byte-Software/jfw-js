import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';
import { ITrackingAction } from './trackingAction';
import { IUser } from './user';

export interface ITrackingActivity {
  id: IdType;
  userId: IdType;
  createdDate: DateType;
  description: string;
  longitude: number;
  latitude: number;
  location: string;
  browserName: string;
  os: string;
  ipAddress: string;
  url: string;
  trackingEventId: IdType;
  user?: IUser;
  trackingEvent?: ITrackingAction;
}
export interface IGetListTrackingActivitiesParams extends ICommonFilterParams {
  userId?: IdType;
  trackingEventId?: IdType;
}
export interface ISaveActivitiesRequest {
  browserName: string;
  browserVersion: string;
  description: string;
  deviceId: null;
  ipAddress: string;
  latitude: number;
  location: string;
  longitude: number;
  os: string;
  requestFromMobile: boolean;
  trackingEventId: IdType;
  url: string;
  userAgent: string;
  userId: IdType;
}
