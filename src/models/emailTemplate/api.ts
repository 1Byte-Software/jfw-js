import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { EMAIL_TEMPLATE_PATH } from './paths';
import {
    ICreateEmailTemplateParams,
    IEmailTemplate,
    IGetEmailTemplatesParams,
    IUpdateEmailTemplateParams,
} from './types';

/**
 * # Create an email template
 *
 * Create an email template
 *
 * @param params - The params for creating an email template.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/create-an-email-template}
 */
export const createEmailTemplateAPI = async (
    params: ICreateEmailTemplateParams,
    config?: AxiosRequestConfig,
) => {
    const url = EMAIL_TEMPLATE_PATH.CREATE_EMAIL_TEMPLATE;
    const response = await jfwAxios.post<HttpResponse<IEmailTemplate>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete an email template
 *
 * Delete an email template
 *
 * @param id - The id of the email template.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/delete-an-email-template}
 */
export const deleteEmailTemplateAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(EMAIL_TEMPLATE_PATH.DELETE_EMAIL_TEMPLATE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get an email template
 *
 * Get an email template
 *
 * @param id - The id of the email template.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/get-an-email-template}
 */
export const getEmailTemplateAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(EMAIL_TEMPLATE_PATH.GET_EMAIL_TEMPLATE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IEmailTemplate>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Get email templates
 *
 * Get email templates
 *
 * @param params - The parameters for getting email templates.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/get-email-templates}
 */
export const getEmailTemplatesAPI = async (
    params?: IGetEmailTemplatesParams,
    config?: AxiosRequestConfig,
) => {
    const url = EMAIL_TEMPLATE_PATH.GET_EMAIL_TEMPLATES;
    const response = await jfwAxios.get<HttpResponseList<IEmailTemplate>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Gets all placeholder keys available
 *
 * Gets all placeholder keys related to the email templates.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/gets-all-placeholder-keys-available}
 */
export const getAllPlaceHolderKeysAvailableAPI = async (
    config?: AxiosRequestConfig,
) => {
    const url = EMAIL_TEMPLATE_PATH.GET_ALL_PLACEHOLDER_KEYS_AVAILABLE;
    const response = await jfwAxios.get<HttpResponse<Record<string, string[]>>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Update an email template
 *
 * Update an email template.
 *
 * @param id - The id of the email template.
 * @param params - The params for updating an email template.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/update-an-email-template}
 */
export const updateEmailTemplateAPI = async (
    id: IdType,
    params: IUpdateEmailTemplateParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(EMAIL_TEMPLATE_PATH.UPDATE_EMAIL_TEMPLATE, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<IEmailTemplate>>(
        url,
        params,
        config,
    );

    return response.data;
};
