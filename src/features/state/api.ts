import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { AbstractAPI } from '../base/AbstractAPI';
import { STATE_PATH } from './paths';
import { IState } from './types';

export class StateAPI extends AbstractAPI {
    /**
     * # States
     *
     * Get states
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/states}
     */
    public async getStates(config?: AxiosRequestConfig) {
        const url = STATE_PATH.GET_STATES;
        const response = await this.axios.get<HttpResponse<IState[]>>(
            url,
            config,
        );

        return response.data;
    }
}
