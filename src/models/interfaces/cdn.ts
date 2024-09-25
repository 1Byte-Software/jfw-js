import { DateType, IdType } from '../types';

export interface IMedia {
  id?: IdType;
  cdnLink: string;
  zOrder?: number;
  mimeType?: string;
  relativePath?: string;
  description?: string;
  createdDate?: DateType;
}
