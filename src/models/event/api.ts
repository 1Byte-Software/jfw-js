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
    IGetEmailTemplateEventsParams,
    IGetEventsEarningWallet,
    IGetEventsParams,
    IGetPhoneTemplateEventsParams,
} from './types';

/**
 * Get events
 *
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
 * List all wallet earning events. By default, the type is Earning.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/events/get-events-earning-wallet}
 */
export const getEventsEarningWalletAPI = async (
    params?: IGetEventsEarningWallet,
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
 * Wait document. Will update in feature.
 */
export const getEmailTemplateEventsAPI = async (
    params?: IGetEmailTemplateEventsParams,
    config?: AxiosRequestConfig,
) => {
    const url = EVENT_PATH.GET_EMAIL_TEMPLATE_EVENTS;

    const response = await jfwAxios.get<HttpResponse<IEvent[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Wait document. Will update in feature.
 */
export const getPhoneTemplateEventsAPI = async (
    params?: IGetPhoneTemplateEventsParams,
    config?: AxiosRequestConfig,
) => {
    const url = EVENT_PATH.GET_PHONE_TEMPLATE_EVENTS;

    const response = await jfwAxios.get<HttpResponse<IEvent[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 *
 * Wait document. Will update in feature.
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
 *
 * Wait document. Will update in feature.
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
