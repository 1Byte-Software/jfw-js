import { DateType, IdType } from '../types';
import { IUser } from './user';

// ADD
export interface IDevice {
  id: IdType;
  name: string;
  code: string;
  osDevice: string;
  userId: IdType;
  user?: IUser;
  createdDate: DateType;
}
export interface ICheckUserAccessParams {
  userId: string;
  deviceCode: string;
}
