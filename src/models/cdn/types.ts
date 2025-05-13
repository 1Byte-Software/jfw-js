import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';
import { IBaseUser } from '../user';
import { CDNPathType } from './constants';

/**
 * #NOTE: Need to check again, it seems IMedia is an object of vdt, not jfw
 */
export interface IMedia extends IBaseObject {
    cdnLink: string;
    zOrder: number | null;
    nameFile: string | null;
    mimeType: string | null;
    relativePath: string | null;
    description: string | null;
}

/**
 * #JFW-293
 */
export interface ICDN {
    id: IdType;
    user: IBaseUser;

    /**
     * This is the object reference of the uploaded file. This is used to reference the object.
     */
    refObject: string | null;

    /**
     * This is the reference id of the uploaded file. This is used to reference the Id of the object.
     * @remarks integer · int64
     */
    refId: number | null;

    mimeType: string;
    fileUrl: string;
    originalFilename: string;
    notes: string | null;
    tags: string | null;
    zOrder: number | null;
    isSystem: boolean;
    createdDate: DateType;
}

/**
 * #JFW-293
 */
export interface ICDNUpload {
    fileId: string;
    fileName: string;
    originalFilename: string;
    prefixFolder: string;
    relativeUrl: string;
    url: string;
    fileUrl: string;
    fileExtension: string;
    mimeType: string;
    fileSize: number;
    testMode: boolean;
}

//#region API types
export interface IUploadCDNData {
    /**
     * This is the z-order of the uploaded file. E.g. 1, 2, 3, etc.
     * #JFW-292
     */
    zOrder?: number;

    /**
     * This contains the file to upload.
     */
    uploadFile?: File;

    /**
     * This is used to change the saving file name. E.g. "profile.jpg", "feedback.png", etc.
     * Note: If this is not set, the file name will be the same as the uploaded file name.
     */
    fileName?: string;

    /**
     * This is the prefix folder before the file name. E.g. "profile", "assets", etc.
     */
    prefixFolder?: string;

    /**
     * This is the object reference of the uploaded file. This is used to reference the object.
     */
    refObject?: string;

    /**
     * This is the reference id of the uploaded file. This is used to reference the Id of the object.
     */
    refId?: IdType;

    /**
     * This is the notes of the uploaded file. E.g. "Profile picture", "Feedback screenshot", etc.
     */
    notes?: string;

    /**
     * This is the tags of the uploaded file. E.g. "#MyProfile", "#Feedback", etc.
     */
    tags?: string;

    /**
     * The CdnPathType variable is the root folder of the uploaded file in the CDN.
     * By default, it is set to "User". For further information, visit here: https://whitepaper.jframework.io/other-concepts/cdn/cdn-storage
     */
    cdnPathType?: CDNPathType;

    /**
     * The test mode of the file upload.
     */
    testMode?: boolean;
}

export interface IGetFilesCDNParams extends IPageable, ISortable {
    /**
     * The UserId for filter.
     */
    userId?: IdType;

    /**
     * The reference object for filter.
     */
    refObject?: string;

    /**
     * The reference identifier for filter.
     */
    refId?: IdType;

    /**
     * The MIME Type for filter.
     */
    mimeType?: string;

    /**
     * The original file name for filter.
     */
    originalFilename?: string;
}
//#endregion
