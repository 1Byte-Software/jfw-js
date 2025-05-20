import { IPageable, ISortable } from '../../core';
import { DateType, IBaseObject, IdType } from '../base';
import { DomainProtocol, DomainType } from './constants';

export interface IDomain extends IBaseObject {
    domain: string;
    isDefault: boolean;
    isPrimary: boolean;
    protocol: string;
    type: DomainType;
    verified: boolean;
    verifiedDate: Date;
    createdDate: DateType;
}

//#region API types
export interface IGetDomainsParams extends IPageable, ISortable {
    /**
     * The type of the domain.
     *
     * @remarks string - enum
     */
    type?: DomainType;

    /**
     * The protocol of the domain.
     *
     * @remarks string - enum
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
export interface ICreateDomainData {
    id: IdType;

    domain: string;
    isDefault?: boolean | null;
    isPrimary?: boolean | null;
    protocol: string;
    type: DomainType;
}

export type IUpdateDomainData = ICreateDomainData;

//#endregion
