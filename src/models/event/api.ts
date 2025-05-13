import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { EVENT_PATH } from './paths';
import {
    IDefaultEmailTemplate,
    IDefaultPhoneTemplate,
    IEvent,
    IGetDefaultEmailTemplateParams,
    IGetDefaultPhoneTemplateParams,
    IGetEventsEarningWalletParams,
    IGetEventsParams,
    IWalletEarningEvent,
} from './types';

/**
 * Get events
 *
 * @param params - The parameters for getting events.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events}
 */
export const getEventsAPI = async (
    params?: IGetEventsParams,
    config?: AxiosRequestConfig,
) => {
    const url = EVENT_PATH.GET_EVENTS;

    const response = await jfwAxios.get<HttpResponseList<IEvent>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Get events of the wallet earning. By default, the type is Earning.
 *
 * @param params - The parameters for getting events earning wallet.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events-earning-wallet}
 */
export const getEventsEarningWalletAPI = async (
    params?: IGetEventsEarningWalletParams,
    config?: AxiosRequestConfig,
) => {
    const url = EVENT_PATH.GET_EVENTS;

    const response = await jfwAxios.get<HttpResponseList<IWalletEarningEvent>>(
        url,
        {
            params,
            ...config,
        },
    );

    return response.data;
};

/**
 * Get events that are associated with email templates.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events-email-templates}
 */
export const getEmailTemplateEventsAPI = async (
    config?: AxiosRequestConfig,
) => {
    const url = EVENT_PATH.GET_EMAIL_TEMPLATE_EVENTS;

    const response = await jfwAxios.get<HttpResponse<IEvent[]>>(url, config);

    return response.data;
};

/**
 * Get events that are associated with phone templates.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events-phone-templates}
 */
export const getPhoneTemplateEventsAPI = async (
    config?: AxiosRequestConfig,
) => {
    const url = EVENT_PATH.GET_PHONE_TEMPLATE_EVENTS;

    const response = await jfwAxios.get<HttpResponse<IEvent[]>>(url, config);

    return response.data;
};

/**
 * Wait document. Will update in feature.
 * #JFW-298
 */
export const getDefaultEmailTemplateAPI = async (
    eventId: IdType,
    params: IGetDefaultEmailTemplateParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(EVENT_PATH.GET_DEFAULT_EMAIL_TEMPLATE, {
        eventId,
    });

    const response = await jfwAxios.get<HttpResponse<IDefaultEmailTemplate>>(
        url,
        {
            params,
            ...config,
        },
    );

    return response.data;
};

/**
 * Wait document. Will update in feature.
 * #JFW-298F
 */
export const getDefaultPhoneTemplatesAPI = async (
    eventId: IdType,
    params: IGetDefaultPhoneTemplateParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(EVENT_PATH.GET_DEFAULT_PHONE_TEMPLATE, {
        eventId,
    });

    const response = await jfwAxios.get<HttpResponse<IDefaultPhoneTemplate>>(
        url,
        {
            params,
            ...config,
        },
    );

    return response.data;
};
