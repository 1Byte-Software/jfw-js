import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { TRACKING_EMAIL_PATH } from './paths';
import { IGetTrackingEmailsParams, ITrackingEmail } from './types';

export class TrackingEmailAPI extends AbstractAPI {
    /**
     * # Get a tracking email
     *
     * Get an tracking email by id.
     *
     * @param id - The id of the tracking email.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/tracking-emails/get-a-tracking-email}
     */
    public async getTrackingEmail(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(TRACKING_EMAIL_PATH.GET_EMAIL, {
            id,
        });
        const response = await this.axios.get<HttpResponse<ITrackingEmail>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * Get the list of tracking emails.
     *
     * @param params - The params for getting the list of tracking emails.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/tracking-emails/get-tracking-emails}
     */
    public async getTrackingEmails(
        params?: IGetTrackingEmailsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = TRACKING_EMAIL_PATH.GET_EMAILS;
        const response = await this.axios.get<HttpResponseList<ITrackingEmail>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }
}
