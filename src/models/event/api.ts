import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { IEmailTemplate } from '../emailTemplate';
import { EVENT_PATH } from './paths';
import {
    IDefaultEmailTemplate,
    IDefaultPhoneTemplate,
    IEvent,
    IGetEmailTemplateDefaultByEventParams,
    IGetEventsEarningWalletParams,
    IGetEventsParams,
    IGetPhoneTemplateDefaultByEventParams,
    IPhoneTemplate,
    IWalletEarningEvent,
} from './types';

export class EventAPI extends AbstractAPI {
    /**
     * # Get an event
     *
     * Get events
     *
     * @param id - The id of the event.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-an-event}
     */
    public async getEvent(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(EVENT_PATH.GET_EVENT, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IEvent>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get email template default by event
     *
     * Get email template default by event id and specified language code.
     *
     * @param eventId - The id of the event.
     * @param params - The params for getting email template default by event.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-email-template-default-by-event}
     */
    public async getEmailTemplateDefaultByEvent(
        eventId: IdType,
        params: IGetEmailTemplateDefaultByEventParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            EVENT_PATH.GET_EMAIL_TEMPLATE_DEFAULT_BY_EVENT,
            {
                eventId,
            },
        );
        const response = await this.axios.get<
            HttpResponse<IDefaultEmailTemplate>
        >(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get an email template by event
     *
     * Get an email template by event id.
     *
     * @param eventId - The id of the event.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-an-email-template-by-event}
     */
    public async getEmailTemplateByEvent(
        eventId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            EVENT_PATH.GET_EMAIL_TEMPLATE_DEFAULT_BY_EVENT,
            {
                eventId,
            },
        );
        const response = await this.axios.get<HttpResponse<IEmailTemplate>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get events
     *
     * Get events
     *
     * @param params - The params for getting events.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events}
     */
    public async getEvents(
        params?: IGetEventsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = EVENT_PATH.GET_EVENTS;
        const response = await this.axios.get<HttpResponseList<IEvent>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * Get events earning wallet
     *
     * Get events of the wallet earning. By default, the type is Earning.
     *
     * @param params - The parameters for getting events earning wallet.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events-earning-wallet}
     */
    public async getEventsEarningWallet(
        params?: IGetEventsEarningWalletParams,
        config?: AxiosRequestConfig,
    ) {
        const url = EVENT_PATH.GET_EVENTS;
        const response = await this.axios.get<
            HttpResponseList<IWalletEarningEvent>
        >(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get events that are associated with email templates
     *
     * Get events that are associated with email templates.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events-email-templates}
     */
    public async getEventsAssociatedWithEmailTemplates(
        config?: AxiosRequestConfig,
    ) {
        const url = EVENT_PATH.GET_EVENTS_ASSOCIATED_WITH_EMAIL_TEMPLATES;
        const response = await this.axios.get<HttpResponse<IEvent[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * Get events that are associated with phone templates.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events-phone-templates}
     */
    public async getEventsAssociatedWithPhoneTemplates(
        config?: AxiosRequestConfig,
    ) {
        const url = EVENT_PATH.GET_EVENTS_ASSOCIATED_WITH_PHONE_TEMPLATES;
        const response = await this.axios.get<HttpResponse<IEvent[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get phone template by event
     *
     * Get phone template by event id.
     *
     * @param eventId - The id of the event.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-phone-template-by-event}
     */
    public async getPhoneTemplateByEvent(
        eventId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(EVENT_PATH.GET_PHONE_TEMPLATE_BY_EVENT, {
            eventId,
        });
        const response = await this.axios.get<HttpResponse<IPhoneTemplate>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get phone template default by event
     *
     * Get phone template default by event id and specified language code.
     *
     * @param eventId - The id of the event.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-phone-template-default-by-event}
     */
    public async getPhoneTemplateDefaultByEvent(
        eventId: IdType,
        params: IGetPhoneTemplateDefaultByEventParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            EVENT_PATH.GET_PHONE_TEMPLATE_DEFAULT_BY_EVENT,
            {
                eventId,
            },
        );
        const response = await this.axios.get<
            HttpResponse<IDefaultPhoneTemplate>
        >(url, {
            params,
            ...config,
        });

        return response.data;
    }
}
