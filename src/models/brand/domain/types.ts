import { IBaseObject } from '../../base';
import { BrandDomainType } from './constants';

export interface IBrandDomain extends IBaseObject {
    domain: string;
    isDefault: boolean;
    isPrimary: boolean;
    protocol: string;
    type: BrandDomainType;
    verified: boolean;
    verifiedDate: Date | null;
}

//#region API types
//#endregion
