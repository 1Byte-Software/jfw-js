import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject } from '../base';
import { DNSRecordType, DomainProtocol, DomainType } from './constants';

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

    /**
     * The list of the dns record related to Domain.
     */
    dnsRecords: DNSRecord[];
}

export interface DNSRecord extends IBaseObject {
    type: DNSRecordType;

    /**
     * The host of the dns record.
     *
     * @remarks min: 1
     */
    host: string;

    /**
     * The value of the dns record.
     */
    value: string;

    /**
     * Flag to indicate if the dns record is verified.
     */
    verified: boolean;

    /**
     * The date and time when the dns record was verified.
     *
     * @remarks date-time
     */
    verifiedDate?: DateType | null;
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

// #WAIT_TSDOC
export interface CreateDomainParams {
    domain: string;
    type: DomainType;
    isPrimary?: boolean;
}

export type UpdateDomainParams = CreateDomainParams;
//#endregion
