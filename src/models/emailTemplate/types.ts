import { IPageable, ISortable } from '../../core';
import { IBaseObject, IdType } from '../base';
import { IEvent } from '../event';

/**
 * This class represents the data transfer object for the email template.
 */
export interface IEmailTemplate extends IBaseObject {
    /**
     * The country code of the email.
     * This value is used to determine the country of the email.
     * Following the ISO 3166-1 alpha-2 standard. For example, "US" for United States, "FR" for France, etc.
     */
    countryCode?: string | null;

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

    /**
     * The tags of the email.
     */
    tags?: string | null;

    event: IEvent;
}

//#region API types
export interface IGetEmailTemplatesParams extends IPageable, ISortable {
    /**
     * The event id of the email.
     */
    eventId?: IdType;

    /**
     * The country code of the email. This value is used to determine the country of the email.
     * Following the ISO 3166-1 alpha-2 standard. For example, "US" for United States, "FR" for France, etc.
     */
    countryCode?: string;

    /**
     * The language code of the email. This value is used to determine the language of the email.
     * Following the ISO 639-1 standard. For example, "en" for English, "fr" for French, etc.
     */
    languageCode?: string;

    /**
     * The subject of the email.
     */
    subject?: string;

    /**
     * The body of the email.
     */
    body?: string;

    /**
     * The tags of the email.
     */
    tags?: string;
}

/**
 * This class represents the data transfer object for the email template with command request.
 */
export interface ICreateEmailTemplateParams {
    /**
     * The id of the event.
     *
     * @remarks min: 1
     */
    eventId: IdType;

    /**
     * The country code of the email. This value is used to determine the country of the email.
     * Following the ISO 3166-1 alpha-2 standard. For example, "US" for United States, "FR" for France, etc.
     */
    countryCode?: string | null;

    /**
     * The language code of the email. This value is used to determine the language of the email.
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
     * The body of the email. If the email is in HTML format, the body should be in HTML format.
     * The body can contain placeholders. Please refer to the placeholder-keys API to get the list of placeholders.
     * And replace the placeholders with the actual values.
     *
     * @remarks min: 1
     */
    body: string;

    /**
     * The tags of the email.
     */
    tags?: string | null;
}

/**
 * This class represents the data transfer object for the email template with command request.
 */
export type IUpdateEmailTemplateParams = ICreateEmailTemplateParams;

export interface IEmailTemplatesPlaceholderKey {
    [key: string]: string[];
}
//#endregion
