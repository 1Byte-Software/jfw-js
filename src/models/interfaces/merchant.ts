import { IdType } from '../types';

export interface IMerchant {
  id: IdType;
  type: number;
  code: string;
  name: string;
  website: string;
}
