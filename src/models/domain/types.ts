import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { DomainProtocol, DomainType } from './constants';

export interface IDomain {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * @remarks enum
     */
    type: DomainType;

    /**
     * The protocol of the domain.
     *
     * @remarks min: 1
     */
    protocol: string;

    /**
     * The value of the domain.
     *
     * @remarks min: 1
     */
    domain: string;

    /**
     * Flag to indicate if the domain is verified.
     */
    verified: boolean;

    /**
     * The date and time when the domain was verified.
     *
     * @remarks date-time
     */
    verifiedDate?: DateType | null;

    /**
     * Flag to indicate if the domain is the default domain.
     */
    isDefault: boolean;

    /**
     * Flag to indicate if the domain is the primary domain.
     */
    isPrimary: boolean;
}

//#region API types
export interface IGetDomainsParams extends IPageable, ISortable {
    /**
     * The type of the domain.
     *
     * @remarks enum
     */
    type?: DomainType;

    /**
     * The protocol of the domain.
     *
     * @remarks enum
     */
    protocol?: DomainProtocol;

    /**
     * The domain name.
     */
    domain?: string;

    /**
     * The keywords of the domain.
     */
    keywords?: string;

    /**
     * Filter by the verified domain.
     */
    verified?: boolean;

    /**
     * Filter by the default domain.
     */
    isDefault?: boolean;

    /**
     * Filter by the primary domain.
     */
    isPrimary?: boolean;
}

/**
 * #NOTE: Will update api in feature
 */
export interface ICreateDomainParams {
    id: IdType;

    domain: string;
    isDefault?: boolean | null;
    isPrimary?: boolean | null;
    protocol: string;
    type: DomainType;
}

export type IUpdateDomainParams = ICreateDomainParams;

//#endregion
