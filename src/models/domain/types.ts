import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';
import { DomainProtocol, DomainType } from './constants';

export interface IDomain extends IBaseObject {
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

// Not implemented yet. Will implement in the future if the domain feature is created.
// export interface ICreateDomainParams {
//     id: IdType;

//     domain: string;
//     isDefault?: boolean | null;
//     isPrimary?: boolean | null;
//     protocol: string;
//     type: DomainType;
// }

// export type IUpdateDomainParams = ICreateDomainParams;

//#endregion
