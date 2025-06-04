import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { EventStatus, PhoneTemplateStatus } from './constants';

/**
 * This class represents the EventDto class.
 */
export interface IEvent {
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
    createdDate?: DateType | null;

    /**
     * The guid of the event.
     *
     * @remarks uuid
     */
    guid: string;

    /**
     * The group name of the event.
     *
     * @remarks min: 1
     */
    groupCodeName: string;

    /**
     * The code of the event.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the event.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The description of the tracking event.
     */
    description?: string | null;

    /**
     * The tracking level of the event.
     *
     * @remarks int32
     */
    trackingLevel: number;

    /**
     * The tags of the event.
     */
    tags?: string | null;

    /**
     * The z-order of the event.
     *
     * @remarks int64
     */
    zOrder?: number | null;

    /**
     * The status of the event.
     *
     * @remarks enum
     */
    status: EventStatus;

    /**
     * Flag indicating if the event is a system event.
     */
    isSystem: boolean;
}

/**
 * This class represents the Phone Template Data Transfer Object.
 */
export interface IPhoneTemplate {
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
    createdDate?: DateType | null;

    /**
     * This class represents the EventDto class.
     */
    event?: IEvent;

    /**
     * The language code of the template.
     *
     * @remarks min: 1
     */
    languageCode: string;

    /**
     * The content of the template.
     *
     * @remarks min: 1
     */
    content: string;

    /**
     * The status of the template.
     *
     * @remarks enum
     */
    status: PhoneTemplateStatus;
}

/**
 * This class is used to represent the wallet earning event DTO.
 */
export interface IWalletEarningEvent {
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
    createdDate?: DateType | null;

    /**
     * The id of the event.
     *
     * @remarks min: 1
     */
    eventId: IdType;

    /**
     * The code of the wallet earning event.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the wallet earning event.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The amount of the wallet earning event.
     *
     * @remarks double
     */
    amount: number;

    /**
     * The description of the wallet earning event.
     */
    description?: string | null;
}

/**
 * This class represents the data transfer object for the email template default.
 */
export interface IDefaultEmailTemplate {
    /**
     * The language code of the email.
     * This value is used to determine the language of the email.
     * Following the ISO 639-1 standard. For example, "en" for English, "fr" for French, etc.
     *
     * @remarks min: 1
     */
    languageCode: string;

    /**
     * The subject of the email.
     *
     * @remarks min: 1
     */
    subject: string;

    /**
     * The body of the email.
     *
     * @remarks min: 1
     */
    body: string;
}

export interface IDefaultPhoneTemplate {
    /**
     * The language code of the email. This value is used to determine the language of the email.
     * Following the ISO 639-1 standard. For example, "en" for English, "fr" for French, etc.
     *
     * @remarks min: 1
     */
    languageCode: string;

    /**
     * The content of the phone template.
     *
     * @remarks min: 1
     */
    content: string;
}

//#region API types
export interface IGetEventsParams extends IPageable, ISortable {
    /**
     * Filter by GroupCodeName.
     */
    groupCodeName?: string;

    /**
     * Filter by Code.
     */
    code?: string;

    /**
     * Filter by Name.
     */
    name?: string;

    /**
     * Filter by Description.
     */
    description?: string;

    /**
     * Filter by Tags.
     */
    tags?: string;

    /**
     * Filter by ZOrder.
     * @remarks integer - int64
     */
    zOrder?: number;

    /**
     * Filter by Status.
     *
     * @remarks enum
     */
    status?: EventStatus;

    /**
     * Filter by IsSystem.
     */
    isSystem?: boolean;

    /**
     * Filter by IncludeParentBrand.
     */
    includeParentBrand?: boolean;

    /**
     * Filter by Keywords.
     */
    keywords?: string;
}

export interface IGetEventsEarningWalletParams {
    /**
     * The type of the wallet earning event. The value can be Earning or Redeem.
     * @defaultValue Earning
     */
    type?: string;
}

export interface IGetEmailTemplateDefaultByEventParams {
    /**
     * The code of the language. The language code must be in the ISO 639-1 format.
     */
    languageCode: string;
}

export interface IGetPhoneTemplateDefaultByEventParams {
    /**
     * The code of the language. The language code must be in the ISO 639-1 format.
     */
    languageCode: string;
}

//#endregion
