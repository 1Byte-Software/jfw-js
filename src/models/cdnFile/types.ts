import { IPageable, ISortable } from '../../core';
import { IdType } from '../base';
import { IUser } from '../user';

export interface ICDNFile {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: string | null;

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

export interface ICDNFileUploadParams {
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
//#endregion
