import { DateType, IBaseObject } from '../../base';
import { BrandDomainType } from './constants';

export interface IBrandDomain extends IBaseObject {
    domain: string;
    isDefault: boolean;
    isPrimary: boolean;
    protocol: string;
    type: BrandDomainType;
    verified: boolean;
    verifiedDate: Date | null;
    createdDate: DateType;
}

//#region API types
//#endregion
