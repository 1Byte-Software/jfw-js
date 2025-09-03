import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { EMAIL_TEMPLATE_PATH } from './paths';
import {
    ICreateEmailTemplateParams,
    IEmailTemplate,
    IGetEmailTemplatesParams,
    IUpdateEmailTemplateParams,
} from './types';

export class EmailTemplateAPI extends AbstractAPI {
    /**
     * # Create an email template
     *
     * Create an email template
     *
     * @param params - The params for creating an email template.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/create-an-email-template}
     */
    public async createEmailTemplate(
        params: ICreateEmailTemplateParams,
        config?: AxiosRequestConfig,
    ) {
        const url = EMAIL_TEMPLATE_PATH.CREATE_EMAIL_TEMPLATE;
        const response = await this.axios.post<HttpResponse<IEmailTemplate>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete an email template
     *
     * Delete an email template
     *
     * @param id - The id of the email template.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/delete-an-email-template}
     */
    public async deleteEmailTemplate(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(EMAIL_TEMPLATE_PATH.DELETE_EMAIL_TEMPLATE, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get an email template
     *
     * Get an email template
     *
     * @param id - The id of the email template.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/get-an-email-template}
     */
    public async getEmailTemplate(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(EMAIL_TEMPLATE_PATH.GET_EMAIL_TEMPLATE, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IEmailTemplate>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get email templates
     *
     * Get email templates
     *
     * @param params - The parameters for getting email templates.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/get-email-templates}
     */
    public async getEmailTemplates(
        params?: IGetEmailTemplatesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = EMAIL_TEMPLATE_PATH.GET_EMAIL_TEMPLATES;
        const response = await this.axios.get<HttpResponseList<IEmailTemplate>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Gets all placeholder keys available
     *
     * Gets all placeholder keys related to the email templates.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/email-templates/gets-all-placeholder-keys-available}
     */
    public async getAllPlaceHolderKeysAvailable(config?: AxiosRequestConfig) {
        const url = EMAIL_TEMPLATE_PATH.GET_ALL_PLACEHOLDER_KEYS_AVAILABLE;
        const response = await this.axios.get<
            HttpResponse<Record<string, string[]>>
        >(url, config);

        return response.data;
    }

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
    public async updateEmailTemplate(
        id: IdType,
        params: IUpdateEmailTemplateParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(EMAIL_TEMPLATE_PATH.UPDATE_EMAIL_TEMPLATE, {
            id,
        });
        const response = await this.axios.put<HttpResponse<IEmailTemplate>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
