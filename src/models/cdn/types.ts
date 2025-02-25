import { IBaseObject } from '../base';

/**
 * Cần kiểm tra lại, hình như IMedia là 1 đối tượng của vdt chứ không phải jfw
 */
export interface IMedia extends IBaseObject {
    cdnLink: string;
    zOrder?: number;
    nameFile?: string;
    mimeType?: string;
    relativePath?: string;
    description?: string;
}

/**
 * #VDT-142: Bổ sung type hoàn chỉnh cho các đối tượng trong jfw-js
 */
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
}
