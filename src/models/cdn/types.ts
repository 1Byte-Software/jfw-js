import { IBaseObject, IdType } from '../base';

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
export interface ICDN {
    fileId: string;
    fileName: string;
    originalFilename?: string;
    prefixFolder: string;
    relativeUrl: string;
    url: string;
    fileUrl: string;
    fileExtension: string;
    mimeType: string;
    fileSize: number;
    testMode: boolean;
}

export interface IUploadCDNData {
    zOrder?: number;
    uploadFile?: File;
    fileName?: string;
    prefixFolder?: string;
    refObject?: string;
    refId?: IdType;
    notes?: string;
    tags?: string;

    /**
     * The CdnPathType variable is the root folder of the uploaded file in the CDN.
     * By default, it is set to "User". For further information, visit here: https://whitepaper.jframework.io/other-concepts/cdn/cdn-storage
     */
    cdnPathType?: string;
    testMode?: boolean;
}
