import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { AbstractAPI } from '../base/AbstractAPI';
import { MFA_PATH } from './paths';
import { IMFA } from './types';

export class MFAAPI extends AbstractAPI {
    /**
     * # Get a list of MFA
     *
     * Get multiple factor authentication methods. That is the list of MFA methods that are available for the user.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/multiple-factor-authentications/get-a-list-of-mfa}
     */
    public async getListOfMFA(config?: AxiosRequestConfig) {
        const url = MFA_PATH.GET_LIST_OF_MFA;
        const response = await this.axios.get<HttpResponse<IMFA[]>>(
            url,
            config,
        );

        return response.data;
    }
}
