import { DateType, IdType } from '../types';

export interface IMedia {
  id?: IdType;
  cdnLink: string;
  zOrder?: number;
  nameFile?: string;
  mimeType?: string;
  relativePath?: string;
  description?: string;
  createdDate?: DateType;
}

export interface ICdn {
  fileExtension: string;
  fileId: string;
  fileName: string;
  fileSize: number;
  fileUrl: string;
  mimeType: string;
  originalFilename?: string;
  prefixFolder: string;
  relativePath: string;
  testMode: boolean;
  url: string;
  // fileId: 'MBEKxdemD3Vd9NzV';
  // fileName: 'HLT7RT7OZcTjLcfuVeAjGrTUbifPeNputUvsYvYAQw=19ad853a-03c4-4991-a715-f7f441a30963.png';
  // fileSize: 328395;
  // fileUrl: 'https://cdn.jframework.space/storage?fileId=MBEKxdemD3Vd9NzV';
  // mimeType: 'image/png';
  // prefixFolder: 'live\\pte\\app\\lesson';
  // relativePath: 'live/pte/app/lesson/image/HLT7RT7OZcTjLcfuVeAjGrTUbifPeNputUvsYvYAQw=19ad853a-03c4-4991-a715-f7f441a30963.png';
  // testMode: false;
  // url: 'https://cdn.jframework.space/live/pte/app/lesson/image/HLT7R';
}
