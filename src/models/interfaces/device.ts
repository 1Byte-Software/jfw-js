import { DateType, IdType } from '../types';
import { IFilterDate, IPaginationParams } from './filter';
import { IUser } from './user';

export interface IDevice {
  appVersionNumber: string;
  code: string;
  createdDate: DateType;
  iccid: string | null;
  id: IdType;
  imei: string | null;
  imsi: string | null;
  isDefault: boolean;
  isMobileApp: boolean;
  modifiedDate: DateType;
  name: string;
  osDevice: string;
  phoneNumber: string | null;
  session: string;
  simCardInfo: string | null;
  status: number;
  tags: string | null;
  testMode: boolean;
  token: string | null;
  type: number;
  userId: IdType;
  user?: IUser;
}
export interface ICheckUserAccessParams {
  userId: string;
  deviceCode: string;
}
export interface IGetListDevicesParams extends IPaginationParams, IFilterDate {
  isPagination?: boolean;
  userId?: IdType;
  isMobile?: boolean;
}
