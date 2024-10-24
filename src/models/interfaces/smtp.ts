import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface ISmtp {
  id: IdType;
  name: string;
  description?: string;
  smtpHost: string;
  smtpPort: number;
  smtpUsername: string;
  useTls: boolean;
  isDefault: boolean;
  createdDate: DateType;
}
export interface IGetListSmtpParams extends ICommonFilterParams {}
export interface IAddSMTPPayload {
  name: string;
  description?: string;
  smtpHost: string;
  smtpPort: number;
  smtpUsername: string;
  useTls?: boolean;
  isDefault?: boolean;
}
