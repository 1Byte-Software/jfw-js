import { Axios, AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { BrandLinksAPI } from './brandLinks/api';
import { DOMAIN_PATH } from './paths';
import { IDomain, IGetDomainsParams } from './types';

export class DomainAPI extends AbstractAPI {
    public brandLinks: BrandLinksAPI;

    public constructor(axios: Axios) {
        super(axios);
        this.brandLinks = new BrandLinksAPI(axios);
    }

    /**
     * # Delete a domain
     *
     * Delete a domain
     *
     * @param id - The id of the domain
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/delete-a-domain}
     */
    public async deleteDomain(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(DOMAIN_PATH.DELETE_DOMAIN, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get domains
     *
     * Get domains
     *
     * @param params - The params for getting domains.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/get-domains}
     */
    public async getDomains(
        params?: IGetDomainsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = DOMAIN_PATH.GET_DOMAINS;
        const response = await this.axios.get<HttpResponseList<IDomain>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * Get a domain
     *
     * Get a domain
     *
     * @param id - The id of the domain.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/get-a-domain}
     */
    public async getDomain(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(DOMAIN_PATH.GET_DOMAIN, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IDomain>>(
            url,
            config,
        );

        return response.data;
    }

    // Not implemented yet. Will implement in the future if the domain feature is created.
    // /**
    //  * # Create a Domain
    //  *
    //  * Creates a new domain.
    //  *
    //  * @param params - The params for creating a domain.
    //  * @param config - Optional axios request configuration object.
    //  * @see {@link }
    //  */
    // public async createDomain(
    //     data: ICreateDomainParams,
    //     config?: AxiosRequestConfig,
    // ) {
    //     const url = DOMAIN_PATH.CREATE_DOMAIN;
    //     const response = await this.axios.post<HttpResponse<IDomain>>(
    //         url,
    //         data,
    //         config,
    //     );

    //     return response.data;
    // }

    // Not implemented yet. Will implement in the future if the domain feature is created.
    // /**
    //  * # Update a Domain
    //  *
    //  * Updates a domain by the given id.
    //  *
    //  * @param id - The id of the domain.
    //  * @param params - The params for updating a domain.
    //  * @param config - Optional axios request configuration object.
    //  * @see {@link }
    //  */
    // public async updateDomain(id: IdType, data: IUpdateDomainParams) {
    //     const url = generatePath(DOMAIN_PATH.UPDATE_DOMAIN, {
    //         id,
    //     });
    //     const response = await this.axios.put<HttpResponse<boolean>>(url, data);

    //     return response.data;
    // }
}
