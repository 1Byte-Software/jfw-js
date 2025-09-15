import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { IUser } from '../user';
import { CDNFilePathType } from './constants';

export interface IUploadedFileCDN {
    /**
     * The file ID of the file.
     *
     * @remarks min: 1
     */
    fileId: string;

    /**
     * The filename of the file.
     *
     * @remarks min: 1
     */
    fileName: string;

    /**
     * The original filename of the file.
     *
     * @remarks min: 1
     */
    originalFilename: string;

    /**
     * The prefix folder of the file.
     */
    prefixFolder?: string | null;

    /**
     * The relative URL of the file.
     *
     * @remarks uri - min: 1
     */
    relativeURL: string;

    /**
     * The URL of the file.
     *
     * @remarks uri - min: 1
     */
    url: string;

    /**
     * The file URL of the file.
     *
     * @remarks uri - min: 1
     */
    fileURL: string;

    /**
     * The extension of the file. This name includes the ".".
     *
     * @remarks min: 1
     */
    fileExtension: string;

    /**
     * The MIME type text of the file.
     *
     * @remarks min: 1
     */
    mimeType: string;

    /**
     * The file size in bytes.
     *
     * @remarks int64
     */
    fileSize: number;

    /**
     * The test mode of the uploaded file.
     */
    testMode: boolean;
}

export interface IFileCDN extends IBaseObject {
    /**
     * This class is used to return user information to client.
     */
    user?: IUser;

    /**
     * The reference of the object value.
     */
    refObject?: string | null;

    /**
     * The id of reference object value.
     *
     * @remarks int64
     */
    refId?: number | null;

    /**
     * The mime type of the file.
     *
     * @remarks min: 1
     */
    mimeType: string;

    /**
     * The URL of the file.
     *
     * @remarks min: 1
     */
    fileURL: string;

    /**
     * The original file name.
     *
     * @remarks min: 1
     */
    originalFilename: string;

    /**
     * The size of the file.
     *
     * @remarks int64
     */
    fileSize?: number | null;

    /**
     * The notes of the file.
     */
    notes?: string | null;

    /**
     * The tags of the file.
     */
    tags?: string | null;

    /**
     * The zOrder number of the file.
     *
     * @remarks int64
     */
    zOrder?: number | null;

    /**
     * The flag if the brand is below system.
     */
    isSystem: boolean;
}

//#region API types
export interface IGetFilesCDNParams extends IPageable, ISortable {
    /**
     * The id of the user.
     */
    userId?: IdType;

    /**
     * The reference object for filter.
     */
    refObject?: string;

    /**
     * The reference identifier for filter.
     *
     * @remarks int64
     */
    refId?: number;

    /**
     * The MIME Type for filter.
     */
    mimeType?: string;

    /**
     * The original file name for filter.
     */
    originalFilename?: string;
}

export interface IUploadFileParams {
    /**
     * This is the z-order of the uploaded file. By default, the value is 0. E.g. 1, 2, 3, etc.
     *
     * @remarks int64
     */
    zOrder?: number | null;

    /**
     * This contains the file to upload.
     */
    uploadFile: File;

    /**
     * This is used to change the saving file name. E.g. "profile.jpg", "feedback.png", etc. Note: If this is not set, the file name will be the same as the uploaded file name.
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
     *
     * @remarks int64
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
     * @remarks enum
     */
    cdnPathType?: CDNFilePathType | null;

    /**
     * The test mode of the file upload.
     */
    testMode?: boolean;
}

//#endregion
